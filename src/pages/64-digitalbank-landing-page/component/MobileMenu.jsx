const MobileMenu = ({ isOpen, menuTitles, closeMenu }) => {
    return (
        <>
            {isOpen && <div className="overlay" onClick={closeMenu} />}
            <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
                <nav className="mobile-nav">
                    {menuTitles.map((menu, index) => (
                        <a href={menu.src} key={index}
                            className={`menu-link ${menu.dropdown && activeDropdown === index ? 'active' : ''}`}
                        >
                            {menu.title}
                        </a>
                    ))}

                </nav>
            </div>
        </>


    );
};

export default MobileMenu;
