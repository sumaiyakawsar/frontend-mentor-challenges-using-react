import React from 'react'

const VehicleCard = ({ image, title, description, className }) => {
    return (
        <div className={`card ${className}`}>
            <div className="card__top">
                <img src={image} alt={title.toLowerCase()} />
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
            <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className={className}
            >
                Learn More
            </a>
        </div>
    );
};

export default VehicleCard