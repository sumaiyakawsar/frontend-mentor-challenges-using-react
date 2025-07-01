import React, { useEffect } from 'react';
import gsap from 'gsap';
import useFavicon from '../../components/favicons/favicon';
import useDocumentTitle from '../../components/favicons/useTitle'
import './style/project3.scss'
import CountdownEL from './component/CountdownEL';


const Project3 = () => {
    useFavicon("icons/project3.png");
    useDocumentTitle(" Launch countdown timer | Frontend Mentor");

    const timeUnits = [
        { id: 'days', label: 'days' },
        { id: 'hours', label: 'hours' },
        { id: 'mins', label: 'minutes' },
        { id: 'seconds', label: 'seconds' },
    ];

    useEffect(() => {
        const daysEl = document.getElementById("days");
        const hoursEl = document.getElementById("hours");
        const minsEl = document.getElementById("mins");
        const secondsEl = document.getElementById("seconds");

        const finalDate = new Date("2025-07-31");

        function formatTime(time) {
            return time < 10 ? `0${time}` : `${time}`;
        }

        function animationFlip(element, value) {
            const valueInDom = element.querySelector(".bottom-back").innerText;
            const currentValue = value;
            if (valueInDom === currentValue) return;

            element.querySelector(".top-back span").innerText = currentValue;
            element.querySelector(".bottom-back span").innerText = currentValue;

            gsap.to(element.querySelector(".top"), {
                rotationX: "-180deg",
                transformPerspective: 300,
                ease: "quart.out",
                duration: 0.7,
                onComplete: () => {
                    element.querySelector(".top").innerText = currentValue;
                    element.querySelector(".bottom").innerText = currentValue;
                    gsap.set(element.querySelector(".top"), { rotationX: 0 });
                },
            });

            gsap.to(element.querySelector(".top-back"), {
                rotationX: "0",
                transformPerspective: 300,
                ease: "quart.out",
                duration: 0.7,
                clearProps: "all",
            });
        }

        function updateCountdown() {
            const currentDate = new Date();
            const totalSeconds = (finalDate - currentDate) / 1000;

            const days = Math.floor(totalSeconds / 3600 / 24);
            const hours = Math.floor(totalSeconds / 3600) % 24;
            const mins = Math.floor(totalSeconds / 60) % 60;
            const seconds = Math.floor(totalSeconds) % 60;

            printTime(days, hours, mins, seconds);
        }

        function printTime(days, hours, mins, seconds) {
            animationFlip(daysEl, formatTime(days));
            animationFlip(hoursEl, formatTime(hours));
            animationFlip(minsEl, formatTime(mins));
            animationFlip(secondsEl, formatTime(seconds));
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
                    <CountdownEL key={unit.id} id={unit.id} label={unit.label} />
                ))}
            </div>
        </div>


    )
}

export default Project3