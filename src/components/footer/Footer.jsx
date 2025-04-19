import React from 'react'
import { Link } from 'react-router-dom';
import '../../styles/component.scss'
import { FaSquareFacebook, FaPinterest, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer id='footer'>
      <div class="socials">
        <a
          href="https://www.facebook.com/Sumaiya.Kawsar/"
          target="_blank"
          rel="noopener noreferrer"
          class="social__icon "
          aria-label="facebook"
        ><FaSquareFacebook />

        </a>
        <a
          href="https://www.pinterest.com/sumaiyakawsar693/"
          target="_blank"
          class="social__icon  "
          aria-label="pinterest"
          rel="noopener noreferrer"
        ><FaPinterest />

        </a>
        <a
          href="https://www.instagram.com/sumaiyakawsar_/"
          target="_blank"
          class="social__icon "
          aria-label="instagram"
          rel="noopener noreferrer"
        ><FaInstagram />

        </a>
      </div>
      <div class="attribution">Challenge by
        <Link to="https://www.frontendmentor.io?ref=challenge"> Frontend Mentor</Link>. Coded by <Link
          to="https://github.com/sumaiyakawsar"> Sumaiya Kawsar</Link>.

      </div>

    </footer>
  );
}

export default Footer