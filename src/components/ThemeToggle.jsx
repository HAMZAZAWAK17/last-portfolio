import React from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';
import '../css/ThemeToggle.css';

const ThemeToggle = ({ isDarkMode, toggleTheme }) => {
  return (
    <motion.button 
      className="theme-toggle"
      onClick={toggleTheme}
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1 }}
    >
      {isDarkMode ? <FaSun className="sun-icon" /> : <FaMoon className="moon-icon" />}
    </motion.button>
  );
};

export default ThemeToggle;