import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import MobileNav from './MobileNav/MobileNav';
import './Navbar.css';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

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
                        <li> <a href="#home" className='menu-item'>Home</a></li>
                        <li> <a href="#skills" className='menu-item'>Skills</a></li>
                        <li> <a href="#projects" className='menu-item'>Projects</a></li>
                        <li> <a href="#contact" className='menu-item'>Contact Me</a></li>
                        <li>
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


                        </li>
                    </ul>

                    <button className='menu-btn' onClick={toggleMenu}>
                        <FontAwesomeIcon icon={faBars} />{openMenu ? "" : ""}
                    </button>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
