import React, { useState } from 'react';
import useFavicon from '../../components/favicons/favicon';
import useDocumentTitle from '../../components/favicons/useTitle'
import './style/project15.scss'

import avatar from './images/avatar-michelle.jpg'
import drawers from './images/drawers.jpg'
import { FaShare, FaLinkedin, FaInstagram, FaPinterest } from "react-icons/fa";

const Project15 = () => {
  useFavicon("icons/project71516.png");
  useDocumentTitle("Article preview component | Frontend Mentor");

  const [isClicked, setIsClicked] = useState(false);


  const toggleShare = () => {
    setIsClicked((prev) => !prev);
  };



  return (
    <div className='container project-15'>
      <div className="card">
        <div className="card-image">
          <img src={drawers} alt="Drawer" className="card__img" />
        </div>

        <div className="card__content">
          <div className="details">
            <h1 className="card__header">
              Shift the overall look and feel by adding these wonderful
              touches to furniture in your home

            </h1>
            <p className="card__body"> Ever been in a room and felt like something was missing? Perhaps
              it felt slightly bare and uninviting. I’ve got some simple tips
              to help you make any room feel complete.
            </p>
          </div>


          <div className="card__footer">

            <div className="author">
              <div className="profile">
                <img src={avatar} alt="" className="author__img" />
                <div className="author__details">
                  <p className="name"> Michelle Appleton</p>
                  <p className="date"> 28 Jun 2020</p>
                </div>
              </div>

              <a className="share-btn" id="share-btn" onClick={toggleShare}> <FaShare className='fa-share' /> </a>


            </div>

            <div className="share-container">
              <div id="sharePopup" className={`share-popup ${isClicked ? 'clicked' : ''}`}
              >

                <div className="share-box">
                  <span>SHARE</span>
                  <a href="https://www.linkedin.com/in/sumaiyakawsar/" target="_blank" rel="noopener noreferrer"
                    className="social__icon" aria-label="linkedin">  <FaLinkedin />
                  </a>
                  <a href="https://www.instagram.com/devsume/" target="_blank"
                    className="social__icon" aria-label="instagram" rel="noopener noreferrer">
                    <FaInstagram />   </a>
                  <a href="https://www.pinterest.com/sumaiyakawsar693/" target="_blank"
                    className="social__icon " aria-label="pinterest" rel="noopener noreferrer">
                    <FaPinterest />    </a>
                </div>
                <div className="triangle-down"></div>

              </div>


            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Project15