import logo from '../images/logo.svg'
import { MdOutlineMenu } from "react-icons/md";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { LiaTimesSolid } from "react-icons/lia";

const Navbar = ({ toggleMenu, menuTitles, activeDropdown, toggleDropdown, isMenuOpen }) => {


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
                        <div className="nav-item" key={index}>
                            <a href={menu.src}
                                onClick={(e) => {
                                    if (menu.dropdown) {
                                        e.preventDefault();
                                        toggleDropdown(index);
                                    }
                                }}
                                className="menu-link" 
                            >
                                {menu.title}

                                {menu.dropdown && activeDropdown === index
                                    ? <MdKeyboardArrowUp className="arrow-icon" />
                                    : <MdKeyboardArrowDown className="arrow-icon" />
                                }
                            </a>

                            {menu.dropdown && activeDropdown === index && (
                                <div className="dropdown">
                                    {menu.dropdown.map((item, idx) => (
                                        <a href={item.link} key={idx} className="dropdown-item">
                                            {item.icon &&
                                                <img src={item.icon} alt="" />

                                            }
                                            <span>{item.title}</span>
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
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