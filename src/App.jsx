import { useState } from 'react'
import './App.scss'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer/Footer.jsx';
import LandingPage from './Pages/Landing Page/LandingPage.jsx';
import QuizPage from './Pages/Quiz Page/QuizPage.jsx';



function App() {
  const [count, setCount] = useState(0)

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}/>
          <Route path="/quiz" element={<QuizPage />}/>
        </Routes>
        <Footer />
      </BrowserRouter>

  )
}

export default App
