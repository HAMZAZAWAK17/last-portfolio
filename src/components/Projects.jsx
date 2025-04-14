import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import '../css/Projects.css';
import prjt1 from '../Assets/prjt1.png';
import prjt2 from '../Assets/prjt2.png';
import prjt3 from '../Assets/prjt3.png';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Weather App',
      image: prjt2,
      description: 'Interactive weather application providing real-time forecasts, location-based weather data, and dynamic weather visualizations. Features include temperature tracking, humidity levels, and wind conditions.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'WeatherAPI', 'Bootstrap'],
      github: 'https://github.com/HAMZAZAWAK17/Weather-app',
    },
    {
      id: 2,
      title: 'Adoption Center',
      image: prjt3,
      description: 'Full-stack pet adoption platform connecting animals with loving homes. Features include pet profiles, adoption applications, user authentication, and an admin dashboard for managing listings and applications.',
      technologies: ['React.js', 'Tailwind CSS', 'Laravel', 'MySQL'],
      github: 'https://github.com/HAMZAZAWAK17/PFE',
    },
    {
      id: 3,
      title: 'Student Management System',
      image: prjt1,
      description: 'Desktop application for educational institutions to manage student records, track academic performance, and handle attendance. Includes grade calculation, report generation, and a user-friendly interface.',
      technologies: ['Java', 'Java Swing', 'MySQL'],
      github: 'https://github.com/HAMZAZAWAK17/Student-management',
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0, opacity: 1, transition: { duration: 0.5 }
    }
  };

  return (
    <motion.section 
      id="Projects"
      className="section projects-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2 className="section-title">Featured Projects</h2>
      <motion.div className="projects-grid" variants={containerVariants} initial="hidden" animate="visible">
        {projects.map(project => (
          <motion.div className="project-card" key={project.id} variants={itemVariants}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <div className="project-overlay">
                <motion.a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="github-btn"
                  whileHover={{ scale: 1.1 }} 
                  whileTap={{ scale: 0.9 }}
                >
                  <FaGithub />
                </motion.a>
              </div>
            </div>
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <div className="view-all-projects">
        <motion.a 
          href="https://github.com/HAMZAZAWAK17" 
          target="_blank" 
          rel="noopener noreferrer"
          className="view-all-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View All Projects
        </motion.a>
      </div>
    </motion.section>
  );
};

export default Projects;
