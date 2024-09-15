import React from 'react'
import styled from 'styled-components'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { exprience, experiences } from '../../data/constants';

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



const Exprience = () => {
    return (
        <div class="exprience" id="exprience">
        <div class="container">
          <header
            class="section-header text-center wow zoomIn"
            data-wow-delay="0.1s"
          >
            <hr/>
            <h2 id="title">Exprience</h2>
            <hr/>
          </header>
          <div class="timeline">
            <div class="timeline-item left wow slideInLeft" data-wow-delay="0.1s">
              <div class="timeline-text">
                <div class="timeline-date">April 2023 - May 2023</div>
                <h2>Industrial Attachment</h2>
                <p>
                   Gain Industrial knowledge like: How to gather requiements, analysis requirements, workflow design, version controlling and product depolyment prcedure etc. and flask backend with Jwt authentication.
                </p>
              </div>
            </div>
            {/* <div class="timeline-item right wow slideInRight" data-wow-delay="0.1s">
              <div class="timeline-text">
                <div class="timeline-date">April 2023 - May 2023</div>
                <h2>Industrial Attachment</h2>
                <h4>Higher Secondary</h4>
                <h4></h4>
                <p> Gain Industrial knowledge like: How to gather requiements, analysis requirements, workflow design, version controlling and product depolyment prcedure etc.</p>
              </div>
            </div> */}
            {/* <div class="timeline-item left wow slideInLeft" data-wow-delay="0.1s">
              <div class="timeline-text">
                <div class="timeline-date">2010 - 2015</div>
                <h2>Maisaid P.M.A.G High School</h2>
                <h4>Secondary School</h4>
                <p>
                  I have completed my B.Sc in Engineering from BSMRSTU with CGPA 3.25 |
                  Skills: Software Development · Front-End Development · Back-End
                  Web Development · Full-Stack Development ·
                </p>
              </div>
            </div> */}
            
          </div>
        </div>
      </div>
    )
}

export default Exprience