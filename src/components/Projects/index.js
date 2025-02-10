import React from 'react'
import { useState } from 'react'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'
import './index.css'


const Projects = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    return (
        <div className="container" id = "projects">
            <div className="wrapper">
                <hr/>
                  <div className="title-container">
                      <h2 className="title">Projects</h2>
                  </div>
                <hr/>
                <div id="desc">
                  I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
                </div>

                <div className="toggle-button-group">
                <div className={`toggle-button ${activeCategory === "All" ? "active" : ""}`} onClick={() => setActiveCategory("All")} >
                    All
                </div>
                <div className="divider"></div>

                <div className={`toggle-button ${activeCategory === "web app" ? "active" : ""}`} onClick={() => setActiveCategory("web app")} >
                    Web
                </div>
                <div className="divider"></div>

                <div className={`toggle-button ${activeCategory === "android app" ? "active" : ""}`} onClick={() => setActiveCategory("android app")} >
                    Android
                </div>
                <div className="divider"></div>

                <div  className={`toggle-button ${activeCategory === "machine learning" ? "active" : ""}`} onClick={() => setActiveCategory("machine learning")}>
                    ML
                </div>
                </div>

                <div className="card-container">
                    {projects
                        .filter(project => activeCategory === "All" || project.category === activeCategory)
                        .map((project, index) => (
                            <ProjectCard key={index} project={project} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Projects;