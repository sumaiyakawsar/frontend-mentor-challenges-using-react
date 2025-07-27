
const MobileMenu = ({ isOpen, menuTitles }) => {
    return (
        <div className={`mobile-menu ${isOpen ? "open" : ""}`}>

            <nav className="mobile-nav">
                {menuTitles.map((menu, id) => (
                    <a href={menu.href}>
                        {menu.title}
                    </a>
                ))}
                <div>
                                        <button type="button" className='btn'>Contact</button>

                </div>

             
            </nav>


        </div>
    );
};

export default MobileMenu;
