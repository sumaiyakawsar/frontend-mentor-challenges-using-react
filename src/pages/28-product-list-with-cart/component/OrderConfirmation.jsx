
import { IoIosCheckmarkCircleOutline } from "react-icons/io";


const OrderConfirmation = ({ isOpen, cartItems, onReset, total }) => {
    if (!isOpen) return null;

    return (
        <div className="confirmation-overlay">
            <div className="confirmation-modal">
                <div className="confirmation-header">
                    <div className="check-circle">
                        <IoIosCheckmarkCircleOutline className='icon' />
                    </div>
                    <h1>Order Confirmed</h1>
                    <p className="subtitle">We hope you enjoy your food!</p>
                </div>
                <div className="confirmation-products">
                    <ul className="confirmation-items">
                        {cartItems.map((item) => (
                            <li key={item.name} className="confirmation-item">
                                <img src={item.image.thumbnail} alt={item.name} />
                                <div className="item-info">
                                    <p className="item-name">{item.name}</p>
                                    <p className="item-meta">
                                        <span className='item-quantity'>
                                            {item.quantity}x
                                        </span>

                                        <span> @ ${item.price.toFixed(2)}</span>
                                    </p>
                                </div>
                                <p className="item-price">
                                    ${(item.quantity * item.price).toFixed(2)}
                                </p>
                            </li>
                        ))}
                    </ul>

                    <div className="order-total">
                        <span>Order Total</span>
                        <strong>${total.toFixed(2)}</strong>
                    </div>
                </div>


                <button type="button" className="btn" onClick={onReset}>
                    Start New Order
                </button>
            </div>
        </div>

    );
};






export default OrderConfirmation