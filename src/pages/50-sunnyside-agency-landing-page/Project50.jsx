import { useState } from "react";
import useFavicon from '../../components/favicons/favicon';
import useDocumentTitle from '../../components/favicons/useTitle';
import './style/project50.scss';
import {
    MenuTitles,
    testimonials,
    servicesData,
    specialtiesData, imageGallery
} from "./data/data";

import MobileMenu from "./component/MobileMenu";
import Navbar from "./component/Navbar";
import Footer from "./component/footer";

import arrow from "./images/icon-arrow-down.svg"


const Project50 = () => {
    useFavicon("icons/project49.png");
    useDocumentTitle("Sunnyside agency landing page | Frontend Mentor");

    const [isMenuOpen, setIsMenuOpen] = useState(false);


    return (
        <div className='project-50'>
            <section className="hero">
                <div className="container">
                    <Navbar
                        menuTitles={MenuTitles}
                        toggleMenu={() => setIsMenuOpen(prev => !prev)}
                    />

                    {isMenuOpen &&
                        <MobileMenu
                            isOpen={isMenuOpen}
                            menuTitles={MenuTitles}
                        />
                    }

                    <div className="intro">
                        <h1> We are creatives</h1>
                        <img src={arrow} alt="" />
                    </div>
                </div>
            </section>

            <section className="services">
                {servicesData.map(service => (
                    <div
                        key={service.id}
                        className={`service-block ${service.reverse ? "reverse" : ""}`}
                    >
                        <picture>
                            {/* Mobile Image */}
                            <source srcSet={service.imageMobile} media="(max-width: 600px)" />
                            {/* Desktop Image */}
                            <img src={service.imageDesktop} alt={service.title} loading="lazy" />
                        </picture>

                        <div className="text-block">
                            <div className="content">
                                <h2>{service.title}</h2>
                                <p>{service.description}</p>
                                <a href="#/project50" className={`learn-more ${service.color}`}>Learn more</a>

                            </div>
                        </div>
                    </div>
                ))}
            </section>

            <section className="specialties">
                {specialtiesData.map(item => (
                    <div key={item.id} className={`specialty ${item.className}`}>
                        <picture>
                            {/* Mobile Image */}
                            <source srcSet={item.imageMobile} media="(max-width: 600px)" />
                            {/* Desktop Image */}
                            <img src={item.imageDesktop} alt={item.title} loading="lazy" />
                        </picture>
                        <div className="text-block">
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </section>

            <section className="testimonials">
                <div className="container">
                    <h2>Client testimonials</h2>
                    <div className="testimonial">
                        {testimonials.map((testimonial, idx) => (
                            <div className="testimonial__content" key={idx}>
                                <img src={testimonial.ownerimg} alt={testimonial.title} />

                                <p className="comment">{testimonial.comment}</p>

                                <div className="user">
                                    <p>{testimonial.owner}</p>
                                    <span>{testimonial.position}</span>
                                </div>

                            </div>
                        ))}
                    </div>

                </div>
            </section>

            <section className="image__gallery">
                {imageGallery.map(({ id, alt, imageMobile, imageDesktop }) => (
                    <picture key={id}>
                        {/* Mobile Image */}
                        <source srcSet={imageMobile} media="(max-width: 600px)" />
                        {/* Desktop Image */}
                        <img src={imageDesktop} alt={alt} loading="lazy" />
                    </picture>
                ))}
            </section>

            <Footer MenuTitles={MenuTitles} />
        </div>
    )
}

export default Project50