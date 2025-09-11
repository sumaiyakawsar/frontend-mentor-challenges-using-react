const MobileMenu = ({ isOpen, menuTitles }) => {
    return (
        <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
            <nav className="mobile-nav">
                {menuTitles.map((menu, index) => (
                    <div className="nav-item" key={index}>
                        <a href={menu.src} className="menu-link">
                            {menu.title}
                        </a>
                    </div>
                ))}
            </nav>
        </div>
    );
};

export default MobileMenu;
