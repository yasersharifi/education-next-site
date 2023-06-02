"use client";
import Loading from "@/components/loading";
import IOrder from "@/interfaces/order.interface";
import { Card, Typography, Chip, CardHeader, CardBody } from "@/mt-react";
import useSWR from 'swr';

const fetcher = (...args: any[]) => fetch(...args).then((res) => res.json());

const TABLE_HEAD = ["کد سفارش", "تاریخ", "وضعیت", "قیمت", "عملیات"];

export default function Example() {
    const { data: allMyOrders, error, isLoading } = useSWR('http://localhost:3000/profile/my-order/api', fetcher);

    if (isLoading) {
        return <Loading />
    }

    return (
        <Card className="w-full h-full overflow-scroll">
            <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="mb-3 rounded-none"
            >
                <Typography variant="h4">
                    لیست همه سفارشات
                </Typography>
            </CardHeader>

            <CardBody className="p-0 m-0">
                <table className="w-full text-left table-auto min-w-max">
                    <thead>
                    <tr>
                        {TABLE_HEAD.map((head) => (
                        <th key={head} className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal leading-none opacity-70"
                            >
                                {head}
                            </Typography>
                        </th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {allMyOrders?.data?.map(({ id, code, date, status, totalPrice }: IOrder) => (
                        <tr key={id} className="even:bg-blue-gray-50/50">
                        <td className="p-4">
                            <Typography variant="small" color="blue-gray" className="font-normal">
                                {code}
                            </Typography>
                        </td>
                        <td className="p-4">
                            <Typography variant="small" color="blue-gray" className="font-normal">
                                {date}
                            </Typography>
                        </td>
                        <td className="p-4">
                            <div className="w-max">
                                <Chip
                                    size="sm"
                                    variant="ghost"
                                    value={status}
                                    color={
                                        status === "paid" ? "green" : status === "pending" ? "amber" : "red"
                                    }
                                />
                            </div>
                        </td>
                        <td className="p-4">
                            <Typography variant="small" color="blue-gray" className="font-normal">
                                {totalPrice}
                            </Typography>
                        </td>
                        <td className="p-4">
                            <Typography as="a" href="#" variant="small" color="blue" className="font-medium">
                                Edit
                            </Typography>
                        </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </CardBody>
        </Card>
    );
}
