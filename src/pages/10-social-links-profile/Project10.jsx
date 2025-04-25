import React from 'react'

import useFavicon from '../../components/favicons/favicon';
import useDocumentTitle from '../../components/favicons/useTitle'
import './style/project10.scss'

import avatar from './images/avatar-sumaiya.jpg'


function Project10() {
    useFavicon("icons/project10.jpg");
    useDocumentTitle("Social links profile | Frontend Mentor");

    return (
        <div className="container project10">
            <div class="card">
                <div class="img__container">
                    <img src={avatar} alt="" class="my_pic" />
                </div>

                <div class="card__details">
                    <h1 class="card__header">Sumaiya Kawsar </h1>
                    <p class="location"> Riyadh, Saudi Arabia</p>

                </div>
                <p class="card__body">
                    "Front-end developer, Data Analyst and avid reader."
                </p>
                <div class="card__social">
                    <a href="https://github.com/sumaiyakawsar" class="social_links">Github</a>
                    <a href="https://www.frontendmentor.io/profile/sumaiyakawsar" class="social_links">Frontend Mentor</a>
                    <a href="https://www.linkedin.com/in/sumaiyakawsar/" class="social_links">Linkedin</a>
                    <a href="https://x.com/SumaiyaKawsar_" class="social_links">X</a>
                    <a href="https://www.instagram.com/sumaiyakawsar_/" class="social_links">Instagram</a>
                </div>

            </div>
        </div>
    )
}

export default Project10
