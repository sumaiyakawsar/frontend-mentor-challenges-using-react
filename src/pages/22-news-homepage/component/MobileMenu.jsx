import React from 'react';
import iconMenuClose from '../images/icon-menu-close.svg'

const MobileMenu = ({ isOpen, closeMenu, menuTitles }) => {
    return (
        <>
            {isOpen && <div className="overlay" onClick={closeMenu} />}

            <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
                <button className="close-button" onClick={closeMenu}>
                    <img src={iconMenuClose} alt="" />
                </button>


                <nav className="mobile-nav">
                    {menuTitles.map((menu, id) => (
                        <a href={menu.src}>
                            {menu.title}
                        </a>
                    ))}
                </nav>

            </div>
        </>
    );
};

export default MobileMenu;
