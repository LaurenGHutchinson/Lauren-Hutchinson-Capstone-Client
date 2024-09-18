import React from 'react'
import './CodeChallenge.scss'
import axios from 'axios';


function CodeChallenge() {
  return (
    <div className='main-page'>
      <img src={logo} />
      <DropDown />

    </div>
  )
}

export default CodeChallenge