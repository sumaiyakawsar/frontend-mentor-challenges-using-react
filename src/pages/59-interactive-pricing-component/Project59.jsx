import { useState, useRef } from "react";
import useFavicon from '../../components/favicons/favicon';
import useDocumentTitle from '../../components/favicons/useTitle';
import './style/project59.scss';
import sliderimg from "./images/icon-slider.svg"

function Project59() {
    useFavicon("icons/project1314.png");
    useDocumentTitle("Interactive pricing component | Frontend Mentor");

    const [index, setIndex] = useState(2); // default 100K views
    const [yearly, setYearly] = useState(false);
    const sliderRef = useRef(null);
    const thumbRef = useRef(null);

    const pricingData = [
        { views: "10K", price: 8 },
        { views: "50K", price: 12 },
        { views: "100K", price: 16 },
        { views: "500K", price: 24 },
        { views: "1M", price: 36 },
    ];


    const handleDrag = (e) => {
        if (!sliderRef.current) return;
        const slider = sliderRef.current;
        const rect = slider.getBoundingClientRect();
        let percent = (e.clientX - rect.left) / rect.width;
        if (percent < 0) percent = 0;
        if (percent > 1) percent = 1;
        const newIndex = Math.round(percent * (pricingData.length - 1));
        setIndex(newIndex);
    };

    const startDrag = () => {
        document.addEventListener("mousemove", handleDrag);
        document.addEventListener("mouseup", stopDrag);
        thumbRef.current.style.cursor = "grabbing";
    };

    const stopDrag = () => {
        document.removeEventListener("mousemove", handleDrag);
        document.removeEventListener("mouseup", stopDrag);
        thumbRef.current.style.cursor = "grab";
    };

    const basePrice = pricingData[index].price;
    const monthlyPrice = basePrice;
    const yearlyPrice = basePrice * 0.75;
    const finalPrice = yearly ? yearlyPrice : monthlyPrice;


    return (
        <div className='project-59'>
            <div className="container">
                <div className="pricing-card">
                    <header className="header">
                        <h1>  Simple, traffic-based pricing</h1>
                        <p>Sign-up for our 30-day trial. No credit card required. </p>
                    </header>


                    <div className="card">
                        <div className="card-body">
                            <div className="card-body__header">
                                <p className="views">{pricingData[index].views} Pageviews</p>

                                {/* Slider */}
                                <div className="slider-wrap" ref={sliderRef}>
                                    <input
                                        type="range"
                                        min="0"
                                        max={pricingData.length - 1}
                                        value={index}
                                        step="1"
                                        onChange={(e) => setIndex(Number(e.target.value))}
                                        className="slider"
                                        style={{ "--progress": (index / (pricingData.length - 1)) * 100 }}
                                    />
                                    <div
                                        className="thumb"
                                        ref={thumbRef}
                                        style={{
                                            left: `${(index / (pricingData.length - 1)) * 100}%`
                                        }}
                                        onMouseDown={startDrag}
                                    >
                                        <img src={sliderimg} alt="thumb" />
                                    </div>
                                </div>

                                <p className="price">
                                    <span className="amount">${finalPrice.toFixed(2)}</span> <span className="month">/ month</span>
                                </p>
                            </div>

                            {/* Billing Toggle */}
                            <div className="billing-toggle">
                                <span>Monthly Billing</span>
                                <label className="switch">
                                    <input
                                        type="checkbox"
                                        checked={yearly}
                                        onChange={() => setYearly(!yearly)}
                                    />
                                    <span className="slider-toggle"></span>
                                </label>
                                <span className="yearly">
                                    Yearly Billing
                                    <strong className="discount">
                                        <span className="amount">
                                            <span className="show-text">-</span>
                                            25%
                                        </span>

                                        <span className="hide-text">
                                            discount
                                        </span>

                                    </strong>
                                </span>
                            </div>
                        </div>

                        <div className="card-footer">
                            {/* Features */}
                            <ul className="features">
                                <li>Unlimited websites</li>
                                <li>100% data ownership</li>
                                <li>Email reports</li>
                            </ul>

                            <button className="start-btn" type="button">Start my trial</button>
                        </div>

                    </div>

                </div>
            </div>


        </div>
    )
}

export default Project59


