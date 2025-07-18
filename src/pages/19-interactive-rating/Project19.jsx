import React, { useState } from "react";
import useFavicon from '../../components/favicons/favicon';
import useDocumentTitle from '../../components/favicons/useTitle';
import './style/project19.scss';

import iconThanks from './images/illustration-thank-you.svg'
import iconStar from './images/icon-star.svg'

const Project19 = () => {
    useFavicon("icons/project19.png");
    useDocumentTitle("Interactive rating component | Frontend Mentor");

    const [selected, setSelected] = useState(null);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = () => {
        if (selected !== null) {
            setSubmitted(true);
        }
    };

    return (
        <div className='project-19'>
            <div className="rating">
                {!submitted ? (
                    <>
                        <img src={iconStar} alt="star" className="icon" />

                        <h1> How did we do?</h1>
                        <p>
                            Please let us know how we did with your support request. All feedback is appreciated
                            to help us improve our offering!
                        </p>
                        <div className="rating__buttons">
                            {[1, 2, 3, 4, 5].map((rating) => (
                                <button type="button"
                                    key={rating}
                                    className={`btnRating ${selected === rating ? "selected" : ""}`}
                                    onClick={() => setSelected(rating)}
                                >
                                    {rating}
                                </button>
                            ))}
                        </div>
                        <button type="submit" className="btnSubmit" onClick={handleSubmit}>Submit</button>
                    </>
                ) : (
                    <div className="thankYou">
                        <img src={iconThanks} alt="illustration" />
                        <div className="result"> You selected {selected} out of 5</div>
                        <h2> Thank you!</h2>
                        <p>
                            We appreciate you taking the time to give a rating. If you ever need more support,
                            don’t hesitate to get in touch!
                        </p>
                    </div>
                )}
            </div>
        </div >
    )
}

export default Project19