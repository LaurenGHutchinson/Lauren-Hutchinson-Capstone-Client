import React from 'react'
import './Results.scss'
import axios from 'axios';
import Header from '../../Components/Header/Header.jsx'
import {useLocation} from 'react-router-dom';


function Results() {

  const location = useLocation();
  const {correctAnswers, incorrectAnswers, pickedQuestionsArray} = location.state|| {};
  console.log(correctAnswers)
  console.log(incorrectAnswers)
  console.log(pickedQuestionsArray)
  return (
    <div>
      <Header />
    <h2>Here is your stupid fucking results</h2>

    </div>
  )
}

export default Results