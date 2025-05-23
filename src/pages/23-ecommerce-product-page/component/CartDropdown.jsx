import React, { useState } from "react";

const CartDropdown = ({ cartitems, onRemove, onCheckout, isCartOpen, removingItemId }) => {

    return (
        <div className={`cart-dropdown ${isCartOpen ? "open" : ""}`}>
            <h4>Cart</h4>

            {cartitems.length === 0 ? (
                <p className="empty-cart">Your cart is empty.</p>
            ) : (
                <>
                    <div className="cart-items">
                        {cartitems.map((item) => (
                            <div key={item.id}
                                className={`cart-item ${removingItemId === item.id ? "removing" : ""}`}
                            >
                                <img src={item.image} alt={item.name} className="item-image" />
                                <div className="item-info">
                                    <p>{item.name}</p>
                                    <p>
                                        ${item.price.toFixed(2)} x {item.quantity}{" "}
                                        <strong>${(item.price * item.quantity).toFixed(2)}</strong>
                                    </p>
                                </div>
                                <button className="delete-btn"
                                    onClick={() => onRemove(item.id)}
                                    aria-label="Remove item"
                                >🗑️</button>
                            </div>
                        ))}
                    </div>
                    <div className="btn">
                        <button className="checkout-btn" onClick={onCheckout}>Checkout</button>
                    </div>

                </>
            )}
        </div>
    );
};

export default CartDropdown;

