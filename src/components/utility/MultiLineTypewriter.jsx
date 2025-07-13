import { useEffect, useState } from "react";

export default function MultiLineTypewriter({ text = '', speed = 50, className = '' }) {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setDisplayedText(text.slice(0, i + 1));
            i++;
            if (i >= text.length) clearInterval(interval);
        }, speed);

        return () => clearInterval(interval);
    }, [text, speed]);

    return (
        <h1 className={`typing ${className}`}>
            {displayedText.split('\n').map((line, i) => (
                <div key={i}>{line}</div>
            ))}
        </h1>
    );
}

