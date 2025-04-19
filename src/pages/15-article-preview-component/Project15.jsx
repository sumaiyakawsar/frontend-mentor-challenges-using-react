import React, { useState } from 'react';
import useFavicon from '../../components/favicons/favicon';
import useDocumentTitle from '../../components/favicons/useTitle'
import './style/project15.scss'

import avatar from './images/avatar-michelle.jpg'
import drawers from './images/drawers.jpg'
import { FaShare, FaLinkedin, FaInstagram, FaPinterest } from "react-icons/fa";

const Project15 = () => {
  useFavicon("project71516.png");
  useDocumentTitle("Article preview component | Frontend Mentor");

  const [isClicked, setIsClicked] = useState(false);


  const toggleShare = () => {
    setIsClicked((prev) => !prev);
  };



  return (
    <div className='container project15'>
      <div class="card">
        <div class="card-image">
          <img src={drawers} alt="Drawer" class="card__img" />
        </div>

        <div class="card__content">
          <div class="details">
            <h1 class="card__header">
              Shift the overall look and feel by adding these wonderful
              touches to furniture in your home

            </h1>
            <p class="card__body"> Ever been in a room and felt like something was missing? Perhaps
              it felt slightly bare and uninviting. I’ve got some simple tips
              to help you make any room feel complete.
            </p>
          </div>


          <div class="card__footer">

            <div class="author">
              <div class="profile">
                <img src={avatar} alt="" class="author__img" />
                <div class="author__details">
                  <p class="name"> Michelle Appleton</p>
                  <p class="date"> 28 Jun 2020</p>
                </div>
              </div>

              <a class="share-btn" id="share-btn" onClick={toggleShare}> <FaShare className='fa-share'/> </a>


            </div>

            <div class="share-container">
              <div class="share-popup" id="sharePopup" className={`share-popup ${isClicked ? 'clicked' : ''}`}
              >

                <div class="share-box">
                  <span>SHARE</span>
                  <a href="https://www.linkedin.com/in/sumaiyakawsar/" target="_blank" rel="noopener noreferrer"
                    class="social__icon" aria-label="linkedin">  <FaLinkedin />
                  </a>
                  <a href="https://www.instagram.com/devsume/" target="_blank"
                    class="social__icon" aria-label="instagram" rel="noopener noreferrer">
                    <FaInstagram />   </a>
                  <a href="https://www.pinterest.com/sumaiyakawsar693/" target="_blank"
                    class="social__icon " aria-label="pinterest" rel="noopener noreferrer">
                    <FaPinterest />    </a>
                </div>
                <div class="triangle-down"></div>

              </div>


            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Project15