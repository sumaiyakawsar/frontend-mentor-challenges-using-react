import { IoCloseCircleOutline } from "react-icons/io5";
import carbon from "../images/icon-carbon-neutral.svg"
import illustration from "../images/illustration-empty-cart.svg"

const Cart = ({ cartItems, onConfirmOrder, removeItem }) => {
    const totalPrice = cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0).toFixed(2);
    const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <div className="cart">
            <h2>Your Cart ({totalQuantity})</h2>
            {cartItems.length === 0 ? (
                <div className="cart__empty">
                    <img src={illustration} alt="Empty Cart" />
                    <p>Your added items will appear here</p>
                </div>
            ) : (
                <>
                    <ul className="cart__items">
                        {cartItems.map(item => (
                            <li key={item.productId}>
                                <div>
                                    <p className="item-name">{item.name}</p>
                                    <div className="item-meta">
                                        <span className="item-quantity"> {item.quantity}x</span>
                                        <span className="item-price"> @ ${item.price.toFixed(2)}    </span>
                                        <span className="item-total"> ${(item.quantity * item.price).toFixed(2)}</span>

                                    </div>
                                </div>
                                <button type="button" onClick={() => removeItem(item.name)} aria-label={`Remove ${item.name}`}  >
                                    <IoCloseCircleOutline />
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div className="cart__summary">
                        <div className="cart__total">Order Total <strong>${totalPrice}</strong></div>
                        <div className="cart__note">
                            <img src={carbon} alt="" />
                            <p>This is a <strong>carbon-neutral</strong> delivery
                            </p>
                        </div>

                        <button type="button" className="btn" onClick={onConfirmOrder}>Confirm Order</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;

