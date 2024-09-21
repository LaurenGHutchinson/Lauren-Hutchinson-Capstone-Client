import React from 'react'
import './Results.scss'
import Header from '../../Components/Header/Header.jsx'
import {useLocation} from 'react-router-dom';
import {useState, useEffect} from 'react';

function Results() {
  const location = useLocation();
  const [categoryColor, setCategoryColor] = useState();
  const {correctAnswers, incorrectAnswers, pickedQuestionsArray, selectedSkills} = location.state|| {};


const categorizeAnswers = (pickedQuestionsArray, correctAnswers, incorrectAnswers) => {
  const categoryCount = {};

  pickedQuestionsArray.forEach((question) => {
    const { id, skill_name } = question;

    if (!categoryCount[skill_name]) {
      categoryCount[skill_name] = { correct: 0, incorrect: 0 };
    }

    const isCorrect = correctAnswers.some(answer => answer.question_id === id);
    const isIncorrect = incorrectAnswers.some(answer => answer.question_id === id);

    if (isCorrect) {
      categoryCount[skill_name].correct += 1;
    } else if (isIncorrect) {
      categoryCount[skill_name].incorrect += 1;
    }
  });

  return categoryCount;
}

const result = categorizeAnswers(pickedQuestionsArray, correctAnswers, incorrectAnswers);
console.log(result);

// if(result(key) === selectedSkills.skill)
//   setCategoryColor(selectedSkills.category)



  return (
    <div>
      <Header />
      <div className='results'>
          {Object.keys(result).map(category => (
            <div className="results__item" key={category}>
              <h3 className='results__category'>{category}</h3>
              <p className={`results__score`}>{result[category].correct} / {result[category].incorrect + result[category].correct} </p>
            </div>
      ))}
            <div className="results__item">
              <h3 className='results__category'>Total Score:</h3>
              <p className="results__total" >{correctAnswers.length} / {pickedQuestionsArray.length}</p>
            </div>
      </div>

    </div>
  )
}

export default Results