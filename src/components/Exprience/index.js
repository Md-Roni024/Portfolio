import React from 'react'
import './index.css'

const Exprience = () => {
  return (
    <div className="exprience" id="exprience">
      <div className="container">
        <header
          className="section-header text-center wow zoomIn"
          data-wow-delay="0.1s"
        >
          <hr />
          <h2 id="title">Experience</h2>
          <hr />
        </header>
        <div className="timeline">

          <div className="timeline-item left wow slideInLeft" data-wow-delay="0.1s">
            <div className="timeline-text">
              <div className="timeline-date">Mar 2025 – Present</div>
              <h2>ImpleVista BD Ltd. | Dhaka, Bangladesh</h2>
              <ul>
                <li>Developed and maintained software solutions using Angular, Node.js, REST API, Firebase and Git.</li>
                <li>Built responsive and high-performance cross-platform applications for iOS and Web using Angular, Tailwind CSS & Ionic framework.</li>
                <li>Participated in code reviews, debugging, and software optimization efforts, resulting in a 20% increase in system search efficiency.</li>
                <li>Integrated third-party API (Google Map) and handled real-time data processing for client-driven features.</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item right wow slideInRight" data-wow-delay="0.1s">
            <div className="timeline-text">
              <div className="timeline-date">Sep 2024 – Dec 2024</div>
              <h2>BJIT Limited | Dhaka, Bangladesh</h2>
              <ul>
                <li>Learned Typescript, Angular, REST API, Git/Gerrit & Software Development Life Cycle (SDLC).</li>
                <li>Learning and utilizing technical skills.</li>
                <li>Learned scrum and agile methodology.</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item left wow slideInLeft" data-wow-delay="0.1s">
            <div className="timeline-text">
              <div className="timeline-date">April 2023 - May 2023</div>
              <h2>Industrial Attachment</h2>
              <p>
                Gained industrial knowledge like: how to gather requirements, analyze requirements, workflow design, version controlling, and product deployment procedure etc., and Flask backend with JWT authentication.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Exprience
