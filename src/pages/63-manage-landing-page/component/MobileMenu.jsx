const MobileMenu = ({ isOpen, menuTitles, closeMenu }) => {
    return (
        <>
            {isOpen && <div className="overlay" onClick={closeMenu} />}
            <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
                <nav className="mobile-nav">
                    <div className="nav__wrapper">
                        {menuTitles.map((menu, index) => (
                            <div className="nav-item" key={index}>
                                <a href={menu.src}
                                    className={`menu-link ${menu.dropdown && activeDropdown === index ? 'active' : ''}`}
                                >
                                    {menu.title}
                                </a>
                            </div>
                        ))}
                    </div>
                </nav>
            </div>
        </>


    );
};

export default MobileMenu;
