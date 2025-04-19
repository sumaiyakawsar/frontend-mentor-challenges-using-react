import React from 'react'

const ServiceCard = ({ title, description, icon, altText, className }) => {
    return (
        <div className={`card ${className}`}>
            <div className="card__description">
                <h3 className="card__title">{title}</h3>
                <p>{description}</p>
            </div>
            <img src={icon} alt={altText} />
        </div>
    );
};

export default ServiceCard 