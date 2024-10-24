import React from 'react'
import "./CoursePurchaseCard.css"

export default function CoursePurchaseCard(props) {
  return (
    <div className="course-card-details">
        <div className="course-card-details-title">
        {/* <i class="ri-video-ai-line"></i> */}
            {props.title}
        </div>

        <div className="course-card-details-heading">
            {props.heading}
        </div>
        <div className="course-card-details-subheading">
            {props.subheading}
        </div>

        <div className="course-card-details-list">
        {props.items.map((item, index) => (
                    <div key={index} className="course-card-items">
                        <i class="ri-arrow-drop-right-line"></i>
                        {item}
                    </div>
                ))}
        </div>

        <div className="course-card-details-price">
        {props.price}
        </div>

        <div className="course-card-details-discountedprice">
                {props.discount}
                <div className="course-card-details-discountedprice-text">Know More <i class="ri-arrow-right-line"></i></div>
        </div>
            
    </div>
    
  )
}
