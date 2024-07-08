/* eslint-disable @next/next/no-img-element */
"use client"
import React from 'react'
import { RiShakeHandsFill } from "react-icons/ri";
import { HiHome, HiDotsHorizontal } from "react-icons/hi";
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';


const Sidebar = () => {
    const { data: session } = useSession();
    console.log(session)
    return (
        <div className='flex flex-col justify-between h-screen p-3'>
            <div className='flex flex-col gap-4 '>
                <Link href='/'>
                    <RiShakeHandsFill className='h-16 w-16 p-3 cursor-pointer hover:bg-gray-200 rounded-3xl transition-all duration-300' />
                </Link>

                <div className='flex items-center p-3 cursor-pointer gap-2 hover:bg-gray-200 rounded-3xl transition-all duration-300 w-fit'>
                    <Link href='/'>
                        <HiHome className='h-7 w-7' />
                    </Link>
                    <span className='font-bold hidden xl:inline'>Home</span>
                </div>
                {session ? (<button className='w-48 h-9 bg-blue-400 hover:brightness-95 text-white rounded-full
            transition-all duration-300 shadow-md font-semibold hidden xl:inline'
                    onClick={() => signOut()}
                >
                    Sign Out
                </button>) : (<button className='w-48 h-9 bg-blue-400 hover:brightness-95 text-white rounded-full
            transition-all duration-300 shadow-md font-semibold hidden xl:inline'
                    onClick={() => signIn()}
                >
                    Sign In
                </button>)}
            </div>

            {
                session &&
                (<div className=' flex items-center text-gray-700 text-sm cursor-pointer p-3 hover:bg-gray-200 rounded-l-full transition-all duration-200'>
                    <img src={session?.user?.image} alt="" className='h-10 w-10 rounded-full xl:mr-2' />
                    <div className='hidden xl:inline'>
                        <h4 className='font-bold'>
                            {session?.user.name}
                        </h4>
                        <p className='text-gray-500'>@{session?.user.username}</p>
                    </div>
                    <HiDotsHorizontal className='h-7 hidden xl:ml-8 xl:inline' />
                </div>)
            }
        </div>
    )
}

export default Sidebar
