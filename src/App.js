// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Loader from './components/Loader';
import LandingPage from './pages/LandingPage'; // This is the main landing page
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // 3-second loading screen
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />; // Show the loader
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} /> {/* This should be your main portfolio landing page */}
        <Route path="/about" element={<About />} /> {/* Link to About page */}
        <Route path="/projects" element={<Projects />} /> {/* Link to Projects */}
        <Route path="/skills" element={<Skills />} /> {/* Link to Skills */}
        <Route path="/contact" element={<Contact />} /> {/* Link to Contact */}
      </Routes>
    </Router>
  );
}

export default App;
