export default function CraftCard({ reward, onSelect, formatCurrency }) {
    const isOutOfStock = reward.quantityLeft === 0;

    return (
        <div className={`craft-card ${isOutOfStock ? "disabled" : ""}`}>
            <div className="craft-card__header">
                <h3>{reward.title}</h3>
                {reward.pledge && <span className="pledge"> Pledge {formatCurrency(reward.pledge)} or more</span>}
            </div>
            <p className="craft-card__description">{reward.description}</p>
            {reward.pledge && (
                <div className="craft-card__footer">
                    <h4>{reward.quantityLeft} <span>left</span></h4>
                    <button
                        type="button"
                        disabled={isOutOfStock}
                        className="btn btn__primary"
                        onClick={() => onSelect(reward.id)}
                    >
                        {isOutOfStock ? "Out of stock" : "Select Reward"}
                    </button>
                </div>
            )}
        </div>
    );
}
