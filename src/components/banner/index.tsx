"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useWindowSize } from "react-use";
import SiteSearchBox from "../global-search-box";
import { Typography } from '@/mt-react';

export default function SiteBanner() {
    const { width, height } = useWindowSize();
    const [imageSize, setImageSize] = useState({
        width: 0,
        height: 0,
    });

    useEffect(() => {
        setImageSize({
            width: width,
            height: height - 74
        })
    }, [width, height])

    return (
        <div
            className="relative z-20 overflow-hidden"
            style={{
                width: `${imageSize.width}px`,
                height: `${imageSize.height}px`,
            }}
        >
            <Image
                src={'/assets/images/banner/01.avif'}
                {
                    ...imageSize
                }
                alt="banner image"
            />

            <div
                className="absolute z-[60] w-full h-full mx-auto flex items-center inset-0 bg-[#052044] opacity-70"
            >
                <div
                    className="flex items-center justify-start w-full h-full mx-auto max-w-7xl"
                >
                    <div
                        className="flex flex-col"
                    >
                        <Typography
                            variant="h3"
                            className="text-white"
                        >
                            سامانه تدرس آنلاین
                        </Typography>
                        <Typography
                            variant="paragraph"
                            className="mb-8 text-white"
                        >
                            هر موضوعی را در هر زمان مطالعه کنید. هزاران دوره آموزشی را با کمترین قیمت جستجو کنید!
                        </Typography>
                        <SiteSearchBox />
                    </div>
                </div>
            </div>
        </div>
    )
}
