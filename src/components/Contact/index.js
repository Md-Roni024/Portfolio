import React, { useState } from 'react';
import { Bio } from '../../data/constants'
import './index.css';

function Footer() {
  return (
    <>
      <div className="contact-container" id="contact-container">
        <h1>Contact Info</h1>
        <div className="contact-content">
          <div className="social-links">
            <div className="social-link linkedin">
              <span>
              <span className="icon"><i className="fa-brands fa-linkedin"></i></span>
                <a href={Bio.linkedin} target="_blank">
                  LinkedIn
                </a>
              </span>
            </div>
            <div className="social-link facebook">
              <span>
                 <span className="icon"><i className="fa-brands fa-facebook"></i></span>
                <a href={Bio.facebook} target="_blank" >
                  Facebook
                </a>
              </span>
            </div>
            <div className="social-link email">
              <span>
              <span className="icon"><i className="fa-solid fa-envelope"></i></span>
              <a href={`mailto:${Bio.email}`} target="_blank">
                  Email
                </a>
              </span>
            </div>
            <div className="social-link youtube">
              <span>
              <span className="icon"><i className="fa-brands fa-youtube"></i></span>
                <a href={Bio.youtube} target="_blank">
                  YouTube
                </a>
              </span>
            </div>
          </div>
          <form className="contact-form">
            <input
              type="text"
              name="fullName"
              id='name'
              placeholder="Full Name"
            />
            <input
              type="email"
              name="email"
              id='email'
              placeholder="Email Address"
            />
            <input
              type="text"
              name="subject"
              id='subject'
              placeholder="Subject"
            />
            <textarea
              name="message"
              placeholder="Message..."
            ></textarea>
            <button type="submit">Send <span className="send-icon">✈</span></button>
          </form>
        </div>
      </div>

      <div className="footer-copyright">
        <p>&copy; 2024 Md. Roni. All rights reserved.</p>
        <div className="footer-links">
          <a href={`mailto:${Bio.email}`} className="email" target="_blank">
            <i className="fa-solid fa-envelope"></i>
          </a>
          <a href={Bio.linkedin} className="linkedin" target="_blank">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href={Bio.github} className="github" target="_blank">
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
