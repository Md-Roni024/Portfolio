import React from 'react';
import './ProjectCards.css';

const ProjectCards = ({ project }) => {
    const handleButtonClick = (projectUrl) => {
        window.open(projectUrl, '_blank');
    };
    
    return (
        <div className="card">
            <img className="image" src={project.image} alt="Project" />
            <div className="tags">
                {project.tags?.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                ))}
            </div>
            <div className="details">
                <div className="title">{project.title}</div>
                <div className="date">{project.date}</div>
                <div className="description">{project.description}</div>
            </div>
            <div className="members">
                {project.member?.map((member, index) => (
                    <img key={index} className="avatar" src={member.img} alt="Member" />
                ))}
            </div>
            <button className="button" onClick={() => handleButtonClick(project.github)}>Open Project</button>
        </div>
    );
};

export default ProjectCards;
