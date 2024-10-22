import React from 'react'
import Card from "./CardNeet"
import "./CardContainer.css"
import image1 from "../../../src/assets/neetcard_img1.webp"
import image2 from "../../../src/assets/neetcard_img2.webp"
import image3 from "../../../src/assets/neetcard_img3.webp"


function CardContainer(props) {
    return (
        <div className='container-3'>
          <div className="title">{props.title}</div>
          <div className="stream-card">
            < Card title="For 11th" image={image1}/>
            < Card title="For 12th" image={image2}/>
            < Card title="For 12th Plus" image={image3}/>
          </div>
        </div>
      )
}

export default CardContainer
