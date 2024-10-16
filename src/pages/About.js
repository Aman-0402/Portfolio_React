// src/components/About.js
import React from 'react';
import './About.css';
import profileImage from '../assets/profile.jpeg'; // Assuming you have the profile image
import { useNavigate } from 'react-router-dom';
import resume from '../assets/resume.pdf';


const About = () => {
  const navigate = useNavigate(); // Ensure navigate is defined here
  return (
    <section id="about" className="about-container">
      <div className="about-content">
        {/* Neon bordered text section */}
        <div className="about-text-container">
          <h2>About Me</h2>
          <p>
            Hi! I'm Aman Raj, a passionate frontend developer and AI/ML enthusiast.
            I specialize in building dynamic, responsive websites and web applications using
            modern technologies like React, Flask, and more. My focus is on crafting 
            seamless user experiences with creative CSS and cutting-edge development techniques.
          </p>
        </div>
        <div className="about-image">
          <img src={profileImage} alt="Profile" />
        </div>
        
      </div>
      <div className="resume-buttons">
        {/* Button for downloading the resume */}
       <center><a href={resume} download="Aman_Raj_Resume.pdf" className="resume-button download-button">
          Download Resume
        </a>

        {/* Button for previewing the resume */}
        <a href={resume} target="_blank" rel="noopener noreferrer" className="resume-button preview-button">
          Preview Resume
        </a></center> 
      </div>
      <div className="back-home-container">
      <center><button onClick={() => navigate('/')} className="back-home-button">
          Back to Home
        </button></center>
        </div>
    </section>
    
  );
};

export default About;
