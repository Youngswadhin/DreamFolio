import React from 'react';
import TypingEffect from './TypingEffect'; // Import the TypingEffect component
import './Hero.css';

const Hero = () => {
  return (
    <section className='hero-container'>
      <h1 className='hero-Title'>SWADHIN MUDULI</h1>
      <TypingEffect /> {/* Use the TypingEffect component */}
      <p className='hero-Decs'>Hello, I'm an aspiring web developer excited about crafting websites. I'm eager to learn and create user-friendly online experiences that combine design and technology. My goal is to turn coding into captivating websites that people love to use.</p>

      <div className="share">
        <div className="social">
          <a href="https://www.linkedin.com/in/swadhin-kumar-muduli-6b4ab7261"><i className='bx bxl-linkedin'></i></a>
          <a href="https://github.com/Youngswadhin"><i className='bx bxl-github'></i></a>
          <a href="https://instagram.com/young_swadhin?igshid=NGExMmI2YTkyZg=="><i className='bx bxl-instagram'></i></a>
          <a href="mailto:youngswadhin@gmail.com"><i className='bx bxl-gmail'></i></a>
        <a href="https://wa.me/8117002071?text=Hey%20Swadhin" target="_blank"><i className='bx bxl-whatsapp'></i></a>

        </div>
      </div>
    </section>
  );
}

export default Hero;
