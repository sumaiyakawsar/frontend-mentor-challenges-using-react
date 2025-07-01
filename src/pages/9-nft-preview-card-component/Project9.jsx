import React from 'react'

import useFavicon from '../../components/favicons/favicon';
import useDocumentTitle from '../../components/favicons/useTitle'
import './style/project9.scss'
import iconClock from './images/icon-clock.svg'
import iconEthereum from './images/icon-ethereum.svg'
import iconView from './images/icon-view.svg'
import avatar from './images/image-avatar.png'
import equilibrium from './images/image-equilibrium.jpg'

function Project9() {
    useFavicon("icons/project9.png");
    useDocumentTitle("NFT preview card component | Frontend Mentor");
    return (
        <div className="container project-9">
            <div className="card">
                <div className="img__container">
                    <img src={equilibrium} alt="" className="nft_img" />
                    <div className="overlay">
                        <img src={iconView} alt="" className="eye-icon" />
                    </div>
                </div>

                <div className="card__details">
                    <h1 className="card__header">
                        Equilibrium #3429
                    </h1>
                    <p className="card__body">
                        Our Equilibrium collection promotes balance and calm.
                    </p>
                </div>
                <div className="card__flex">
                    <div className="card__info">
                        <img src={iconEthereum} alt="" className="card__icon" />
                        <span className="card__amount">0.041 ETH</span>

                    </div>
                    <div className="card__info ">
                        <img src={iconClock} alt="" className="card__icon" />
                        <span className="card__time"> 3 days left</span>

                    </div>


                </div>

                <div className="card__footer">
                    <img src={avatar} alt="" className="author__img" />
                    <p>Creation of <span className="author__name">Jules Wyvern</span></p>
                </div>
            </div>
        </div>
    )
}

export default Project9
