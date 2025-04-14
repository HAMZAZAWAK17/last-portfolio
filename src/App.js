import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaUser, FaCode, FaBriefcase, FaProjectDiagram, FaCertificate, FaEnvelope, FaBars, FaTimes, FaGithub, FaLinkedin, FaInstagram, FaLaptopCode } from 'react-icons/fa';
import ThemeToggle from './components/ThemeToggle';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDark);
  }, []);

  useEffect(() => {
    document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
  }, [isDarkMode]);

  // Logo toggling effect every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setShowLogo(prev => !prev);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const sections = [
    { id: 'home', name: 'Accueil', icon: <FaHome /> },
    { id: 'about', name: 'À propos', icon: <FaUser /> },
    { id: 'skills', name: 'Compétences', icon: <FaCode /> },
    { id: 'experience', name: 'Expérience', icon: <FaBriefcase /> },
    { id: 'projects', name: 'Projets', icon: <FaProjectDiagram /> },
    { id: 'certifications', name: 'Certifications', icon: <FaCertificate /> },
    { id: 'contact', name: 'Contact', icon: <FaEnvelope /> },
  ];

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'skills':
        return <Skills />;
      case 'experience':
        return <Experience />;
      case 'projects':
        return <Projects />;
      case 'certifications':
        return <Certifications />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className={`app ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
      {/* Header with mobile menu toggle */}
      <header className="header">
        <motion.div 
          className="logo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <AnimatePresence mode="wait">
            {showLogo ? (
              <motion.div
                key="text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="logo-text"
              >
                <h1>Hamza</h1>
              </motion.div>
            ) : (
              <motion.div
                key="icon"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="logo-icon"
              >
                <FaLaptopCode />
                <span>Hamza</span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        
        <div className="header-controls">
          <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
          <button className="menu-toggle" onClick={toggleSidebar}>
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </header>

      {/* Sidebar Navigation */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.aside 
            className="sidebar"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <nav>
              <ul>
                {sections.map(section => (
                  <motion.li 
                    key={section.id}
                    whileHover={{ scale: 1.05, x: 10 }}
                    className={activeSection === section.id ? 'active' : ''}
                  >
                    <button
                      onClick={() => {
                        setActiveSection(section.id);
                        closeSidebar();
                      }}
                    >
                      <span className="nav-icon">{section.icon}</span>
                      <span className="nav-text">{section.name}</span>
                    </button>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Desktop Navigation */}
      <nav className="desktop-nav">
        <ul>
          {sections.map(section => (
            <motion.li 
              key={section.id}
              whileHover={{ scale: 1.1 }}
              className={activeSection === section.id ? 'active' : ''}
            >
              <button
                onClick={() => setActiveSection(section.id)}
              >
                <span className="nav-icon">{section.icon}</span>
                <span className="nav-text">{section.name}</span>
              </button>
            </motion.li>
          ))}
        </ul>
      </nav>

      {/* Main Content */}
      <motion.main 
        className="main-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        key={activeSection}
      >
        {renderSection()}
      </motion.main>

      {/* Footer */}
      <footer className="footer">
        <div className="social-links">
          <a href="https://github.com/HAMZAZAWAK17" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/hamza-ezzouek-a99aa327a/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/zouakachev.1.7/#" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Hamza. Tous droits réservés.</p>
      </footer>
    </div>
  );
}

export default App;