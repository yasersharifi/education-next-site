import CourseCard from "@/components/course/course-card";
import { ICourse } from "@/interfaces/course.interface";
import Pagination from "@/components/pagination";
import { Breadcrumbs, Typography } from "@/mt-react";
import Link from "next/link";


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

export default async function CoursesPage() {
    const allCourse: ICourse[] = await fetchLatestCourse();

    return (
        <>
            {/* Posts Banner */}
            <div
                className="w-full h-[18rem] flex flex-col items-center justify-center bg-blue-gray-50 mb-6"
            >
                <Typography
                    variant="h3"
                >
                    آموزش ها
                </Typography>

                <Breadcrumbs>
                    <Link href='/' className="opacity-60">
                        صفحه اول
                    </Link>
                    <span>
                        <span> آموزش ها</span>
                    </span>
                </Breadcrumbs>

            </div>

            {/* All Posts */}
            <div
                className="grid w-full grid-cols-1 gap-2 mx-auto md:gap-3 sm:grid-cols-2 md:grid-cols-3 max-w-7xl"
            >
                {
                    allCourse && allCourse.length && allCourse.map((course: ICourse) => (
                        <CourseCard
                            key={course.id}
                            course={course}
                        />
                    ))
                }
            </div>

            {/* Posts Pagination */}
            <div
                className="w-full mx-auto mt-6 mb-10 max-w-7xl"
            >
                <Pagination
                    totalItems={allCourse.length}
                    itemsPerPage={6}
                    currentPage={1}
                />
            </div>
        </>
    )
}
