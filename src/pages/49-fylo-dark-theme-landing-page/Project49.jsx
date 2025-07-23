import { useState } from "react";
import useFavicon from '../../components/favicons/favicon';
import useDocumentTitle from '../../components/favicons/useTitle';
import './style/project49.scss';
import {
    MenuTitles,
    features,
    testimonials,
    FootertitlesR, FootertitlesL
} from "./data/data";

import Navbar from "./component/Navbar";
import Footer from "./component/footer";

import imgProductive from "./images/illustration-stay-productive.png"
import imgIntro from "./images/illustration-intro.png"
import quotes from "./images/bg-quotes.png"
import { MdArrowCircleRight } from "react-icons/md";


import Error from "../../components/Error";

const Project49 = () => {
    useFavicon("icons/project26.png");
    useDocumentTitle("Fylo landing page | Frontend Mentor");

    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Basic validation
        const isValid = /^\S+@\S+\.\S+$/.test(email);
        setError(!isValid);
        if (isValid) {
            alert("Subscribed!");
            setEmail("");
        }
    };

    const handleChange = (e) => {
        setEmail(e.target.value);
        if (error) setError("");
    };



    return (
        <div className='project-49'>
            <section className="intro">
                <div className="container">
                    <Navbar menuTitles={MenuTitles} />

                    <div className="intro__content">
                        <div className="image">
                            <img src={imgIntro} alt="" />

                        </div>
                        <h1>  All your files in one secure location, accessible anywhere. </h1>
                        <p>
                            Fylo stores all your most important files in one secure location. Access them wherever
                            you need, share and collaborate with friends family, and co-workers.
                        </p>

                        <button type="button" className="btn"> Get Started</button>
                    </div>
                </div>
            </section>

            <section className="features">
                <div className="container">
                    {features.map((feature, idx) => (
                        <div className="feature" key={idx}>
                            <img src={feature.image} alt={feature.title} />
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="productivity">
                <div className="container">
                    <div className="image">
                        <img src={imgProductive} alt="" className="illustration" />
                    </div>
                    <div className="contents">
                        <h2>
                            Stay productive, wherever you are
                        </h2>
                        <p>
                            Never let location be an issue when accessing your files. Fylo has you covered for all of your file
                            storage needs.
                        </p>
                        <p>
                            Securely share files and folders with friends, family and colleagues for live collaboration. No email
                            attachments required.
                        </p>

                        <a href="#/project49">
                            See how Fylo works
                            <MdArrowCircleRight className="icon" />
                        </a>
                    </div>
                </div>
            </section>


            <section className="testimonials">
                <div className="container">
                    <img src={quotes} alt="quotes" className="quote" />

                    {testimonials.map((testimonial, idx) => (
                        <div className="testimonial" key={idx}>
                            <p>{testimonial.comment}</p>
                            <div className="user">
                                <img src={testimonial.ownerimg} alt={testimonial.title} />
                                <div className="user__details">
                                    <p>{testimonial.owner}</p>
                                    <span>Founder & CEO, Huddle</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="newsletter">
                <div className="newsletter__container">
                    <h2 className="newsletter__title">Get early access today</h2>
                    <p className="newsletter__description">
                        It only takes a minute to sign up and our free starter tier is extremely generous. If you have any
                        questions, our support team would be happy to help you.
                    </p>

                    <form onSubmit={handleSubmit} className="newsletter__form" noValidate>
                        <div className="newsletter__input-wrapper">
                            <input
                                type="email" name="email" id="email"
                                placeholder="Enter your email address"
                                value={email}
                                onChange={handleChange}
                                aria-label="Email address"
                                required
                            />

                            {error &&
                                <Error message="Please enter a valid email address" className="error-message" id="error-message" />
                            }
                        </div>
                        <button type="submit" className="btn"> Get Started For Free</button>
                    </form>
                </div>
            </section>

            <Footer FootertitlesL={FootertitlesL} FootertitlesR={FootertitlesR} />
        </div>
    )
}

export default Project49