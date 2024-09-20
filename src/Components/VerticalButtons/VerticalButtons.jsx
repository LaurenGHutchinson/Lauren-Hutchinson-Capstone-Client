import React from 'react'
import './VerticalButtons.scss'

function VerticalButtons({selectedSkills}) {

    console.log(selectedSkills)
  return (
      <div className="vertical-category__item">
        <h3 className="questions-heading">Selected Skills:</h3>
            {selectedSkills.map((skill, index) => (
            <button 
                key={skill.id}
                className={`btn buttons--${index}`}
                >
                {skill.skill}
            </button>
            ))}
    </div>



  )
}

export default VerticalButtons