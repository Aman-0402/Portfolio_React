// src/components/Projects.js

import React from 'react';
import './Projects.css'; // We'll create the CSS file next
import project1Image from '../assets/project1.jpg';
import project2Image from '../assets/project2.png';
import project4Image from '../assets/Watermarking.jpg';
import project3Image from '../assets/comingsoon.png';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const navigate = useNavigate(); // Ensure navigate is defined here
  return (
    <section className="projects-section">
      <div className="projects-container">
        <h1 className="projects-heading">My Projects</h1>
        <div className="projects-list">
          
          {/* Project 1 */}
          <div className="project-card">
          <img src={project1Image} alt="Project 1" className="project-image" />
            <div className="project-details">
              <h3>Wine Quality Prediction</h3>
              <p>Developed a Machine Learning model to predict the quality of wine using various chemical properties.</p>
              <a href="https://github.com/Aman-0402/Wine-Quality-prediction" target="_blank" rel="noopener noreferrer" className="project-link">View on GitHub</a>
            </div>
          </div>

          <div className="project-card">
          <img src={project2Image} alt="Project 2" className="project-image" />
            <div className="project-details">
              <h3>Portfolio React App</h3>
              <p>This project showcases a dynamic React portfolio website featuring creative CSS animations and neon effects. </p>
              <a href="https://github.com/your-repo/digital-resume-builder" target="_blank" rel="noopener noreferrer" className="project-link">View on GitHub</a>
            </div>
          </div>
          <div className="project-card">
          <img src={project4Image} alt="Project 3" className="project-image" />
            <div className="project-details">
              <h3>Watermarking Attacks and Recovery</h3>
              <p>In this we embed the watermark into host image and try different types of image processing attack and recovery the image using hybrid method.</p>
              <a href="https://github.com/Aman-0402/Watermarking_Attacks_and_Recovery" target="_blank" rel="noopener noreferrer" className="project-link">View on GitHub</a>
            </div>
          </div>

          <div className="project-card">
          <img src={project3Image} alt="Project 3" className="project-image" />
            <div className="project-details">
              <h3>Coming Soon</h3>
              <p>I will Uploading Project ASAP</p>
              <a href="https://github.com/your-repo/digital-resume-builder" target="_blank" rel="noopener noreferrer" className="project-link">View on GitHub</a>
            </div>
          </div>

        </div>
      </div>
      <div className="back-home-container">
      <center><button onClick={() => navigate('/')} className="back-home-button">
          Back to Home
        </button></center>
        </div>
    </section>
  );
}

export default Projects;
