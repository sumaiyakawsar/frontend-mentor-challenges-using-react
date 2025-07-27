import logo from '../images/logo - footer.svg'
import { FaFacebookSquare, FaTwitter, FaInstagram, FaPinterest } from "react-icons/fa";


function Footer({ MenuTitles }) {
    return (
        <footer className='footer-50'>
            <div className="container">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <nav className="nav-links">
                    {MenuTitles.map((menu, id) => (
                        <a href={menu.href} key={id}>
                            {menu.title}
                        </a>
                    ))}
                </nav>
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
        </footer>
    )
}

export default Footer