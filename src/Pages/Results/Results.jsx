import React from 'react'
import './Results.scss'
import Header from '../../Components/Header/Header.jsx'
import {useLocation} from 'react-router-dom';
import {useState, useEffect} from 'react';

function Results() {
  const location = useLocation();
  const [questionAnswerArray, setQuestionAnswerArray] = useState([]);
  const {correctAnswers, incorrectAnswers, pickedQuestionsArray, allAnswers} = location.state|| {};


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

useEffect(() => {
  const buildQuestionsAndAnswersArray = () => {
    const combinedArray = [];

    pickedQuestionsArray.forEach((question) => {
      const userWrongAnswer = incorrectAnswers.filter((answer) => answer.question_id === question.id);
      const userAnswer = userWrongAnswer.length > 0 ? userWrongAnswer[0].answer : null;
      const correctAnswer = allAnswers.find((answer) => answer.question_id === question.id && answer.is_correct === 1);
      
      
      if(userWrongAnswer.length > 0) {
        combinedArray.push({
          questionText: question.question,
          selectedAnswers: userAnswer,
          correctAnswer: correctAnswer ? correctAnswer.answer : null,
        });
      }
    });
    setQuestionAnswerArray(combinedArray);
    
  };
  buildQuestionsAndAnswersArray();
}, [pickedQuestionsArray, incorrectAnswers, allAnswers]);


  return (
    <div>
      <Header />
      <div className='results'>
        <div className="results-categories">
          <h3 className="results-categories__title">Score Breakdown</h3>
          {Object.keys(result).map(category => (
            <div className="results__item" key={category}>
              <h3 className='results__category'>{category}</h3>
              <p className={`results__score`}>{result[category].correct} / {result[category].incorrect + result[category].correct} </p>
            </div>
      ))}
            <div className="results__item">
              <h3 className='results__category--total'>Total Score:</h3>
              <p className="results__total" >{correctAnswers.length} / {pickedQuestionsArray.length}</p>
            </div>
        </div>
        <div className="results-corrections">
          <h3 className="results-corrections__title">Where you went wrong</h3>
            {Object.keys(questionAnswerArray).map((answer) => (
              <div>
                <h4 className="results-corrections__question">Question: {questionAnswerArray[answer].questionText}</h4>
                <div className="answers">
                  <div className="answers-group">
                    <p className="answers-group__title">Selected Answer:</p>
                    <p className="btn btn--wrong">{questionAnswerArray[answer].selectedAnswers}</p>
                  </div>
                  <div className="answers-group">
                    <p className="answers-group__title">Correct Answer:</p>
                    <p className="btn btn--correct">{questionAnswerArray[answer].correctAnswer}</p>
                  </div>
                </div>
                </div>
              
            ))}
          
          </div>
      </div>

    </div>
  )
}

export default Results