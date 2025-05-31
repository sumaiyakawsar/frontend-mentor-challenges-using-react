import iconMenu from '../images/icon-hamburger.svg'
import logo from '../images/logo-bookmark.svg'

const Navbar = ({ toggleMenu, menuTitles }) => {
    return (
        <div className='navbar'>
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <button type='button' className="menu-toggle" onClick={toggleMenu}>
                <img src={iconMenu} alt="" />
            </button>
            <nav className="nav-links">
                {menuTitles.map((menu, id) => (
                    <a href={menu.href} key={id}>
                        {menu.title}
                    </a>
                ))}

                <button type="button" className='btn btn__Login'>Login</button>
            </nav>
        </div>
    )
}

export default Navbar