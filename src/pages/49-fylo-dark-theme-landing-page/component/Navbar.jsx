import logo from '../images/logo.svg' 

const Navbar = ({  menuTitles }) => {
    return (
        <div className='navbar'>
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