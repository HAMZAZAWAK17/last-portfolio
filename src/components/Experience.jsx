import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import '../css/Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Web Development Internship in a Professional Environment',
      company: 'Faculty of Legal, Economic, and Social Sciences',
      period: 'November 2024 - March 2025',
      location: 'Casablanca, Morocco',
      description: [
        'Collaborated with a team to develop a laboratory website for studies in Law, Economics, and Business Management, focusing on seamless user experience and robust functionality.'
      ]
    },
    {
      title: 'Professional Bachelor\'s Degree in Software Engineering',
      company: 'ESTEM',
      period: 'October 2024 - June 2025',
      location: 'Casablanca, Morocco',
      description: [
        'Acquired advanced skills in software engineering, focusing on web development, databases, and software architecture.'
      ]
    },
    {
      title: 'Final Year Project Internship',
      company: 'All Formations',
      period: 'March 2024 - May 2024',
      location: 'Île-de-France, France',
      description: [
        'Developed a web application for pet adoption, integrating user-friendly interfaces and real-time database management.'
      ]
    },
    {
      title: 'Associate Degree in Digital Development, Web Fullstack Option',
      company: 'OFPPT',
      period: 'September 2023 - June 2024',
      location: 'Casablanca, Morocco',
      description: [
        'Completed a full-stack development internship, focusing on front-end and back-end technologies to create dynamic web applications.'
      ]
    },
    {
      title: 'Professional Certificate in Digital Development',
      company: 'OFPPT',
      period: 'September 2022 - June 2023',
      location: 'Casablanca, Morocco',
      description: [
        'Gained foundational skills in digital development, including programming, web technologies, and software engineering principles.'
      ]
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.section 
      className="section experience-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2 className="section-title">Professional Experience</h2>
      <motion.div 
        className="timeline"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {experiences.map((exp, index) => (
          <motion.div 
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            key={index}
            variants={itemVariants}
          >
            <div className="timeline-content card">
              <div className="job-title">
                <h3>{exp.title}</h3>
                <span className="company">{exp.company}</span>
              </div>
              <div className="job-info">
                <span className="info-item">
                  <FaCalendarAlt /> {exp.period}
                </span>
                <span className="info-item">
                  <FaMapMarkerAlt /> {exp.location}
                </span>
              </div>
              <ul className="job-description">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Experience;
