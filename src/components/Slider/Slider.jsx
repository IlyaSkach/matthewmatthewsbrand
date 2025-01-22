import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules"; // Исправлено
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Slider.scss";

const Slider = () => {
  return (
    <div className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] bg-gray-300">
      <Swiper
        modules={[Navigation, Pagination, A11y]} // Модули подключены корректно
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop
        className="h-full"
      >
        <SwiperSlide>
          <div className="h-full flex items-center justify-center bg-gray-400">
            <h2 className="text-white text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold">
              Slide 1: Announcing New Matthew Matthews Brand Rentals
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-full flex items-center justify-center bg-gray-500">
            <h2 className="text-white text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold">
              Slide 2: Another Great Feature!
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-full flex items-center justify-center bg-gray-600">
            <h2 className="text-white text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold">
              Slide 3: Check This Out!
            </h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;


