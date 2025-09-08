import { useState } from 'react';
import useFavicon from '../../components/favicons/favicon';
import useDocumentTitle from '../../components/favicons/useTitle';
import './style/project58.scss';
import { testimonials } from "./data/data";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import imgBg from "./images/pattern-bg.svg"

function Project58() {
    useFavicon("icons/project58.svg");
    useDocumentTitle("Coding Bootcamp Testimonials Slider | Frontend Mentor");

    const [index, setIndex] = useState(0);

    const prevSlide = () =>
        setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

    const nextSlide = () =>
        setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

    const { quote, name, role, img } = testimonials[index];

    return (
        <div className='project-58'>

            <div className="testimonial">
                {/* Image + background */}
                <div className="testimonial__image-wrapper">
                    <img src={imgBg} alt="bg shape" className="testimonial__bg-shape" />
                    <img src={img} alt={name} className="testimonial__image" loading="lazy" />

                    <div className="testimonial__controls">
                        <button onClick={prevSlide}>
                            <FaChevronLeft size={20} />
                        </button>
                        <button onClick={nextSlide}>
                            <FaChevronRight size={20} />
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="testimonial__content">
                    <p className="testimonial__text">“{quote}”</p>
                    <div className="testimonial__details">
                        <h4 className="testimonial__name">{name}</h4>
                        <p className="testimonial__role">{role}</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Project58


