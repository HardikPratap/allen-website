import React from 'react'
import "../../Neet/Pages/class11neet.css"
import banner1 from "../../../../src/assets/class_bannertop_class6.webp"
import recordimg1 from "../../../../src/assets/recordedImage.webp"
import recordimg2 from "../../../../src/assets/recordedImage2.webp"
import recordimg3 from "../../../../src/assets/recordedImage3.webp"
import CoursePurchaseCard from '../../../PurchaseCard/CoursePurchaseCard'


export default function Class6(props) {
  return (
    <div className='class-container'>
      <div className="img-container">
        <img src={banner1}  />
      </div>

      <div className="class-heading">
      {props.title}
      </div>

      <div className='course-cards-container'>
        <div className="course-cards-top">
            <div className="course-card-heading">
            Olympiad Rank Booster Program
            </div>
            <div className="course-card-img">
                <img src={recordimg1}></img>
            </div>
        </div>
      </div>

      <div className="course-card">
      <CoursePurchaseCard 
            title="Live" 
            heading="Jee Main course" 
            subheading="Video Lecture + Test Series"
            items={["Latest recordings covering full syllabus",
                    "20+ All India Tests",
                    "Exclusive ALLEN's Question Bank"
                ]}
            price="32,999"
            discount="24,999"
            />
      <CoursePurchaseCard 
            title="Live" 
            heading="Jee Crash course" 
            subheading="Video Lecture + Test Series"
            items={["Latest recordings covering full syllabus",
                    "20+ All India Tests",
                    "Exclusive ALLEN's Question Bank"
                ]}
            price="32,999"
            discount="24,999"
            />
      </div>


      <div className='course-cards-container'>
        <div className="course-cards-top">
            <div className="course-card-heading">
            NCERT Concept Building
            </div>
            <div className="course-card-img">
                <img src={recordimg2}></img>
            </div>
        </div>
      </div>

      <div className="course-card">
      <CoursePurchaseCard 
            title="RECORDED" 
            heading="Nurturer Recorded Videos" 
            subheading="Video Lecture + Test Series"
            items={["Latest recordings covering full syllabus",
                    "20+ All India Tests",
                    "Exclusive ALLEN's Question Bank"
                ]}
            price="32,999"
            discount="24,999"
            />
      </div>
      
      

      {/* <div className="img-container-bottom">
        <img src={banner2}  />
      </div>
       */}
    
    </div>
  )
}
