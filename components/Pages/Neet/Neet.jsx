import React from 'react';
import "./Neet.css"
import CardContainer from "./CardContainer"
import CaraoselContainer from './CaraoselContainer';
import img1 from "../../../src/assets/neet1.webp"
import img2 from "../../../src/assets/neet2.webp"
import bannerimg2 from "../../../src/assets/neet_banner2.webp"
import bannerimg3 from "../../../src/assets/neet_banner3.png"
import ClassRoomImg from "../../../src/assets/neetClassRoom.webp"
import LearningCard from './LearningCard';


function Neet() {
  return (
    <div className='container-neet'>
      <div className="div-container">
        <span>Home</span><i className="ri-arrow-right-s-line"></i>
        <span>Online Coaching</span><i className="ri-arrow-right-s-line"></i>
        <span>NEET</span>
      </div>

      <div className="neet-coaching">
        <div className="text-neet">
            <div className="heading-neet">
                NEET Online Coaching
            </div>
            <div className="subheading-neet">
            Our NEET Online coaching programs prioritize the NCERT syllabus, a cornerstone for NEET success. You get access to exclusive study tools and techniques to enhance memory retention and boost your speed, two crucial factors in acing the NEET exam.
            </div>
        </div>
        <div className="img-neet">
            <img src={img1} alt="image" />
        </div>


      </div>

      <div className="neet-banner">
        <img src={img2} alt="image" />
      </div>

      <div className="coaching-card-neet">
        <CardContainer title="Online Coaching for NEET"/>

      </div>

      <div className="neet-banner2">
        <img src={bannerimg2} alt="" />
      </div>

      <div className="neet-banner3">
        <div className="title">What’s special about our NEET Programs?</div>
        <img src={bannerimg3} alt="" />
      </div>

      <div className="neet-banner4">
        <div className="title">Alternate Coaching you can explore</div>
        <div className="neet-learning">
          <LearningCard text="Distance Learning" class="ri-book-open-fill" />
          <LearningCard text="Online Test Series" class="ri-flask-fill"/>


        </div>

      </div>

      <CaraoselContainer />

      <div className="neet-banner5">
        <div className="title">Looking for a classroom based program?</div>
        <div className="neet-classroom-container">
          <div className="neet-classroom-text">
            <div className="neet-classroom-heading">Present in 53 cities with</div>
            <div className="neet-classroom-subheading">250+ classrooms</div>
            <div className="neet-classroom-button">Find a Center</div>
            

          </div>
          <div className="neet-classroom-img">
            <img src={ClassRoomImg} alt="image" />
          </div>
        </div>
      </div>


    </div>

  );
}

export default Neet;