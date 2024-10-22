import React from 'react'
import Card from "./streamCard"
import "./container3.css"
import image1 from "../src/assets/card-img1.webp"
import image2 from "../src/assets/card-img2.webp"
import image3 from "../src/assets/card-img3.webp"


function container3(props) {
  return (
    <div className='container-3'>
      <div className="title">{props.title}</div>
      <div className="stream-card">
        < Card title="JEE" image={image1}/>
        < Card title="NEET" image={image2}/>
        < Card title="Grade 6-10" image={image3}/>
      </div>
    </div>
  )
}

export default container3
