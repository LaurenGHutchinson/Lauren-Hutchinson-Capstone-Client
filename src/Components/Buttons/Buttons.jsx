import './Buttons.scss';
import {useState} from 'react'



function Buttons({handleSelect}) {
    const [selectedValue, setSelectedValue] = useState(10);

    const numQuestions = [5, 10, 15, 20, 25];


    const handleNumQuestions = (e) => {
        e.preventDefault();
        const numQuestionsSelected = parseInt(e.target.value, 10);
        console.log(numQuestionsSelected)
        handleSelect(numQuestionsSelected);
        setSelectedValue(numQuestionsSelected)
    }

  return (
    <div>
        <article className="button-container">

            <div className="category__item">
                <h3 className="questions-heading">Select your number of questions:</h3>
                {numQuestions.map((num) => (
                <button 
                key={num}
                value={num}
                className={`btn ${selectedValue === num ? 'selected' : ''}`}
                onClick={(e) => handleNumQuestions(e)}
                >
                    {num}
                </button>
            ))}
            </div>
        </article>

    </div>
  )
}

export default Buttons