/**
 * Navbar component for Science Sue website
 * Responsive navigation with mobile hamburger menu
 */

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

/**
 * Navbar component with responsive design
 * @returns {JSX.Element} Navigation bar with logo and menu items
 */
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  /**
   * Toggle mobile menu visibility
   */
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  /**
   * Check if current path is active
   * @param {string} path - Path to check
   * @returns {boolean} Whether the path is currently active
   */
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo/Brand */}
        <Link to="/" className="navbar-brand">
          <span className="brand-text">Science Sue</span>
          <span className="brand-subtitle">Educational Excellence</span>
        </Link>

        {/* Desktop Navigation Menu */}
        <div className={`navbar-menu ${isMenuOpen ? 'navbar-menu-active' : ''}`}>
          <Link 
            to="/" 
            className={`navbar-item ${isActive('/') ? 'navbar-item-active' : ''}`}
          >
            Home
          </Link>
          <Link 
            to="/reviews" 
            className={`navbar-item ${isActive('/reviews') ? 'navbar-item-active' : ''}`}
          >
            Reviews
          </Link>
          <Link 
            to="/contact" 
            className={`navbar-item ${isActive('/contact') ? 'navbar-item-active' : ''}`}
          >
            Contact
          </Link>
          <Link 
            to="/about" 
            className={`navbar-item ${isActive('/about') ? 'navbar-item-active' : ''}`}
          >
            About
          </Link>
        </div>

        {/* Mobile Hamburger Menu */}
        <button 
          className={`navbar-burger ${isMenuOpen ? 'navbar-burger-active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar; 