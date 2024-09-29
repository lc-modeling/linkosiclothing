import React, { useState, useEffect } from 'react';
import './header.css';
import { FiMenu, FiHome, FiUser, FiShoppingBag, FiPhone, FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      if (window.scrollY > 50) {
        header.classList.add('is-scrolling');
      } else {
        header.classList.remove('is-scrolling');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header>
      <div className="container">
        <h2 className="protest-guerrilla-regular">
          <span>LINKOSI</span> CLOTHING
        </h2>

        {/* Desktop Navigation with Icons */}
        <nav className="desktop-nav">
          <Link to="/"><FiHome className="icon" /></Link>
          <Link to="/women"><FiUser className="icon" /></Link>
          <Link to="/men"><FiShoppingBag className="icon" /></Link>
          <Link to="/kids"><FiShoppingBag className="icon" /></Link>
          <Link to="/contact"><FiPhone className="icon" /></Link>
          <Link to="/signin"><FiLogIn className="icon" /></Link>
        </nav>

        {/* Hamburger Menu Icon for Mobile */}
        <div className="hamburger-container" onClick={toggleMenu}>
          <FiMenu className={`hamburger-icon ${menuOpen ? 'open' : ''}`} />
        </div>
      </div>

      {/* Mobile Navigation with Icons and Text */}
      <nav className={`mobile-nav ${menuOpen ? 'is-active' : ''}`}>
        <button className="close-menu" onClick={closeMenu}>&times;</button>
        <Link to="/" onClick={closeMenu}><FiHome className="icon" /> Home</Link>
        <Link to="/women" onClick={closeMenu}><FiUser className="icon" /> Women</Link>
        <Link to="/men" onClick={closeMenu}><FiShoppingBag className="icon" /> Men</Link>
        <Link to="/kids" onClick={closeMenu}><FiShoppingBag className="icon" /> Kids</Link>
        <Link to="/contact" onClick={closeMenu}><FiPhone className="icon" /> Contact us</Link>
        <Link to="/signin" onClick={closeMenu}><FiLogIn className="icon" /> Sign In</Link>
      </nav>
    </header>
  );
};

export default Header;
