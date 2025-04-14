import React, { useState } from 'react';
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { MdSend } from 'react-icons/md';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'react-hot-toast';
import '../css/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message
      };

      await emailjs.send(
        'service_sof7aen',
        'template_6hpc75c',
        templateParams,
        'exI2rOT2VmOWzsFl8'
      );

      toast.success('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('An error occurred while sending the message.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Suppression de la variable socialLinks non utilisée
  // ou utilisation alternative commentée ci-dessous
  
  /* 
  Si vous souhaitez utiliser socialLinks, vous pouvez ajouter ce bloc dans 
  la section "Let's Connect" du composant:
  
  <div className="social-links">
    {socialLinks.map((link) => (
      <a 
        href={link.url} 
        key={link.label}
        className={`social-icon ${link.hoverColor}`}
        target="_blank" 
        rel="noopener noreferrer"
        aria-label={link.label}
      >
        {link.icon}
      </a>
    ))}
  </div>
  */

  return (
    <motion.section 
      id="Contact" 
      className="contact-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#333',
            color: '#fff',
          },
        }}
      />
      
      <div className="contact-container">
        <motion.h2 
          className="section-title"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="title-highlight">Contact Me</span>
        </motion.h2>
        
        <div className="contact-content">
          <motion.div 
            className="contact-form-container"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="card form-card">
              <h3 className="card-title">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Your name"
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="your-email@example.com"
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Your message here..."
                    rows="5"
                    required 
                  />
                </div>
                
                <button 
                  type="submit" 
                  className="submit-button"
                  disabled={isSubmitting}
                >
                  <MdSend className="button-icon" /> 
                  <span>{isSubmitting ? 'Sending...' : 'Send'}</span>
                </button>
              </form>
            </div>
          </motion.div>
          
          <motion.div 
            className="contact-info-container"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="card info-card">
              <h3 className="card-title">Let's Connect</h3>
              
              <div className="contact-info">
                <p className="info-text">
                  Feel free to contact me for any project or collaboration opportunity. 
                  I would be happy to discuss with you!
                </p>
                
                <div className="contact-method">
                  <FaEnvelope className="contact-icon" />
                  <a href="mailto:your-email@example.com" className="contact-link">
                    ezzouekhamza2411@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;