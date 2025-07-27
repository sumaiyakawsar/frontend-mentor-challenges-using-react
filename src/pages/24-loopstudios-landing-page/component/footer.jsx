import logo from '../images/logo.svg'
import { FaFacebookSquare, FaTwitter, FaPinterest, FaInstagram } from "react-icons/fa";

function Footer({ MenuTitles }) {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer__left">
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
                <div className="footer__right">
                    <div className="social-links">
                        <a href="">  <FaFacebookSquare /></a>
                        <a href=""> <FaTwitter /></a>
                        <a href=""> <FaPinterest /></a>
                        <a href=""> <FaInstagram /></a>
                    </div>

                    <p>© 2021 Loopstudios. All rights reserved.</p>

                </div>
            </div>








        </footer>
    )
}

export default Footer