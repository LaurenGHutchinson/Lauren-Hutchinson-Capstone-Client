import { useState } from 'react'
import './App.scss'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer/Footer.jsx';
import LandingPage from './Pages/LandingPage/LandingPage.jsx';
import QuizPage from './Pages/QuizPage/QuizPage.jsx';
import Debugger from './Pages/Debugger/Debugger.jsx';
import CodeChallenge from './Pages/CodeChallenge/CodeChallenge.jsx';



function App() {
  const [count, setCount] = useState(0)

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}/>
          <Route path="/quiz" element={<QuizPage />}/>
          <Route path="/debugger" element={<Debugger />}/>
          <Route path="/code-challenge" element={<CodeChallenge />}/>
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>

  )
}

export default App
