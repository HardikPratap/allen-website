import React, { useState, useRef } from 'react';
import MyImageSvg from '../src/assets/logo_dark.svg';
import { Link } from 'react-router-dom';
import "./headerTop.css";

function HeaderTop() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const hideTimeout = useRef(null); // Create a ref to store the timeout

  // Handle dropdown click to toggle visibility
  const handleDropdownClick = (index) => {
    if (activeDropdown === index) {
      setActiveDropdown(null); // Close the dropdown if clicked twice
    } else {
      setActiveDropdown(index); // Open the specific dropdown
    }
  };

  const handleLinkClick = () => {
    setActiveDropdown(null); // Close dropdown on link click
  };

  const handleMouseLeave = () => {
    hideTimeout.current = setTimeout(() => {
      setActiveDropdown(null); // Set dropdown to null after timeout
    }, 300); // 300 milliseconds = 0.3 seconds
  };

  const handleMouseEnter = () => {
    if (hideTimeout.current) {
      clearTimeout(hideTimeout.current);
    }
  };

  return (
    <div className='header-main'>
      <div className="header-container">
        <div className="left-header">
          <Link to="/">
            <img src={MyImageSvg} alt="Logo" className='header-img' />
          </Link>
          <ul className="list-items">

            <li className={`list-links ${activeDropdown === 1 ? 'active' : ''}`} onClick={() => handleDropdownClick(1)}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}> 
              Exams
              <ul className="dropdown">
                <li className="dropdown-link">
                  <Link to="/Neet" onClick={handleLinkClick} className='dropdown-link-container' >
                  NEET
                  </Link>
                  <ul className="dropdown-sub" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <li className="dropdown-link-sub" onClick={handleLinkClick} ><Link to="/Class-11-Neet">Class 11th</Link></li>
                    <li className="dropdown-link-sub" onClick={handleLinkClick}><Link to="/Class-12-Neet">Class 12th</Link></li>
                    <li className="dropdown-link-sub" onClick={handleLinkClick}><Link to="/Class-12-Dropers-Neet">Class 12th PLus</Link></li>
                  </ul>
                </li>
                <li className="dropdown-link"><Link to="/JEE" onClick={handleLinkClick} className='dropdown-link-container'>JEE</Link>
                  <ul className="dropdown-sub " onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                      <li className="dropdown-link-sub" onClick={handleLinkClick}><Link to="/Class-11-Jee">Class 11th</Link></li>
                      <li className="dropdown-link-sub" onClick={handleLinkClick}><Link to="/Class-12-Jee">Class 12th</Link></li>
                      <li className="dropdown-link-sub" onClick={handleLinkClick}><Link to="/Class-12-Dropers-Jee">Class 12th PLus</Link></li>
                  </ul>
                </li>

                <li className="dropdown-link"><Link to="/Class10" onClick={handleLinkClick} className='dropdown-link-container'>Class 10</Link>
                  <ul className="dropdown-sub" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                      <li className="dropdown-link-sub" onClick={handleLinkClick}><Link to="/Class-6">Class 6th</Link></li>
                      <li className="dropdown-link-sub" onClick={handleLinkClick}><Link to="/Class-7">Class 7th</Link></li>
                      <li className="dropdown-link-sub" onClick={handleLinkClick}><Link to="/Class-8">Class 8th</Link> </li>
                    </ul>
                </li>
              </ul>
            </li>

            <li className={`list-links ${activeDropdown === 2 ? 'active' : ''}`} onClick={() => handleDropdownClick(2)}>
              Programs
              <ul className="dropdown">
                <li className="dropdown-link"><Link to="/OnlineProgram" onClick={handleLinkClick} className='dropdown-link-container'>Online Program</Link></li>
                <li className="dropdown-link"><Link to="/ClasroomProgram" onClick={handleLinkClick} className='dropdown-link-container'>Classroom Program</Link></li>
              </ul>
            </li>

            <li className={`list-links ${activeDropdown === 3 ? 'active' : ''}`} onClick={() => handleDropdownClick(3)}>
              Scholarship
              <ul className="dropdown">
                <li className="dropdown-link"><Link to="/Adsat">Adsat</Link></li>
              </ul>
            </li>

            <li className={`list-links ${activeDropdown === 4 ? 'active' : ''}`} onClick={() => handleDropdownClick(4)}>
              Test Series
              <ul className="dropdown">
                <li className="dropdown-link"><Link to="/Neet" onClick={handleLinkClick} className='dropdown-link-container'>Neet</Link></li>
                <li className="dropdown-link"><Link to="/JEE" onClick={handleLinkClick} className='dropdown-link-container'>Jee Mains</Link></li>
                <li className="dropdown-link"><Link to="/JEE" onClick={handleLinkClick} className='dropdown-link-container'>Jee Mains + Advance</Link></li>
              </ul>
            </li>

            <li className="list-links">
              {/* <Link to="/Study Material"> */}
              Study Material
              {/* </Link> */}
              </li>

          </ul>
        </div>
        <div className="right-header">
          <button className='header-callBtn'><i className="ri-phone-fill"></i><span>Talk To Us</span></button>
          <button className='header-loginBtn'><span>Login</span></button>
        </div>
      </div>
    </div>
  );
}

export default HeaderTop;