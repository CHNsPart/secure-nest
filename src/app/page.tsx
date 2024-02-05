"use client"

import { Button } from "@/components/ui/button";
import { Separator } from "@radix-ui/react-dropdown-menu";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full flex flex-col gap-4 justify-center items-start">
      {/* Hero Section */}
      <section className="text-gray-600 container body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Guarding Your Peace Of Mind,
              <br className="hidden lg:inline-block"/>Securing Your Home
            </h1>
            <p className="mb-8 leading-relaxed">Explore our Smart Home and Security Plans, benefit from special offers, and discover how SecureNest can elevate your peace of mind. Your safety begins here. 
              {" "}
              <span className="text-green-600">
                Save over $1,500 on premium security products! Plans start as low as $14.99 /mo.  
              </span>
            </p>
            <div className="flex justify-center">
              <Button className="text-white bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-700 rounded">Get Started</Button>
              <Button className="ml-4 text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded">Button</Button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image className="object-cover object-center rounded" height={200} width={512} alt="hero" src="/pic1.jpg"/>
          </div>
        </div>
      </section>
      {/*  Duty Section */}
      <section className="text-gray-600 body-font container">
        <div className="px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex w-full mb-20 flex-wrap">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Free Installation & Delivery</h1>
            <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
              <span className="mb-2">We offer a free installation service for all plans. Our professional technicians will ensure that your system is installed correctly and efficiently, so you can start enjoying peace of mind right away.</span>
              <span>
                For self-installations, enjoy the convenience of free delivery service on all plans. we will deliver everything you need straight to your doorstep at no extra cost.
              </span>
            </p>
          </div>
          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <img alt="gallery" className="w-full object-cover h-full object-center block" src="/dpic1.jpg" />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img alt="gallery" className="w-full object-cover h-full object-center block" src="/dpic2.jpg" />
              </div>
              <div className="md:p-2 p-1 w-full">
                <img alt="gallery" className="w-full h-full object-cover object-center block" src="/dpic3.jpg" />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                <img alt="gallery" className="w-full h-full object-cover object-center block" src="/dpic4.jpg" />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img alt="gallery" className="w-full object-cover h-full object-center block" src="/dpic5.jpg" />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img alt="gallery" className="w-full object-cover h-full object-center block" src="/dpic6.jpg" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
