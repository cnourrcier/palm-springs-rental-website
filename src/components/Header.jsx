import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <nav className="container">
        <div className="header-content">
          <div className="logo">
            <Link to="/">Clark Gable Estate</Link>
          </div>
          <div className="nav-links">
            <Link to="/about">About</Link>
            <Link to="/accommodations">Accommodations</Link>
            <Link to="/events">Events</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/location">Location</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="mobile-menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        {isMenuOpen && (
          <div className="mobile-menu">
            <Link to="/about">About</Link>
            <Link to="/accommodations">Accommodations</Link>
            <Link to="/events">Events</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/location">Location</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/press">Press</Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;