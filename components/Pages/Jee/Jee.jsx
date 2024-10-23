import React from 'react';
import "./Jee.css"
import CardContainer from "../Neet/CardContainer"
import CaraoselContainer from '../Neet/CaraoselContainer';
import img1 from "../../../src/assets/jee1.webp"
import img2 from "../../../src/assets/jee2.png"
import bannerimg2 from "../../../src/assets/jee_banner2.webp"
import bannerimg3 from "../../../src/assets/neet_banner3.png"
import ClassRoomImg from "../../../src/assets/neetClassRoom.webp"
import LearningCard from '../Neet/LearningCard';


function Jee() {
  return (
    <div className='container-jee'>
      <div className="div-container">
        <span>Home</span><i className="ri-arrow-right-s-line"></i>
        <span>Online Coaching</span><i className="ri-arrow-right-s-line"></i>
        <span>Jee</span>
      </div>

      <div className="jee-coaching">
        <div className="text-jee">
            <div className="heading-jee">
                Jee Online Coaching
            </div>
            <div className="subheading-jee">
            Our Jee Online coaching programs prioritize the NCERT syllabus, a cornerstone for jee success. You get access to exclusive study tools and techniques to enhance memory retention and boost your speed, two crucial factors in acing the jee exam.
            </div>
        </div>
        <div className="img-jee">
            <img src={img1} alt="image" />
        </div>


      </div>

      <div className="jee-banner">
        <img src={img2} alt="image" />
      </div>

      <div className="coaching-card-jee">
        <CardContainer title="Online Coaching for Jee"/>

      </div>

      <div className="jee-banner2">
        <img src={bannerimg2} alt="" />
      </div>

      <div className="jee-banner3">
        <div className="title">What’s special about our jee Programs?</div>
        <img src={bannerimg3} alt="" />
      </div>

      <div className="jee-banner4">
        <div className="title">Alternate Coaching you can explore</div>
        <div className="jee-learning">
          <LearningCard text="Distance Learning" class="ri-book-open-fill" />
          <LearningCard text="Online Test Series" class="ri-flask-fill"/>


        </div>

      </div>

      <CaraoselContainer />

      <div className="jee-banner5">
        <div className="title">Looking for a classroom based program?</div>
        <div className="jee-classroom-container">
          <div className="jee-classroom-text">
            <div className="jee-classroom-heading">Present in 53 cities with</div>
            <div className="jee-classroom-subheading">250+ classrooms</div>
            <div className="jee-classroom-button">Find a Center</div>
            

          </div>
          <div className="jee-classroom-img">
            <img src={ClassRoomImg} alt="image" />
          </div>
        </div>
      </div>


    </div>

  );
}

export default Jee;