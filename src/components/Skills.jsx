import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaDocker, FaGithub, FaJava, FaPhp } from 'react-icons/fa';
import { DiMongodb, DiMysql } from 'react-icons/di';
import { SiBootstrap, SiTailwindcss, SiExpress, SiLaravel } from 'react-icons/si';
import '../css/Skills.css';

const Skills = () => {
  const skills = {
    frontend: [
      { name: 'HTML5', icon: <FaHtml5 color='#E34F26' />, level: 90 },
      { name: 'CSS3', icon: <FaCss3Alt color='#1572B6' />, level: 85 },
      { name: 'JavaScript', icon: <FaJs color='#F7DF1E' />, level: 88 },
      { name: 'React', icon: <FaReact color='#61DAFB' />, level: 85 },
      { name: 'Bootstrap', icon: <SiBootstrap color='#7952B3' />, level: 80 },
      { name: 'Tailwind CSS', icon: <SiTailwindcss color='#38B2AC' />, level: 75 },
    ],
    backend: [
      { name: 'Node.js', icon: <FaNodeJs color='#339933' />, level: 80 },
      { name: 'Java', icon: <FaJava color='#007396' />, level: 80 },
      { name: 'PHP', icon: <FaPhp color='#777BB4' />, level: 70 },
      { name: 'Laravel', icon: <SiLaravel color='#FF2D20' />, level: 75 },
      { name: 'Express.js', icon: <SiExpress color='#000000' />, level: 70 },
    ],
    databases: [
      { name: 'MongoDB', icon: <DiMongodb color='#47A248' />, level: 75 },
      { name: 'MySQL', icon: <DiMysql color='#4479A1' />, level: 80 },
    ],
    others: [
      { name: 'Git', icon: <FaGitAlt color='#F05032' />, level: 82 },
      { name: 'Github', icon: <FaGithub color='#181717' />, level: 80 },
      { name: 'Docker', icon: <FaDocker color='#2496ED' />, level: 70 },
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <motion.section className="skills-section" initial="hidden" animate="visible">
      <h2 className="section-title">Mes Compétences</h2>
      <div className="skills-content">
        {Object.entries(skills).map(([category, skills]) => (
          <motion.div key={category} className="skills-category" variants={containerVariants}>
            <h3 className="category-title">{category.toUpperCase()}</h3>
            {skills.map((skill, index) => (
              <motion.div key={index} className="skill-item" variants={itemVariants}>
                <div className="skill-info">
                  <div className="skill-icon">{skill.icon}</div>
                  <h4 className="skill-name">{skill.name}</h4>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
