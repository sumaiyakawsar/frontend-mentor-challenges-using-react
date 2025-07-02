import React, { useState } from "react";
import useFavicon from '../../components/favicons/favicon';
import useDocumentTitle from '../../components/favicons/useTitle';
import './style/project36.scss';
// import iconStar from './images/icon-star.svg'

// import imgDesktop from './images/background-pattern-desktop.svg'
// import imgMobile from './images/background-pattern-mobile.svg'
import FaqAccordion from "./component/FaqAccordion";

 


const Project36 = () => {
    useFavicon("icons/project20.png");
    useDocumentTitle("FAQ accordion | Frontend Mentor");

    return (
        <div className='project-36'>
            <div className="img__container">
                {/* <picture>
                      <source srcSet={imgMobile} media="(max-width: 600px)" />
                    <img src={imgDesktop} alt="Product Image" />  
                </picture> */}
            </div>
            <div className="accordion_container">

                <div className="faq-header">
                    <span className="faq-icon">
                        {/* <img src={iconStar} alt="icon-star" /> */}
                    </span>
                    <h1>FAQs</h1>
                </div>

                {/* <FaqAccordion items={data} /> */}

            </div>
        </div >
    )
}

export default Project36