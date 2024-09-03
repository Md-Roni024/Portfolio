import React from 'react';
import { skills } from '../../data/constants';
import './skills.css';

const Skills = () => {
  return (
    <div id="skills">
      <div className="skills-wrapper">
        <hr/>
          <h2 className="title">Skills</h2>
        <hr/>
        <div id="desc">
          Here are some of my skills on which I have been working on past 2 years.
        </div>
        <div className="skills-container">
          {skills.map((skill) => (
            <div className="skill" key={skill.title}>
              <h2 className="skill-title">{skill.title}</h2>
              <div className="skill-list">
                {skill.skills.map((item) => (
                  <div className="skill-item" key={item.name}>
                    <img src={item.image} alt={item.name} className="skill-image" />
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
