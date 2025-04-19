import React from 'react'

import useFavicon from '../../components/favicons/favicon';
import useDocumentTitle from '../../components/favicons/useTitle'
import './style/project7.scss'
import avatar from './images/image-avatar.webp'
import cardImg from './images/illustration-article.svg'

function Project7() {
    useFavicon("project71516.png");
    useDocumentTitle(" Blog preview card | Frontend Mentor");
    
    return (
        <div className="container project7">
            <div class="card">
                <img src={cardImg} alt="" class="card__img" />
                <div class="card__details">
                    <span class="card__tag">Learning</span>
                    <div class="card__date">Published 21 Dec 2023</div>
                    <h1 class="card__header">
                        HTML & CSS foundations
                    </h1>
                    <p class="card__body">
                        These languages are the backbone of every website, defining structure, content, and presentation.
                    </p>
                </div>

                <div class="card__author">
                    <img src={avatar} alt="" class="author__img" />
                    <span class="author__name">Greg Hooper</span>
                </div>
            </div>


        </div>
    )
}

export default Project7
