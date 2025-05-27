import iconMenuClose from '../images/icon-close.svg'
import logo from '../images/logo.svg'

const MobileMenu = ({ isOpen, closeMenu, menuTitles }) => {
    return (
        <>


            <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
                <div className="top">
                    <div className="logo">
                        <img src={logo} alt="logo" />
                    </div>

                    <button className="close-button" onClick={closeMenu}>
                        <img src={iconMenuClose} alt="" />
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
