import { useState, useEffect } from "react";
import useFavicon from '../../components/favicons/favicon';
import useDocumentTitle from '../../components/favicons/useTitle';
import './style/project66.scss';
import { advantages, footerLinks, MenuTitles } from "./data/data";
import Navbar from './component/Navbar';
import MobileMenu from './component/MobileMenu';
import Footer from './component/Footer';
import illusIntro from "./images/illustration-working.svg"

import UrlShortener from "./component/UrlShortner";

export default function Project66() {
    useFavicon("icons/project71516.png");
    useDocumentTitle("Shortly | Frontend Mentor");

    const [isMenuOpen, setIsMenuOpen] = useState(false);


    return (
        <div className='project-66'>

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
                        <h1> More than just shorter links</h1>
                        <p>  Build your brand’s recognition and get detailed insights
                            on how your links are performing.</p>
                        <button type="button" className="btn btn__secondary">
                            Get Started
                        </button>
                    </div>
                </div>
            </section>

            <UrlShortener />
            
            <section className='advantages-section'>
                <div className="container">
                    <div className="advanced__content">
                        <h2>Advanced Statistics</h2>
                        <p>
                            Track how your links are performing across the web with our
                            advanced statistics dashboard.

                        </p>
                    </div>
                    <div className="advantages">
                        {advantages.map(({ id, img, author, title, description }) => (
                            <div className="advantage" key={id}>
                                <div className="advantage__img">
                                    <img src={img} alt={id} />
                                </div>


                                <div className="advantage__body">
                                    <h3>
                                        {title}
                                    </h3>
                                    <p>{description}</p>
                                </div>

                            </div>
                        ))}
                    </div>

                </div>

            </section>

            <section className='boost'>
                <div className="container">
                    <h3>Boost your links today</h3>

                    <button type="button" className="btn btn__secondary">
                        Get Started
                    </button>
                </div>
            </section>




            <Footer menuTitles={footerLinks} />
        </div >
    )
}
