import React, { useState } from "react";
import useFavicon from '../../components/favicons/favicon';
import useDocumentTitle from '../../components/favicons/useTitle'
import './style/project16.scss'

import imgdesktop from './images/illustration-sign-up-desktop.svg'
import imgMobile from './images/illustration-sign-up-mobile.svg'
import iconSuccess from './images/icon-success.svg'
import iconList from './images/icon-list.svg'

const Project16 = () => {
    useFavicon("icons/project71516.png");
    useDocumentTitle("Newsletter sign-up form with success message | Frontend Mentor");

    const [email, setEmail] = useState(""); 
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");

    const validateEmail = (email) => {
        if (!email) return "Email is required";
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex.test(email)) return "Valid email required";
        return "";
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationError = validateEmail(email);
        if (validationError) {
            setError(validationError);
        } else {
            setError("");
            setSubmitted(true);
        }
    };

    const handleDismiss = () => {
        setEmail("");
        setSubmitted(false);
        setError("");
    };

    const handleChange = (e) => {
        setEmail(e.target.value);
        if (error) setError(""); // Clear error on change
    };

    return (
        <div className='container project16'>
            <div className="newsletter">
                {/* Sign-up form start   */}
                {!submitted ? (

                    <div className="newsletter-content">


                        <div className="content">
                            <h1>Stay updated!</h1>
                            <p>Join 60,000+ product managers receiving monthly updates on:</p>
                            <ul>
                                <li> Product discovery and building what matters</li>
                                <li> Measuring to ensure updates are a success</li>
                                <li> And much more!</li>
                            </ul>

                            <form onSubmit={handleSubmit} noValidate>
                                <div className="label">
                                    <label htmlFor="email">Email address</label>
                                    {error && <span className="error-text">{error}</span>}
                                </div>
                                <input
                                    type="email" name="email"
                                    id="email"
                                    value={email}
                                    onChange={handleChange}
                                    placeholder="email@company.com"
                                    className={error ? "error" : ""}
                                />
                                <button type="submit" className="btn">Subscribe to monthly newsletter</button>
                            </form>
                        </div>
                        <div className="img__container">
                            <picture>
                                {/* Mobile Image */}
                                <source srcSet={imgMobile} media="(max-width: 750px)" />
                                {/* Desktop Image */}
                                <img src={imgdesktop} alt="Product Image" />
                            </picture>
                        </div>
                        {/* Sign-up form end   */}
                    </div>

                ) : (
                    <div className="success-message">
                        {/* Success message start   */}
                        <div className="success-content">
                            <img src={iconSuccess} alt="" />
                            <h1>Thanks for subscribing!</h1>
                            <p>A confirmation email has been sent to <strong>{email}</strong>. Please open it and click the button inside to confirm your subscription.</p>

                        </div>
                        <button onClick={handleDismiss} className="btn"> Dismiss message</button>
                    </div>
                    // {/* Success message end   */}
                )}
            </div>

        </div>
    )
}

export default Project16