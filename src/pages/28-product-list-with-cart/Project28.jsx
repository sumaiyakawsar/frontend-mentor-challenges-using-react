import React, { useState, useRef } from "react";
import useFavicon from '../../components/favicons/favicon';
import useDocumentTitle from '../../components/favicons/useTitle';
import './style/project28.scss';


import ProductCard from "./component/ProductCard";
import Cart from "./component/Cart";
import OrderConfirmation from "./component/OrderConfirmation";

import { products } from "./data/data";


const Project28 = () => {
    useFavicon("icons/project28.png");
    useDocumentTitle("Product list with cart | Frontend Mentor");

    const [cart, setCart] = useState({});
    const [isConfirmed, setIsConfirmed] = useState(false);

    const addToCart = (product, quantity) => {
        setCart(prevCart => {
            if (quantity === 0) {
                const { [product.name]: _, ...rest } = prevCart; // remove item
                return rest;
            }
            return {
                ...prevCart,
                [product.name]: { ...product, quantity }
            };
        });
    };

    // Remove item from cart
    const removeItem = (productName) => {
        setCart(prev => {
            const { [productName]: _, ...rest } = prev;
            return rest;
        });


    };

    // Confirm order
    const confirmOrder = () => {
        setIsConfirmed(true);
    };

    // Reset everything
    const resetOrder = () => {
        setCart({});
        setIsConfirmed(false);
    };

    const cartItems = Object.values(cart);
    const total = cartItems.reduce(
        (sum, item) => sum + item.quantity * item.price,
        0
    );

    return (
        <div className='project28'>
            <div className="container">
                <div className="product-list">
                    <h1 className="product-list__title">Desserts</h1>
                    <div className="product-list__grid">
                        {products.map(product => (
                            <ProductCard
                                key={product.productId}
                                product={product}
                                quantity={cart[product.name]?.quantity || 0}
                                addToCart={addToCart}
                            />
                        ))}
                    </div>
                </div>

                <Cart
                    cartItems={cartItems}
                    onConfirmOrder={confirmOrder}
                    removeItem={removeItem} />

                {isConfirmed && <OrderConfirmation
                    isOpen={isConfirmed}
                    cartItems={cartItems}
                    total={total}
                    onReset={resetOrder} />}
            </div>
        </div>
    )
}



export default Project28