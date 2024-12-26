import hand from "../../assets/gallery/hand.jpeg";
import arm from "../../assets/gallery/arm.jpg";
import leg from "../../assets/gallery/leg.jpeg";
import arm_man from "../../assets/gallery/arm_man.jpg";
import arm_chest from "../../assets/gallery/arm_chest.jpg";
import thigh from "../../assets/gallery/thigh.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Pagination } from "swiper/modules";

export default function Gallery() {
  const images = [hand, leg, arm, arm_man, arm_chest, thigh];

  return (
    <div className="gallery-container">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={3}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        breakpoints={{
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
        style={{ width: "100%", height: "auto" }}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <a href={src}>
              <img
                src={src}
                alt={`Slide ${index}`}
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
