import './ButtonArray.scss';
import {useState, useEffect} from 'react'


function ButtonArray({skillsList}) {
    console.log({skillsList})
    const [skillCategories, setSkillCategories] = useState([]);
    
    useEffect(() => {
        // Using Set to remove duplicates
        const skillCategories = [...new Set(skillsList.map((skill) => skill.category))];
        setSkillCategories(skillCategories);
        console.log(skillCategories); // Output the unique categories
    }, [skillsList]);

  return (
    <div>
        {skillCategories.map((skillCat) => (
        <article className="category-container">
            <div>
                <h3>{skillCat}</h3>
            </div>
            <div>
            {skillsList.filter((skills) => skills.category === skillCat).map((skills) => (
                <span>{skills.skill}</span>
            ))}

            </div>
        </article>
        ))}
    </div>
  )
}

export default ButtonArray