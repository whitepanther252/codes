// Header.js
import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <nav className={`navbar ${isOpen ? 'open' : ''}`}>
        <div className="container">
          <div className="navbar-brand">
            <a href="/">Your Logo</a>
            <button className="navbar-toggler" onClick={toggleNavbar}>
              <div className={`hamburger ${isOpen ? 'open' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
          </div>
          <ul className={`navbar-menu ${isOpen ? 'open' : ''}`}>
            <li className="navbar-item">
              <a href="/">Home</a>
            </li>
            <li className="navbar-item">
              <a href="/about">About</a>
            </li>
            <li className="navbar-item">
              <a href="/services">Services</a>
            </li>
            <li className="navbar-item">
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
