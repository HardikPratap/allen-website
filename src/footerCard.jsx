import React from 'react';
import "./footerCard.css"

function FooterCard(props) {
  return (
    <div className='footer-section'>
      <h1>{props.heading}</h1>
      <div className='footer-subheadings'>
        {props.subheadings.map((subheading, index) => (
          <h3 key={index}>{subheading}</h3>
        ))}
      </div>
    </div>
  );
}

export default FooterCard;