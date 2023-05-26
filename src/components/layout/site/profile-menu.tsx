"use client";
import { Menu, MenuHandler, Button, Avatar, MenuList, MenuItem, Typography,  } from "@/mt-react";
import { ChevronDownIcon, Cog6ToothIcon, InboxArrowDownIcon, PowerIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import React from "react";

export default function ProfileMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
            <MenuHandler>
                <Button
                    variant="text"
                    color="blue-gray"
                    className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
                >
                    <Avatar
                        variant="circular"
                        size="sm"
                        alt="candice wu"
                        className="border border-blue-500 p-0.5"
                        src="/assets/images/avatar.avif"
                    />
                    <ChevronDownIcon
                        strokeWidth={2.5}
                        className={`h-3 w-3 transition-transform ${
                            isMenuOpen ? "rotate-180" : ""
                        }`}
                    />
                </Button>
            </MenuHandler>
            <MenuList className="p-1">
            {profileMenuItems.map(({ label, icon }, key) => {
                const isLastItem = key === profileMenuItems.length - 1;
                return (
                <MenuItem
                    key={label}
                    onClick={closeMenu}
                    className={`flex items-center gap-2 rounded ${
                    isLastItem
                        ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                        : ""
                    }`}
                >
                    {React.createElement(icon, {
                        className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                        strokeWidth: 2,
                    })}
                    <Typography
                        as="span"
                        variant="small"
                        className="font-normal"
                        color={isLastItem ? "red" : "inherit"}
                    >
                    {label}
                    </Typography>
                </MenuItem>
                );
            })}
            </MenuList>
        </Menu>
    );
}

// profile menu component
const profileMenuItems = [
    {
      label: "پروفایل کاربری",
      icon: UserCircleIcon,
    },
    {
      label: "تغییر اطلاعات",
      icon: Cog6ToothIcon,
    },
    {
      label: "تغییر رمز عبور",
      icon: InboxArrowDownIcon,
    },
    {
      label: "خروج",
      icon: PowerIcon,
    },
];
