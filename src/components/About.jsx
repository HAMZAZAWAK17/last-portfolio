import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';
import '../css/About.css';
import aboutme from '../Assets/aboutme.jpg';
import cv from '../Assets/cv.pdf'; // Assurez-vous d'avoir votre CV dans le dossier Assets

const About = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = cv;
    link.download = 'Hamza_Ez-zouek_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.section 
      id="about"
      className="section about-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2 className="section-title">About Me</h2>
      
      <div className="about-content">
        <motion.div 
          className="about-image"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src={aboutme} alt="About me" />
        </motion.div>
        
        <motion.div 
          className="about-text"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3>Who am I?</h3>
          <p>
            I am a passionate web developer with over 5 years of experience in creating
            innovative and high-performance web applications. I enjoy solving complex problems
            and turning ideas into reality.
          </p>
          
          <h3>My Journey</h3>
          <p>
            After obtaining my degree in computer science, I worked in several startups
            and large companies where I developed my technical skills and understanding
            of user needs.
          </p>
          
          <h3>My Values</h3>
          <p>
            I believe in continuous learning, open communication, and teamwork.
            I always strive to deliver quality work that exceeds expectations.
          </p>
          
          <div className="personal-info">
            <div className="info-item">
              <span className="info-label">Name:</span>
              <span className="info-value">Ez-zouek Hamza</span>
            </div>
            <div className="info-item">
              <span className="info-label">Email:</span>
              <span className="info-value">ezzouekhamza2411@gmail.com</span>
            </div>
            <div className="info-item">
              <span className="info-label">Location:</span>
              <span className="info-value">Casablanca, Morocco</span>
            </div>
            <div className="info-item">
              <span className="info-label">Phone:</span>
              <span className="info-value">+212687787404</span>
            </div>
          </div>
          
          <motion.button 
            className="cv-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownloadCV}
          >
            <FaDownload /> Download CV
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;