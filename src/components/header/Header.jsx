import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
// import Menu from "./Menu";
// import { AiOutlineMenu } from "react-icons/ai";
// import { Projects } from "../../pages/homepage/data/data";
import { IoMdHome } from "react-icons/io";
import '../../styles/component.scss'

const Header = () => {
    // const [toggleMenu, setToggleMenu] = useState(false);

    // const showMenu = () => {
    //     setToggleMenu(!toggleMenu);
    // };

    // const activeLink = "py-4 border-b";
    // const normalLink = "py-4 border-0  hover:border-b hover:border-b-white/50";



    return (
        <header className="header">
            <Link
                to="/"
                className="home" aria-label="Home"
            >
                <IoMdHome className="home-icon"/>

            </Link>
            {/* <nav className="uppercase tracking-[0.16875em] transition-all duration-300 ease-linear">
                <div className="md:hidden cursor-pointer scale-150 mr-6">
                    <AiOutlineMenu onClick={showMenu} className="" />
                </div>

                <div className="hidden hamburger  backdrop-blur-3xl md:px-12 md:flex md:gap-12 lg:px-32 ">
                    {Projects.map((menu, id) => (
                        <NavLink
                            key={id}
                            to={menu.src}
                            className={({ isActive }) =>
                                isActive ? activeLink : normalLink
                            }
                            exact
                            strict
                        >
                            <span className="font-bold hidden lg:inline lg:mr-3">

                            </span>
                            {menu.projectTitle}
                        </NavLink>
                    ))}
                </div>
                <Menu
                    showMenu={showMenu}
                    toggle={toggleMenu}
                    menuTitles={Projects}
                />
            </nav> */}
        </header>

    );
};

export default Header;