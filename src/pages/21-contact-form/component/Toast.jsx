import React from 'react';
import iconSuccess from '../images/icon-success-check.svg'

const Toast = ({ message, subtext, show }) => {
    return (
        <div role="status" aria-live="polite" className={`toast ${show ? 'show' : ''}`}>
            <span className="row">
                <img src={iconSuccess} alt="" />
                <strong>{message}</strong>
            </span>
            <div>

                <p>{subtext}</p>
            </div>
        </div>
    );
};

export default Toast;
