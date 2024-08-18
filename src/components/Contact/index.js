import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Bio } from '../../data/constants';
import React, { useState } from 'react';
import './index.css';



const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  //background: linear-gradient(100.26deg, rgba(0, 102, 255, 0.05) 42.33%, rgba(150, 0, 225, 0.05) 127.07%);
`;


const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;

// const Logo = styled.h1`
//   font-weight: 600;
//   font-size: 20px;
//   color: ${({ theme }) => theme.primary};
// `;

// const Nav = styled.nav`
//   width: 100%;
//   max-width: 800px;
//   margin-top: 0.5rem;
//   display: flex;
//   flex-direction: row;
//   gap: 2rem;
//   justify-content: center;
//   @media (max-width: 768px) {
//     flex-wrap: wrap;
//     gap: 1rem;
//     justify-content: center;
//     text-align: center;
//     font-size: 12px;
//   }
// `;

// const NavLink = styled.a`
// color: ${({ theme }) => theme.text_primary};
//   text-decoration: none;
//   font-size: 1.2rem;
//   transition: color 0.2s ease-in-out;
//   &:hover {
//     color: ${({ theme }) => theme.primary};
//   }
//   @media (max-width: 768px) {
//     font-size: 1rem;
//   }
// `;

const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.soft2};
  text-align: center;
`;

export const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
`;

function Footer() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here
  };
  const socialLinks = [
    { name: 'LinkedIn', icon: <i className="fa-brands fa-linkedin"></i>, url: 'https://www.linkedin.com/in/roni-hossain-z24/' },
    { name: 'Facebook', icon: <i className="fa-brands fa-facebook"></i>, url: 'https://www.facebook.com/roni.hossain.024/' },
    { name: 'Email', icon: <i className="fa-solid fa-envelope"></i>, url: 'mailto:roni.cse024@gmail.com' },
    { name: 'Youtube', icon: <i className="fa-brands fa-youtube"></i>, url: 'https://www.youtube.com/@ronihossain7428' },
  ];


  return (
   <>
    <div className="contact-container" id="contact-container">
      <hr/>
      <h1>Contact Info</h1>
      <hr/>
      <div className="contact-content">
        <div className="social-links">
          {socialLinks.map((link, index) => (
            <div key={index} className="social-link">
              <span className="icon">{link.icon}</span>
              <span><a href={link.url}>{link.name}</a></span>
              <span className="external-link">↗</span>
            </div>
          ))}
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullName"
            id='name'
            placeholder="Full Name"
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            id='email'
            placeholder="Email Address"
            onChange={handleChange}
          />
          <input
            type="text"
            name="subject"
            id='subject'
            placeholder="Subject"
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Message..."
            onChange={handleChange}
          ></textarea>
          <button type="submit">Send <span className="send-icon">✈</span></button>
        </form>
      </div>
    </div>
   </>
    
  );
}

export default Footer;



{/* <FooterContainer id="contact">
      <FooterWrapper>
        <Title>Contact</Title>
        {/* <Nav>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
        </Nav> */}
    //     <div>
    //       roni.cse024@gmail.com
    //     </div>
    //     <SocialMediaIcons>
    //       <SocialMediaIcon href={Bio.facebook} target="display"><FacebookIcon /></SocialMediaIcon>
    //       <SocialMediaIcon href={Bio.linkedin} target="display"><LinkedInIcon /></SocialMediaIcon>
    //       <SocialMediaIcon href={Bio.insta} target="display"><InstagramIcon /></SocialMediaIcon>
    //     </SocialMediaIcons>
    //     <Copyright>
    //       &copy; 2024 Roni Hossain. All rights reserved.
    //     </Copyright>

    //   </FooterWrapper>
    // </FooterContainer> */}