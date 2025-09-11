export default function StatCard({ amount, label }) {
    return (
        <div className="progress-card__stats">
            <span className="progress-card__stats-amount">{amount}</span>
            <span className="progress-card__stats-label">{label}</span>
        </div>
    );
}
