'use client'
import Link from "next/link";
import React from "react";
import { FaUser } from "react-icons/fa";
import IconLogo from "../../../public/ICON.jpg"
import Image from "next/image";


import { usePathname } from 'next/navigation'

function Navbar() {
    const pathname = usePathname()
    console.log("Check pathname", { pathname });

    const linkNavigate = [

        {
            link: "/manager",
            title: "Manager"
        },
        {
            link: "/menu",
            title: "Menu"
        },
        {
            link: "/order",
            title: "Order"
        },
        {
            link: "/",
            title: (<span className=" font-serif">Larissa Restaurants</span>)
        },
        {
            link: "/book-a-table",
            title: "Book A Table"
        },
    ]
    return <div className="roboto z-50 h-20 flex items-center fixed top-0 left-0 w-full bg-white bg-opacity-80 ">
        <div className=" flex justify-between font-medium styleLink items-center border-2 border-black bg-white  w-3/4 mx-auto space-x-4">
            <div className="flex-1 flex items-center justify-end space-x-6">
                <div className={`${pathname === "/" ? " text-red-700 font-bold transform  scale-[120%] duration-500 delay-75 " : ""}`}>
                    <Link href="/">Home</Link>
                </div>
                <div className={`${pathname === "/manager" ? "text-red-700 font-bold transform  scale-[120%] duration-500 delay-75 " : ""}`}>
                    <Link href="/manager">Manager</Link>
                </div>
                <div className={`${pathname === "/menu" ? "text-red-700 font-bold transform  scale-[120%] duration-500 delay-75 " : ""}`}>
                    <Link href="/menu">Menu</Link>
                </div>

            </div>
            <Link className=" flex text-3xl items-center w-fit  text-center" href="/">
                <span className=" ">Larissa</span>
                <Image
                    src={IconLogo}
                    className="h-10 w-10 object-cover"
                    alt="Picture of the author"
                /><span className=" ">Restaurants</span>
            </Link>

            <div className="flex-1 flex items-center justify-start space-x-6">
                <div className={`${pathname === "/order" ? "text-red-700 font-bold transform  scale-[120%] duration-500 delay-75 " : ""}`}>
                    <Link href="/order">Order</Link>
                </div>
                <div className={`${pathname === "/book-a-table" ? "text-red-700 font-bold transform  scale-[120%] duration-500 delay-75 " : ""}`}>
                    <Link href="/book-a-table">
                        <span className="underline ">Book A Table</span></Link>
                </div>
                <FaUser />
            </div>
        </div>
    </div >;
}

export default Navbar;
