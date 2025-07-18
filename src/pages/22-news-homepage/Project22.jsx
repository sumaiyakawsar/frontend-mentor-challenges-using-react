import React, { useState } from "react";
import useFavicon from '../../components/favicons/favicon';
import useDocumentTitle from '../../components/favicons/useTitle';
import './style/project22.scss';

import imgGaming from './images/image-gaming-growth.jpg'
import imgRetro from './images/image-retro-pcs.jpg'
import imgLaptops from './images/image-top-laptops.jpg'

import imgWebDesktop from './images/image-web-3-desktop.jpg'
import imgWebMobile from './images/image-web-3-mobile.jpg'
import MobileMenu from "./component/MobileMenu";
import Navbar from "./component/Navbar";

const Project22 = () => {
    useFavicon("icons/project1314.png");
    useDocumentTitle("News homepage | Frontend Mentor");

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const MenuTitles = [
        { title: "Home", src: "#/project22" },
        { title: "New", src: "#/project22" },
        { title: "Popular", src: "#/project22" },
        { title: "Trending", src: "#/project22" },
        { title: "Categories", src: "#/project22" },
    ];


    const newArticles = [
        { title: "Hydrogen VS Electric Cars", content: "Will hydrogen-fueled cars ever catch up to EVs?" },
        {
            title: "The Downsides of AI Artistry", content: "What are the possible adverse effects of on-demand AI image generation?"
        },
        { title: "Is VC Funding Drying Up?", content: "Private funding by VC firms is down 50% YOY. We take a look at what that means." },
    ];

    const categoriesTitles = [
        { img: imgRetro, title: "Reviving Retro PCs", content: "What happens when old PCs are given modern upgrades?" },
        { img: imgLaptops, title: "Top 10 Laptops of 2022", content: "Our best picks for various needs and budgets." },
        { img: imgGaming, title: "The Growth of Gaming", content: "How the pandemic has sparked fresh opportunities." },
    ];
    return (
        <div className='project-22'>

            <Navbar toggleMenu={() => setIsMenuOpen(true)} menuTitles={MenuTitles} />
            {isMenuOpen && <MobileMenu isOpen={isMenuOpen} closeMenu={() => setIsMenuOpen(false)} menuTitles={MenuTitles} />}

            <div className="page">

                <div className="featured__section" id="featured">
                    <picture>
                        <source srcSet={imgWebMobile} media="(max-width: 767px)" />
                        <img src={imgWebDesktop} alt="Product Image" />
                    </picture>


                    <div className="content">
                        <h1>The Bright Future of Web 3.0?</h1>
                        <div className="col">
                            <p>
                                We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
                                But is it really fulfilling its promise?
                            </p>
                            <button type="button" className="btn">
                                Read more
                            </button>
                        </div>
                    </div>

                </div>

                <div className="new__section" id="new">
                    <h2>New</h2>
                    {newArticles.map((article, id) => (
                        <div className="article">
                            <a href="#/project22">{article.title}</a>
                            <p>{article.content}</p>
                        </div>
                    ))}
                </div>

                <div className="trending-articles" id="trending">

                    {categoriesTitles.map((category, id) => (
                        <div className="trending-card">
                            <img src={category.img} alt={category.title} />

                            <div className="category__details">
                                <span>0{id + 1}</span>
                                <a href="#/project22">{category.title}</a>
                                <p>{category.content}</p>
                            </div>

                        </div>
                    ))}
                </div>


            </div>

        </div>
    )
}

export default Project22