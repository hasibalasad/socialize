import React from 'react'
import { RiShakeHandsFill } from "react-icons/ri";
import { HiHome } from "react-icons/hi";
import Link from 'next/link';


const Sidebar = () => {
    return (
        <div className='flex flex-col gap-4 p-3'>
            <Link href='/'>
                <RiShakeHandsFill className='h-16 w-16 p-3 cursor-pointer hover:bg-gray-200 rounded-3xl transition-all duration-300' />
            </Link>

            <div className='flex items-center p-3 cursor-pointer gap-2 hover:bg-gray-200 rounded-3xl transition-all duration-300 w-fit'>
                <Link href='/'>
                    <HiHome className='h-7 w-7' />
                </Link>
                <span className='font-bold hidden xl:inline'>Home</span>
            </div>

            <button className='w-48 h-9 bg-blue-400 hover:brightness-95 text-white rounded-full transition-all duration-300 shadow-md font-semibold hidden xl:inline'>Sign In</button>
        </div>
    )
}

export default Sidebar
