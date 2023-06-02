"use client";
import React from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Alert,
  Input,
} from "@/mt-react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import {
  ChevronRightIcon,
  ChevronDownIcon,
  CubeTransparentIcon,
  MagnifyingGlassIcon,
  ChevronLeftIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

export default function UserPanelSidebar() {
    const [open, setOpen] = React.useState(0);
    const [openAlert, setOpenAlert] = React.useState(true);

    const handleOpen = (value: any) => {
        setOpen(open === value ? 0 : value);
    };

    return (
        <Card className="w-full max-w-[20rem] p-4 sticky top-[75px]">
            <div className="flex flex-col items-center gap-4 p-4 mb-2">
                <img src="/assets/images/avatar.avif" alt="brand" className="w-32 h-32 rounded-full" />
                <Typography variant="h5" color="blue-gray">
                    یاسر شریفی زاده
                </Typography>
            </div>
            {/* <div className="p-2">
                <Input icon={<MagnifyingGlassIcon className="w-5 h-5" />} label="Search" />
            </div> */}
            <List>
                <ListItem selected={open === 1}>
                    <Link href={'/profile'} className="contents">
                        <ListItemPrefix
                            className="!mr-0 ml-4"
                        >
                            <PresentationChartBarIcon className="w-5 h-5" />
                        </ListItemPrefix>
                        <Typography color="blue-gray" className="font-normal">
                            داشبورد
                        </Typography>
                    </Link>
                </ListItem>

                <Accordion
                    open={open === 2}
                    icon={
                        <ChevronDownIcon
                        strokeWidth={2.5}
                        className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""}`}
                        />
                    }
                >
                    <ListItem className="p-0" selected={open === 2}>
                        <AccordionHeader onClick={() => handleOpen(2)} className="p-3 border-b-0">
                            <ListItemPrefix className="!mr-0 ml-4">
                                <ShoppingBagIcon className="w-5 h-5" />
                            </ListItemPrefix>
                            <Typography color="blue-gray" className="ml-auto font-normal">
                                فروشگاه
                            </Typography>
                        </AccordionHeader>
                    </ListItem>
                    <AccordionBody className="py-1">
                        <List className="p-0">
                            <ListItem>
                                <Link href={'/profile/my-order'} className="flex items-center gap-3">
                                    <ListItemPrefix>
                                        <ChevronLeftIcon strokeWidth={3} className="w-5 h-3" />
                                    </ListItemPrefix>
                                    سفارش ها
                                </Link>
                            </ListItem>

                            <ListItem>
                                <Link href={'/profile/my-products'} className="flex items-center gap-3">
                                    <ListItemPrefix>
                                        <ChevronLeftIcon strokeWidth={3} className="w-5 h-3" />
                                    </ListItemPrefix>
                                    محصولات
                                </Link>
                            </ListItem>
                        </List>
                    </AccordionBody>
                </Accordion>

                <hr className="my-2 border-blue-gray-50" />

                <ListItem>
                    <ListItemSuffix className="!mr-0 ml-4">
                        <InboxIcon className="w-5 h-5" />
                    </ListItemSuffix >
                        پیام ها
                    <ListItemPrefix className="mr-auto">
                        <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
                    </ListItemPrefix>
                </ListItem>

                <ListItem>
                    <ListItemPrefix className=" !mr-0 ml-4">
                        <UserCircleIcon className="w-5 h-5" />
                    </ListItemPrefix>
                    پروفایل
                </ListItem>

                <ListItem>
                    <ListItemPrefix className=" !mr-0 ml-4">
                        <Cog6ToothIcon className="w-5 h-5" />
                    </ListItemPrefix>
                    تنظیمات
                </ListItem>

                <ListItem className="text-red-500">
                    <ListItemPrefix className=" !mr-0 ml-4">
                        <PowerIcon className="w-5 h-5" />
                    </ListItemPrefix>
                    خروج
                </ListItem>
            </List>

            <Alert open={openAlert} className="mt-auto" onClose={() => setOpenAlert(false)}>
                <CubeTransparentIcon className="w-12 h-12 mb-4" />
                <Typography variant="h6" className="mb-1">
                Upgrade to PRO
                </Typography>
                <Typography variant="small" className="font-normal opacity-80">
                Upgrade to Material Tailwind PRO and get even more components, plugins, advanced features
                and premium.
                </Typography>
                <div className="flex gap-3 mt-4">
                <Typography
                    as="a"
                    href="#"
                    variant="small"
                    className="font-medium opacity-80"
                    onClick={() => setOpenAlert(false)}
                >
                    Dismiss
                </Typography>
                <Typography as="a" href="#" variant="small" className="font-medium">
                    Upgrade Now
                </Typography>
                </div>
            </Alert>
        </Card>
    );
}
