import React from 'react'
import MyImageSvg from '../src/assets/logo_dark.svg';
import "./headerTop.css"

function headerTop() {
  return (
    <div className='header-main'>
        <div className="header-container">
            <div className="left-header">
              <img src={MyImageSvg} alt="Logo" className='header-img' />
                <ul className="list-items">

                    <li className="list-links">Exams
                      <ul className="dropdown">
                        <li className="dropdown-link">NEET</li>
                          <ul className="dropdown-sub">
                            <li className="dropdown-link-sub">Class 11th</li>
                            <li className="dropdown-link-sub">Class 12th</li>
                            <li className="dropdown-link-sub">Class 12th Plus</li>
                          </ul>
                        <li className="dropdown-link">JEE</li>
                        <li className="dropdown-link">Class 10</li>
                      </ul>
                    </li>

                    <li className="list-links">Programs</li>
                    <li className="list-links">Scholarship</li>
                    <li className="list-links">Test Series</li>
                    <li className="list-links">Study Material</li>

                </ul>
            </div>
            <div className="right-header">
              <button className='header-callBtn'><i class="ri-phone-fill"></i><span>Talk To Us</span></button>
              <button className='header-loginBtn'>Login</button>
            </div>
        </div>
      
    </div>
  );
}

export default headerTop
