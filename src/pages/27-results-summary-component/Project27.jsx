import React, { useEffect } from "react";
import useFavicon from '../../components/favicons/favicon';
import useDocumentTitle from '../../components/favicons/useTitle';
import './style/project27.scss';
import { results } from "./data/data";

const Project27 = () => {
    useFavicon("icons/project18.png");
    useDocumentTitle("Results summary component | Frontend Mentor");

    useEffect(() => {
        const counters = document.querySelectorAll(".count");
        counters.forEach(counter => {
            const target = +counter.getAttribute("data-score");
            let current = 0;

            const update = () => {
                const increment = Math.ceil((target - current) / 10);
                current += increment;
                if (current > target) current = target;
                counter.innerText = current;
                if (current < target) requestAnimationFrame(update);
            };

            const delay = window.innerWidth >= 768 ? 1000 : 0;
            setTimeout(() => requestAnimationFrame(update), delay);
        });
    }, []);

    return (
        <div className='project27'>
            <div className="result-card">
                <div className="result-section">
                    <p className="title">Your Result</p>
                    <div className="score-circle">
                        <h1 className="count" data-score={76}>0</h1>
                        <span>of 100</span>
                    </div>
                    <h2 className="rating">Great</h2>
                    <p className="desc">You scored higher than 65% of the people who have taken these tests.</p>
                </div>

                <div className="summary-section">
                    <h3> Summary </h3>

                    <div className="summary-items">
                        {results.map(({ category, score, icon }, idx) => (
                            <div className={`summary-item ${category.toLowerCase()}`} key={category}>

                                <div className="category">
                                    <img src={icon} alt={category} />
                                    <span className="label">{category}</span>
                                </div>

                                <div className="score">
                                    <span className="count" data-score={score}>0</span>
                                    <span className="total"> / 100</span>
                                </div>
                            </div>
                        ))}

                    </div>

                    <button type="button" className="btn_continue">
                        Continue
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Project27