import IMG_1 from "../../assets/gallery/IMG_1.jpeg";
import IMG_2 from "../../assets/gallery/IMG_2.jpeg";
import IMG_3 from "../../assets/gallery/IMG_3.jpeg";
import IMG_4 from "../../assets/gallery/IMG_4.jpeg";
import IMG_5 from "../../assets/gallery/IMG_5.jpeg";
import IMG_6 from "../../assets/gallery/IMG_6.jpeg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Pagination } from "swiper/modules";

export default function Gallery() {
  const images = [IMG_1, IMG_2, IMG_3, IMG_4, IMG_5, IMG_6];

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
