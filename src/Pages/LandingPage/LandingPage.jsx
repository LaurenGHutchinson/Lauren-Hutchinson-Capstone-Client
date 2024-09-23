import React from 'react'
import './LandingPage.scss'
import logo from '../../assets/Big-Logo.png';
import DropDown from '../../Components/DropDown/DropDown.jsx';

function LandingPage() {
  return (
    <div className='main-page'>
      <img className='main-page__logo' src={logo} />
      <DropDown />

    </div>
  )
}

export default LandingPage