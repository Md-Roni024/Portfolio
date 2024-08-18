import React, { useState } from 'react';
import './index.css';

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

  return (
    <>
      <div className="contact-container" id="contact-container">
        <hr/>
        <h1>Contact Info</h1>
        <hr/>
        <div className="contact-content">
          <div className="social-links">
            <div className="social-link linkedin">
              <span>
              <span className="icon"><i className="fa-brands fa-linkedin"></i></span>
                <a href='https://www.linkedin.com/in/roni-hossain-z24/' target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </span>
              {/* <span className="external-link">↗</span> */}
            </div>
            <div className="social-link facebook">
              <span>
                 <span className="icon"><i className="fa-brands fa-facebook"></i></span>
                <a href='https://www.facebook.com/roni.hossain.024/' target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
              </span>
              {/* <span className="external-link">↗</span> */}
            </div>
            <div className="social-link email">
              <span>
              <span className="icon"><i className="fa-solid fa-envelope"></i></span>
                <a href='mailto:roni.cse024@gmail.com' target="_blank" rel="noopener noreferrer">
                  Email
                </a>
              </span>
              {/* <span className="external-link">↗</span> */}
            </div>
            <div className="social-link youtube">
              <span>
              <span className="icon"><i className="fa-brands fa-youtube"></i></span>
                <a href='https://www.youtube.com/@ronihossain7428' target="_blank" rel="noopener noreferrer">
                  YouTube
                </a>
              </span>
              {/* <span className="external-link">↗</span> */}
            </div>
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

      <div className="footer-copyright">
        <p>&copy; 2024 Md. Roni. All rights reserved.</p>
        <div className="footer-links">
          <a href="mailto:roni.cse024@gmail.com" className="email" target="_blank" rel="noopener noreferrer">
            <i className="fa-solid fa-envelope"></i>
          </a>
          <a href="https://www.linkedin.com/in/roni-hossain-z24/" className="linkedin" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://github.com/Md-Roni024?tab=repositories" className="github" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
