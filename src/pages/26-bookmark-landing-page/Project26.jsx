import { useState } from "react";
import useFavicon from '../../components/favicons/favicon';
import useDocumentTitle from '../../components/favicons/useTitle';
import './style/project26.scss';

import MobileMenu from "./component/MobileMenu";
import Navbar from "./component/Navbar";
import FaqAccordion from "./component/FaqAccordion";
import Footer from "./component/footer";

import imgChrome from "./images/logo-chrome.svg"
import imgFirefox from "./images/logo-firefox.svg"
import imgOpera from "./images/logo-opera.svg"
import imgHero from "./images/illustration-hero.svg"

import imgtab1 from "./images/illustration-features-tab-1.svg"
import imgtab2 from "./images/illustration-features-tab-2.svg"
import imgtab3 from "./images/illustration-features-tab-3.svg"
import { MdError } from "react-icons/md";


import line from "./images/bg-dots.svg"
import Error from "../../components/Error";

const MenuTitles = [
    { title: "Features", href: "#/project26" },
    { title: "Pricing", href: "#/project26" },
    { title: "Contact", href: "#/project26" }
];
const extensions = [
    { title: "Chrome", img: imgChrome, version: 62 },
    { title: "Firefox", img: imgFirefox, version: 55 },
    { title: "Opera", img: imgOpera, version: 46 }
];
const faq = [
    {
        question: "What is Bookmark?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla.Phasellus blandit ipsum quis quam ornare mattis."
    },
    {
        question: "How can I request a new browser?",
        answer: " Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.Vivamus luctus eros aliquet convallis ultricies.Mauris augue massa, ultricies non ligula.Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula.Suspendisse imperdiet."
    },
    {
        question: "Is there a mobile app?",
        answer: " Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget.Cras in ligula quis est pharetra mattis sit amet pharetra purus.Sed sollicitudin ex et ultricies bibendum."
    },
    {
        question: "What about other Chromium browsers?",
        answer: "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit."
    }
];

const tabData = [
    {
        title: 'Simple Bookmarking',
        image: imgtab1,
        heading: 'Bookmark in one click',
        description:
            'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
    },
    {
        title: 'Speedy Searching',
        image: imgtab2,
        heading: 'Intelligent search',
        description:
            'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
    },
    {
        title: 'Easy Sharing',
        image: imgtab3,
        heading: 'Share your bookmarks',
        description:
            'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
    },
];

const Project26 = () => {
    useFavicon("icons/project26.png");
    useDocumentTitle("Bookmark landing page | Frontend Mentor");

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [activeIndex, setActiveIndex] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Basic validation
        const isValid = /^\S+@\S+\.\S+$/.test(email);
        setError(!isValid);
        if (isValid) {
            alert("Subscribed!");
            setEmail("");
        }
    };

    const handleChange = (e) => {
        setEmail(e.target.value);
        if (error) setError("");
    };



    return (
        <div className='project-26'>

            <header className="header">
                <div className="container">
                    <Navbar toggleMenu={() => setIsMenuOpen(true)} menuTitles={MenuTitles} />

                    {isMenuOpen && <MobileMenu isOpen={isMenuOpen} closeMenu={() => setIsMenuOpen(false)} menuTitles={MenuTitles} />}

                </div>

            </header>

            <section className="hero">
                <div className="container">
                    <div className="hero__content">
                        <h1>
                            A Simple Bookmark Manager
                        </h1>

                        <p>
                            A clean and simple interface to organize your favourite websites. Open a new
                            browser tab and see your sites load instantly. Try it for free.
                        </p>

                        <div className="hero__buttons">
                            <button type="button" className="btn btn--primary">
                                Get it on Chrome
                            </button>
                            <button type="button" className="btn btn--secondary">
                                Get it on Firefox
                            </button>
                        </div>
                    </div>
                    <div className="hero__image-wrapper">
                        <div className="hero__background-shape"></div>
                        <img src={imgHero} alt="Hero" />
                    </div>
                </div>
            </section>

            <section className="features">
                <div className="container">
                    <div className="content">
                        <h2> Features</h2>

                        <p>
                            Our aim is to make it quick and easy for you to access your favourite websites.
                            Your bookmarks sync between your devices so you can access them on the go.
                        </p>
                    </div>

                    <div className="tab-section">
                        <div className="tab-buttons">
                            {tabData.map((tab, index) => (
                                <button
                                    key={index} type="button"
                                    className={activeIndex === index ? 'active' : ''}
                                    onClick={() => setActiveIndex(index)}
                                >
                                    {tab.title}
                                </button>
                            ))}
                        </div>

                        <div className="tab-content">
                            <div className="tab-content__img-wrapper">
                                <div className="features__background-shape"></div>
                                <img src={tabData[activeIndex].image} alt={tabData[activeIndex].heading} />
                            </div>

                            <div className="tab-content__text">
                                <h2>{tabData[activeIndex].heading}</h2>
                                <p>{tabData[activeIndex].description}</p>

                                <button type="button" className="btn btn__MoreInfo"> More Info </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="download">
                <div className="container">
                    <div className="content">
                        <h2>
                            Download the extension
                        </h2>
                        <p>
                            We’ve got more browsers in the pipeline. Please do let us know if you’ve
                            got a favourite you’d like us to prioritize.
                        </p>
                    </div>

                    <div className="download__cards">
                        {extensions.map((ext, idx) => (
                            <div className="download__card" key={idx}>
                                <div className="details">
                                    <img src={ext.img} alt={ext.title} />
                                    <h3>Add to {ext.title}</h3>
                                    <p>Minimum version {ext.version}</p>
                                </div>

                                <img src={line} alt="line" className="line" />
                                <div className="details">
                                    <button type="button" className="btn btn__MoreInfo">Add & Install Extension</button>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>


            <section className="faq">
                <div className="container">
                    <div className="content"> <h2> Frequently Asked Questions </h2>
                        <p>
                            Here are some of our FAQs. If you have any other questions you’d like
                            answered please feel free to email us.
                        </p>

                    </div>



                    <FaqAccordion items={faq} />

                    <button type="button" className="btn btn__MoreInfo">
                        More Info
                    </button>

                </div>


            </section>

            <section className="newsletter">
                <div className="container">
                    <span className="newsletter__tag">35,000+ already joined</span>
                    <h2 className="newsletter__title">Stay up-to-date with what we’re doing</h2>

                    <form onSubmit={handleSubmit} className="newsletter__form" noValidate>

                        <div className={`input-group ${error ? "error" : ""}`}>
                            <input
                                type="email" name="email" id="email"
                                placeholder="Enter your email address"
                                value={email}
                                onChange={handleChange}
                                aria-label="Email address"
                                required
                            />
                            {error &&
                                <MdError className="error-icon" />}

                            {error &&
                                <Error message="Whoops, make sure it's an email" className="error-message" id="error-message" />
                            }
                        </div>



                        <button type="submit" className="btn"> Contact Us</button>

                    </form>
                </div>






            </section>

            <Footer MenuTitles={MenuTitles} />
        </div>
    )
}

export default Project26