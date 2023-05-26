"use client";

import React from "react";
import Link from "next/link";
import {
    Navbar,
    Collapse,
    Typography,
    IconButton,
} from "@/mt-react";
import ProfileMenu from "./profile-menu";

const menuItems = [
    {
        title: 'صفحه نخست',
        url: '/'
    },
    {
        title: 'دوره های آموزشی',
        url: '/course'
    },
    {
        title: 'وبلاگ',
        url: '/weblog'
    },
    {
        title: 'تماس با ما',
        url: 'contact'
    },
];

export default function SiteHeader() {
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
      window.addEventListener(
        "resize",
        () => window.innerWidth >= 960 && setOpenNav(false)
      );
    }, []);

    const navList = (
        <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            {
                menuItems.map((menuItem) => (
                    <Typography
                        key={menuItem.title}
                        as="li"
                        variant="small"
                        color="blue-gray"
                        className="p-1 font-light text-md"
                    >
                        <Link href={menuItem.url} className="flex items-center transition-colors duration-200 hover:text-green-800">
                            { menuItem.title }
                        </Link>
                    </Typography>
                ))
            }
        </ul>
    );

    const [isNavOpen, setIsNavOpen] = React.useState(false);
    const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

    return (
        <Navbar
            color="white"
            className="sticky inset-0 z-10 max-w-full px-4 py-2 rounded-none h-max lg:px-8 lg:py-4"
        >
            <div className="flex items-center justify-between text-blue-gray-900">
                <Typography
                    as="a"
                    href="#"
                    className="mr-4 cursor-pointer py-1.5 text-xl font-medium shrink-0"
                >
                    Material Tailwind
                </Typography>

                <div className="flex items-center gap-4 grow">
                    <div className="hidden mr-4 lg:block">
                        {navList}
                    </div>
                </div>

                <div className="flex items-center gap-4 shrink-0">
                    <div>
                        <ProfileMenu />
                    </div>
                    <IconButton
                        variant="text"
                        className="w-6 h-6 ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                        ripple={false}
                        onClick={() => setOpenNav(!openNav)}
                    >
                    {openNav ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            className="w-6 h-6"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                        </svg>
                    )}
                    </IconButton>
                </div>
            </div>
            <Collapse open={openNav} className="absolute inset-x-0 z-[999] bg-white px-4 shadow-md">
                {navList}
            </Collapse>
        </Navbar>
    )
}

