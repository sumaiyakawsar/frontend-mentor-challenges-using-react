import React from 'react'
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const FaqItem = ({ id, title, content, isOpen, onClick, onKeyDown }) => (
    <div className={`faq-item ${isOpen ? 'open' : ''}`}>
        <button type="button"
            id={`faq-button-${id}`}
            className="faq-question"
            onClick={onClick}
            onKeyDown={onKeyDown}
            aria-expanded={isOpen}
            aria-controls={`faq-content-${id}`}
            aria-labelledby={`faq-${id}`}
        >
            <span className='title'>{title}</span>
            <span className="icon">
                {isOpen ?
                    <FaChevronUp />
                    :
                    <FaChevronDown />
                }
            </span>
        </button>
        <div
            id={`faq-content-${id}`}
            role="region"
            aria-labelledby={`faq-button-${id}`}
            className="faq-answer"
            hidden={!isOpen}
        >
            <p>{content}</p>
        </div>
    </div>
);

export default FaqItem



