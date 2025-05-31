import iconMenuClose from '../images/icon-close.svg'
import logo from '../images/logo-bookmark.svg'
import { FaFacebookSquare, FaTwitter } from "react-icons/fa";

const MobileMenu = ({ isOpen, closeMenu, menuTitles }) => {
    return (
        <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
            <div className="top">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <button type='button' className="close-button" onClick={closeMenu}>
                    <img src={iconMenuClose} alt="close" />
                </button>
            </div>
            <nav className="mobile-nav">
                {menuTitles.map((menu, id) => (
                    <a href={menu.href}>
                        {menu.title}
                    </a>
                ))}
                <div className='login'>
                    <button type="button" className='btn btn__Login'>Login</button>

                </div>
            </nav>

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
    );
};

export default MobileMenu;
