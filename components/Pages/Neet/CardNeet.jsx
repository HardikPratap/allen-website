import React from 'react'
import "./CardNeet.css"

function CardNeet(props) {
    return (
        <div className='card-container' style={
          {backgroundImage: `url(${props.image})`}
          }>
            <div className="title">{props.title}</div>
            <div className="sub-title">1 Year Program</div>

            <div className="enroll-btn">Enroll<i class="ri-arrow-right-line"></i></div>
          
        </div>
      )
}

export default CardNeet
