import React from 'react'
import Card from "../Neet/CardNeet"
import "./CardContainerClass10.css"
import image1 from "../../../src/assets/class10card_img1.webp"
import image2 from "../../../src/assets/class10card_img2.webp"
import image3 from "../../../src/assets/class10card_img3.webp"
import image4 from "../../../src/assets/class10card_img4.webp"
import image5 from "../../../src/assets/class10card_img5.webp"


function CardContainer(props) {
    return (
        <div className='class10-container-3'>
          <div className="title">{props.title}</div>
          <div className="class10-stream-card">
            < Card title="For 6th Plus" image={image1}/>
            < Card title="For 7th" image={image2}/>
            < Card title="For 8th" image={image3}/>
            < Card title="For 9th Plus" image={image4}/>
            < Card title="For 10th Plus" image={image5}/>
          </div>
        </div>
      )
}

export default CardContainer
