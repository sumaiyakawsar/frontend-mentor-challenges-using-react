import logo from '../images/logo-bookmark - white.svg'
import { FaFacebookSquare, FaTwitter } from "react-icons/fa";

function Footer({ MenuTitles }) {
    return (
        <footer className='footer-this'>
            <div className="container">

                <div className="footer-this__left">
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
                </div>

                <div className="social-links">
                    <a href="https://www.facebook.com/Sumaiya.Kawsar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social__icon "
                        aria-label="facebook">  <FaFacebookSquare /></a>
                    <a href="https://x.com/SumaiyaKawsar_" target="_blank"
                        rel="noopener noreferrer"
                        className="social__icon "
                        aria-label="facebook"> <FaTwitter /></a>
                </div>


            </div>
        </footer>
    )
}

export default Footer