import React, { useState } from "react";
import useFavicon from '../../components/favicons/favicon';
import useDocumentTitle from '../../components/favicons/useTitle';
import './style/project17.scss';
import { activityData } from './data/data'
import avatar from './images/image-jeremy.png';
import ActivityCard from "./component/ActivityCard";

const Project17 = () => {
    useFavicon("icons/project3.png");
    useDocumentTitle("Time tracking dashboard | Frontend Mentor");
    const [selected, setSelected] = useState("weekly");


    return (
        <div className='container project17'>

            <div className="dashboard__cards">
                <div className="profile__card">
                    <div className="profile__details">
                        <div className="profile-pic">
                            <img src={avatar} alt="" className="pro-img" />

                        </div>
                        <div className="user-details">
                            <span>Report for</span>
                            <h1>Jeremy Robson</h1>
                        </div>
                    </div>

                    <div className="dashboard__tabs">
                        {["daily", "weekly", "monthly"].map((period) => (
                            <button
                                key={period}
                                className={`dashboard__tab ${selected === period ? "active" : ""}`}
                                onClick={() => setSelected(period)}
                            >
                                {period.charAt(0).toUpperCase() + period.slice(1)}
                            </button>
                        ))}
                    </div>

                </div>
                {activityData.map((activity) => {
                    const current = activity.timeframes[selected].current;
                    const previous = activity.timeframes[selected].previous;

                    return (
                        <ActivityCard
                            key={activity.title}
                            title={activity.title}
                            current={current}
                            previous={previous}
                            timeframe={selected}
                            image={activity.image}
                        />
                    );
                })}

            </div>

        </div>
    )
}

export default Project17