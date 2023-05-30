"use client";

import { ICourse } from "@/interfaces/course.interface";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Avatar,
    Chip
  } from "@/mt-react";
import { PlayCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

interface IProps {
    course: ICourse
}

export default function CourseCard(props: IProps) {
    const { course } = props;

    return (
        <Card className="mt-6 mb-4 w-96">
            <CardHeader color="blue-gray" className="relative h-56">
                <Image
                    src={course.image}
                    alt="img-blur-shadow"
                    fill
                />
            </CardHeader>
            <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                    {course.title}
                </Typography>

            </CardBody>

            <CardFooter className="p-0">
                <div
                    className="flex items-center justify-between px-4 py-3 border-t border-gray-100"
                >
                    <div
                        className="flex items-center gap-1"
                    >
                        <Avatar src={course?.authorAvatar ?? '/assets/images/avatar.avif'} size="md" alt="avatar" withBorder={false} className="p-0.5" />
                        <Typography
                            variant="paragraph"
                            color="gray"
                            className="text-md"
                        >
                            {course.author}
                        </Typography>
                    </div>

                    <Chip
                        variant="ghost"
                        color="green"
                        size="lg"
                        value={`${course.time} ساعت`}
                        className="px-5 py-2.5 rounded-full text-green-500"
                        icon={<PlayCircleIcon />}
                    />
                </div>
            </CardFooter>
        </Card>
    );
}
