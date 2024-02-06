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

            <button className='contact-btn' onClick={() => {}}>Resume</button>
          </ul>

        </div>
      </div>
    </>
  );
}

export default MobileNav;
