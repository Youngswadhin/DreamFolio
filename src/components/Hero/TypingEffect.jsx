import React, { useState, useEffect } from 'react';

const TypingEffect = () => {
  const [text, setText] = useState('');
  const fullText = "I'M A FULL STACK DEVELOPER";

  useEffect(() => {
    let index = 0;

    const typingInterval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(typingInterval);
      }
    }, 100); // Adjust the interval to control typing speed

    return () => clearInterval(typingInterval);
  }, []);

  return <h3 className='hero-SubTitle'>{text}</h3>;
};

export default TypingEffect;
