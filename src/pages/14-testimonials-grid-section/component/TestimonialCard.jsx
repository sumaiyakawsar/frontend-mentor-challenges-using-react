import React from 'react'

const TestimonialCard = ({ imgSrc, altText, name, status, topic, description, className }) => {
    return (
        <div className={`card ${className}`}>
            <div className="card__header">
                <img src={imgSrc} alt={altText} />
                <div className="user">
                    <div className="name">{name}</div>
                    <div className="status">{status}</div>
                </div>
            </div>
            <h1 className="card__topic">{topic}</h1>
            <p className="card__description">“ {description} ”</p>
        </div>
    );
};

export default TestimonialCard