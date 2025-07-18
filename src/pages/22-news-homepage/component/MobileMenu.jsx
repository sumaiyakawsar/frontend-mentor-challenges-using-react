import { LiaTimesSolid } from "react-icons/lia";

const MobileMenu = ({ isOpen, closeMenu, menuTitles }) => {
    return (
        <>
            {isOpen && <div className="overlay" onClick={closeMenu} />}

            <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
                <button type="button" className="close-button" onClick={closeMenu}>
                    <LiaTimesSolid className='icon' />
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
