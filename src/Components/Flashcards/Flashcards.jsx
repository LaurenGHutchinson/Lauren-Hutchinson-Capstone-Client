import React from 'react'
import './Flashcards.scss';
import {useState, useEffect} from 'react'
import axios from'axios'
import {useNavigate} from 'react-router-dom';

function Flashcards({selectedSkills, numOfQuestions}) {
const baseUrl = import.meta.env.BASE_URL;
const navigate = useNavigate();

const [pickedQuestionsArray, setPickedQuestionsArray] = useState([]);
const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
const [questionText, setQuestionText] = useState("")
const [answersArray, setAnswersArray] = useState([])
const [correctAnswers, setCorrectAnswers] = useState([]);
const [incorrectAnswers, setIncorrectAnswers] = useState([]);
const [allAnswers, setAllAnswers] = useState([]);


const questionsPerSkill = Math.floor((numOfQuestions/selectedSkills.length))
const remainder = numOfQuestions%selectedSkills.length;

const getQuestionsList = async (skillId) => {
  try {
    const response = await axios.get(`${baseUrl}questions/${skillId}`);
    return response.data; 
  } catch (error) {
    console.error("Unable to get the questions list", error);
    return [];
  }
};

const getAnswersArray = async (currentQuestion) => {
  const currentQuestionId = currentQuestion.id;
  setQuestionText(currentQuestion.question)

  try{
    const response = await axios.get(`${baseUrl}answers/${currentQuestionId}`);
    const newAnswers = response.data
    setAnswersArray(newAnswers);

    setAllAnswers((prevAnswers) => [...prevAnswers, ...newAnswers]);
  }catch (error) {
    console.error("Unable to get the answers array", error);
  }
}

useEffect(() => {
  const fetchAllQuestions = async () => {
    const allQuestionsPromises = selectedSkills.map((skill) => getQuestionsList(skill.id));
    const allQuestions = await Promise.all(allQuestionsPromises);
    const combinedQuestions = allQuestions.flat();
    
    getQuestionArray(allQuestions, combinedQuestions);
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

  setPickedQuestionsArray(pickedQuestions);
};

useEffect(() => {
  if (pickedQuestionsArray.length > 0 && pickedQuestionsArray[currentQuestionIndex]) {
    getAnswersArray(pickedQuestionsArray[currentQuestionIndex]);
  }
}, [pickedQuestionsArray, currentQuestionIndex]);

const handleSelectedAnswer = () => {
  if (currentQuestionIndex < pickedQuestionsArray.length - 1) {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setAnswersArray([]);
  } else {
    setQuestionText("Congrats on Finishing the Quiz! Press next to view your results.")
    setAnswersArray([{id: 1000, answer: 'See Results', question_id: 0, is_correct: 2}])
  }
};

const currentQuestionDisplay = `${currentQuestionIndex + 1} / ${numOfQuestions}`;

const checkAnswer = (e, answer) => {
  const isCorrect = e.target.value === '1';
  const isDone = e.target.value === '2'
  if(isDone) {
    navigate('/results', {state:{correctAnswers, incorrectAnswers, pickedQuestionsArray, allAnswers}});
  } else if(isCorrect){
      setCorrectAnswers((prev) => {
        const updatedAnswers = [...prev, answer];
        return updatedAnswers;
      });
    } else{
     setIncorrectAnswers((prev) => {
      const updatedAnswers = [...prev, answer];
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
      </div>
        <div className="question-text">
          <h3 className="question-count">{currentQuestionDisplay}</h3>
      </div>
    </div>
  </div>
  )
}

export default Flashcards