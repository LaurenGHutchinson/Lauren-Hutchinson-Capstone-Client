import React from 'react'
import './Flashcards.scss';

function Flashcards() {
    // Correct answer for the current question
const correctAnswer = "1969";

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