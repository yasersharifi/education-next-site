"use client";
import { useEffect, useState} from "react";
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

interface IProps {
    currentPage: number,
    totalItems: number,
    itemsPerPage: number
}

export default function Pagination(props: IProps) {
    const { currentPage, totalItems, itemsPerPage } = props;
    const [active, setActive] = useState(1);
    const [totalPages, setTotalPages] = useState(Math.ceil(+totalItems / +itemsPerPage));

    useEffect(() => {
        setActive(currentPage);
    }, [currentPage])

    const getItemProps = (index: number) =>
        ({
            variant: active === index ? "filled" : "text",
            color: active === index ? "blue" : "blue-gray",
            onClick: () => setActive(index),
            className: "rounded-full",
        } as any);

    const next = () => {
        if (active === totalPages) return;

        setActive(active + 1);
    };

    const prev = () => {
        if (active === 1) return;

        setActive(active - 1);
    };

    useEffect(() => {
        const urlSearchParams = new URLSearchParams(window.location.search);
        urlSearchParams.set('page', active.toString());
        const newRelativePathQuery = window.location.pathname + '?' + urlSearchParams.toString();
        history.pushState(null, '', newRelativePathQuery);
    }, [active]);

    return (
        <div className="flex items-center justify-center gap-4">
            <Button
                variant="text"
                color="blue-gray"
                className="flex items-center gap-2 rounded-full"
                onClick={prev}
                disabled={active === 1}
            >
                <ArrowRightIcon strokeWidth={2} className="w-4 h-4" /> قبلی
            </Button>

            <div className="flex items-center gap-2">
                {
                    [...new Array(totalPages)].map((item: any, index: number) => (
                        <IconButton key={`paginate-${index}`} {...getItemProps(index + 1)}>
                            { index + 1 }
                        </IconButton>
                    ))
                }
            </div>

            <Button
                variant="text"
                color="blue-gray"
                className="flex items-center gap-2 rounded-full"
                onClick={next}
                disabled={active === totalPages}
            >
                بعدی
                <ArrowLeftIcon strokeWidth={2} className="w-4 h-4" />
            </Button>
        </div>
    );
}
