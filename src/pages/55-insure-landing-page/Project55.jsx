import { useState } from 'react';
import useFavicon from '../../components/favicons/favicon';
import useDocumentTitle from '../../components/favicons/useTitle';
import './style/project55.scss';

import { MenuTitles, FooterTitles, differences } from "./data/data";

import Navbar from './component/Navbar';
import MobileMenu from './component/MobileMenu';
import Footer from './component/footer';

import introImageMobile from "./images/image-intro-mobile.jpg"
import introImageDesktop from "./images/image-intro-desktop.jpg"

export default function Project55() {
  useFavicon("icons/project1314.png");
  useDocumentTitle("Insure | Frontend Mentor");

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='project-55'>
      <header className='header'>
        <div className="container">
          <Navbar
            toggleMenu={() => setIsMenuOpen(prev => !prev)}
            menuTitles={MenuTitles}
            isMenuOpen={isMenuOpen}
          />

        </div>
        {isMenuOpen &&
          <MobileMenu
            isOpen={isMenuOpen}
            closeMenu={() => setIsMenuOpen(false)}
            menuTitles={MenuTitles}
          />}
      </header>


      <section className="intro">
        <div className="bg"></div>

        <div className="mobile__img">
          <img src={introImageMobile} alt="hero" loading="lazy" />
        </div>

        <div className="container">
          <div className="intro__text">
            <hr />
            <h1>Humanizing your insurance.</h1>
            <p>
              Get your life insurance coverage easier and faster. We blend our expertise
              and technology to help you find the plan that’s right for you. Ensure you
              and your loved ones are protected.
            </p>
            <button type="button" className='btn btn__primary'> View plans</button>
          </div>
          <div className="intro__image">

            <img src={introImageDesktop} alt="hero" loading="lazy" />

          </div>
        </div>
      </section>




      <section className="unique">
        <div className="container">
          <hr />
          <h2>We’re different</h2>
          <div className="diffrences">
            {differences.map((diff, index) => (
              <div className="differnce" key={index}>
                <div className="img__wrapper">
                  <img src={diff.icon} alt={diff.title} />
                </div>

                <h3> {diff.title}</h3>
                <p>{diff.description}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="work">
        <div className="container">
          <div className="content">
            <h2> Find out more about how we work</h2>
            <button type="button" className='btn btn__primary'> How we work</button>

          </div>
        </div>
      </section>

      <Footer menuTitles={FooterTitles} />
    </div>

  )
}
