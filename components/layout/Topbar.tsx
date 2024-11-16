"use client"
import { ClerkProvider, useAuth, UserButton } from "@clerk/nextjs";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const Topbar = () => {
    const { userId } = useAuth()
    const topRoutes = [
        { label: "Giáo viên", path: "/instructor/courses" },
        { label: "Học", path: "/learning" }
    ]
    return (
        
        <div className="flex justify-between items-center p-4">
            <Link href="/">
                <Image src="/logo.png" height={100} width={200} alt="logo" />
            </Link>
            <div className="max-md:hidden w-[400px] rounded-full flex">
                <input className="flex-grow bg-blue-300 rounded-l-full border-none outline-none text-sm pl-4 py-3"
                    placeholder="Tìm khóa học" />
                <button className="bg-blue-300 rounded-r-full border-none outline-none cursor-pointer px-4 py-3 hover:bg-slate-300/70">
                    <Search className="h-4 w-4" />
                </button>
            </div>
            <div className="flex gap-6 items-center">
                <div className="max-sm:hidden flex gap-6">
                    {topRoutes.map((route) => (<Link href={route.path} key={route.path} className="text-sm font-medium hover:text-blue-300">{route.label}</Link>))}
                </div>
                {userId ? <UserButton afterSignOutUrl="/" /> : <Link href="/sign-in"><Button>Đăng nhập</Button></Link>}

            </div>
        </div>
        
    );
}

export default Topbar;