import React from 'react';
import FooterCard from "./footerCard";
import './footer.css'; // Optional: Add custom styles

function Footer() {
  return (
    <div>
    <div className='footer-container'>
      <FooterCard
        heading="About"
        subheadings={[
          "About Us", "Blog", "News", "MyExam EduBlogs", "Privacy Policy", "Public Notice", "Careers"
        ]}
      />
      <FooterCard
        heading="Help & Support"
        subheadings={[
          "Refund Policy", "Transfer Policy", "Terms & Conditions", "Contact Us"
        ]}
      />
      <FooterCard
        heading="Popular Goals"
        subheadings={[
          "NEET UG", "JEE Advanced", "6th to 10th"
        ]}
      />
      <FooterCard
        heading="Courses"
        subheadings={[
          "Ultimate Program", "Distance Learning", "Online Test Series"
        ]}
      />
      <FooterCard
        heading="Centers"
        subheadings={[
          "Kota", "Bangalore", "Indore", "Delhi", "More Centers"
        ]}
      />
      <FooterCard
        heading="Exam Information"
        subheadings={[
          "JEE Main", "JEE Advanced", "NEET UG", "Class 10", "Class 12", "Olympiad Exam", "NEET Online Test Series", "JEE Online Test Series", "JEE Main Online Test Series"
        ]}
      />
      </div>
      <div>
      <hr className='hr-tag'/>
    </div>
    </div>
  );
}

export default Footer;