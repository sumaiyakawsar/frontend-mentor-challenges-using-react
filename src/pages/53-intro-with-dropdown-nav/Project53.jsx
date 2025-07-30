import { useState } from 'react';
import useFavicon from '../../components/favicons/favicon';
import useDocumentTitle from '../../components/favicons/useTitle';
import './style/project53.scss';
import Navbar from './component/Navbar';
import MobileMenu from './component/MobileMenu';
import { MenuTitles } from "./data/data"

import clientDatabiz from "./images/client-databiz.svg"
import clientAudiophile from "./images/client-audiophile.svg"
import clientMeet from "./images/client-meet.svg"
import clientMaker from "./images/client-maker.svg"
import imageMobile from "./images/image-hero-mobile.png"
import imageDesktop from "./images/image-hero-desktop.png"

export default function Project53() {
  useFavicon("icons/project1314.png");
  useDocumentTitle("Intro section with dropdown | Frontend Mentor");

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const [activeDropdown, setActiveDropdown] = useState(null);

  // const toggleDropdown = (index) => {
  //   setActiveDropdown(activeDropdown === index ? null : index);
  // };


  const [activeDropdowns, setActiveDropdowns] = useState([]);

  const toggleDropdown = (index) => {
    setActiveDropdowns((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className='project-53'>

      <Navbar toggleMenu={() => setIsMenuOpen(true)}
        menuTitles={MenuTitles}
        activeDropdowns={activeDropdowns}
        toggleDropdown={toggleDropdown}
      />
      {isMenuOpen &&
        <MobileMenu
          isOpen={isMenuOpen}
          closeMenu={() => setIsMenuOpen(false)}
          menuTitles={MenuTitles}
          activeDropdowns={activeDropdowns}
          toggleDropdown={toggleDropdown}
        />}
 

        <div className="hero">
          <div className="hero__text">
            <div className="hero__text--body">
              <h1> Make remote work</h1>
              <p>
                Get your team in sync, no matter your location. Streamline processes,
                create team rituals, and watch productivity soar.
              </p>
              <button type="button" className='btn'> Learn more </button>

            </div>

            <div className="clients">
              <img src={clientDatabiz} alt="Databiz" />
              <img src={clientAudiophile} alt="Audiophile" />
              <img src={clientMeet} alt="Meet" />
              <img src={clientMaker} alt="Maker" />
            </div>
          </div>


          <div className="hero__image">
            <picture >
              {/* Mobile Image */}
              <source srcSet={imageMobile} media="(max-width:992px)" />
              {/* Desktop Image */}
              <img src={imageDesktop} alt="hero" loading="lazy" />
            </picture>
          </div>
        </div>
      </div>
     
  )
}
