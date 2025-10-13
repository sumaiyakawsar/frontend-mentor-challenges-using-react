import logo from '../images/logo-light.svg'
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { socials } from '../data/data';

function Footer({ menuTitles }) {

    return (
        <footer className='footer-64'>
            <div className="container">
                <button type="submit" className="btn">Request Invite</button>
                <nav className="nav-links">
                    {menuTitles.map((menu, index) => (
                        <div className="nav-item" key={index}>
                            <a className="menu-link" href={menu.src}>
                                {menu.title}
                            </a>

                        </div>
                    ))}
                </nav>

                <div className="social__links">
                    {socials.map((social) => {
                        const Icon = social.icon;
                        return (
                            <a key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`socials-icon ${social.label}`}
                                aria-label={social.label}
                            >
                                <Icon className="icon" />
                            </a>
                        );
                    })}

                </div>

                <img src={logo} alt="logo" className="logo" />

                <p className="copyright">© Digitalbank. All Rights Reserved</p>
            </div>
        </footer>
    )
}

export default Footer