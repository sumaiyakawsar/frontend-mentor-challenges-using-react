import { useState, useEffect } from "react";
import iconcart from "../images/icon-add-to-cart.svg"

import { FiMinus, FiPlus } from "react-icons/fi";


const ProductCard = ({ product, addToCart, quantity }) => {
    const [selected, setSelected] = useState(quantity > 0);
    const [localQuantity, setLocalQuantity] = useState(quantity);

    useEffect(() => {
        setLocalQuantity(quantity);
        setSelected(quantity > 0);
    }, [quantity]);

    useEffect(() => {
        if (localQuantity === 0 && selected) {
            setSelected(false);
            addToCart(product, 0);
        } else if (localQuantity > 0) {
            addToCart(product, localQuantity);
        }
    }, [localQuantity]);


    const handleAddClick = () => {

        setSelected(true);
        setLocalQuantity(1);
    };
    const increment = () => setLocalQuantity(prev => prev + 1);
    const decrement = () => setLocalQuantity(prev => Math.max(prev - 1, 0));



    return (
        <div className="product-card">
            <picture className={`product-image ${selected ? "active" : ""}`}>
                <source media="(min-width: 768px)" srcSet={product.image.desktop} />
                <img src={product.image.mobile} alt={product.name} />
            </picture>

            <div className="cart-actions">
                <div className={`cart-switch ${selected ? "show-quantity" : ""}`}>
                    <div className="add-view">
                        <button type="button" onClick={handleAddClick} className="add-to-cart-btn">
                            <img src={iconcart} alt="" />
                            Add to Cart
                        </button>
                    </div>

                    <div className="quantity-controls-view">
                        <div className="quantity-controls">
                            <button type="button" onClick={decrement}>
                                <FiMinus className="icon" />
                            </button>
                            <span>{quantity}</span>
                            <button type="button" onClick={increment}>
                                <FiPlus className="icon" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="product-card__info">
                <span className="product__category">{product.category}</span>
                <p className="product__name">{product.name}</p>
                <p className="product__price">${product.price.toFixed(2)}</p>
            </div>
        </div>
    );
};

export default ProductCard;
