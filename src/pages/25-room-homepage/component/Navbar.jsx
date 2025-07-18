import logo from '../images/logo.svg'

import { MdOutlineMenu } from "react-icons/md";

const Navbar = ({ toggleMenu, menuTitles }) => {
    return (
        <div className='navbar'>
            <button type='button' className="menu-toggle" onClick={toggleMenu}>
                {/* <img src={iconMenu} alt="" /> */}
                <MdOutlineMenu className='icon' />

            </button>

            <div className="logo">
                <img src={logo} alt="logo" />
            </div>



            <nav className="nav-links">
                {menuTitles.map((menu, id) => (
                    <a href={menu.href} key={id}>
                        {menu.title}
                    </a>
                ))}
            </nav>
        </div>
    )
}

export default Navbar