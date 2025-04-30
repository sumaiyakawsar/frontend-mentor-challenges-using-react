import React from 'react'

import useFavicon from '../../components/favicons/favicon';
import useDocumentTitle from '../../components/favicons/useTitle'
import './style/project7.scss'
import avatar from './images/image-avatar.webp'
import cardImg from './images/illustration-article.svg'

function Project7() {
    useFavicon("icons/project71516.png");
    useDocumentTitle(" Blog preview card | Frontend Mentor");
    
    return (
        <div className="container project7">
            <div className="card">
                <img src={cardImg} alt="" className="card__img" />
                <div className="card__details">
                    <span className="card__tag">Learning</span>
                    <div className="card__date">Published 21 Dec 2023</div>
                    <h1 className="card__header">
                        HTML & CSS foundations
                    </h1>
                    <p className="card__body">
                        These languages are the backbone of every website, defining structure, content, and presentation.
                    </p>
                </div>

                <div className="card__author">
                    <img src={avatar} alt="" className="author__img" />
                    <span className="author__name">Greg Hooper</span>
                </div>
            </div>


        </div>
    )
}

export default Project7
