import React from 'react'
import "./streamCard.css"

function streamCard(props) {
  return (
    <div className='card-container' style={
      {backgroundImage: `url(${props.image})`}
      }>
        <div className="title">{props.title}</div>
        <div className="view-btn">View</div>
      
    </div>
  )
}

export default streamCard
