import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Lightbox = ({ images, currentIndex, onClose, onNavigate }) => {
    return (
        <div className="lightbox-overlay">
            <div className="lightbox-content">
                <button type="button" className="close-btn" onClick={onClose}><FaTimes /></button>

                <div className="lightbox-image-wrapper">


                    <button type="button" className="nav left" onClick={() => onNavigate("prev")}><FaChevronLeft /></button>
                    <img src={images[currentIndex]} alt={`product ${currentIndex + 1}`} className="lightbox-main" />
                    <button type="button" className="nav right" onClick={() => onNavigate("next")}><FaChevronRight /></button>
                </div>

                <div className="lightbox-thumbnails">
                    {images.map((img, index) => (

                        <div
                            key={index}
                            className={`thumb-wrapper ${index === currentIndex ? "active" : ""}`}
                            onClick={() => onNavigate(index)}
                        >
                            <img src={img} alt={`thumb ${index + 1}`} className="thumb-image" />
                        </div>


                    ))}
                </div>
            </div>
        </div>
    );
};

export default Lightbox;
