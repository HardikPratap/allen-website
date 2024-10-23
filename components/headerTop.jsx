import React from 'react'
import MyImageSvg from '../src/assets/logo_dark.svg';
import { Link } from 'react-router-dom';
import "./headerTop.css"

function headerTop() {
  return (
    <div className='header-main'>
        <div className="header-container">
            <div className="left-header">
              <Link to="/">
              <img src={MyImageSvg} alt="Logo" className='header-img' />
              </Link>
                <ul className="list-items">

                    <li className="list-links"> <Link to="/">Exams</Link>
                      <ul className="dropdown">
                        <li className="dropdown-link"><Link to="/Neet">NEET</Link></li>
                          <ul className="dropdown-sub">
                            <li className="dropdown-link-sub">Class 11th</li>
                            <li className="dropdown-link-sub">Class 12th</li>
                            <li className="dropdown-link-sub">Class 12th Plus</li>
                          </ul>
                        <li className="dropdown-link"><Link to="/JEE">JEE</Link></li>
                        <li className="dropdown-link"><Link to="/Class10">Class 10</Link></li>
                      </ul>
                    </li>

                    <li className="list-links"><Link to="/Programs">Programs</Link></li>
                    <li className="list-links"><Link to="/Scholarship">Scholarship</Link></li>
                    <li className="list-links"><Link to="/Test Series">Test Series</Link></li>
                    <li className="list-links"><Link to="/Study Material">Study Material</Link></li>

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
