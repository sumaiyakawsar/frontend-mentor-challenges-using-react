import React, { useState, useRef } from "react";
import product1 from "../images/image-product-1.jpg"
import product2 from "../images/image-product-2.jpg"
import product3 from "../images/image-product-3.jpg"
import product4 from "../images/image-product-4.jpg"
import iconminus from "../images/icon-minus.svg"
import iconplus from "../images/icon-plus.svg"
import Lightbox from "./Lightbox";
import { IoCartOutline } from "react-icons/io5";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const productImages = [product1, product2, product3, product4];


const productData = {
    id: 1,
    name: "Fall Limited Edition Sneakers",
    description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
    price: 125,
    originalPrice: 250,
    discount: 50,
};

const Product = ({ onAddToCart, cartRef }) => {
    const [quantity, setQuantity] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const imageRef = useRef(null);


    const increment = () => setQuantity(prev => prev + 1);
    const decrement = () => setQuantity(prev => (prev > 0 ? prev - 1 : 0));


    const handleAdd = () => {
        if (quantity > 0 && imageRef.current && cartRef?.current) {
            const img = imageRef.current;
            const cart = cartRef.current;

            const clone = img.cloneNode(true);
            const imgRect = img.getBoundingClientRect();
            const cartRect = cart.getBoundingClientRect();

            clone.style.position = "fixed";
            clone.style.left = `${imgRect.left}px`;
            clone.style.top = `${imgRect.top}px`;
            clone.style.width = `${imgRect.width}px`;
            clone.style.height = `${imgRect.height}px`;
            clone.style.transition = "all 0.8s ease";
            clone.style.zIndex = 1000;
            clone.style.borderRadius = "10px";

            document.body.appendChild(clone);

            requestAnimationFrame(() => {
                clone.style.left = `${cartRect.left + cartRect.width / 2 - 20}px`;
                clone.style.top = `${cartRect.top + cartRect.height / 2 - 20}px`;
                clone.style.width = "40px";
                clone.style.height = "40px";
                clone.style.opacity = "0.2";
            });

            setTimeout(() => {
                document.body.removeChild(clone);
                onAddToCart({ ...productData, image: productImages[currentImageIndex] }, quantity);
                setQuantity(0);
            }, 800);
        }
    };

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % productImages.length);
    };

    const handlePrevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? productImages.length - 1 : prevIndex - 1
        );
    };

    const handleOpenLightbox = () => {
        if (window.innerWidth >= 768) {
            setCurrentImageIndex(currentImageIndex);
            setIsLightboxOpen(true);
        }
    };


    return (
        <section className="product">

            <div className="product__images">
                <div className="main-image-wrapper">
                    <button type="button" className="nav left"
                        onClick={handlePrevImage}
                        aria-label="Previous image"><FaChevronLeft /></button>

                    <img
                        ref={imageRef}

                        src={productImages[currentImageIndex]}
                        alt={productData.name}
                        className="main-image"
                        onClick={handleOpenLightbox} />

                    <button type="button" className="nav right"
                        onClick={handleNextImage}
                        aria-label="Next image"><FaChevronRight /></button>
                </div>


                <div className="thumbnails">
                    {productImages.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={`thumbnail ${index + 1}`}
                            className={`thumbnail ${currentImageIndex === index ? "active" : ""}`}
                            onClick={() => setCurrentImageIndex(index)}

                        />


                    ))}
                </div>
            </div>

            <div className="product__details">
                <div className="prod">
                    <span className="company-name">Sneaker Company</span>
                    <h1 className="product-name">{productData.name}</h1>
                </div>


                <p className="product-description">{productData.description}</p>

                <div className="price">
                    <div className="product__price">
                        <span className="current">${productData.price.toFixed(2)}</span>
                        <span className="discount">{productData.discount}%</span>
                    </div>
                    <span className="original">${productData.originalPrice.toFixed(2)}</span>
                </div>

                <div className="product__actions">
                    <div className="quantity">
                        <button type="button" onClick={decrement}>
                            <img src={iconminus} alt="subtract" />
                        </button>
                        <span>{quantity}</span>
                        <button type="button" onClick={increment}>
                            <img src={iconplus} alt="add" />
                        </button>
                    </div>
                    <button type="button" className="add-to-cart" onClick={handleAdd}>
                        <IoCartOutline className="icon" />
                        <span>Add to cart</span>
                    </button>
                </div>
            </div>

            {isLightboxOpen && (
                <Lightbox
                    images={productImages}
                    currentIndex={currentImageIndex}
                    onClose={() => setIsLightboxOpen(false)}
                    onNavigate={(action) => {
                        let newIndex;
                        if (typeof action === "number") {
                            newIndex = action;
                        } else {
                            newIndex =
                                action === "prev"
                                    ? (currentImageIndex - 1 + productImages.length) % productImages.length
                                    : (currentImageIndex + 1) % productImages.length;
                        }
                        setCurrentImageIndex(newIndex);

                    }}
                />
            )}

        </section>
    );
};

export default Product;
