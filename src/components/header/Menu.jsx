import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Menu = ({ showMenu, toggle, menuTitles }) => {

    const activeLink = "border-r-2";
    const normalLink = "hover:border-r-2 hover:border-r-white/50";

    return (
        <div
            className={
                toggle
                    ? "flex flex-col gap-8 fixed inset-0 left-1/3 pl-8 py-8 md:hidden bg-white/10 backdrop-blur-lg"
                    : "hidden "
            }
        >
            <div className="mb-12 mr-6 flex justify-end">
                <div className=" scale-150">
                    <AiOutlineClose onClick={showMenu} className="cursor-pointer" />
                </div>
            </div>

            {menuTitles.map((menu, id) => (
                <NavLink
                    to={menu.src}
                    onClick={showMenu}
                    className={({ isActive }) => (isActive ? activeLink : normalLink)}

                >
                    {/* <span className="font-bold mr-3">0{id}</span> */}
                    {menu.projectTitle}
                </NavLink>
            ))}
        </div>
    );
};

export default Menu;