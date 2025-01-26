import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Slider.scss";

const Slider = () => {
  return (
    <div className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] bg-gray-300">
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop
        className="h-full"
      >
        <SwiperSlide>
          <div className="h-full flex items-end justify-start bg-gray-400">
            <h2 className="text-white text-3xl font-bold underline uppercase absolute bottom-[110px] left-[170px]">
              Announcing New Matthew Matthews Brand Rentals
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-full flex items-end justify-start bg-gray-500">
            <h2 className="text-white text-3xl font-bold underline uppercase absolute bottom-[110px] left-[170px]">
              Another Great Feature!
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-full flex items-end justify-start bg-gray-600">
            <h2 className="text-white text-3xl font-bold underline uppercase absolute bottom-[110px] left-[170px]">
              Check This Out!
            </h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;


