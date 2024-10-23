import React from 'react';
import "./Class6_10.css"
import CardContainerClass10 from "./CardContainerClass10"
import CaraoselContainer from '../Neet/CaraoselContainer';
import img1 from "../../../src/assets/Class6_101.webp"
import img2 from "../../../src/assets/Class6_102.webp"
import bannerimg2 from "../../../src/assets/Class6_10_banner2.webp"



function Class6_10() {
  return (
    <div className='container-Class6_10'>
      <div className="div-container">
        <span>Home</span><i className="ri-arrow-right-s-line"></i>
        <span>Online Coaching</span><i className="ri-arrow-right-s-line"></i>
        <span>Class6 - 10</span>
      </div>

      <div className="class6_10-coaching">
        <div className="text-class6_10">
            <div className="heading-class6_10">
                Class6 - 10 Online Coaching
            </div>
            <div className="subheading-class6_10">
            Our Class6 - 10 Online coaching programs prioritize the NCERT syllabus, a cornerstone for Class6_10 success. You get access to exclusive study tools and techniques to enhance memory retention and boost your speed, two crucial factors in acing the Class 6 - 10 exam.
            </div>
        </div>
        <div className="img-class6_10">
            <img src={img1} alt="image" />
        </div>


      </div>

      <div className="class6_10-banner">
        <img src={img2} alt="image" />
      </div>

      <div className="coaching-card-class6_10">
        <CardContainerClass10 title="Online Coaching for class6 - 10"/>

      </div>

      <div className="class6_10-banner2">
        <img src={bannerimg2} alt="" />
      </div>

      <CaraoselContainer />

    </div>

  );
}

export default Class6_10;