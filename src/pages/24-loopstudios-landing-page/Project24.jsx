import React, { useState } from "react";
import useFavicon from '../../components/favicons/favicon';
import useDocumentTitle from '../../components/favicons/useTitle';
import './style/project24.scss';

import dtDeepEarth from "./images/desktop/image-deep-earth.jpg";
import dtNightArcade from "./images/desktop/image-night-arcade.jpg";
import dtSoccerTeam from "./images/desktop/image-soccer-team.jpg";
import dtGrid from "./images/desktop/image-grid.jpg";
import dtFromUp from "./images/desktop/image-from-above.jpg";
import dtPocketBorealis from "./images/desktop/image-pocket-borealis.jpg";
import dtCuriosity from "./images/desktop/image-curiosity.jpg";
import dtFisheye from "./images/desktop/image-fisheye.jpg";

import mbDeepEarth from "./images/mobile/image-deep-earth.jpg";
import mbNightArcade from "./images/mobile/image-night-arcade.jpg";
import mbSoccerTeam from "./images/mobile/image-soccer-team.jpg";
import mbGrid from "./images/mobile/image-grid.jpg";
import mbFromUp from "./images/mobile/image-from-above.jpg";
import mbPocketBorealis from "./images/mobile/image-pocket-borealis.jpg";
import mbCuriosity from "./images/mobile/image-curiosity.jpg";
import mbFisheye from "./images/mobile/image-fisheye.jpg";

import vrDesktop from './images/mobile/image-interactive.jpg'
import vrMobile from './images/mobile/image-interactive.jpg'

import Header from "./component/header";
import CreationItem from "./component/CreationItem";
import Footer from "./component/footer";

const Project24 = () => {
    useFavicon("icons/project1314.png");
    useDocumentTitle("Loopstudios landing page | Frontend Mentor");

    const MenuTitles = [
        { title: "About", href: "#/project24" },
        { title: "Careers", href: "#/project24" },
        { title: "Events", href: "#/project24" },
        { title: "Products", href: "#/project24" },
        { title: "Support", href: "#/project24" },
    ];

    const creations = [
        {
            title: "Deep Earth",
            desktop: dtDeepEarth,
            mobile: mbDeepEarth,
        },
        {
            title: "Night Arcade",
            desktop: dtNightArcade,
            mobile: mbNightArcade,
        },
        {
            title: "Soccer Team VR",
            desktop: dtSoccerTeam,
            mobile: mbSoccerTeam,
        },
        {
            title: "The Grid",
            desktop: dtGrid,
            mobile: mbGrid,
        },
        {
            title: "From Up Above VR",
            desktop: dtFromUp,
            mobile: mbFromUp,
        },
        {
            title: "Pocket Borealis",
            desktop: dtPocketBorealis,
            mobile: mbPocketBorealis,
        },
        {
            title: "The Curiosity",
            desktop: dtCuriosity,
            mobile: mbCuriosity,
        }, {
            title: "Make It Fisheye",
            desktop: dtFisheye,
            mobile: mbFisheye,
        }
    ];

    return (
        <div className='project24'>


            <Header MenuTitles={MenuTitles} />

            <section className="intro container">
                <div className="intro__img">
                    <picture>
                        {/* Mobile Image */}
                        <source srcSet={vrMobile} media="(max-width: 600px)" />
                        {/* Desktop Image */}
                        <img src={vrDesktop} alt="Product Image" />
                    </picture>

                </div>

                <div className="intro__text">
                    <h2>The leader in interactive VR</h2>
                    <p>
                        Founded in 2011, Loopstudios has been producing world-class virtual reality projects
                        for some of the best companies around the globe. Our award-winning creations have transformed
                        businesses through digital experiences that bind to their brand.
                    </p>
                </div>
            </section>

            <section className="creations container">
                <div className="creations__header">
                    <h2>Our creations</h2>
                    <button type="button" className="see-all" >See all</button>
                </div>

                <div className="creations__grid">
                    {creations.map((item, index) => (
                        <CreationItem
                            key={index}
                            desktopImg={item.desktop}
                            mobileImg={item.mobile}
                            title={item.title}
                        />
                    ))}

                </div>

                {/* Show See All again on mobile only */}
                <button type="button" className="see-all see-all__mobile">See All</button>

            </section>

            <Footer MenuTitles={MenuTitles} />
        </div>
    )
}

export default Project24