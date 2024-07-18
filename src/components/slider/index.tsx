import React from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';

export type SliderProps = {
    listItems: React.ReactNode[]
}
const Slider: React.FC<SliderProps> = (props) => {
    return (
        <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
        >
            {
                props.listItems.map((item, index) =>
                    <SwiperSlide key={index}>{item}</SwiperSlide>
                )
            }
        </Swiper>
    )
}

export default Slider;