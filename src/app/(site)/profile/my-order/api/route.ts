import { NextResponse } from "next/server";
import IOrder from "@/interfaces/order.interface";

export async function GET() {
    const allOrder: IOrder[] = [
        {
            id: new Date().toLocaleTimeString(),
            code: "34234234",
            date: new Date().toLocaleDateString(),
            status: 'complete',
            totalPrice: 239000,
        },
        {
            id: new Date().toLocaleTimeString(),
            code: "234324",
            date: new Date().toLocaleDateString(),
            status: 'pending',
            totalPrice: 239000,
        },
        {
            id: new Date().toLocaleTimeString(),
            code: "567567",
            date: new Date().toLocaleDateString(),
            status: 'paid',
            totalPrice: 239000,
        },
        {
            id: new Date().toLocaleTimeString(),
            code: "567673",
            date: new Date().toLocaleDateString(),
            status: 'canceled',
            totalPrice: 239000,
        },
    ];

    return NextResponse.json({
        status: 200,
        statusText: 'success',
        data: allOrder,
    })
}
