import React from 'react';
import { useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleDarkMode = () => {
      setIsDarkMode(!isDarkMode);
      document.body.style.backgroundColor = isDarkMode ? 'rgba(36, 13, 47, 1)' : 'black';
    };
  return (
    <>
    <nav>
        <div>
          <img src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png" alt="main-logo" />
          <h2>Quiz</h2>
        </div>
        <button onClick={toggleDarkMode}>{isDarkMode ? 'Dark' : 'Light'}</button>
      </nav>
    </>
  );
}