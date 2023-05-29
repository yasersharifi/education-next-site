import CourseCard from "@/components/course/course-card";
import { ICourse } from "@/interfaces/course.interface";
import { IPost } from "@/interfaces/post.interface";
import PostCard from "@/components/post/post-card";


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

export default async function WeblogPage() {
    const allPosts: IPost[] = await fetchLatestCourse();

    return (
        <div
            className="grid w-full grid-cols-1 gap-2 mx-auto md:gap-3 sm:grid-cols-2 md:grid-cols-3 max-w-7xl"
        >
            {
                allPosts && allPosts.length && allPosts.map((post: ICourse) => (
                    <PostCard
                        post={post}
                    />
                ))
            }
        </div>
    )
}
