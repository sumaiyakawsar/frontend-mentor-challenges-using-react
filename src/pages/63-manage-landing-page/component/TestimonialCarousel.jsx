import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { testimonials } from "../data/data";

const TestimonialCarousel = () => {


    return (
        <section className="testimonials">
            <h2>What they’ve said</h2>

            <div className="carousel">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    loop={true}
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    spaceBetween={32}
                    slidesPerView={1} 
                    breakpoints={{
                        768: { slidesPerView: 2 },  // tablet
                        1024: { slidesPerView: 3 }, // desktop
                    }}
                >
                    {testimonials.map(({ id, name, quote, img }) => (
                        <SwiperSlide key={id}>
                            <div className="testimonial-card">
                                <img src={img} alt={name} className="testimonial-img" />
                                <h4 className="testimonial-name">{name}</h4>
                                <p className="testimonial-quote">“{quote}”</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>

            <button type="button" className="btn btn__primary">
                Get Started
            </button>
        </section>
    );
};

export default TestimonialCarousel;
