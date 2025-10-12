import { useState } from 'react';
import useFavicon from '../../components/favicons/favicon';
import useDocumentTitle from '../../components/favicons/useTitle';
import './style/project54.scss';
import { MenuTitles } from "./data/data";
import Navbar from './component/Navbar';
import MobileMenu from './component/MobileMenu';

import Footer from './component/footer';

import editorMobile from "./images/illustration-editor-mobile.svg"
import editorDesktop from "./images/illustration-editor-desktop.svg"
import laptopMobile from "./images/illustration-laptop-mobile.svg"
import laptopDesktop from "./images/illustration-laptop-desktop.svg"
import imagePhone from "./images/illustration-phones.svg"

export default function Project54() {
  useFavicon("icons/project1314.png");
  useDocumentTitle("Blogr | Frontend Mentor");

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <div className='project-54'>

      <section className="intro">
        <div className="container">
          <Navbar
            toggleMenu={() => setIsMenuOpen(prev => !prev)}
            menuTitles={MenuTitles}
            activeDropdown={activeDropdown}
            toggleDropdown={toggleDropdown}
            isMenuOpen={isMenuOpen}
          />
          {isMenuOpen &&
            <MobileMenu
              isOpen={isMenuOpen}
              closeMenu={() => setIsMenuOpen(false)}
              menuTitles={MenuTitles}
              activeDropdown={activeDropdown}
              toggleDropdown={toggleDropdown}
            />}

          <div className="content">
            <h1>A modern publishing platform</h1>
            <p>  Grow your audience and build your online brand</p>

            <div className="btns">
              <button type="button" className='btn btn__secondary'>Start for Free </button>
              <button type="button" className='btn btn__primary'>Learn More</button>
            </div>

          </div>

        </div>
      </section>

      <section className='future'>
        <div className="container">
          <h2> Designed for the future</h2>
          <div className="future__layout">
            <div className="text-content">
              <div className="block">
                <h3>Introducing an extensible editor</h3>
                <p>
                  Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content.
                  The editor supports management of multiple blogs and allows easy manipulation of embeds such as images,
                  videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or
                  change the looks of a blog.
                </p>
              </div>
              <div className="block">
                <h3>Robust content management</h3>
                <p>
                  Flexible content management enables users to easily move through posts. Increase the usability of your blog
                  by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.
                </p>
              </div>
            </div>
            <div className="future__image">
              <picture >
                {/* Mobile Image */}
                <source srcSet={editorMobile} media="(max-width:992px)" />
                {/* Desktop Image */}
                <img src={editorDesktop} alt="hero" loading="lazy" />
              </picture>
            </div>
          </div>
        </div>
      </section>

      <section className='middle'>
        <div className="bg">
          <div className="circle"></div>
        </div>

        <div className="container">
          <div className="image__wrapper">
            <img src={imagePhone} alt="hero" loading="lazy" />
          </div>
          <div className="text">
            <h2>State of the Art Infrastructure</h2>
            <p>  With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity.
              This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
            </p>
          </div>
        </div>
      </section>

      <section className='future-bottom '>
        <div className="container">

          <div className="future__image">
            <picture >
              {/* Mobile Image */}
              <source srcSet={laptopMobile} media="(max-width:992px)" />
              {/* Desktop Image */}
              <img src={laptopDesktop} alt="hero" loading="lazy" />
            </picture>
          </div>

          <div className="text-content">
            <div className="block">
              <h3>Free, open, simple</h3>
              <p>
                Blogr is a free and open source application backed by a large community of helpful developers. It supports
                features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools,
                and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.

              </p>
            </div>
            <div className="block">
              <h3>Powerful tooling</h3>
              <p>
                Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
                capable of producing even the most complicated sites.
              </p>
            </div>
          </div>

        </div>

      </section>

      <Footer menuTitles={MenuTitles} />
    </div>

  )
}
