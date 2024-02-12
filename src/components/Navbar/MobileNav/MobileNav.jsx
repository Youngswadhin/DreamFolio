import React from 'react';
import './MobileNav.css';

const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <>
      <div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
        <div className='mobile-menu-container'>
          <h3 className='logo'>DreamFolio.</h3>

          <ul>
            <li> <a href="#home"className='menu-item'>Home</a></li>
                <li> <a href="#skills"className='menu-item'>Skills</a></li>
                <li> <a href="#projects"className='menu-item'>Projects</a></li>
                <li> <a href="#contact"className='menu-item'>Contact Me</a></li>

            <button
                              className='contact-btn'
                              onClick={() => {
                              window.open(
                                 'https://docs.google.com/document/d/1cuiCDkuKDEgobTyI7P8MONI7mox4y746P23El8YxdcM/preview?usp=drivesdk',
                                '_blank'
                                 );
                              }}
                            >
                               Resume
                            </button>

          </ul>

        </div>
      </div>
    </>
  );
}

export default MobileNav;
