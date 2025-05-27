import arrow from "../images/icon-arrow.svg"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";


function Slide({ desktopImg, mobileImg, title, description, onPrev, onNext, animate }) {
    return (
        <div className={`slide ${animate ? "slide--animate" : ""}`}>


            <div className="slide__image">
                <picture>
                    <source media="(min-width: 768px)" srcSet={desktopImg} />
                    <img src={mobileImg} alt={title} />
                </picture>
                <div className="hero__nav">
                    <button type='button' onClick={onPrev}><FaChevronLeft /></button>
                    <button type='button' onClick={onNext}><FaChevronRight /></button>
                </div>
            </div>

            <div className="slide__content">

                <h1>{title}</h1>
                <p>{description}</p>

                <a href="#/project25" target="_blank" className="slide__shop-link" rel="noopener noreferrer">
                    Shop now <img src={arrow} alt="arrow" />
                </a>
            </div>
        </div>
    );
}
export default Slide