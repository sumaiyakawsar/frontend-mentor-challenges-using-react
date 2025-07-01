import React from 'react'
import useFavicon from '../../components/favicons/favicon';
import useDocumentTitle from '../../components/favicons/useTitle'
import VehicleCard from './component/VehicleCard';

import luxury from './images/icon-luxury.svg'
import sedans from './images/icon-sedans.svg'
import suv from './images/icon-suvs.svg'
import './style/project2.scss'

const Project2 = () => {
    useFavicon("icons/project2.png");
    useDocumentTitle(" 3-column preview card component | Frontend Mentor");
    const vehicleData = [
        {
            image: sedans,
            title: "Sedans",
            description:
                "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
            className: "sedan",
        },
        {
            image: suv,
            title: "SUVs",
            description:
                "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
            className: "suvs",
        },
        {
            image: luxury,
            title: "Luxury",
            description:
                "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
            className: "luxury",
        },
    ];
    
    return (
        <div className="container project-2">
            <div className="card-container">
                {vehicleData.map((vehicle, index) => (
                    <VehicleCard key={index} {...vehicle} />
                ))}
            </div>
        </div>

    )
}

export default Project2;