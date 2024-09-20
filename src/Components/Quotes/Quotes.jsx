import React from 'react'
import './Quotes.scss';
import {useState, useEffect} from 'react'

function Quotes() {

  const [interviewTips, setInterviewTips] = useState([])

  const quotes = [
    {
      "quote": "Preparation breeds confidence.",
      "tip": "Know your fundamentals and practice coding challenges."
    },
    {
      "quote": "Understand the problem before solving it.",
      "tip": "Take time to clarify questions and edge cases before coding."
    },
    {
      "quote": "Think out loud.",
      "tip": "Explain your thought process clearly to show your problem-solving approach."
    },
    {
      "quote": "Keep it simple.",
      "tip": "Aim for clean, readable code before optimizing for efficiency."
    },
    {
      "quote": "Practice, practice, practice.",
      "tip": "Regularly solve coding problems to sharpen your skills."
    },
    {
      "quote": "Ask clarifying questions.",
      "tip": "Don’t be afraid to ask for details; it shows engagement and thoughtfulness."
    },
    {
      "quote": "Communicate, don’t just code.",
      "tip": "Communication skills are as important as technical skills."
    },
    {
      "quote": "Test as you go.",
      "tip": "Test your code with sample cases to avoid bugs early on."
    },
    {
      "quote": "Show your work, not just your result.",
      "tip": "The interviewer values your process as much as the solution."
    },
    {
      "quote": "Learn from your mistakes.",
      "tip": "Reflect on failed interviews and improve your weak points."
    },
    {
      "quote": "Optimize for clarity first.",
      "tip": "Write clear, maintainable code before focusing on optimizations."
    },
    {
      "quote": "Study common algorithms and data structures.",
      "tip": "Know the basics like arrays, trees, graphs, and sorting algorithms."
    },
    {
      "quote": "Stay calm under pressure.",
      "tip": "Interviewers understand that technical challenges can be stressful, so show resilience."
    },
    {
      "quote": "Practice whiteboarding.",
      "tip": "Being comfortable solving problems on a whiteboard helps in in-person interviews."
    },
    {
      "quote": "Know the company and role.",
      "tip": "Research the company’s tech stack and culture to tailor your approach."
    }
  ]

  const selectQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setInterviewTips(quotes[randomIndex])
  }

  console.log(interviewTips)
  useEffect(() =>{
    selectQuote()
  }, [])

  return (
    <div className="quotes">
    <div className="quotes__card">
      <h4 className="quotes__text">{interviewTips.quote}</h4>
      <h4 className="quotes__tip"> - {interviewTips.tip}</h4>
      </div>
    </div>
  )
}

export default Quotes