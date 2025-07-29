const PricingCard = ({ title, price, storage, users, sendLimit, highlighted }) => {
    return (
        <div className={`pricing-card ${highlighted ? 'highlighted' : ''}`}>
            <span>{title}</span>
            <h2>${price}</h2>

            
            <ul>
                <li>{storage} Storage</li>
                <li>{users} Users Allowed</li>
                <li>Send up to {sendLimit}</li>
            </ul>
            <button>Learn More</button>
        </div>
    );
};

export default PricingCard;
