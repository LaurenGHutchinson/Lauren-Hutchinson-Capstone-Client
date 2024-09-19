import React from 'react'
import './Flashcards.scss';
import {useState, useEffect} from 'react'
import axios from'axios'

function Flashcards({selectedSkills, numOfQuestions}) {

const [pickedQuestionsArray, setPickedQuestionsArray] = useState([]);
const [skillQuestions, setSkillQuestions] = useState([]);
const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
const [questionText, setQuestionText] = useState("")
// const [selectedAnswer, setSelectedAnswer] = useState(null);
const [answersArray, setAnswersArray] = useState([])
const [correctAnswers, setCorrectAnswers] = useState([]);
const [incorrectAnswers, setIncorrectAnswers] = useState([]);


const questionsPerSkill = Math.floor((numOfQuestions/selectedSkills.length))
const remainder = numOfQuestions%selectedSkills.length;

//AXIOS calls for questions and answers

const getQuestionsList = async (skillId) => {
  try {
    const response = await axios.get(`http://localhost:8080/questions/${skillId}`);
    return response.data; 
  } catch (error) {
    console.error("Unable to get the questions list", error);
    return [];
  }
};

const getAnswersArray = async (currentQuestion) => {
  const currentQuestionId = currentQuestion.id;
  setQuestionText(currentQuestion.question)
  console.log(questionText);

  try{
    const response = await axios.get(`http://localhost:8080/answers/${currentQuestionId}`);
    console.log(response.data);
    setAnswersArray(response.data);

  }catch (error) {
    console.error("Unable to get the questions list", error);
  }
}

//Called when page is reloaded

useEffect(() => {
  const fetchAllQuestions = async () => {
    const allQuestionsPromises = selectedSkills.map((skill) => getQuestionsList(skill.id));
    const allQuestions = await Promise.all(allQuestionsPromises);
    const combinedQuestions = allQuestions.flat();
    
    getQuestionArray(allQuestions, combinedQuestions);
    setSkillQuestions(combinedQuestions);
  };

  fetchAllQuestions();
}, [numOfQuestions, selectedSkills]);

const getQuestionArray = (questionsArray, allQuestions) => {
  let pickedQuestions = [];
  questionsArray.forEach((skillType) => {
    const shuffled = skillType.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, questionsPerSkill);
    pickedQuestions = pickedQuestions.concat(selected);
  });

  const allShuffled = allQuestions.sort(() => 0.5 - Math.random());
  const allSelected = allShuffled.slice(0, remainder);
  pickedQuestions = pickedQuestions.concat(allSelected);
  
  console.log(pickedQuestions);
  setPickedQuestionsArray(pickedQuestions);
};

useEffect(() => {
  if (pickedQuestionsArray.length > 0 && pickedQuestionsArray[currentQuestionIndex]) {
    getAnswersArray(pickedQuestionsArray[currentQuestionIndex]);
  }
}, [pickedQuestionsArray, currentQuestionIndex]);


useEffect(() => {
  const uniqueQuestions = [...new Set(skillQuestions)];
  setPickedQuestionsArray(uniqueQuestions);
}, [skillQuestions]);


const handleSelectedAnswer = () => {

  if(currentQuestionIndex < pickedQuestionsArray.length -1){
    setCurrentQuestionIndex(currentQuestionIndex +1);
  } else {
    alert("end of flashcards!");
  }

  // setSelectedAnswer(null);
}

// Function to check if the clicked answer is correct
const checkAnswer = (e, answer) => {
  console.log(e.target.value);
  const isCorrect = e.target.value === '1';
  console.log("given answer is correct:", isCorrect);
    if(isCorrect){
      setCorrectAnswers((prev) => {
        const updatedAnswers = [...prev, answer];
        console.log("Updated correctAnswers array:", updatedAnswers);
        return updatedAnswers;
      });
    }

    handleSelectedAnswer()
};
  return (
    <div className="flashcard-container">
    <div className="flashcard">
      <h4 className="question" id="question">{questionText}</h4>
      <div className="options" id="options">
        {answersArray.map((answer) => (
     <button 
      className="option" 
      key={answer.id}
      value={answer.is_correct}
      onClick={(e) => checkAnswer(e, answer)}>{answer.answer}</button>
    ))}
        
             
        {/* <button className="option" onClick={checkAnswer}>1965</button>
        <button className="option" onClick={checkAnswer}>1969</button>
        <button className="option" onClick={checkAnswer}>1972</button> */}
      </div>
    </div>
  </div>
  )
}
  // if (button.innerText === correctAnswer) {
  //   button.classList.add('correct');
  //   flashcard.classList.add('correct');
  // } else {
  //   button.classList.add('incorrect');
  //   flashcard.classList.add('incorrect');
  // }
export default Flashcards