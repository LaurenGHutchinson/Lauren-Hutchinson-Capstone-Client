import React from 'react'
import './CodeChallenge.scss'
import Header from '../../Components/Header/Header.jsx'
import LiveEditor from '../../Components/LiveEditorComponents/LiveEditor/LiveEditor.jsx'


function CodeChallenge() {
  return (
    <div>
      <Header />
      <div className="intro-text">
        <p>Welcome to the Coding Challenges, an interactive space where you can test your coding skills through a range of different algorithm problems and languages
          with ease. This page is equipped with a live code editor that supports a wide range of programming languages 
          including JavaScript, Python, C++, Java, and more.</p>
      </div>
      <LiveEditor />

    </div>
  )
}

export default CodeChallenge