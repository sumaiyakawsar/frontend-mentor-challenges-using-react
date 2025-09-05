import { useState, useEffect } from 'react';
import useFavicon from '../../components/favicons/favicon';
import useDocumentTitle from '../../components/favicons/useTitle'
import './style/project3.scss'
import CountdownEL from './component/CountdownEL';


const Project3 = () => {
    useFavicon("icons/project3.png");
    useDocumentTitle("Launch countdown timer | Frontend Mentor");

    const timeUnits = [
        { id: 'days', label: 'days' },
        { id: 'hours', label: 'hours' },
        { id: 'mins', label: 'minutes' },
        { id: 'seconds', label: 'seconds' },
    ];

    const [timeLeft, setTimeLeft] = useState(
        timeUnits.reduce((acc, unit) => {
            acc[unit.id] = "00";
            return acc;
        }, {})
    );

    useEffect(() => {
        const finalDate = new Date("2025-10-20");

        function formatTime(time) {
            return time < 10 ? `0${time}` : `${time}`;
        }

        function updateCountdown() {
            const currentDate = new Date();
            const totalSeconds = (finalDate - currentDate) / 1000;

            const newValues = {
                days: formatTime(Math.floor(totalSeconds / 3600 / 24)),
                hours: formatTime(Math.floor(totalSeconds / 3600) % 24),
                mins: formatTime(Math.floor(totalSeconds / 60) % 60),
                seconds: formatTime(Math.floor(totalSeconds) % 60),
            };

            setTimeLeft(newValues);
        }

        updateCountdown();
        const interval = setInterval(updateCountdown, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="container project-3">
            <h1 className="heading">We're launching soon</h1>
            <div className="countdown-container">

                {timeUnits.map((unit) => (
                    <CountdownEL
                        key={unit.id}
                        id={unit.id}
                        label={unit.label}
                        value={timeLeft[unit.id]}
                    />
                ))}

            </div>
        </div>
    )
}

export default Project3