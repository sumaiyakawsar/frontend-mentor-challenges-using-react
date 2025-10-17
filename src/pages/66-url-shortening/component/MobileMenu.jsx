const MobileMenu = ({ isOpen, menuTitles, closeMenu }) => {
    return (
        <>
            {isOpen && <div className="overlay" onClick={closeMenu} />}
            <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
                <nav className="mobile-nav">
                    <div className="nav__wrapper">
                        {menuTitles.map((menu, index) => (
                            <a href={menu.src} key={index}
                                className={`menu-link ${menu.dropdown && activeDropdown === index ? 'active' : ''}`}
                            >
                                {menu.title}
                            </a>
                        ))}
                    </div>
                    <div className="btns">
                        <button type='button' className='btn btn__primary'> Login </button>
                        <button type='button' className='btn btn__secondary'>Sign Up</button>
                    </div>
                </nav>
            </div>
        </>


    );
};

export default MobileMenu;
