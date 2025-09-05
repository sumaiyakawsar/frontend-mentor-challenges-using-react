import logo from '../images/logo.svg'
import imgAvatar from '../images/image-avatar.png'
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineMenu } from "react-icons/md";


const Navbar = ({ toggleMenu, toggleCart, cartItemCount, menuTitles, cartRef }) => {

    return (
        <div className='navbar'>

            <div className="navigation">
                <button type="button" className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
                    <MdOutlineMenu className='icon' />
                </button>
                
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>

                <nav className="nav-links">
                    {menuTitles.map((menu, id) => (

                        <a href={menu.src} key={id}>
                            {menu.title}
                        </a>
                    ))}
                </nav>

            </div>


            <div className="user">
                <div className="cart-icon-wrapper" onClick={toggleCart} ref={cartRef}>
                    <IoCartOutline className='cart-icon'/>
                    {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
                </div>

                <img src={imgAvatar} alt="user" className='imgavatar' />

            </div>
        </div>
    )
}

export default Navbar