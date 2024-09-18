import './QuizPage.scss'
import {useLocation} from 'react-router-dom';
import {useState, useEffect} from 'react';
import axios from 'axios';
import Header from '../../Components/Header/Header.jsx'
import Flashcard from '../../Components/Flashcards/Flashcards.jsx'
import Buttons from '../../Components/Buttons/Buttons.jsx'

function QuizPage() {

  const location = useLocation();
  const selectedButtons = location.state|| {};
  const selectedSkills = selectedButtons.selectedButtons;
  console.log(selectedSkills);
  const [numOfQuestions, setNumOfQuestions] = useState()

  const handleSelect = async (e) => {
    setNumOfQuestions(e);
    console.log(numOfQuestions);
  }


  return (
    <>
      <Header />
      <Buttons handleSelect={handleSelect} selectedSkills={selectedSkills}/>
      <Flashcard selectedSkills={selectedSkills} numOfQuestions={numOfQuestions}/>
      </>
  )
}

export default QuizPage