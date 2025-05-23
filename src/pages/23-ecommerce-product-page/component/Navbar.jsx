import React from 'react'
import iconMenu from '../images/icon-menu.svg'

import logo from '../images/logo.svg'
import imgAvatar from '../images/image-avatar.png'
import { IoCartOutline } from "react-icons/io5";


const Navbar = ({ toggleMenu, toggleCart, cartItemCount, menuTitles, cartRef }) => {

    return (
        <div className='navbar'>

            <div className="navigation">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>

                <nav className="nav-links">
                    {menuTitles.map((menu, id) => (

                        <a href={menu.src} key={id}>
                            {menu.title}
                        </a>
                    ))}
                </nav>
                <button className="menu-toggle" onClick={toggleMenu}>
                    <img src={iconMenu} alt="" />
                </button>
            </div>


            <div className="user">
                <div className="cart-icon-wrapper" onClick={toggleCart} ref={cartRef}>
                    <IoCartOutline />
                    {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
                </div>

                <img src={imgAvatar} alt="user" className='imgavatar' />

            </div>
        </div>
    )
}

export default Navbar