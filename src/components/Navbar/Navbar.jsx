import React, { useState } from 'react'
import './Navbar.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import MobileNav from './MobileNav/MobileNav';

const Navbar = () => {

    const[openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

  return (
    <>

    <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />


    <nav className='nav-wrapper'>
        <div className='nav-content'>
            <h3 className='logo'>DreamFolio.</h3>

            <ul>
                <li> <a className='menu-item'>Home</a></li>
                <li> <a className='menu-item'>Skills</a></li>
                <li> <a className='menu-item'>Projects</a></li>
                <li> <a className='menu-item'>Contact Me</a></li>

                <button className='contact-btn' onClick={() => {}}>Resume</button>
            </ul>

            <button className='menu-btn' onClick={toggleMenu}>
             <FontAwesomeIcon icon={faBars} />{openMenu ? "" : ""}
            </button>
        </div>
    </nav>
    </>
  )
}

export default Navbar