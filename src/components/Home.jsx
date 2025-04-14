import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase, FaEllipsisH } from 'react-icons/fa';
import { SiExpress, SiMysql, SiMongodb, SiLaravel } from 'react-icons/si';
import homepic from '../Assets/homepic.jpg';
import '../css/Home.css';

const Home = () => {
  // Animation variants pour les icônes
  const iconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: i => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.8 + i * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }
    }),
    hover: {
      scale: 1.2,
      rotate: 15,
      transition: { duration: 0.3 }
    }
  };

  // Variante spéciale pour l'icône "etc..."
  const etcVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: i => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.8 + i * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }
    }),
    hover: {
      scale: 1.2,
      y: [0, -5, 0, -5, 0],
      transition: { 
        y: {
          duration: 1,
          repeat: Infinity,
          repeatType: "loop"
        },
        scale: { duration: 0.3 }
      }
    }
  };

  // Liste des icônes de technologies
  const techIcons = [
    { icon: <FaReact />, name: "React", color: "#61DAFB" },
    { icon: <SiLaravel />, name: "Laravel", color: "#FF2D20" },
    { icon: <SiMysql />, name: "MySQL", color: "#4479A1" },
    { icon: <FaNodeJs />, name: "Node.js", color: "#339933" },
    { icon: <SiExpress />, name: "Express.js", color: "#000000" },
    { icon: <SiMongodb />, name: "MongoDB", color: "#47A248" }
  ];

  return (
    <section className="home-section">
      <div className="home-content">
        <motion.h1 
          className="greeting"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hi, I'm <span className="highlight">Ez-zouek Hamza</span>
        </motion.h1>
        
        <motion.h2 
          className="profession"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Full Stack Web Developer
        </motion.h2>
        
        <motion.p 
          className="description"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          I create innovative web experiences and digital solutions that combine
          refined design with advanced functionality.
        </motion.p>
        
        <motion.div 
          className="tech-icons-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {techIcons.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="tech-icon"
              custom={index}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              variants={iconVariants}
              style={{ color: tech.color }}
              title={tech.name}
            >
              {tech.icon}
              <span className="tech-name">{tech.name}</span>
            </motion.div>
          ))}
          
          {/* Icône "etc..." */}
          <motion.div
            className="tech-icon etc-icon"
            custom={techIcons.length}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            variants={etcVariants}
            title="And more..."
          >
            <FaEllipsisH />
            <span className="tech-name">And more...</span>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        className="home-image"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <motion.div 
          className="image-wrapper"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        >
          <img src={homepic} alt="Portrait" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;