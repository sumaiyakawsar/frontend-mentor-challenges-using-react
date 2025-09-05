import { useEffect } from 'react';
import gsap from 'gsap';

const CountdownEL = ({ id, label, value }) => {

    useEffect(() => {
        const element = document.getElementById(id);
        if (!element) return;

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
    }, [value]); 

    return (
        <div className='ctd'>
            <div className={`countdown-el ${id}`} id={id}>
                <span className="top"></span>
                <span className="top-back"><span></span></span>
                <span className="bottom"></span>
                <span className="bottom-back"><span></span></span>
            </div>
            <div className="describe-container">
                <p>{label}</p>
            </div>
        </div>
    );
};

export default CountdownEL;




