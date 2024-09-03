import React from 'react'
import './index.css'

const Education= () => {
    return (
        <div class="education" id="education">
        <div class="container">
          <header
            class="section-header text-center wow zoomIn"
            data-wow-delay="0.1s"
          >
            <hr/>
            <h2 id="title">Education</h2>
            <hr/>
          </header>
          <div class="timeline">
            <div class="timeline-item left wow slideInLeft" data-wow-delay="0.1s">
              <div class="timeline-text">
                <div class="timeline-date">January 2019 - March 2024</div>
                <h2>Bangabandhu Sheikh Mujibur Rahman Science & Technology University</h2>
                <h4>Bachelor Of Engineering(Hons.)-Computer Science</h4>
                <p>
                  I have completed my B.Sc in Engineering from BSMRSTU |
                  Courses: Data Structure, Algorithm, Compiler Design, Operating System, DBMS, Computer Networks | Language: C/C++, Java, Python, Sql
                </p>
              </div>
            </div>
            <div class="timeline-item right wow slideInRight" data-wow-delay="0.1s">
              <div class="timeline-text">
                <div class="timeline-date">June 2015 - January 2018</div>
                <h2>Hajigonj Model Govt College</h2>
                <h4>Higher Secondary Certificate(HSC)</h4>
                <h4></h4>
                <p>  I have completed my Higher Secondary from this college |
                  Courses : Physics, Chemistry, Biology , Higher Mathematics & Information Communication & Technology(ICT)</p>
              </div>
            </div>
            <div class="timeline-item left wow slideInLeft" data-wow-delay="0.1s">
              <div class="timeline-text">
                <div class="timeline-date">January 2010 - March 2015</div>
                <h2>Maisaid P.M.A.G High School</h2>
                <h4>Secondary School Certificate(SSC)</h4>
                <p>
                  I have completed my Secondary(SSC) from this school.
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    )
}

export default Education