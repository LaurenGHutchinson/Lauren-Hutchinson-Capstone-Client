import React from 'react'
import './VerticalButtons.scss'

function VerticalButtons({selectedSkills}) {
  return (
      <div className="vertical-category__item">
        <h3 className="questions-heading">Selected Skills:</h3>
            {selectedSkills.map((skill) => (
            <button 
                key={skill.id}
                className="btn"
                >
                {skill.skill}
            </button>
            ))}
    </div>



  )
}

export default VerticalButtons