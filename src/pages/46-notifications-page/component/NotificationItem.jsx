import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function NotificationItem({
    id,
    name,
    action,
    target,
    time,
    avatar,
    isRead,
    message,
    image,
    triggerAnimation
}) {
    const notificationRef = useRef(null);



    useEffect(() => {
        if (triggerAnimation && notificationRef.current) {
            const dotEl = notificationRef.current.querySelector(".dot");

            const tl = gsap.timeline();

            if (dotEl) {
                tl.to(dotEl, {
                    scale: 0.6,
                    opacity: 0,
                    duration: 0.5,
                    ease: "power2.inOut"
                });
            }

            tl.to(notificationRef.current, {
                backgroundColor: "#ffffff",
                duration: 0.8,
                ease: "power2.inOut"
            },
                "<20%"
            );
        }
    }, [triggerAnimation]);

    return (
        <div
            ref={notificationRef}
            className={`notification ${!isRead ? "unread" : ""}`}
        >
            <img className="avatar" src={avatar} alt={`${name} avatar`} />
            <div className="content">
                <p className="message">
                    <span className="name">{name}</span> {action}
                    {target && <span className="target"> {target}</span>}
                    {!isRead && <span className="dot" />}
                </p>
                <p className="time">{time}</p>
                {message && <p className="private-message">{message}</p>}
            </div>
            {image && <img src={image} alt="commented pic" className="thumbnail" />}
        </div>
    );
}
