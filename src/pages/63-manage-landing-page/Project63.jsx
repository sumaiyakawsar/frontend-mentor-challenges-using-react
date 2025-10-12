import { useState, useEffect, useRef } from "react";
import useFavicon from '../../components/favicons/favicon';
import useDocumentTitle from '../../components/favicons/useTitle';
import './style/project63.scss';
import { features, FooterTitles, MenuTitles, testimonials } from "./data/data";
import Navbar from './component/Navbar';
import MobileMenu from './component/MobileMenu';
import Footer from './component/Footer';

import illusIntro from "./images/illustration-intro.svg"

import TestimonialCarousel from "./component/TestimonialCarousel";


export default function Project63() {
    useFavicon("icons/project18.png");
    useDocumentTitle("Manage | Frontend Mentor");


    const [isMenuOpen, setIsMenuOpen] = useState(false);



    return (
        <div className='project-63'>
            <header className="navigating">
                <div className="container">
                    <Navbar
                        toggleMenu={() => setIsMenuOpen(prev => !prev)}
                        menuTitles={MenuTitles}
                        isMenuOpen={isMenuOpen}
                    />
                    {isMenuOpen &&
                        <MobileMenu
                            isOpen={isMenuOpen}
                            menuTitles={MenuTitles}
                            closeMenu={() => setIsMenuOpen(false)}
                        />}
                </div>
            </header>

            <section className='hero'>
                <div className="container">
                    <div className="hero_image">
                        <img src={illusIntro} alt="hero" loading="lazy" />
                    </div>
                    <div className="content">
                        <h1> Bring everyone together to build better products.</h1>
                        <p>Manage makes it simple for software teams to plan day-to-day
                            tasks while keeping the larger team goals in view.</p>

                        <button type="button" className="btn btn__primary">
                            Get Started
                        </button>
                    </div>
                </div>
            </section>

            <section className='different'>
                <div className="container">
                    <div className="content">
                        <h2>What’s different about Manage?</h2>
                        <p>
                            Manage provides all the functionality your team needs, without
                            the complexity. Our software is tailor-made for modern digital
                            product teams.
                        </p>
                    </div>

                    <div className="different__features">
                        {features.map(({ id, feature, description }) => (
                            <div className="feature" key={id}>
                                <div className="feature-title">
                                    <span>0{id}</span>
                                    <h4>
                                        {feature}
                                    </h4>
                                </div>

                                <div className="feature-content">
                                    <h4>
                                        {feature}
                                    </h4>
                                    <p>{description}</p>
                                </div>

                            </div>
                        ))}

                    </div>
                </div>


            </section>


            <TestimonialCarousel />

            <section className='cta'>
                <div className="container">
                    <h3>
                        Simplify how your team <br />
                        works today.
                    </h3>

                    <button type="button" className="btn btn__secondary">
                        Get Started
                    </button>
                </div>

            </section>

            <Footer menuTitles={FooterTitles} />
        </div >
    )
}
