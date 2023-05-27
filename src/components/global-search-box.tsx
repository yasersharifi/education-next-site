import { ClipboardDocumentIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Select, Option } from "@/mt-react";

export default function SiteSearchBox() {
    return (
        <div className="w-full h-[4.7rem]">
            <div className="flex w-full h-full max-w-3xl bg-white rounded-lg shadow-md">
                <div className="flex items-center gap-1.5 h-full w-1/2 grow px-4">
                    <label htmlFor="title" className="flex items-center h-full font-bold">
                        <MagnifyingGlassIcon className="w-6 h-6 text-blue-gray-300" />
                    </label>
                    <input
                        id="title"
                        type="text"
                        placeholder="عنوان آموزش را وارد نمایید"
                        className="block w-full h-full px-3 py-2 leading-tight text-gray-700 bg-white border-none rounded placeholder:font-light placeholder:text-sm focus:outline-none focus:bg-white focus:border-none"
                    />
                </div>

                <div className="flex items-center gap-1.5 h-full w-1/2 grow px-4">
                    <label htmlFor="category" className="flex items-center h-full font-bold">
                        <ClipboardDocumentIcon className="w-6 h-6 text-blue-gray-300" />
                    </label>
                    <Select variant="static" label="" className="border-0 placeholder:font-light placeholder:text-sm" placeholder="یک دسته بندی را انتخاب نمایید">
                        <Option>آموزش های شبکه و امنیت</Option>
                        <Option>آموزش های بک اند</Option>
                        <Option>آموزش های فرانت اند</Option>
                        <Option>طراحی وبسایت</Option>
                        <Option>وردپرس</Option>
                    </Select>
                </div>

                <div className="h-full overflow-hidden rounded-l-lg shrink-0">
                    <button className="h-[4.7rem] w-32 flex items-center justify-center font-bold text-white bg-green-700 hover:bg-green-800">
                        جستجو
                    </button>
                </div>
            </div>
        </div>
    )
}
