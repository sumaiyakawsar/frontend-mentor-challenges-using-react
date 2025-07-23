import logo from '../images/logo.svg'
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import gmail from "../images/icon-email.svg";

function Footer({ FootertitlesR, FootertitlesL }) {
    return (
        <footer className='footer-49'>
            <div className="container">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>

                <div className="content">


                    <div className="row">
                        <MdLocationOn className='icon loco' />

                        <p className='address'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua
                        </p>
                    </div>

                    <div className='contact'>
                        <div className="row">
                            <FaPhoneVolume className='icon' />
                            <p>+1-543-123-4567</p>
                        </div>

                        <div className="row">
                            <img src={gmail} alt="gmail" className='iconimg' />
                            <p>example@fylo.com</p>
                        </div>
                    </div>



                    <nav className="nav-links">
                        {FootertitlesR.map((menu, id) => (
                            <a href={menu.href} key={id}>
                                {menu.title}
                            </a>
                        ))}

                    </nav>

                    <nav className="nav-links">

                        {FootertitlesL.map((menu, id) => (
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
                            <FaFacebookF className='icon' />
                        </a>
                        <a href="https://x.com/SumaiyaKawsar_" target="_blank"
                            rel="noopener noreferrer"
                            className="social__icon"
                            aria-label="twitter"
                        >
                            <FaTwitter className='icon' />
                        </a>
                        <a href="https://www.instagram.com/devsume/" target="_blank"
                            rel="noopener noreferrer"
                            className="social__icon"
                            aria-label="instagram"
                        >
                            <FaInstagram className='icon' />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer