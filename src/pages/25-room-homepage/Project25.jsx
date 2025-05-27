import React, { useState } from "react";
import useFavicon from '../../components/favicons/favicon';
import useDocumentTitle from '../../components/favicons/useTitle';
import './style/project25.scss';
import Navbar from "./component/Navbar";
import MobileMenu from "./component/MobileMenu";
import HeroSlider from "./component/HeroSlider";

import imgAboutLight from "./images/image-about-light.jpg";
import imgAboutDark from "./images/image-about-dark.jpg";


const Project25 = () => {
    useFavicon("icons/project25.png");
    useDocumentTitle("Room Homepage | Frontend Mentor");

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const MenuTitles = [
        { title: "home", href: "#/project25" },
        { title: "shop", href: "#/project25" },
        { title: "about", href: "#/project25" },
        { title: "contact", href: "#/project25" }
    ];


    return (
        <div className='project25'>
            <Navbar toggleMenu={() => setIsMenuOpen(true)} menuTitles={MenuTitles} />

            {isMenuOpen && <MobileMenu isOpen={isMenuOpen} closeMenu={() => setIsMenuOpen(false)} menuTitles={MenuTitles} />}

            <div className="page">

                <HeroSlider />

                <div className="about">
                    <img src={imgAboutDark} alt="darkimg"  />


                    <div className="about__content">
                        <h3>
                            About our furniture
                        </h3>

                        <p>
                            Our multifunctional collection blends design and function to suit your individual taste.
                            Make each room unique, or pick a cohesive theme that best express your interests and what
                            inspires you. Find the furniture pieces you need, from traditional to contemporary styles
                            or anything in between. Product specialists are available to help you create your dream space.
                        </p>
                    </div>


                    <img src={imgAboutLight} alt="lightimg" />

                </div>


            </div>


        </div>
    )
}

export default Project25