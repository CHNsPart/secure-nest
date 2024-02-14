

import {
    RegisterLink
  } from "@kinde-oss/kinde-auth-nextjs/server";
import Image from "next/image";
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <footer className="text-gray-600 body-font py-2 px-4 sm:px-16 border-t w-full">
        <div className=" px-5 py-8 mx-auto flex items-center sm:flex-row flex-col w-full">
            <a href="#" className="flex flex-col title-font font-medium items-center md:items-start md:justify-start justify-start text-gray-900 w-full md:w-1/3">
                <Image 
                    width="0"
                    height="0"
                    sizes="100%"
                    className="w-[180px] h-auto"
                    src="/securenest_bg.png" alt="Logo"
                />
                <span>Your protection is Our Priority.</span>
            </a>


            <p className="flex flex-col gap-2 text-sm text-gray-500 sm:ml-4 sm:pl-4 h-full sm:py-2 sm:mt-0 mt-4 text-center w-full md:w-1/3">
              <RegisterLink>
                <Button className="text-white bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-700 rounded">Register</Button>
              </RegisterLink>
                <span>We respect your privacy.</span>
                <span className="text-gray-600 ml-1" rel="noopener noreferrer">Copyright © SecureNest. All Rights Reserved</span>
            </p>


            <span className="flex flex-col justify-center mt-4 md:mt-0 tems-center md:justify-end md:items-end w-full md:w-1/3">
                
                <a className="text-center text-2xl mb-2" href="tel:647-776-7705">{"(647) 776-7705"}</a>
                
                <span className="inline-flex w-full md:w-1/3 sm:ml-auto sm:mt-0 justify-center sm:justify-end">
                    <a className="text-gray-500">
                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                    </a>
                    <a className="ml-3 text-gray-500">
                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                        </svg>
                    </a>
                    <a className="ml-3 text-gray-500">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                        </svg>
                    </a>
                    <a className="ml-3 text-gray-500">
                        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                        <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                        <circle cx="4" cy="4" r="2" stroke="none"></circle>
                        </svg>
                    </a>
                </span>

            </span>
        </div>
    </footer>
  )
}
