import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import "./banner.css"

import img1 from "../src/assets/img1.webp"
import img2 from "../src/assets/img2.webp"
import img3 from "../src/assets/img3.webp"
import img4 from "../src/assets/img4.webp"


function banner() {
    const [emblaRef] = useEmblaCarousel({loop:true },[Autoplay({delay : 3000})])
  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide"><img src={img1} className='img1' /></div>
        <div className="embla__slide"><img src={img2} className='img2' /></div>
        <div className="embla__slide"><img src={img3} className='img3' /></div>
        <div className="embla__slide"><img src={img4} className='img4' /></div>
      </div>
    </div>
  )
}

export default banner
