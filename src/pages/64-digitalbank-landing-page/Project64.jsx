import { useState } from "react";
import useFavicon from '../../components/favicons/favicon';
import useDocumentTitle from '../../components/favicons/useTitle';
import './style/project64.scss';
import { articles, features, FooterTitles, MenuTitles } from "./data/data";
import Navbar from './component/Navbar';
import MobileMenu from './component/MobileMenu';
import Footer from './component/Footer';
import illusIntro from "./images/image-mockups.png"

export default function Project64() {
    useFavicon("icons/project64.svg");
    useDocumentTitle("Digitalbank | Frontend Mentor");

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className='project-64'>
            <header className="navigating">
                <div className="container">
                    <Navbar
                        toggleMenu={() => setIsMenuOpen(prev => !prev)}
                        menuTitles={MenuTitles}
                        isMenuOpen={isMenuOpen}
                    />
                    {isMenuOpen &&
                        <MobileMenu
                            isOpen={isMenuOpen}
                            menuTitles={MenuTitles}
                            closeMenu={() => setIsMenuOpen(false)}
                        />}
                </div>
            </header>

            <section className='hero'>
                <div className="container">
                    <div className="hero_image">
                        <img src={illusIntro} alt="hero" loading="lazy" />
                    </div>
                    <div className="content">
                        <h1> Next generation digital banking</h1>
                        <p>  Take your financial life online. Your Digitalbank account will be a one-stop-shop
                            for spending, saving, budgeting, investing, and much more.</p>
                        <button type="button" className="btn btn__primary">
                            Request Invite
                        </button>
                    </div>
                </div>
            </section>

            <section className='different'>
                <div className="container">
                    <div className="content">
                        <h2>Why choose Digitalbank?</h2>
                        <p>
                            We leverage Open Banking to turn your bank account into your financial hub. Control
                            your finances like never before.
                        </p>
                    </div>

                    <div className="different__features">
                        {features.map(({ id, title, img, summary }) => (
                            <div className="feature" key={id}>
                                <img src={img} alt={title} />
                                <h4>{title}</h4>
                                <p>{summary}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            <section className='articles-section'>
                <div className="container">
                    <h3>  Latest Articles</h3>
                    <div className="articles">
                        {articles.map(({ id, img, author, title, description }) => (
                            <div className="article" key={id}>
                                <div className="article__img">
                                    <img src={img} alt={id} />
                                </div>


                                <div className="article__body">
                                    <p className="author">   By {author}</p>
                                    <h4>
                                        {title}
                                    </h4>
                                    <p>{description}</p>
                                </div>

                            </div>
                        ))}
                    </div>

                </div>

            </section>

            <Footer menuTitles={FooterTitles} />
        </div >
    )
}
