import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaAward, FaExternalLinkAlt, FaCalendarAlt, FaTimes } from 'react-icons/fa';
import certif1 from '../Assets/certif1.jpeg';
import certif2 from '../Assets/certif2.jpeg';
import '../css/Certifications.css';

const Certifications = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const certifications = [
    {
      id: 1,
      title: 'PHP Development Certificate',
      organization: 'SoloLearn',
      date: 'November 2023',
      description: 'Comprehensive PHP programming certification covering core concepts, object-oriented programming, database integration, and web development best practices. Includes hands-on projects and real-world applications.',
      image: certif2
    },
    {
      id: 2,
      title: 'Frontend Development Bootcamp',
      organization: 'Udemy',
      date: 'January 2023',
      description: 'Intensive frontend development program focusing on modern web technologies including HTML5, CSS3, JavaScript, and React. Covers responsive design, state management, and modern development workflows.',
      image: certif1
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.3 }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.section 
      className="section certifications-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2 className="section-title">Certifications</h2>
      
      <motion.div 
        className="certifications-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {certifications.map(cert => (
          <motion.div 
            className="certification-card"
            key={cert.id}
            variants={itemVariants}
          >
            <div 
              className="cert-image"
              onClick={() => setSelectedImage(cert.image)}
              style={{ cursor: 'pointer' }}
            >
              <img src={cert.image} alt={cert.title} />
              <div className="cert-image-overlay">
                <span>Click to view</span>
              </div>
            </div>
            
            <div className="cert-content">
              <div className="cert-icon">
                <FaAward />
              </div>
              
              <h3 className="cert-title">{cert.title}</h3>
              <h4 className="cert-organization">{cert.organization}</h4>
              
              <div className="cert-date">
                <FaCalendarAlt /> {cert.date}
              </div>
              
              <p className="cert-description">{cert.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="cert-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div 
              className="cert-modal"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={e => e.stopPropagation()}
            >
              <motion.button
                className="cert-modal-close"
                onClick={() => setSelectedImage(null)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaTimes />
              </motion.button>
              <img src={selectedImage} alt="Certificate" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Certifications;