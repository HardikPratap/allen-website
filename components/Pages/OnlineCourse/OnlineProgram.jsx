import React from 'react';
import "../Jee/jee.css"
import img1 from "../../../src/assets/onlineprogram1.webp"
import LearningCard from '../Neet/LearningCard';
import bannerimg3 from "../../../src/assets/neet_banner3.png"
import Container3 from '../../container3';
import BenefitContainer from './BenefitContainer';


function OnlineProgram() {
  return (
    <div className='container-jee'>
      <div className="div-container">
        <span>Home</span><i className="ri-arrow-right-s-line"></i>
        <span>Online Coaching</span><i className="ri-arrow-right-s-line"></i>
        <span>Online Program</span>
      </div>

      <div className="jee-coaching">
        <div className="text-jee">
            <div className="heading-jee">
               Online Program
            </div>
            <div className="subheading-jee">
            Our  Online coaching programs prioritize the NCERT syllabus, a cornerstone for jee success. You get access to exclusive study tools and techniques to enhance memory retention and boost your speed, two crucial factors in acing the jee exam.
            </div>
        </div>
        <div className="img-jee">
            <img src={img1} alt="image" />
        </div>


      </div>

      <div className="coaching-card-jee">
          <Container3 title="Discover the perfect online program"/>
      </div>

      <BenefitContainer/>

      <div className="jee-banner3">
        <div className="title">What’s special ?</div>
        <img src={bannerimg3} alt="" />
      </div>

      <div className="jee-banner4">
        <div className="title">Alternate Coaching you can explore</div>
        <div className="jee-learning">
          <LearningCard text="Distance Learning" class="ri-book-open-fill" />
          <LearningCard text="Online Test Series" class="ri-flask-fill"/>


        </div>

      </div>



    </div>

  );
}

export default OnlineProgram;