import logo from '../images/logo.svg'
import { FaFacebookSquare, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer({ MenuTitles }) {
    return (
        <footer className='footer-this'>
            <div className="container">

                <img src={logo} alt="logo" className="logo" />

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
                        aria-label="facebook">  <FaFacebookSquare /></a>
                    <a href="https://x.com/SumaiyaKawsar_" target="_blank"
                        rel="noopener noreferrer"
                        className="social__icon"
                        aria-label="facebook"> <FaTwitter /></a>
                    <a href="https://www.instagram.com/devsume/" target="_blank"
                        rel="noopener noreferrer"
                        className="social__icon"
                        aria-label="facebook"> <FaInstagram /></a>
                </div>


            </div>
        </footer>
    )
}

export default Footer