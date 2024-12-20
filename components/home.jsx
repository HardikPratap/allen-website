import React from 'react'
import bannerImg from "../src/assets/topBanner.webp"
import CarouselTop from "./banner"
import CarouselTwo from "./banner2"
import Container3 from "./container3"
import "./home.css"

function home() {
  return (
    <div className='container'>
        <div className="banner">
            <img src={bannerImg} className='bannerTop' />
        </div>

        <div className="container-first">
          <div className="text-left">
            <div className="heading">
              Your Dream. <br />
              Our Expertise.
            </div>

            <div className="subject">
              <div className="sub-heading">What brings you to us today?</div>
              
              <div className="subject-btn">
                <div className="neet-btn">NEET</div>
                <div className="jee-btn">JEE</div>
                <div className="grade-btn">Grade 6-10</div>
              </div>
              
            </div>
          </div>
          
          <div className="slider-container">
            <CarouselTop />
          </div>
        </div>
        <div className="container-two">
        
          <CarouselTwo />
        </div>

        <div className="container-three">
          <Container3 title="Discover the perfect online program"/>
        </div>
      
    </div>
  )
}

export default home
