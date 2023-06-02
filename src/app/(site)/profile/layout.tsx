import UserPanelSidebar from "@/components/layout/user-panel/sidebar"

export default function UserPanelLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <div
                className="flex items-start w-full gap-4 p-4 mx-auto md:gap-8 md:p-8"
            >
                <UserPanelSidebar />
                {children}
            </div>
        </>
    )
}
