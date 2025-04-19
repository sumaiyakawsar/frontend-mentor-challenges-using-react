import React from 'react'

const CountdownEL = ({ id, label }) => (
    <div className='ctd'>
        <div className={`countdown-el ${id}`} id={id}>
            <span className="top"></span>
            <span className="top-back"><span></span></span>
            <span className="bottom"></span>
            <span className="bottom-back"><span></span></span>

        </div>
        <div className="describe-container">
            <p>{label}</p>
        </div>

    </div>


)

export default CountdownEL