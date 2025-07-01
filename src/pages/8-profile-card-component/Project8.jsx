import React from 'react'

import useFavicon from '../../components/favicons/favicon';
import useDocumentTitle from '../../components/favicons/useTitle'
import './style/project8.scss'
import avatar from './images/image-victor.jpg'
import cardImg from './images/bg-pattern-card.svg'

function Project8() {
    useFavicon("icons/project8.png");
    useDocumentTitle(" Profile card component | Frontend Mentor");

    return (
        <div className="container project-8">
            <div className="card">

                <div className="card__header">
                    <img src={cardImg} alt="" className="card__img" />
                    <div className="profile_img">
                        <img src={avatar} alt="" className="profile_pic" />
                    </div>
                </div>

                <div className="card__details">
                    <h1 className="card__profile">
                        <span className="card__name">Victor Crest</span>
                        <span className="card__age">26</span>
                    </h1>

                    <div className="card__city">London</div>
                </div>

                <div className="card__footer">
                    <div className="card__info">
                        <div className="card__number">80K</div>
                        <div className="card__topic">Followers</div>
                    </div>
                    <div className="card__info">
                        <div className="card__number">803K</div>
                        <div className="card__topic">Likes</div>
                    </div>
                    <div className="card__info">
                        <div className="card__number">1.4K</div>
                        <div className="card__topic">Photos</div>
                    </div>
                </div>
            </div>





        </div>
    )
}

export default Project8
