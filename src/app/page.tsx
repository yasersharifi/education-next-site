import {
    Typography,
    Card,
    Chip,
    Button,
} from "@/mt-react";
import SiteHeader from "@/components/layout/site/header";
import SiteFooter from "@/components/layout/site/footer";
import CourseListSlider from "@/components/course/course-list-slider";
import { ArrowLongLeftIcon, ArrowLongRightIcon, CodeBracketIcon } from "@heroicons/react/24/outline";
import { ICourse } from "@/interfaces/course.interface";


export async function fetchLatestCourse() {
    try {
        const res = await fetch("http://localhost:3000/course/api", {
            headers: {
                'Content-Type': 'application/json',
            },
            cache: 'no-store',
        });

        if (! res.ok) {
            throw new Error("Fetch Last Courses Failed !");
        }

        const result = await res.json();

        return result.statusText === 'success' ? result.data : [];
    } catch (err: any) {
        console.log(err.message);
        return [];
    }
}

export default async function HomePage() {
    const latestsCourse: ICourse[] = await fetchLatestCourse();

    return (
        <>
            <SiteHeader />

            <section
                className="w-full px-4 mx-auto my-20 max-w-7xl lg:px-0"
            >
                <div className="flex items-center justify-between gap-1 mb-3">
                    <Typography
                        variant="h4"
                        className="flex items-center gap-2 pl-4 text-gray-700 shrink-0"
                    >
                        <Chip
                            variant="ghost"
                            color="green"
                            size="lg"
                            value={<CodeBracketIcon className="w-5 h-5 text-green-800" />}
                            className="p-1.5"
                        />

                        آموزش ها جدید
                    </Typography>

                    <span className="block w-full h-0 border-t border-gray-100 grow"></span>

                    <Button variant="text" className="flex items-center gap-2 shrink-0">
                        <span>همه آموزش ها </span>
                        <ArrowLongLeftIcon strokeWidth={2} className="w-5 h-5" />
                    </Button>

                </div>
                <CourseListSlider courses={latestsCourse} />
            </section>

            <SiteFooter />
        </>
    );
}
