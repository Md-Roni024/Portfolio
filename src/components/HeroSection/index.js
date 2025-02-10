import React from 'react'
import { Bio } from '../../data/constants.js'
import Typewriter from 'typewriter-effect';
import Profile from '../../images/profile_bjit.jpg'
import './Hero.css'

const Hero = () => {
  return (
    <div id="about">
      <div className="hero-container">
        <div className="hero-inner-container">
          <div className="hero-left-container">
            <div className="title">Hi, I am <br /> {Bio.name}</div>
            <div className="text-loop">
              I am a
              <span className="span">
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </div>
            <div className="sub-title">{Bio.description}</div>
            <a href={Bio.resume} target="display" className="resume-button">Check Resume</a>
          </div>
          <div className="hero-right-container">
            <img src={Profile} alt="Profile" className="img" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
