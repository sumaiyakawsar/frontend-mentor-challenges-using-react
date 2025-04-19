import React from 'react'
import useFavicon from '../../components/favicons/favicon';
import useDocumentTitle from '../../components/favicons/useTitle'
import './style/project12.scss'
import { PiShoppingCartBold } from "react-icons/pi";

import productDesktop from './images/image-product-desktop.jpg'
import productMobile from './images/image-product-mobile.jpg'
// import iconCart from './images/icon-cart.svg'


const Project12 = () => {
  useFavicon("project12.png");
  useDocumentTitle("Product preview card | Frontend Mentor");

  return (
    <div className='container project12'>
      <div className="card">

        <div className="img__container">
          <picture>
            {/* Mobile Image */}
            <source srcSet={productMobile} media="(max-width: 600px)" />
            {/* Desktop Image */}
            <img src={productDesktop} alt="Product Image" />
          </picture>
        </div>



        <div className="card__details">
          <span className="tag">Perfume</span>
          <h1> Gabrielle Essence Eau De Parfum</h1>


          <p className="description">
            A floral, solar and voluptuous interpretation composed by Olivier Polge,
            Perfumer-Creator for the House of CHANEL. </p>

          <div className="price">
            <span className="now-price">$149.99</span>
            <span className="old-price">$169.99</span>
          </div>
          <a href="" className="btn" target="_blank" rel="noopener noreferrer">
            {/* <img src={iconCart} alt="" /> */}
            <PiShoppingCartBold />

            <p>Add to Cart</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project12