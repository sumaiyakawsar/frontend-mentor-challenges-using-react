import iconMenu from '../images/icon-hamburger.svg'
import logo from '../images/logo.svg'

const Navbar = ({ toggleMenu, menuTitles }) => {
    return (
        <div className='navbar'>
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <button className="menu-toggle" onClick={toggleMenu}>
                <img src={iconMenu} alt="" />
            </button>
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