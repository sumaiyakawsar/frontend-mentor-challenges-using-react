import React, { useState } from "react";
import iconEllipsis from '../images/icon-ellipsis.svg'

const ActivityCard = ({ title, current, previous, timeframe }) => {


    const labelMap = {
        daily: "Yesterday",
        weekly: "Last Week",
        monthly: "Last Month",
    };

    return (

        <div className={`activity-card activity-card--${title.toLowerCase().replace(" ", "-")}`}>
            <div className="activity-card__image-wrapper">
            </div>
            <div className="activity-card__content">

                <div className="activity-card__header">
                    <h2 className="activity-card__title">{title}</h2>
                    <img src={iconEllipsis} alt={`${title} icon`} className="activity-card__ellipsis" />
                </div>
                <div className="activity-card__details">
                    <p className="activity-card__current">{current}hrs</p>
                    <p className="activity-card__previous">
                        {labelMap[timeframe]} - {previous}hrs
                    </p>
                </div>

            </div>
        </div>

    );
};

export default ActivityCard