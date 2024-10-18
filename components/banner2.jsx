import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import "./banner2.css"


import img1 from "../src/assets/banner2.1.webp"
import img2 from "../src/assets/banner2.2.webp"
import img3 from "../src/assets/banner2.3.webp"

function banner2() {
  
  const [emblaRef2] = useEmblaCarousel({loop:true },[Autoplay({delay : 5000})])
  
  return (
    <div className="embla2" ref={emblaRef2}>
      <div className="embla__container2">
        <div className="embla__slide2"><img src={img1} className='img1' /></div>
        <div className="embla__slide2"><img src={img2} className='img2' /></div>
        <div className="embla__slide2"><img src={img3} className='img3' /></div>
      </div>
    </div>
  )
}

export default banner2
 