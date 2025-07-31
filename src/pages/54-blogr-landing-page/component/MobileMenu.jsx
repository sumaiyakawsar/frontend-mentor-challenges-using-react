
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const MobileMenu = ({ isOpen, closeMenu, menuTitles, activeDropdown, toggleDropdown }) => {
    return (
        <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
            <nav className="mobile-nav">
                <div className="nav__wrapper">
                    {menuTitles.map((menu, index) => (
                        <div className="nav-item" key={index}>
                            <a href={menu.src}
                                onClick={(e) => {
                                    if (menu.dropdown) {
                                        e.preventDefault();
                                        toggleDropdown(index);
                                    }
                                }}
                                className={`menu-link ${menu.dropdown && activeDropdown === index ? 'active' : ''}`}

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
                                            <span>{item.title}</span>
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="btns">
                    <button type='button' className='btn'> Login </button>
                    <button type='button' className='btn btn__signup'>Sign Up</button>
                </div>
            </nav>

        </div>

    );
};

export default MobileMenu;
