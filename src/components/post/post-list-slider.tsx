"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import PostCard from './post-card';
import "swiper/css";
import { IPost } from '@/interfaces/post.interface';

interface IProps {
    posts: IPost[],
}

export default function PostListSlider(props: IProps) {
    const { posts } = props;

    return (
        <Swiper
            spaceBetween={15}
            slidesPerView={3.2}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {
                posts && posts.length && posts.map((post: IPost) => (
                    <SwiperSlide key={post.id}>
                        <PostCard
                            post={post}
                        />
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}
