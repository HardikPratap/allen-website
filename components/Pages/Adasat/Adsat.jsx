import React from 'react'
import banner1 from "../../../src/assets/adsat_bannertop.png"
import banner2 from "../../../src/assets/adsat_bannerbottom.webp"
import Container3 from '../../container3'
import "../../container3.css"
import "./Adsat.css"


export default function Adsat() {
  return (
    <div className='class-container-adsat'>
      <div className="img-container-adsat">
        <img src={banner1}  />
      </div>

      <div className="container-three">
          <Container3 title="Discover the perfect online program"/>
      </div>

      <div className="img-container-bottom-adsat">
        <img src={banner2}  />
      </div>
      


    </div>
  )
}
