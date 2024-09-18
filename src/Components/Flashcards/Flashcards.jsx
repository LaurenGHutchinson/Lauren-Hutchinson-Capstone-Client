import React from 'react'
import './Flashcards.scss';
import {useState, useEffect} from 'react'
import axios from'axios'

function Flashcards({selectedSkills, numOfQuestions}) {


const [questionsArray, setQuestionsArray] = useState([]);
const [skillQuestions, setSkillQuestions] = useState([]);
const [pickedQuestions, setPickedQuestions] = useState([]);


const getQuestionsList = async (skillId) => {
  try {
    const response = await axios.get(`http://localhost:8080/questions/${skillId}`);
    return response.data; 
  } catch (error) {
    console.error("Unable to get the questions list", error);
    return [];
  }
};

useEffect(() => {
  const fetchAllQuestions = async () => {
    const allQuestionsPromises = selectedSkills.map((skill) => getQuestionsList(skill.id));

    const allQuestions = await Promise.all(allQuestionsPromises);

    const combinedQuestions = allQuestions.flat();

    setSkillQuestions(combinedQuestions);
    getQuestionSet();
  };

  fetchAllQuestions();
}, [selectedSkills]);

useEffect(() => {
  const uniqueQuestions = [...new Set(skillQuestions)];
  setQuestionsArray(uniqueQuestions);
}, [skillQuestions]);

const getQuestionSet = async () => {
    const questionsPerSkill = floor(numOfQuestions/selectedSkills.length)
    console.log(questionsPerSkill);
}
// Function to check if the clicked answer is correct
function checkAnswer(button) {
  const flashcard = document.querySelector('.flashcard');
  const options = document.querySelectorAll('.option');

  // Disable all buttons after an answer is chosen
  options.forEach(option => {
    option.disabled = true;
  });

  if (button.innerText === correctAnswer) {
    button.classList.add('correct');
    flashcard.classList.add('correct');
  } else {
    button.classList.add('incorrect');
    flashcard.classList.add('incorrect');
  }
}
  return (
    <div className="flashcard-container">
    <div className="flashcard">
      <div className="question" id="question">What year did the moon landing happen?</div>
      <div className="options" id="options">
        <button className="option" onClick={checkAnswer}>1965</button>
        <button className="option" onClick={checkAnswer}>1969</button>
        <button className="option" onClick={checkAnswer}>1972</button>
      </div>
    </div>
  </div>
  )
}

export default Flashcards