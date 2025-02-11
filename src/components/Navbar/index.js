import React, { useState } from 'react';
import { Link as LinkR } from 'react-router-dom';
import { HiAcademicCap } from "react-icons/hi2";
import { FaBars } from 'react-icons/fa';
import { useTheme } from 'styled-components';
import { Bio } from '../../data/constants.js';
import './Navbar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();

  return (
    <div className="nav">
      <div className="nav-container">
        <LinkR className="nav-logo" to="/">
          <a className="logo-content">
            <HiAcademicCap size="2.5rem" />
          </a>
        </LinkR>
        <div className="mobile-icon" onClick={() => setIsOpen(!isOpen)}>
          <FaBars />
        </div>
        <ul className="nav-items">
          <li><a className="nav-link" href="#about">About</a></li>
          <li><a className="nav-link" href="#education">Education</a></li>
          <li><a className="nav-link" href="#skills">Skills</a></li>
          <li><a className="nav-link" href="#exprience">Experience</a></li>
          <li><a className="nav-link" href="#projects">Projects</a></li>
          <li><a className="nav-link" href="#certificates">Certificates</a></li>
          <li><a className="nav-link" href="#contact-container">Contact</a></li>
        </ul>
        <div className="button-container">
          <a className="github-button" href={Bio.github} target="display">Github Profile</a>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <a className="mobile-link" href="#about" onClick={() => setIsOpen(!isOpen)}>About</a>
        <a className="mobile-link" href="#education" onClick={() => setIsOpen(!isOpen)}>Education</a>
        <a className="mobile-link" href="#skills" onClick={() => setIsOpen(!isOpen)}>Skills</a>
        <a className="mobile-link" href="#experience" onClick={() => setIsOpen(!isOpen)}>Experience</a>
        <a className="mobile-link" href="#projects" onClick={() => setIsOpen(!isOpen)}>Projects</a>
        <a className="github-button" style={{ padding: '10px 16px', background: `${theme.primary}`, color: 'white', width: 'max-content' }} href={Bio.github} target="display">Github Profile</a>
      </div>
    </div>
  );
}

export default Navbar;




