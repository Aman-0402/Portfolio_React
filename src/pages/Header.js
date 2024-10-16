// src/components/Header.js
import React from 'react';
import './Header.css'; // Import your custom CSS

const Header = () => {
  return (
    <header className="header-container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Portfolio</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="header-content">
        <h1>Welcome to My Portfolio</h1>
        <p>I'm Aman Raj, a passionate developer.</p>
        <a href="#projects" className="btn btn-primary">View My Work</a>
      </div>
    </header>
  );
};

export default Header;
