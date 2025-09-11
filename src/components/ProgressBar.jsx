
import React, { useState } from 'react';


export default function ProgressBar({ progress }) {
    const [isHovered, setIsHovered] = useState(false);


    return (
        <div className="progress-card__bar-wrap">
            <div
                className="progress-card__bar"
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={progress}
                aria-label={`Progress toward goal: ${progress} percent`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div
                    className={`progress-card__fill ${isHovered ? 'progress-card__fill--hover' : ''}`}
                    style={{ width: `${Math.min(progress, 100)}%` }}
                />

            </div>
        </div>
    );
}