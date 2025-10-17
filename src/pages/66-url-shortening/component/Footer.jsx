import logo from '../images/logo-light.svg'

import { socials } from '../data/data';

function Footer({ menuTitles }) {

    return (
        <footer className='footer-66'>
            <div className="container">
                <img src={logo} alt="logo" className="logo" />

                <nav className="nav-links">
                    {menuTitles.map((section, index) => (
                        <div className="footer__column" key={index}>
                            <h4>{section.title}</h4>

                            <ul>
                                {section.links.map((link, i) => (
                                    <li key={i} >
                                        <a href="#/project66" className='menu-link'>{link}</a>
                                    </li>
                                ))}
                            </ul>

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

            </div>
        </footer>
    )
}

export default Footer