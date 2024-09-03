import React, { useState, useEffect, useMemo } from 'react';
import '../styles/landing.css';
import mypic from '../assests/mypic.jpg';
import { useNavigate } from 'react-router-dom';


function Landing() {
  const titles = useMemo(() => [
    "I'M A WEB DESIGNER",
    "I'M A REACT DEVELOPER",
    "I'M A DJANGO DEVELOPER",
    "I'M A DESKTOP APP DEVELOPER",
    "I'M A WEB DESIGNING EXPERT"
  ], []);
  const navigate = useNavigate(); // Call useNavigate here

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentTitle = titles[currentTitleIndex];

      if (isDeleting) {
        setDisplayedText(currentTitle.substring(0, displayedText.length - 1));
      } else {
        setDisplayedText(currentTitle.substring(0, displayedText.length + 1));
      }

      if (!isDeleting && displayedText === currentTitle) {
        setTimeout(() => setIsDeleting(true), 2000); // Pause before deleting
      } else if (isDeleting && displayedText === '') {
        setIsDeleting(false);
        setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
      }
    };

    const typingInterval = setInterval(handleTyping, 150); // Typing interval

    return () => clearInterval(typingInterval); // Cleanup interval on unmount
  }, [displayedText, isDeleting, currentTitleIndex, titles]);
  const gotohome = () => {
    navigate('/about');
  };
  return (
    <main className="content">
      <div className="content-box">
        <h1>Hi, I'm Saul</h1>
        <h2>{displayedText}<span className="cursor">|</span></h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button className="view-projects-btn" onClick={gotohome}>KNOW MORE ABOUT ME</button>
      </div>
      <div className="image-box">
        <img src={mypic} alt="Web Designer" />
      </div>
    </main>
  );
}

export default Landing;
