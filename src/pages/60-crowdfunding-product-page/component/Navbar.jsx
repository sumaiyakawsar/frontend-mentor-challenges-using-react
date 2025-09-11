import logo from '../images/logo.svg'
import { MdOutlineMenu } from "react-icons/md";
import { LiaTimesSolid } from "react-icons/lia";

const Navbar = ({ toggleMenu, menuTitles, isMenuOpen }) => {

    return (
        <div className='navbar'>
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>

            <button type="button" className="menu-toggle" onClick={toggleMenu}>
                {isMenuOpen
                    ? <LiaTimesSolid className="toggle-icon" />
                    : <MdOutlineMenu className="toggle-icon" />
                }
            </button>

            <nav className="nav-links">
                {menuTitles.map((menu, index) => (
                    <div className="nav-item" key={index}>
                        <a href={menu.src}
                            className="menu-link"
                        >
                            {menu.title}
                        </a>
                    </div>
                ))}
            </nav>
        </div>
    )
}

export default Navbar