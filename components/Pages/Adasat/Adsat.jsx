import React from 'react'
import "../Neet/Pages/class11neet.css"
import banner1 from "../../../src/assets/adsat_bannertop.png"
import banner2 from "../../../src/assets/adsat_bannerbottom.webp"
import recordimg1 from "../../../src/assets/recordedImage.webp"
import recordimg2 from "../../../src/assets/recordedImage2.webp"
// import recordimg3 from "../../../../src/assets/recordedImage3.webp"
import Container3 from '../../container3'


export default function Adsat() {
  return (
    <div className='class-container'>
      <div className="img-container">
        <img src={banner1}  />
      </div>

      <div className="container-three">
          <Container3 title="Discover the perfect online program"/>
      </div>

      <div className="img-container-bottom">
        <img src={banner2}  />
      </div>
      


    </div>
  )
}
