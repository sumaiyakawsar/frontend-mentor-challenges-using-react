import React, { useState } from 'react';
import Slide from './Slide';

import dtHero1 from "../images/desktop-image-hero-1.jpg";
import dtHero2 from "../images/desktop-image-hero-2.jpg";
import dtHero3 from "../images/desktop-image-hero-3.jpg";

import mbHero1 from "../images/mobile-image-hero-1.jpg";
import mbHero2 from "../images/mobile-image-hero-2.jpg";
import mbHero3 from "../images/mobile-image-hero-3.jpg";

const slides = [
    {
        title: "Discover innovative ways to decorate",
        description: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
        desktopImg: dtHero1,
        mobileImg: mbHero1,
    },
    {
        title: "We are available all across the globe",
        description: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country.Find the branch nearest you using our store locator.Any questions? Don't hesitate to contact us today.",
        desktopImg: dtHero2,
        mobileImg: mbHero2,
    },
    {
        title: "Manufactured with the best materials",
        description: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible.With three decades of experience in this industry, we understand what customers want for their home and office.",
        desktopImg: dtHero3,
        mobileImg: mbHero3,
    }
];

function HeroSlider() {
    const [current, setCurrent] = useState(0);
    const [animating, setAnimating] = useState(false);

    const prevSlide = () => {
        if (animating) return;
        setAnimating(true);
        setCurrent((current - 1 + slides.length) % slides.length);
        setTimeout(() => setAnimating(false), 600); // match CSS animation duration

    };

    const nextSlide = () => {
        if (animating) return;
        setAnimating(true);
        setCurrent((current + 1) % slides.length);
        setTimeout(() => setAnimating(false), 600);
    };

    return (
        <section className="hero">


            <Slide
                key={current}
                {...slides[current]}
                onPrev={prevSlide}
                onNext={nextSlide}
                animate={animating}
            />

        </section>
    )
}

export default HeroSlider