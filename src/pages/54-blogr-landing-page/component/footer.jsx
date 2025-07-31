import logo from '../images/logo.svg'

function Footer({ menuTitles }) {
    return (
        <footer className='footer-54'>
            <div className="container">

                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>

                <nav className="nav-links">
                    {menuTitles.map((menu, index) => (
                        <div className="nav-item" key={index}>
                            <span className="menu-link">
                                {menu.title}
                            </span>

                            {menu.dropdown && (
                                <div className="dropdown">
                                    {menu.dropdown.map((item, idx) => (
                                        <a href={item.link} key={idx} className="dropdown-item">
                                            {item.title}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </nav>
            </div>
        </footer>
    )
}

export default Footer