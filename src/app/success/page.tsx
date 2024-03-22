"use client"

import { Button } from '@/components/ui/button';
import React, { useEffect } from 'react'
import { HiBadgeCheck } from "react-icons/hi";
import Link from 'next/link';

export default function Page() {

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      window.location.href = '/profile';
    }, 5000);

    return () => clearTimeout(redirectTimer);
  }, []);

  return (
    <div className="container flex flex-col justify-center items-center h-screen w-full">
        <div className='flex flex-col justify-center items-center gap-2'>
            <HiBadgeCheck className='text-green-500 animate-bounce' size={100} />
        <span className='text-gray-500'>Please wait 5 seconds to be redirected back home...</span>
              <h1 className='text-2xl px-5 py-2.5 bg-green-100 text-green-700 rounded-full'>
                Thankyou for Subscribing!
            </h1>
            <span className='p-2 font-bold text-green-900'>OR</span>
            <Link href="/profile">
                <Button className='bg-green-500 hover:bg-green-600'>Click Me</Button>
            </Link>
        </div>
    </div>
  )
}