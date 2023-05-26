"use client";

import { Typography } from "@material-tailwind/react";
import SiteFooterBottom from "./footer-bottom";
import { Timeline, TimelineItem, TimelineConnector, TimelineIcon, TimelineHeader } from "@/mt-react";
import { ArchiveBoxIcon, BellIcon, CurrencyDollarIcon, PaperAirplaneIcon, PlayCircleIcon } from "@heroicons/react/24/outline";

const LINKS = [
    {
        title: "لینک مفید",
        items: ["درباره ما", "سوالات متداول", "تسویه حساب", "تماس با ما", "وبلاگ"],
    },
    {
        title: "دسته بندی",
        items: ["طراحی وب", "شبکه و امنیت", "برنامه نویسی وب", "پایگاه داده", "برنامه نویسی موبایل"],
    },
    {
        title: "راهنما و پشتیبانی",
        items: ["اسناد", "چت آنلاین", "ارسال ایمیل", "قوانین و شرایط", "سوالات متداول"],
    },
];


export default function SiteFooter() {
  return (
    <footer className="relative w-full border-t border-blue-gray-50 pt-14">
      <div className="w-full">
        <div className="grid justify-between grid-cols-12 gap-4 px-4 mx-auto lg:px-0 lg:gap-8 max-w-7xl">
            <div className="col-span-12 sm:col-span-3">
                <Typography variant="h5" className="mb-6">
                    Material Tailwind
                </Typography>
                <Typography variant="p" color="gray" className="text-sm">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد.
                </Typography>
            </div>

            <div className="grid justify-between grid-cols-3 col-span-12 gap-4 sm:col-span-6">
                {LINKS.map(({ title, items }) => (
                <ul key={title}>
                    <Typography
                    variant="h4"
                    color="blue-gray"
                    className="mb-3 text-base font-normal text-gray-900"
                    >
                    {title}
                    </Typography>
                    {items.map((link) => (
                    <li key={link}>
                        <Typography
                        as="a"
                        href="#"
                        color="gray"
                        className="py-1.5 font-light text-md transition-colors hover:text-green-700"
                        >
                        {link}
                        </Typography>
                    </li>
                    ))}
                </ul>
                ))}
            </div>

            <div className="grid justify-between grid-cols-1 col-span-12 gap-4 sm:col-span-3">
                <ul>
                    <Typography
                        variant="h4"
                        color="blue-gray"
                        className="mb-3 text-base font-normal text-gray-900"
                    >
                        دانلود اپلیکیشن
                    </Typography>
                    <li>
                    <div className="">
                        <Timeline>
                            <TimelineItem className="h-28">
                                <TimelineConnector className="!w-[78px] !right-0" />
                                <TimelineHeader className="relative py-3 pl-4 pr-8 bg-white border rounded-md border-blue-gray-50 shadow-blue-gray-900/5">
                                    <TimelineIcon className="p-3" variant="ghost">
                                        <PaperAirplaneIcon className="w-6 h-6" />
                                    </TimelineIcon>
                                    <div className="flex flex-col gap-1">
                                        <Typography variant="h6" color="blue-gray">
                                            گوگل پلی
                                        </Typography>
                                        <Typography variant="small" color="gray" className="font-normal">
                                            دریافت اپلیکیشن
                                        </Typography>
                                    </div>
                                </TimelineHeader>
                            </TimelineItem>

                            <TimelineItem className="h-28">
                                    <TimelineHeader className="relative py-3 pl-4 pr-8 bg-white border rounded-md border-blue-gray-50 shadow-blue-gray-900/5">
                                        <TimelineIcon className="p-3" variant="ghost" color="red">
                                            <PlayCircleIcon className="w-6 h-6" />
                                        </TimelineIcon>
                                        <div className="flex flex-col gap-1">
                                        <Typography variant="h6" color="blue-gray">
                                            اپ استور
                                        </Typography>
                                        <Typography variant="small" color="gray" className="font-normal">
                                            دریافت اپلیکیشن
                                        </Typography>
                                        </div>
                                    </TimelineHeader>
                                </TimelineItem>
                            </Timeline>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <SiteFooterBottom />
      </div>
    </footer>
  );
}
