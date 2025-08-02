import logo from '../images/logo.svg'
import { FaFacebookSquare, FaTwitter, FaInstagram, FaPinterest } from "react-icons/fa";

function Footer({ menuTitles }) {
    return (
        <footer className='footer-55'>
            <div className="container">
                <div className="footer__top">
                    <div className="logo">
                        <img src={logo} alt="logo" />
                    </div>

                    <div className="social-links">
                        <a href="https://www.facebook.com/Sumaiya.Kawsar"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social__icon"
                            aria-label="facebook"
                        >
                            <FaFacebookSquare className='icon' />
                        </a>

                        <a href="https://www.instagram.com/devsume/" target="_blank"
                            rel="noopener noreferrer"
                            className="social__icon"
                            aria-label="instagram"
                        >
                            <FaInstagram className='icon' />
                        </a>

                        <a href="https://x.com/SumaiyaKawsar_" target="_blank"
                            rel="noopener noreferrer"
                            className="social__icon"
                            aria-label="twitter"
                        >
                            <FaTwitter className='icon' />
                        </a>

                        <a href="https://www.pinterest.com/sumaiyakawsar693/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social__icon"
                            aria-label="pinterest"
                        >
                            <FaPinterest className='icon' />
                        </a>
                    </div>
                </div>


                <nav className="nav-links">
                    {menuTitles.map((menu, index) => (
                        <div className="nav-item" key={index}>
                            <span className="menu-link">
                                {menu.title}
                            </span>

                            {menu.dropdown && (
                                <div className="dropdown">
                                    {menu.dropdown.map((item, idx) => (
                                        <a href={item.link} key={idx} className="dropdown-item">
                                            {item.title}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </nav>
            </div>
        </footer>
    )
}

export default Footer