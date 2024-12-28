// src/components/Navbar/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar({ links = [], logoText = "MiEcommerce"}) {
  const [isOpen, setIsOpen] = useState(false);

  

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="navbar">
      <div className="navbar-logo">
        <Link to="/">{logoText}</Link>
      </div>
      <nav className={`navbar-links ${isOpen ? 'active' : ''}`}>
        {links.map((link, index) => (
          <Link key={index} to={link.path} className="navbar-link" onClick={() => setIsOpen(false)}>
            {link.name}
          </Link>
        ))}
      </nav>
      
      <div className="navbar-toggle" onClick={toggleMenu}>
      
        &#9776;
      </div>
    </header>
  );
}

export default Navbar;
