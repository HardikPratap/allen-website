import React from 'react'
import image1 from "../../../src/assets/online-program-benefit-img1.webp"
import "./BenefitContainer.css"

export default function BenefitContainer() {
  return (
    <div className='online-program-benefit-container'>
        <div className="online-program-benefit-img">
            <img src={image1} alt="" srcset="" />
        </div>

        <div className="online-program-benefit-text">
            <div className="online-program-benefit-heading">
            and Added Benefits
            </div>

            <div className="online-program-benefit-subheading">
                <ul className="online-program-benefit-list">
                    <li className="online-program-benefit-items">School like discipline and homework</li>
                    <li className="online-program-benefit-items">Daily Doubt Solving with teachers</li>
                    <li className="online-program-benefit-items">Best in class Video Library, Notes, Q Banks</li>
                    <li className="online-program-benefit-items">All India Test Series with analysis</li>
                    <li className="online-program-benefit-items">1-1 Mentoring sessions for students</li>
                    <li className="online-program-benefit-items">Regular PTMs and Progress Reports</li>
                </ul>
            </div>
        </div>

      
    </div>
  )
}
