import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
    CardHeader,
} from "@/mt-react";
import { RocketLaunchIcon } from "@heroicons/react/24/solid";
import { ArrowLongLeftIcon, ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { IPost } from "@/interfaces/post.interface";
import Image from "next/image";

interface IProps {
    post: IPost
}

export default function PostCard(props: IProps) {
    const { post } = props;

    return (
        <Card className="my-6 w-96">
            <CardHeader color="blue-gray" className="relative h-56 !m-0 !shadow-none !rounded-b-none" floated={false}>
                <Image
                    src={post.image}
                    alt="img-blur-shadow"
                    fill
                />
            </CardHeader>

            <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
                { post.title }
            </Typography>
            <Typography>
            در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد
            </Typography>
            </CardBody>
            <CardFooter className="pt-0">
            <a href="#" className="inline-block">
                <Button size="sm" variant="text" className="flex items-center gap-2">
                    نمایش بیشتر
                    <ArrowLongLeftIcon strokeWidth={2} className="w-4 h-4" />
                </Button>
            </a>
            </CardFooter>
        </Card>
    );
}
