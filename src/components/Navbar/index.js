// import React, { useState } from 'react'
// import { Link as LinkR } from 'react-router-dom';
// import styled from 'styled-components'
// import { HiAcademicCap } from "react-icons/hi2";
// import { FaBars } from 'react-icons/fa';
// import { useTheme } from 'styled-components';
// import {Bio} from '../../data/constants.js'

// const Nav = styled.div`
//     background-color: ${({theme}) => theme.card_light};
//     height: 80px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     font-size: 1rem;
//     position: sticky;
//     top: 0;
//     z-index: 10;
// `;

// const NavContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   height: 60px;
//   z-index: 1;
//   width: 100%;
//   padding: 0 24px;
//   max-width: 1200px;
// `;

// const NavLogo = styled(LinkR)`
//     width: 100%;    
//     padding: 0 6px;
//     display: flex;
//     justify-content: center;
//     cursor:pointer;
//     align-items: center;
//     text-decoration: none;
//     color: ${({ theme }) => theme.text_primary};
// `;

// const MobileIcon = styled.div`
//   display: none;
//   @media screen and (max-width: 768px) {
//     display: block;
//     position: absolute;
//     top: 0;
//     right: 0;
//     transform: translate(-100%, 60%);
//     font-size: 1.5rem;
//     cursor: pointer;
//     color: ${({ theme }) => theme.text_primary};
//   }
// `
// const MobileMenu = styled.div`
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     gap: 16px;
//     position: absolute;
//     top: 80px;
//     right: 0;
//     width: 100%;
//     padding: 12px 40px 24px 40px;
//     background: ${({ theme }) => theme.card_light+99};
//     transition: all 0.6s ease-in-out;
//     transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-100%)')};
//     border-radius: 0 0 20px 20px;
//     box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
//     opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
//     z-index: ${({ isOpen }) => (isOpen ? '1000' : '-1000')};

// `



// const MobileLink = styled.a`
//   color: ${({ theme }) => theme.text_primary};
//   font-weight: 500;
//   cursor: pointer;
//   transition: all 0.2s ease-in-out;
//   text-decoration: none;
//   :hover {
//     color: ${({ theme }) => theme.primary};
//   }

//   &.active {
//     border-bottom: 2px solid ${({ theme }) => theme.primary};
//   }
// `;

// const NavItems = styled.ul`
//     width: 100%;
//     display: flex;
//     align-items: center;
//     justify-content:center;
//     gap: 32px;
//     margin-left:100px;
//     padding: 0 6px;
//     list-style: none;
// `;
// const NavLink = styled.a`
//     color: ${({ theme }) => theme.white};
//     font-weight: 500;
//     cursor: pointer;
//     transition: all 0.2s ease-in-out;
//     text-decoration: none;
//     &:hover {
//       color: ${({ theme }) => theme.primary};
//     }
// `;
// const GitHubButton = styled.a`
//   border: 1.8px solid ${({ theme }) => theme.text_primary};
//   justify-content: center;
//   display: flex;
//   align-items: center;
//   height: 70%;
//   border-radius: 20px;
//   color: ${({ theme }) => theme.primary};
//   cursor: pointer;
//   padding: 0 20px;
//   font-weight:bold;
//   text-decoration: none;
//   font-size: 16px;
//   &:hover {
//       background: ${({ theme }) => theme.primary};
//       color: ${({ theme }) => theme.white};     
//   }
// `;

// const ButtonContainer = styled.div`
//   width: 80%;  
//   height: 100%;
//   display: flex;
//   justify-content: center;
//   margin-left:100px;
//   align-items: center;
//   padding: 0 6px;
// `;

// const Span = styled.div`
// padding:0 4px;
// font-weight:bold;
// font-size:18px;
// `

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false)
//   const theme = useTheme()
//   return (
//     <Nav>
//       <NavContainer>
//         <NavLogo href='/'>
//           <a style={{display:'flex',alignItems:'center',color:'white',justifyContent:'center',cursor: 'pointer'}}>
//             <HiAcademicCap size="2.5rem" /><Span>Portfolio</Span>
//           </a>
//         </NavLogo>
//         <MobileIcon>
//           <FaBars 
//           onClick={() => {
//             setIsOpen(!isOpen)
//           }} 
//           />
//         </MobileIcon>
//         <NavItems>
//           <NavLink href='#about'>About</NavLink>
//           <NavLink href='#education'>Education</NavLink>
//           <NavLink href='#skills'>Skills</NavLink>
//           <NavLink href='#exprience'>Exprience</NavLink>
//           <NavLink href='#projects'>Projects</NavLink>
//           <NavLink href='#certificates'>Certificates</NavLink>
//           <NavLink href='#contact-container'>Contact</NavLink>
//         </NavItems>
//         <ButtonContainer>
//           <GitHubButton href={Bio.github} target="display">Github Profile</GitHubButton>
//         </ButtonContainer>
//       </NavContainer>
//       {isOpen && <MobileMenu isOpen={isOpen}>
//           <MobileLink href="#about" onClick={()=>{
//             setIsOpen(!isOpen)
//           }}>About</MobileLink>

//           <MobileLink href="#education" onClick={()=>{
//             setIsOpen(!isOpen)
//           }}>Education</MobileLink>

//           <MobileLink href="#skills" onClick={()=>{
//             setIsOpen(!isOpen)
//           }}>Skills</MobileLink>

//           <MobileLink href="#exprience" onClick={()=>{
//             setIsOpen(!isOpen)
//           }}>Exprience</MobileLink>

//           <MobileLink href="#projects" onClick={()=>{
//             setIsOpen(!isOpen)
//           }}>Projects</MobileLink>
//            <GitHubButton style={{padding: '10px 16px',background: `${theme.primary}`, color: 'white',width: 'max-content'}} href={Bio.github} target="display">Github Profile</GitHubButton>
//       </MobileMenu>

//       }
//   </Nav>
//   )
// }

// export default Navbar



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




