const MobileMenu = ({ isOpen, menuTitles }) => {
    return (
        <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
            <nav className="mobile-nav">
                <div className="nav__wrapper">
                    {menuTitles.map((menu, index) => (
                        <div className="nav-item" key={index}>
                            <a href={menu.src} className="menu-link">
                                {menu.title}
                            </a>

                        </div>
                    ))}
                </div>

                <div className="btns">
                    <button type='button' className='btn'> Login </button>
                </div>
            </nav>

        </div>

    );
};

export default MobileMenu;
