import logo from '../images/logo.svg'
import { FaTimes } from "react-icons/fa";

const MobileMenu = ({ isOpen, closeMenu, menuTitles }) => {
    return (
        <>
            <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
                <div className="top">
                    <div className="logo">
                        <img src={logo} alt="logo" />
                    </div>

                    <button type='button' className="close-button" onClick={closeMenu}>
                        <FaTimes className='icon' />
                    </button>
                </div>

                <nav className="mobile-nav">
                    {menuTitles.map((menu, id) => (
                        <a href={menu.href}>
                            {menu.title}
                        </a>
                    ))}
                </nav>
            </div>
        </>
    );
};

export default MobileMenu;
