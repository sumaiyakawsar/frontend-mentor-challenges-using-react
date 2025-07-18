import logo from '../images/logo.svg'
import { MdOutlineMenu } from "react-icons/md";

const Navbar = ({ toggleMenu, menuTitles }) => {
    return (
        <div className='navbar'>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <button type="button" className="menu-toggle" onClick={toggleMenu}>
                 <MdOutlineMenu className='icon'/>

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