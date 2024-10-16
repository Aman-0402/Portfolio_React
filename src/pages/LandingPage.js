import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'; // Custom CSS with neon effect

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="landing-header">
        <h1>Welcome to My Portfolio</h1>
        <h2>Aman Raj</h2>
        <p>Frontend Developer and AI/ML Expert</p>
        <p>Check out my work below!</p>
      </header>

      <nav className="landing-nav">
        <ul className="nav-list">
          <li>
            <Link to="/about" className="neon-link">About Me</Link>
          </li>
          <li>
            <Link to="/projects" className="neon-link">Projects</Link>
          </li>
          <li>
            <Link to="/skills" className="neon-link">Skills</Link>
          </li>
          <li>
            <Link to="/contact" className="neon-link">Contact</Link>
          </li>
        </ul>
      </nav>

      <footer className="landing-footer">
        <p>Let's create something amazing together!</p>
      </footer>
    </div>
  );
};

export default LandingPage;
