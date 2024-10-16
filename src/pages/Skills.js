// src/components/Skills.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faPython, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faLaptopCode, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import './Skills.css';
import { useNavigate } from 'react-router-dom';

const Skills = () => {
  
  const navigate = useNavigate(); // Ensure navigate is defined here
  return (
    <section className="skills-section">
      <div className="skills-container">
        <h2 className="skills-heading">My Skills</h2>

        {/* Technology Section */}
        <div className="skills-category">
          <h3>Technology</h3>
          <div className="skills-icons">
            <div className="skill">
              <FontAwesomeIcon icon={faLaptopCode} size="3x" />
              <p>Full Stack Web Development</p>
            </div>
            <div className="skill">
              <FontAwesomeIcon icon={faProjectDiagram} size="3x" />
              <p>Artificial Intelligence & Machine Learning</p>
            </div>
            <div className="skill">
              <FontAwesomeIcon icon={faDatabase} size="3x" />
              <p>Data Analytics</p>
            </div>
          </div>
        </div>

        {/* Programming Section */}
        <div className="skills-category">
          <h3>Programming</h3>
          <div className="skills-icons">
            <div className="skill">
              <FontAwesomeIcon icon={faPython} size="3x" />
              <p>Python</p>
            </div>
            <div className="skill">
              <FontAwesomeIcon icon={faJs} size="3x" />
              <p>JavaScript</p>
            </div>
            <div className="skill">
              <FontAwesomeIcon icon={faNodeJs} size="3x" />
              <p>Node.js</p>
            </div>
            {/* Add other programming languages similarly */}
          </div>
        </div>

        {/* Frontend Stack */}
        <div className="skills-category">
          <h3>Frontend Stack</h3>
          <div className="skills-icons">
            <div className="skill">
              <FontAwesomeIcon icon={faHtml5} size="3x" />
              <p>HTML</p>
            </div><div className="skill">
              <FontAwesomeIcon icon={faCss3Alt} size="3x" />
              <p>CSS</p>
            </div>
            <div className="skill">
              <FontAwesomeIcon icon={faReact} size="3x" />
              <p>React</p>
            </div>
            {/* Add more frontend skills similarly */}
          </div>
        </div>

        {/* Other sections for Database, Software, Frameworks, and Relevant Skills */}
        {/* Add sections for Database Technologies, Software, and Frameworks similarly */}
      </div>
      <div className="back-home-container">
      <center><button onClick={() => navigate('/')} className="back-home-button">
          Back to Home
        </button></center>
        </div>
    </section>
  );
};

export default Skills;
