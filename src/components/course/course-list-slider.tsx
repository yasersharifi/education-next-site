"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import CourseCard from './course-card';
import "swiper/css";
import { ICourse } from '@/interfaces/course.interface';

interface IProps {
    courses: ICourse[],
}

export default function CourseListSlider(props: IProps) {
    const { courses } = props;

    return (
        <Swiper
            spaceBetween={15}
            slidesPerView={3.2}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {
                courses && courses.length && courses.map((course: ICourse) => (
                    <SwiperSlide key={course.id}>
                        <CourseCard
                            course={course}
                        />
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}
