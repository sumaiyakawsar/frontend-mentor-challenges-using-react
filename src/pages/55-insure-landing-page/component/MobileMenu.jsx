
const MobileMenu = ({ isOpen,  menuTitles }) => {
    return (
        <>
            {isOpen && <div className="overlay" onClick={() => setIsMenuOpen(false)} />}
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
                        <button type='button' className='btn btn__mobile'>View Plans</button>
                    </div>
                </nav>
            </div>
        </>


    );
};

export default MobileMenu;
