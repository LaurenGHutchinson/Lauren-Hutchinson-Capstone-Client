import './ButtonArray.scss';
import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom';
import Icon from '../../assets/Icons/right-chevron.png'


function ButtonArray({initialSkills , skillsList}) {
    console.log({skillsList})
    console.log({initialSkills})
    const [skillCategories, setSkillCategories] = useState([]);
    const [selectedButtons, setSelectedButtons] = useState([]);
    const navigate = useNavigate();
        
    const handleButtonClick = (skill) => {
        console.log(skill)
        if (selectedButtons.includes(skill)) {
            setSelectedButtons(selectedButtons.filter((selected) => selected !== skill));
        } else {
            if (selectedButtons.length <=5){
                setSelectedButtons([...selectedButtons, skill])
                console.log(selectedButtons);
            }
        }
    }

    const handleSubmit = () => {
        navigate('/quiz', {state:{selectedButtons}});
    }

    const handleReset = () => {
        setSelectedButtons([]);
        console.log(selectedButtons)
    }
    
    useEffect(() => {
        const skillCategories = [...new Set(skillsList.map((skill) => skill.category))];
        setSkillCategories(skillCategories);
    }, [skillsList]);

  return (
    <div>
        <h2 className="skills-heading">Select skills to train (max 5):</h2>
        {skillCategories.map((skillCat, index) => (
        <article className="category-container">
            <div className="category__title">
                <img className="icon" src={Icon}/><h3 >{skillCat}</h3>
            </div>
            <div className="category__item">
            {skillsList.filter((skills) => skills.category === skillCat).map((skills) => (
                <button 
                    key={skills.id}
                    onClick={() => handleButtonClick(skills)}
                    className={`btn buttons--${index} ${selectedButtons.includes(skills) ? 'selected' : ''}`}
                    disabled={!selectedButtons.includes(skills) && selectedButtons.length >= 5}>
                        {skills.skill}
                    </button>
            ))}
            </div>
        </article>
        ))}
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleSubmit}>Enter</button>

    </div>
  )
}

export default ButtonArray