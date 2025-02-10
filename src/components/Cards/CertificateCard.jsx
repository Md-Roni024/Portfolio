import React from 'react';
import './CertificatesCards.css';

const CertificatesCards = ({ certificate }) => {
    const handleButtonClick = (certificateUrl) => {
        window.open(certificateUrl, '_blank');
    };

    return (
        <div className="card">
            <img className="image" src={certificate.image} alt="Certificate" />
            <div className="details">
                <div className="title">{certificate.title}</div>
                <div className="date">{certificate.date}</div>
                <div className="description">{certificate.description}</div>
            </div>
            <div className="members">
                {certificate.member?.map((member) => (
                    <img className="avatar" src={member.img} key={member.img} alt="Member" />
                ))}
            </div>
            <button className="button" onClick={() => handleButtonClick(certificate.link)}>Open Credential</button>
        </div>
    );
};

export default CertificatesCards;
