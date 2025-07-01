import React, { useState, useRef } from "react";
import useFavicon from '../../components/favicons/favicon';
import useDocumentTitle from '../../components/favicons/useTitle';
import './style/project23.scss';


import MobileMenu from "./component/MobileMenu";
import Navbar from "./component/Navbar";
import Product from "./component/Product";
import CartDropdown from "./component/CartDropdown";



const Project23 = () => {
    useFavicon("icons/project23.png");
    useDocumentTitle("E-commerce Product Page | Frontend Mentor");

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [removingItemId, setRemovingItemId] = useState(null);  

    const cartIconRef = useRef(null);

    const MenuTitles = [
        { title: "Collections", src: "#/project23" },
        { title: "Men", src: "#/project23" },
        { title: "Women", src: "#/project23" },
        { title: "About", src: "#/project23" },
        { title: "Contact", src: "#/project23" },
    ];

    const handleAddToCart = (product, quantity) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find(item => item.id === product.id);

            if (existingItem) {
                return prevItems.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            } else {
                return [...prevItems, { ...product, quantity }];
            }
        });
        setIsCartOpen(true);
    };

    const getTotalQuantity = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };
    const handleToggleCart = () => {
        setIsCartOpen((prev) => !prev);
    };



    const handleRemoveFromCart = (itemId) => {
        setRemovingItemId(itemId);

        setTimeout(() => {
            setCartItems((prevItems) => prevItems.filter(item => item.id !== itemId));
            setRemovingItemId(null);
        }, 300);
    };

    return (
        <div className='project-23'>

            <Navbar
                toggleMenu={() => setIsMenuOpen(true)}
                toggleCart={handleToggleCart}
                cartItemCount={getTotalQuantity()}
                menuTitles={MenuTitles}
                cartRef={cartIconRef}
            />

            <CartDropdown
                cartitems={cartItems}
                isCartOpen={isCartOpen}
                onRemove={handleRemoveFromCart}
                removingItemId={removingItemId}
                onCheckout={() => alert("Proceeding to checkout...")}
            />

            {isMenuOpen && <MobileMenu isOpen={isMenuOpen} closeMenu={() => setIsMenuOpen(false)} menuTitles={MenuTitles} />}

            <Product onAddToCart={handleAddToCart} cartRef={cartIconRef} />

        </div>
    )
}

export default Project23