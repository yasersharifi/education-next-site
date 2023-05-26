import { NextResponse } from "next/server";
import { ICourse } from '../../../../interfaces/course.interface';

export async function GET(request: Request) {
    const newCourses: ICourse[] = [
        {
            id: new Date().toTimeString(),
            title: 'آموزش react js',
            author: 'علی احمدی',
            image: "/assets/images/course/co-1.jpg",
            time: 20,
            // authorAvatar: "/assets/images/user/user-1.png"
        },
        {
            id: new Date().toTimeString(),
            title: 'آموزش node js',
            author: "یاسر شریفی زاده",
            image: "/assets/images/course/co-2.jpg",
            time: 12,
            authorAvatar: "/assets/images/user/user-2.jpg"
        },
        {
            id: new Date().toTimeString(),
            title: 'آموزش فرانت اند',
            author: "حسن محمدی",
            image: "/assets/images/course/co-3.jpg",
            time: 23,
            authorAvatar: "/assets/images/user/user-3.jpg"
        },
        {
            id: new Date().toTimeString(),
            title: 'آموزش طراحی وب سایت',
            author: "نازنین عبادی",
            image: "/assets/images/course/co-4.jpg",
            time: 2,
            authorAvatar: "/assets/images/user/user-4.jpg"
        },
        {
            id: new Date().toTimeString(),
            title: 'آموزش وب اسکرپینگ',
            author: "شیوا نازنین",
            image: "/assets/images/course/co-5.jpg",
            time: 11,
            authorAvatar: "/assets/images/user/user-5.jpg"
        },
        {
            id: new Date().toTimeString(),
            title: 'آموزش برنامه نویسی ماژولار',
            author: "علی قربانی",
            image: "/assets/images/course/co-6.jpg",
            time: 45,
            authorAvatar: "/assets/images/user/user-6.jpg"
        },
    ];

    return NextResponse.json({
        status: 200,
        statusText: 'success',
        data: newCourses,
    })
}
