import { useState } from 'react';
import useFavicon from '../../components/favicons/favicon';
import useDocumentTitle from '../../components/favicons/useTitle';
import './style/project56.scss';
import { MenuTitles } from "./data/data";

import Navbar from './component/Navbar';
import MobileMenu from './component/MobileMenu';

import illustration from "./images/illustration-devices.svg"

export default function Project56() {
  useFavicon("icons/project56.svg");
  useDocumentTitle("Project tracking intro | Frontend Mentor");

  const [isMenuOpen, setIsMenuOpen] = useState(false);


  return (
    <div className='project-56'>

      <header className="header">
        <div className="container">
          <Navbar
            toggleMenu={() => setIsMenuOpen(prev => !prev)}
            menuTitles={MenuTitles}
            isMenuOpen={isMenuOpen}
          />
          {isMenuOpen &&
            <MobileMenu
              isOpen={isMenuOpen}
              closeMenu={() => setIsMenuOpen(false)}
              menuTitles={MenuTitles}
            />}
        </div>
      </header>

      <section className="intro">
        <div className="container">
          <div className="img__wrapper">
            <img src={illustration} alt="hero" loading="lazy" />
          </div>

          <div className="content">
            <div className="mini">          
                <span className='new'>New</span>
                <span className='title'>Monograph Dashboard</span>
            </div>
            <h1>Powerful insights into your team</h1>
            <p>  Project planning and time tracking for agile teams</p>

            <div className="btn__container">
              <button type="button" className='btn btn__primary'>Schedule a demo </button>
              <span>to see a live preview</span>
            </div>

          </div>

        </div>
      </section>




    </div>

  )
}
