import './ButtonArray.scss';
import {useState, useEffect} from 'react'
import Icon from '../../assets/Icons/right-chevron.png'


function ButtonArray({skillsList}) {
    console.log({skillsList})
    const [skillCategories, setSkillCategories] = useState([]);
    const [selectedButtons, setSelectedButtons] = useState([]);
        
        const handleButtonClick = (skill) => {
            console.log(skill);
            if (selectedButtons.includes(skill)) {
                setSelectedButtons(selectedButtons.filter((selected) => selected !== skill));
                console.log(selectedButtons);
            } else {
                if (selectedButtons.length < 6){
                    setSelectedButtons([...selectedButtons, skill])
                    console.log(selectedButtons);
                }
            }
        }
    
    useEffect(() => {
        // Using Set to remove duplicates
        const skillCategories = [...new Set(skillsList.map((skill) => skill.category))];
        setSkillCategories(skillCategories);
        console.log(skillCategories); // Output the unique categories
    }, [skillsList]);

  return (
    <div>
        {skillCategories.map((skillCat, index) => (
        <article className="category-container">
            <div className="category__title">
                <img className="icon" src={Icon}/><h3>{skillCat}</h3>
            </div>
            <div className="category__item">
            {skillsList.filter((skills) => skills.category === skillCat).map((skills) => (
                <button 
                    key={skills.id}
                    onClick={() => handleButtonClick(skills.id)}
                    className={`btn buttons--${index} ${selectedButtons.includes(skills.id) ? 'selected' : ''}`}
                    disabled={!selectedButtons.includes(skills.id) && selectedButtons.length >= 5}
                    >
                        {skills.skill}
                    </button>
            ))}

            </div>
        </article>
        ))}
    </div>
  )
}

export default ButtonArray