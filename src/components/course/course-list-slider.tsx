"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import CourseCard from './course-card';
import "swiper/css";

export default function CourseListSlider() {
    return (
        <Swiper
            spaceBetween={15}
            slidesPerView={3.2}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>
                <CourseCard />
            </SwiperSlide>
            <SwiperSlide>
                <CourseCard />
            </SwiperSlide>
            <SwiperSlide>
                <CourseCard />
            </SwiperSlide>
            <SwiperSlide>
                <CourseCard />
            </SwiperSlide>
            <SwiperSlide>
                <CourseCard />
            </SwiperSlide>
            <SwiperSlide>
                <CourseCard />
            </SwiperSlide>
        </Swiper>
    )
}
