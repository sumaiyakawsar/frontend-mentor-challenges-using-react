import React, { useState, useRef } from 'react';
import FaqItem from './FaqItem';

const FaqAccordion = ({ items }) => {
    const [openIndex, setOpenIndex] = useState(0);
     const buttonRefs = useRef([]);

    const toggleItem = index => {
        setOpenIndex(prev => (prev === index ? null : index));
    };

    const handleKeyDown = (e, index) => {
        const lastIndex = items.length - 1;
        switch (e.key) {
            case 'Enter':
            case ' ':
                e.preventDefault();
                toggleItem(index);
                break;
            default:
                break;
        }
    };

    return (
        // <div className="faq-wrapper">
        <div className="faq-card">

            {items.map((item, idx) => (
                <FaqItem
                    key={idx}
                    id={`faq-${idx}`}
                    title={item.title}
                    content={item.content}
                    isOpen={openIndex === idx}
                    onClick={() => toggleItem(idx)} 
                    onKeyDown={(e) => handleKeyDown(e, idx)}
                    ref={el => buttonRefs.current[idx] = el}
                />
            ))}
        </div>

    );
};

export default FaqAccordion;