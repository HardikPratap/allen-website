import React, { useState } from 'react';
import MyImageSvg from '../src/assets/logo_dark.svg';
import { Link } from 'react-router-dom';
import "./headerTop.css";

function HeaderTop() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Handle dropdown click to toggle visibility
  const handleDropdownClick = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <div className='header-main'>
      <div className="header-container">
        <div className="left-header">
          <Link to="/">
            <img src={MyImageSvg} alt="Logo" className='header-img' />
          </Link>
          <ul className="list-items">

            <li className={`list-links ${activeDropdown === 1 ? 'active' : ''}`} onClick={() => handleDropdownClick(1)}> 
              <Link to="/">Exams</Link>
              <ul className="dropdown">
                <li className="dropdown-link">
                  <Link to="/Neet">NEET</Link>
                  <ul className="dropdown-sub">
                    <li className="dropdown-link-sub">Class 11th</li>
                    <li className="dropdown-link-sub">Class 12th</li>
                    <li className="dropdown-link-sub">Class 12th Plus</li>
                  </ul>
                </li>
                <li className="dropdown-link"><Link to="/JEE">JEE</Link>
                  <ul className="dropdown-sub">
                      <li className="dropdown-link-sub">Class 11th</li>
                      <li className="dropdown-link-sub">Class 12th</li>
                      <li className="dropdown-link-sub">Class 12th Plus</li>
                  </ul>
                </li>

                <li className="dropdown-link"><Link to="/Class10">Class 10</Link>
                  <ul className="dropdown-sub">
                      <li className="dropdown-link-sub">Class 11th</li>
                      <li className="dropdown-link-sub">Class 12th</li>
                      <li className="dropdown-link-sub">Class 12th Plus</li>
                    </ul>
                </li>
              </ul>
            </li>

            <li className={`list-links ${activeDropdown === 2 ? 'active' : ''}`} onClick={() => handleDropdownClick(2)}>
              Programs
              <ul className="dropdown">
                <li className="dropdown-link"><Link to="/OnlineProgram">Online Program</Link></li>
                <li className="dropdown-link"><Link to="/ClasroomProgram">Classroom Program</Link></li>
              </ul>
            </li>

            <li className={`list-links ${activeDropdown === 3 ? 'active' : ''}`} onClick={() => handleDropdownClick(3)}>
              <Link to="/Scholarship">Scholarship</Link>
              <ul className="dropdown">
                <li className="dropdown-link"><Link to="/Adsat">Adsat</Link></li>
              </ul>
            </li>

            <li className={`list-links ${activeDropdown === 4 ? 'active' : ''}`} onClick={() => handleDropdownClick(4)}>
              <Link to="/Test Series">Test Series</Link>
              <ul className="dropdown">
                <li className="dropdown-link"><Link to="/Neet">Neet</Link></li>
                <li className="dropdown-link"><Link to="/JEE">Jee Mains</Link></li>
                <li className="dropdown-link"><Link to="/JEE">Jee Mains + Advance</Link></li>
              </ul>
            </li>

            <li className="list-links"><Link to="/Study Material">Study Material</Link></li>

          </ul>
        </div>
        <div className="right-header">
          <button className='header-callBtn'><i className="ri-phone-fill"></i><span>Talk To Us</span></button>
          <button className='header-loginBtn'>Login</button>
        </div>
      </div>
    </div>
  );
}

export default HeaderTop;