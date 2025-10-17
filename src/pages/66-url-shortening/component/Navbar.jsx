import logo from '../images/logo-dark.svg'
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
                <div className="main-nav">

                    {menuTitles.map((menu, index) => (
                        <a href={menu.src} key={index}
                            className="menu-link">
                            {menu.title}
                        </a>

                    ))}
                </div>


                <div className="btns">
                    <button type='button' className='btn btn__link'> Login </button>
                    <button type='button' className='btn btn__secondary'>Sign Up</button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
