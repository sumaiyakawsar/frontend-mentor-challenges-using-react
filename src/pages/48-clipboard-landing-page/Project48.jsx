import { useState } from "react";
import useFavicon from '../../components/favicons/favicon';
import useDocumentTitle from '../../components/favicons/useTitle';
import './style/project48.scss';
import { MenuTitles, partners, tools, features } from "./data/data";

import Footer from "./component/footer";

import imgDevices from "./images/image-devices.png"
import imgComputer from "./images/image-computer.png"
import logo from "./images/logo.svg"



const Project48 = () => {
    useFavicon("icons/project48.png");
    useDocumentTitle("Clipboard landing page | Frontend Mentor");





    return (
        <div className='project-48'>
            <section>
                <div className="header__container">
                    <img src={logo} alt="logo" className="logo" />
                    <h1> A history of everything you copy </h1>
                    <p>
                        Clipboard allows you to track and organize everything you
                        copy. Instantly access your clipboard on all your devices.
                    </p>
                </div>


                <div className="btn__container">
                    <button type="button" className="btn ios">
                        Download for iOS
                    </button>
                    <button type="button" className="btn mac">
                        Download for Mac
                    </button>
                </div>

            </section>


            <section>
                <div className="header__container">
                    <h2>Keep track of your snippets</h2>
                    <p>
                        Clipboard instantly stores any item you copy in the cloud,
                        meaning you can access your snippets immediately on all your
                        devices. Our Mac and iOS apps will help you organize everything.
                    </p>
                </div>

                <div className="content">
                    <img src={imgComputer} alt="computer" />
                    <div className="features">
                        {features.map((feature, idx) => (
                            <div className="feature" key={idx}>
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </div>
                        ))}
                    </div>

                </div>

            </section>

            <section>
                <div className="header__container">
                    <h2>Access Clipboard anywhere</h2>
                    <p>
                        Whether you’re on the go, or at your computer, you can access all your Clipboard
                        snippets in a few simple clicks.
                    </p>
                </div>

                <img src={imgDevices} alt="Devices" className="devices" />

            </section>

            <section>
                <div className="header__container">
                    <h2>Supercharge your workflow</h2>

                    <p>We’ve got the tools to boost your productivity.</p>

                </div>
                <div className="tools">
                    {tools.map((tool, idx) => (
                        <div className="tool" key={idx}>
                            <img src={tool.icon} alt={tool.title} />
                            <h3>{tool.title}</h3>
                            <p>{tool.description}</p>
                        </div>
                    ))}
                </div>



            </section>

            <section>
                <div className="partners">
                    {partners.map((partner, idx) => (
                        <img src={partner.logo} className="partner__image" alt={partner.title} key={idx} />
                    ))}
                </div>

            </section>

            <section>
                <div className="header__container">
                    <h2>Clipboard for iOS and Mac OS</h2>

                    <p>
                        Available for free on the App Store. Download for Mac or iOS, sync with iCloud
                        and you’re ready to start adding to your clipboard.
                    </p>
                </div>


                <div className="btn__container">
                    <button type="button" className="btn ios">
                        Download for iOS
                    </button>
                    <button type="button" className="btn mac">
                        Download for Mac
                    </button>
                </div>


            </section>


            <Footer MenuTitles={MenuTitles} />
        </div>
    )
}

export default Project48