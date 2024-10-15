import React from 'react'
import bannerImg from "../src/assets/topBanner.webp"
import "./home.css"

function home() {
  return (
    <div className='container'>
        <div className="banner">
            <img src={bannerImg} className='bannerTop' />
        </div>

        
      
    </div>
  )
}

export default home
