import React, { useState } from "react";
import useFavicon from '../../components/favicons/favicon';
import useDocumentTitle from '../../components/favicons/useTitle';
import './style/project20.scss';
import iconStar from './images/icon-star.svg'

import imgDesktop from './images/background-pattern-desktop.svg'
import imgMobile from './images/background-pattern-mobile.svg'
import FaqAccordion from "./component/FaqAccordion";

const data = [
    {
        title: "What is Frontend Mentor, and how will it help me?",
        content: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."
    },
    {
        title: "Is Frontend Mentor free?",
        content: "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels."
    },
    {
        title: "Can I use Frontend Mentor projects in my portfolio?",
        content: "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!"
    },
    {
        title: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
        content: "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members."
    },
];


const Project20 = () => {
    useFavicon("icons/project20.png");
    useDocumentTitle("FAQ accordion | Frontend Mentor");

    return (
        <div className='project20'>
            <div className="img__container">
                <picture>
                    <source srcSet={imgMobile} media="(max-width: 600px)" />
                    <img src={imgDesktop} alt="Product Image" />
                </picture>
            </div>
            <div className="accordion_container">

                <div className="faq-header">
                    <span className="faq-icon">
                        <img src={iconStar} alt="icon-star" />
                    </span>
                    <h1>FAQs</h1>
                </div>

                <FaqAccordion items={data} />

            </div>
        </div >
    )
}

export default Project20