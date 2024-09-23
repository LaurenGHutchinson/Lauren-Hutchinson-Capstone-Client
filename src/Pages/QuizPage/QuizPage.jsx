import './QuizPage.scss'
import {useLocation} from 'react-router-dom';
import {useState, useEffect} from 'react';
import Header from '../../Components/Header/Header.jsx'
import Flashcard from '../../Components/Flashcards/Flashcards.jsx'
import Buttons from '../../Components/Buttons/Buttons.jsx'
import VerticalButtons from '../../Components/VerticalButtons/VerticalButtons.jsx'
import Quotes from '../../Components/Quotes/Quotes.jsx'

function QuizPage() {

  const location = useLocation();
  const [numOfQuestions, setNumOfQuestions] = useState(10);
  const [selectedSkills, setSelectedSkills] = useState([]);

  useEffect(() => {
    let selectedButtons = location.state || {};
    setSelectedSkills(selectedButtons.selectedButtons);
    if(location.state){
      localStorage.setItem('selected', JSON.stringify(location.state));
     } 
    if(localStorage.getItem('selected')){
      selectedButtons = (JSON.parse(localStorage.getItem('selected')));
      setSelectedSkills(selectedButtons.selectedButtons)
    }
    
  }, [])
  
  const handleSelect = async (e) => {
    const selectedNumber = e;
    setNumOfQuestions(selectedNumber);
  }

  return (
    <>
      <Header />
      <Buttons handleSelect={handleSelect}/>
      <div className="main-quiz">
        <VerticalButtons selectedSkills={selectedSkills}/>
        <Flashcard selectedSkills={selectedSkills} numOfQuestions={numOfQuestions}/>
        <Quotes />

      </div>
      </>
  )
}

export default QuizPage