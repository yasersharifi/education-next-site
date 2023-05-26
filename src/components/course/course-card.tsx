"use client";

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Avatar,
    Chip
  } from "@/mt-react";
import { PlayCircleIcon } from "@heroicons/react/24/outline";
  import Image from "next/image";

export default function CourseCard() {
    return (
        <Card className="mt-6 mb-4 w-96">
            <CardHeader color="blue-gray" className="relative h-56">
                <Image
                    src="/assets/images/course/co-1.jpg"
                    alt="img-blur-shadow"
                    fill
                />
            </CardHeader>
            <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                    آموزش ساخت فروشگاه اینترنتی
                </Typography>

            </CardBody>

            <CardFooter className="p-0">
                <div
                    className="flex items-center justify-between px-4 py-3 border-t border-gray-100"
                >
                    <div
                        className="flex items-center gap-1"
                    >
                        <Avatar src="/assets/images/user/user-1.png" size="md" alt="avatar" withBorder={false} className="p-0.5" />
                        <Typography
                            variant="a"
                            color="gray"
                            className="text-md"
                        >
                            یاسر شریفی زاده
                        </Typography>
                    </div>

                    <Chip
                        variant="ghost"
                        color="green"
                        size="lg"
                        value="۳۴ دوره"
                        className="px-5 py-2.5 rounded-full text-green-500"
                        icon={<PlayCircleIcon />}
                    />
                </div>
            </CardFooter>
        </Card>
    );
}
