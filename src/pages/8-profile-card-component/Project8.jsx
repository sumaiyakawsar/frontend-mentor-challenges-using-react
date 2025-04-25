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
        <div className="container project8">
            <div class="card">

                <div class="card__header">
                    <img src={cardImg} alt="" class="card__img" />
                    <div class="profile_img">
                        <img src={avatar} alt="" class="profile_pic" />
                    </div>
                </div>

                <div class="card__details">
                    <h1 class="card__profile">
                        <span class="card__name">Victor Crest</span>
                        <span class="card__age">26</span>
                    </h1>

                    <div class="card__city">London</div>
                </div>

                <div class="card__footer">
                    <div class="card__info">
                        <div class="card__number">80K</div>
                        <div class="card__topic">Followers</div>
                    </div>
                    <div class="card__info">
                        <div class="card__number">803K</div>
                        <div class="card__topic">Likes</div>
                    </div>
                    <div class="card__info">
                        <div class="card__number">1.4K</div>
                        <div class="card__topic">Photos</div>
                    </div>
                </div>
            </div>





        </div>
    )
}

export default Project8
