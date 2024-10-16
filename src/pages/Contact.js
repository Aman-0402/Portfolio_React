import React, { useState } from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
    const navigate = useNavigate(); // Ensure navigate is defined here
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-page">
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>

      {/* Social Media Icons */}
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/aman-raj-081905211" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className="icon linkedin" />
        </a>
        <a href="https://github.com/Aman-0402" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} className="icon github" />
        </a>
        <a href="https://www.instagram.com/ai_aman_04" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faInstagram} className="icon instagram" />
        </a>
        <a href="https://wa.me/9852104967" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faWhatsapp} className="icon whatsapp" />
        </a>
        
      </div>
      <div className="back-home-container">
      <center><button onClick={() => navigate('/')} className="back-home-button">
          Back to Home
        </button></center>
        </div>
    </div>
    
  );
};

export default Contact;
