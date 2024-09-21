import { useState } from 'react'
import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer/Footer.jsx';
import LandingPage from './Pages/LandingPage/LandingPage.jsx';
import QuizPage from './Pages/QuizPage/QuizPage.jsx';
import Debugger from './Pages/Debugger/Debugger.jsx';
import CodeChallenge from './Pages/CodeChallenge/CodeChallenge.jsx';
import Results from './Pages/Results/Results.jsx';
import NightMode from './Components/NightMode/NightMode.jsx'



function App() {
  const [display, setDisplay] =useState()

  return (
      <BrowserRouter>
        <Routes>
        {/* <NightMode handleChange={handleChange}/> */}
          <Route path="/" element={<LandingPage />}/>
          <Route path="/quiz" element={<QuizPage />}/>
          <Route path="/debugger" element={<Debugger />}/>
          <Route path="/code-challenge" element={<CodeChallenge />}/>
          <Route path="/results" element={<Results />}/>
        </Routes>
        <Footer />
      </BrowserRouter>

  )
}

export default App
