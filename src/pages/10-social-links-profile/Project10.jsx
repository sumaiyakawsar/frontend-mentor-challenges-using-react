import React from 'react'

import useFavicon from '../../components/favicons/favicon';
import useDocumentTitle from '../../components/favicons/useTitle'
import './style/project10.scss'

import avatar from './images/avatar-sumaiya.jpg'


function Project10() {
    useFavicon("icons/project10.jpg");
    useDocumentTitle("Social links profile | Frontend Mentor");

    return (
        <div className="container project-10">
            <div className="card">
                <div className="img__container">
                    <img src={avatar} alt="" className="my_pic" />
                </div>

                <div className="card__details">
                    <h1 className="card__header">Sumaiya Kawsar </h1>
                    <p className="location"> Riyadh, Saudi Arabia</p>

                </div>
                <p className="card__body">
                    "Front-end developer, Data Analyst and avid reader."
                </p>
                <div className="card__social">
                    <a href="https://github.com/sumaiyakawsar" className="social_links">Github</a>
                    <a href="https://www.frontendmentor.io/profile/sumaiyakawsar" className="social_links">Frontend Mentor</a>
                    <a href="https://www.linkedin.com/in/sumaiyakawsar/" className="social_links">Linkedin</a>
                    <a href="https://x.com/SumaiyaKawsar_" className="social_links">X</a>
                    <a href="https://www.instagram.com/devsume/" className="social_links">Instagram</a>
                </div>

            </div>
        </div>
    )
}

export default Project10
