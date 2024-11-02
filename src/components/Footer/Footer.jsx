// src/components/Footer/Footer.jsx
import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer({ links = [], text = "© 2024 Bruno Da Silva. Todos los derechos reservados." }) {
  const iconMap = {
    LinkedIn: faLinkedin,
    GitHub: faGithub,
    Twitter: faTwitter
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">{text}</p>
        <div className="footer-links">
          {links.map((link, index) => (
            <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="footer-link">
              <FontAwesomeIcon icon={iconMap[link.name]} className="footer-icon" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
