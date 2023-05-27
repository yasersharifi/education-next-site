"use client";

import { TimelineHeader, TimelineIcon, TimelineItem, Typography } from "@/mt-react"
import { NewspaperIcon, UserCircleIcon, VideoCameraIcon } from "@heroicons/react/24/outline"

export default function SiteTrips() {
    return (
        <div
            className="max-w-7xl h-[7.5rem] mx-auto -mt-10 relative z-30"
        >
            <div
                className="w-full -mt-12 bg-white shadow-xl rounded-2xl"
            >
                <ul
                    className="grid grid-cols-3 px-4 lg:px-8"
                >
                    <TimelineItem className="h-28">
                        <TimelineHeader className="relative py-3 pl-4 pr-8 bg-white rounded-md">
                            <TimelineIcon className="p-3" variant="ghost" color="green">
                                <UserCircleIcon className="w-6 h-6" />
                            </TimelineIcon>
                            <div className="flex flex-col gap-1">
                                <Typography variant="h6" color="blue-gray">
                                    100,000 مدرس با تجربه
                                </Typography>
                                <Typography variant="small" color="gray" className="font-normal">
                                    با بیست درصد تخفیف تدریس را در کلاس آنلاین تجربه کنید.
                                </Typography>
                            </div>
                        </TimelineHeader>
                    </TimelineItem>

                    <TimelineItem className="h-28">
                        <TimelineHeader className="relative py-3 pl-4 pr-8 bg-white rounded-md">
                            <TimelineIcon className="p-3" variant="ghost" color="green">
                                <NewspaperIcon className="w-6 h-6" />
                            </TimelineIcon>
                            <div className="flex flex-col gap-1">
                                <Typography variant="h6" color="blue-gray">
                                    ارائه مدرک معتبر
                                </Typography>
                                <Typography variant="small" color="gray" className="font-normal">
                                    این موارد کاملاً ساده هستند و به راحتی قابل تشخیص هستند.
                                </Typography>
                            </div>
                        </TimelineHeader>
                    </TimelineItem>

                    <TimelineItem className="h-28">
                        <TimelineHeader className="relative py-3 pl-4 pr-8 bg-white rounded-md">
                            <TimelineIcon className="p-3" variant="ghost" color="green">
                                <VideoCameraIcon className="w-6 h-6" />
                            </TimelineIcon>
                            <div className="flex flex-col gap-1">
                                <Typography variant="h6" color="blue-gray">
                                    دوره آموزشی آنلاین
                                </Typography>
                                <Typography variant="small" color="gray" className="font-normal">
                                    کلاس تدریس خصوصی با معلم خصوصی با امکانات کامل را امتحان کنید.
                                </Typography>
                            </div>
                        </TimelineHeader>
                    </TimelineItem>
                </ul>
            </div>
        </div>
    )
}
