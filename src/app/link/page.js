'use client'

import { useParams, usePathname, useSearchParams } from "next/navigation"

export default function Link() {
    const searchParams = useSearchParams()
    const link = searchParams.get('link')

    return (
        <div className="flex justify-center items-center">
            <div className="mt-8 w-8/12 flex">
                <div className="w-full border-4 border-gray-400 p-6 flex justify-center">
                    <div>
                        <div>您正在离开04Q，点击下方按钮继续前往以下地址</div>
                        <a href={link} className="flex justify-center"><div className="border-2 border-gray-200 rounded-xl px-4 py-2 text-center my-2">{link}</div></a>
                    </div>
                </div>
            </div>
        </div>
    )
}