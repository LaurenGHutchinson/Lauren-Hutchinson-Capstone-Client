import React from 'react'
import './Debugger.scss'
import Header from '../../Components/Header/Header.jsx'
import LiveEditor from '../../Components/LiveEditorComponents/LiveEditor/LiveEditor.jsx'



function Debugger() {
  return (
    <div>
      <Header />
      <div className="intro-text">
        <p>Welcome to the Debugging Playground, an interactive space where you can dive into debugging code across multiple languages 
          with ease. This page is equipped with a live code editor that supports a wide range of programming languages 
          including JavaScript, Python, C++, Java, and more.</p>
      </div>
      <LiveEditor />
    </div>
  )
}

export default Debugger