import { HiEllipsisHorizontal } from "react-icons/hi2";

const ActivityCard = ({ title, current, previous, timeframe }) => {


    const labelMap = {
        daily: "Yesterday",
        weekly: "Last Week",
        monthly: "Last Month",
    };

    return (

        <div className={`activity-card ${title.toLowerCase().replace(" ", "-")}`}>
            <div className="activity-card__image-wrapper">
            </div>
            <div className="activity-card__content">

                <div className="activity-card__header">
                    <h2 className="activity-card__title">{title}</h2>

                    <HiEllipsisHorizontal className="activity-card__ellipsis" />

                </div>
                <div className="activity-card__details">
                    <p className="activity-card__current">{current}hrs</p>
                    <p className="activity-card__previous">
                        {labelMap[timeframe]} - {previous}hrs
                    </p>
                </div>

            </div>
        </div>

    );
};

export default ActivityCard