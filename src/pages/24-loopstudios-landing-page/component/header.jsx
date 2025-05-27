import React, { useState } from "react";
import MobileMenu from "./MobileMenu";
import Navbar from "./Navbar";



function Header({MenuTitles}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);




    return (
        <header className="header">
            <div className="container">
                <Navbar toggleMenu={() => setIsMenuOpen(true)} menuTitles={MenuTitles} />

                {isMenuOpen && <MobileMenu isOpen={isMenuOpen} closeMenu={() => setIsMenuOpen(false)} menuTitles={MenuTitles} />}

                <div className="headline">
                    <h1>Immersive experiences that deliver</h1>
                </div>
            </div>

        </header>
    )
}

export default Header