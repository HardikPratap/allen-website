import React from 'react';
import "./Class6_10.css"
import CardContainer from "../Neet/CardContainer"
import CaraoselContainer from '../Neet/CaraoselContainer';
import img1 from "../../../src/assets/Class6_101.webp"
import img2 from "../../../src/assets/Class6_102.png"
import bannerimg2 from "../../../src/assets/Class6_10_banner2.webp"
import bannerimg3 from "../../../src/assets/neet_banner3.png"
import ClassRoomImg from "../../../src/assets/neetClassRoom.webp"
import LearningCard from '../Neet/LearningCard';


function Class6_10() {
  return (
    <div className='container-Class6_10'>
      <div className="div-container">
        <span>Home</span><i className="ri-arrow-right-s-line"></i>
        <span>Online Coaching</span><i className="ri-arrow-right-s-line"></i>
        <span>Class6_10</span>
      </div>

      <div className="Class6_10-coaching">
        <div className="text-Class6_10">
            <div className="heading-Class6_10">
                Class6_10 Online Coaching
            </div>
            <div className="subheading-Class6_10">
            Our Class6_10 Online coaching programs prioritize the NCERT syllabus, a cornerstone for Class6_10 success. You get access to exclusive study tools and techniques to enhance memory retention and boost your speed, two crucial factors in acing the Class 6 - 10 exam.
            </div>
        </div>
        <div className="img-Class6_10">
            <img src={img1} alt="image" />
        </div>


      </div>

      <div className="Class6_10-banner">
        <img src={img2} alt="image" />
      </div>

      <div className="coaching-card-Class6_10">
        <CardContainer title="Online Coaching for Class6_10"/>

      </div>

      <div className="Class6_10-banner2">
        <img src={bannerimg2} alt="" />
      </div>

      <div className="Class6_10-banner3">
        <div className="title">What’s special about our Class 6 - 10 Programs?</div>
        <img src={bannerimg3} alt="" />
      </div>

      <div className="Class6_10-banner4">
        <div className="title">Alternate Coaching you can explore</div>
        <div className="Class6_10-learning">
          <LearningCard text="Distance Learning" class="ri-book-open-fill" />
          <LearningCard text="Online Test Series" class="ri-flask-fill"/>


        </div>

      </div>

      <CaraoselContainer />

      <div className="Class6_10-banner5">
        <div className="title">Looking for a classroom based program?</div>
        <div className="Class6_10-classroom-container">
          <div className="Class6_10-classroom-text">
            <div className="Class6_10-classroom-heading">Present in 53 cities with</div>
            <div className="Class6_10-classroom-subheading">250+ classrooms</div>
            <div className="Class6_10-classroom-button">Find a Center</div>
            

          </div>
          <div className="Class6_10-classroom-img">
            <img src={ClassRoomImg} alt="image" />
          </div>
        </div>
      </div>


    </div>

  );
}

export default Class6_10;