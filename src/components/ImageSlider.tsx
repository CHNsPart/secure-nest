"use client"

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from "react-icons/bs";
import { Button } from './ui/button';

export default function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? 1 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 1 ? 0 : prevSlide + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, 5000); // Auto-slide every 5 seconds, adjust as needed

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div id="default-carousel" className="w-full bg-gray-50" data-carousel="slide">
      <div className="relative flex flex-col gap-5 md:gap-0 md:flex-row justify-center items-center w-full py-12 container">
        <div className='w-full flex flex-col items-start px-5 gap-2'>
          <div className='uppercase tracking-wide text-sm text-green-500 font-semibold'>SECURENEST SECURITY PRODUCTS</div>
          <h1 className='text-3xl'>A sleek and modern smart home setup with devices controlled through a smartphone</h1>
          <p className='text-xs text-gray-500 py-2 w-3/4'>
            🌟 Competitive Advantage: Safety & Security
            🇨🇦 Local Canadian Provider
            📞 Fast Response & Personalized Service
            🛠️ Cutting-edge Technology for Peace of Mind
            Discover SecureNest Now!
          </p>
          <Button size={"lg"} className='bg-green-600 hover:bg-green-500'>Shop Now</Button>
        </div>
        <div className="relative w-full h-96 overflow-hidden">
          {Array.from({ length: 2 }).map((_, index) => (
            <div
              key={index}
              className={`${
                index === currentSlide ? 'block' : 'hidden'
              } duration-700 ease-in-out`}
              data-carousel-item
            >
              <Image
                height={500}
                width={500}
                quality={100}
                priority
                src={`/spic${index + 1}.png`}
                className="absolute block w-auto md:w-fit -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </div>

        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          {Array.from({ length: 2 }).map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? 'bg-green-500' : 'bg-gray-300'
              }`}
              aria-current={index === currentSlide}
              aria-label={`Slide ${index + 1}`}
              onClick={() => setCurrentSlide(index)}
            ></button>
          ))}
        </div>

        <button
          type="button"
          className="hidden absolute top-0 start-0 z-30 md:flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
          onClick={handlePrevSlide}
        >
          <BsArrowLeftCircleFill className='size-6 text-green-500' />
        </button>
        <button
          type="button"
          className="hidden absolute top-0 end-0 z-30 md:flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
          onClick={handleNextSlide}
        >
          <BsArrowRightCircleFill className='size-6 text-green-500' />
        </button>
      </div>
    </div>
  );
}
