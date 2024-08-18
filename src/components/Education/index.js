import React from 'react'
import styled from 'styled-components'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { education, experiences } from '../../data/constants';
import EducationCard from '../Cards/EducationCard';

import './index.css'

// const Container = styled.div`
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     position: relative;
//     z-index: 1;
//     align-items: center;
//     padding: 0px 0px 60px 0px;
// `;

// const Wrapper = styled.div`
//     position: relative;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     flex-direction: column;
//     width: 100%;
//     max-width: 1350px;
//     padding: 40px 0px 0px 0px;
//     gap: 12px;
// `;

// const Title = styled.div`
// font-size: 42px;
// text-align: center;
// font-weight: 600;
// margin-top: 20px;
//   color: ${({ theme }) => theme.text_primary};
// `;

// const Desc = styled.div`
//     font-size: 18px;
//     text-align: center;
//     max-width: 600px;
//     color: ${({ theme }) => theme.white};
// `;

// const TimelineSection = styled.div`
//     width: 100%;
//     max-width: 1000px;
//     margin-top: 10px;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     gap: 12px;
// `;



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
                <div class="timeline-date">2019 - 2024</div>
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
                <div class="timeline-date">2015 - 2018</div>
                <h2>Hajigonj Model Govt College</h2>
                <h4>Higher Secondary Certificate(HSC)</h4>
                <h4></h4>
                <p>  I have completed my Higher Secondary from this college |
                  Courses : Physics, Chemistry, Biology , Higher Mathematics & Information Communication & Technology(ICT)</p>
              </div>
            </div>
            <div class="timeline-item left wow slideInLeft" data-wow-delay="0.1s">
              <div class="timeline-text">
                <div class="timeline-date">2010 - 2015</div>
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