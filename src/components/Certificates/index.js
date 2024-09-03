import React, { useState } from 'react';
import ProjectCard from '../Cards/ProjectCards';
import { certificates } from '../../data/constants';
import CertificatesCards from '../Cards/CertificateCard';
import './certificates.css';  // Import the external CSS

const Certificates = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState('web app');

  return (
    <div className="container" id="certificates">
      <div className="wrapper">
        <hr/>
        <div className="title-container">
          <h2 className="title">Certificates</h2>
        </div>
        <hr/>
        <div className="card-container">
          {certificates.map((certificate) => (
            <CertificatesCards certificate={certificate} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;
