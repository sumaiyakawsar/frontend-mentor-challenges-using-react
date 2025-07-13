import React, { useState } from 'react';
import useFavicon from '../../components/favicons/favicon';
import useDocumentTitle from '../../components/favicons/useTitle'
import './style/project38.scss'

import drawers from './images/illustration-hero.svg'

import { FaMusic } from "react-icons/fa6";

const Project38 = () => {
  useFavicon("icons/project71516.png");
  useDocumentTitle("Order Summary Card | Frontend Mentor");

  return (
    <div className='project-38'>

      <div className="card">
        <div className="card-image">
          <img src={drawers} alt="Drawer" className="card__img" />
        </div>


        <div className="card__content">
          <h1>
            Order Summary
          </h1>
          <p className='order__description'>
            You can now listen to millions of songs, audiobooks, and podcasts on any
            device anywhere you like!
          </p>
          <div className="plan__selection">
            <div className="icon">
              <FaMusic />
            </div>
            <div className="content">
              <h2> Annual Plan </h2>
              <p> $59.99/year </p>
            </div>

            <a href='#/project38' className='btn btn__link'>
              Change
            </a>

          </div>

          <button type="submit" className='btn btn__primary'>Proceed to Payment</button>
          <button type="button" className='btn btn__cancel'>Cancel Order</button>







        </div>
      </div>
    </div>
  )
}

export default Project38