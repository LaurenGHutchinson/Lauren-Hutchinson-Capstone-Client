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
  const [questionsArray, setQuestionsArray] = useState([]);
  const [skillQuestions, setSkillQuestions] = useState([]);

  const compileQuestions = () =>{
    }

useEffect(() => {
  const questionsArray = ([...new Set(skillQuestions.map((skill) => skill))])
  setQuestionsArray(questionsArray);

}, [skillQuestions])

console.log(questionsArray);

useEffect(() =>{

    selectedSkills.forEach((skill) => {
      const getQuestionsList = async () => {
          try {
              const response = await axios.get(`http://localhost:8080/questions/${skill}`);
              console.log(response.data) 
              setSkillQuestions(response.data)
              console.log(skillQuestions);
              // if(response.data.length===0) {
              //   return
              // } else {
              //   setSkillQuestions(response.data)
              //   console.log(skillQuestions);

              // }

          }catch (error) {
              console.error("Unable to get the questions list")
          }
      }
      getQuestionsList();
    })

}, [])


  return (
    <>
      <Header />
      <Flashcard />
      </>
  )
}

export default QuizPage