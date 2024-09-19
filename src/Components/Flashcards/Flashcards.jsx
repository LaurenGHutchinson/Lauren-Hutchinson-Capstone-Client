import React from 'react'
import './Flashcards.scss';
import {useState, useEffect} from 'react'
import axios from'axios'

function Flashcards({selectedSkills, numOfQuestions}) {

const [questionsArray, setQuestionsArray] = useState([]);
const [skillQuestions, setSkillQuestions] = useState([]);

const questionsPerSkill = Math.floor((numOfQuestions/selectedSkills.length))
const remainder = numOfQuestions%selectedSkills.length;

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
    getQuestionArray(allQuestions, combinedQuestions);
    setSkillQuestions(combinedQuestions);
  };

  fetchAllQuestions();
}, [numOfQuestions]);

const getQuestionArray = (questionsArray, allQuestions) => {
  let pickedQuestions = [];
  questionsArray.forEach((skillType) => {
    const shuffled = skillType.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0,questionsPerSkill)
    pickedQuestions = pickedQuestions.concat(selected);
  })
    const allShuffled = allQuestions.sort(() => 0.5 - Math.random());
    const allSelected = allShuffled.slice(0, remainder);
    pickedQuestions = pickedQuestions.concat(allSelected);
    console.log(pickedQuestions);
}

useEffect(() => {
  const uniqueQuestions = [...new Set(skillQuestions)];
  setQuestionsArray(uniqueQuestions);
}, [skillQuestions]);

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