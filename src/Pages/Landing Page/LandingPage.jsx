import React from 'react'
import './LandingPage.scss'
import axios from 'axios';
import logo from '../../assets/ByteBack-logo.png';
import DropDown from '../../Components/DropDown/DropDown.jsx';
import Flashcards from '../../Components/Flashcards/Flashcards.jsx'

function LandingPage() {
  return (
    <div className='main-page'>
      <img src={logo} />
      <DropDown />

    </div>
  )
}

export default LandingPage