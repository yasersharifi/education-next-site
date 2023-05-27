"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useWindowSize } from "react-use";

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
            className="overflow-hidden"
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
        </div>
    )
}
