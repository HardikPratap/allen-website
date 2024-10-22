import React from 'react'
import "./LearningCard.css"

function LearningCard(props) {
  return (
    <div className='learning-container'>
        <div className="text-logo">
            <div className="logo">
            <i class={props.class}></i>
            </div>
            <div className="text">
                {props.text}
            </div>
        </div>

        <div className="arrow">
        <i class="ri-arrow-right-s-line"></i>
        </div>


      
    </div>
  )
}

export default LearningCard
