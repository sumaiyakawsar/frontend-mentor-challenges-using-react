import React from 'react'
import iconMenu from '../images/icon-menu.svg'
import logo from '../images/logo.svg'

const Navbar = ({ toggleMenu, menuTitles }) => {
    return (
        <div className='navbar'>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <button type="button" className="menu-toggle" onClick={toggleMenu}>
                <img src={iconMenu} alt="" />
            </button>
            <nav className="nav-links">
                {menuTitles.map((menu, id) => (
                    <a href={menu.src}>
                        {menu.title}
                    </a>
                ))}
            </nav>
        </div>
    )
}

export default Navbar