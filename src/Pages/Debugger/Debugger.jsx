import React from 'react'
import './Debugger.scss'
import axios from 'axios';


function Debugger() {
  return (
    <div className='main-page'>
      <img src={logo} />
      <DropDown />

    </div>
  )
}

export default Debugger