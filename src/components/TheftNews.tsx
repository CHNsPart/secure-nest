"use client";

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { HiArrowCircleRight } from "react-icons/hi";
import { Button } from './ui/button';
import LoadingSkeleton from './LoadingSkeleton';

const TheftNews: React.FC = () => {
  const newsContainerRef = useRef<HTMLDivElement>(null);

  // Mock testimonial data
  const newsData = [
    {
      id: 1,
      quote: 'Video captures armed break-in at York Region home with residents still inside',
      image: '/news1.png',
	    newsLink: 'https://www.cbc.ca/news/canada/toronto/crime-robbery-police-theft-1.7116743?fbclid=IwAR0L5S5BDRkaQ7WS42iNTh9N8qzlZ71G-Mkj0tFk7QVPxerIs1WSHU_ZJGw'
    },
    {
      id: 2,
      quote: 'Security footage captures elaborate burglary at North York home',
      image: '/news2.png',
	    newsLink: 'https://www.cbc.ca/news/canada/toronto/break-in-north-york-home-1.6982960?fbclid=IwAR3ZZIgZxnwLKiKxhhemhi0G6cI4HMIkIz0SO-jFWprQup9PbqNAIGwicBo'
    },
  ];

  const handleScrollRight = () => {
    if (newsContainerRef.current) {
      newsContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  const handleScrollLeft = () => {
    if (newsContainerRef.current) {
      newsContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await fetch('https://script.google.com/macros/s/AKfycbyw9l5s7eBl_5UXNwjNPtt05CONoQVZIMd9B_bY99bn6c-xTej-5aZvsNT7BFBZpXCjmA/exec');
        const text = await response.text();
        const data = JSON.parse(text.replace(/^callback\(/, '').replace(/\);?$/, ''));
        // console.log("Thief", data);
        setData(data);
        setLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    

    fetchData();
  }, []);

  return (
    <div className="relative container w-full bg-white py-6 sm:py-8 lg:py-16">
      <div className="mx-auto max-w-screen-xl">
        <h2 className="mb-8 text-center text-2xl font-bold text-gray-800 md:mb-12 lg:text-3xl">Local News</h2>

        <button
          onClick={handleScrollLeft}
          className="absolute z-50 left-4 -bottom-4 transform -translate-y-1/2 bg-white text-green-500 p-2 rounded-full focus:outline-none"
        >
          <HiArrowCircleRight className='-rotate-180' size={50} />
        </button>
        <div
          ref={newsContainerRef}
          className="flex gap-4 md:gap-8 overflow-x-auto w-full" 
          style={{ scrollbarWidth: 'none' }}
        >
          {/* Testimonial loop */}
          {!loading ? 
            <>
              {data.map(({id, image, quote, newsLink}) => (
                <div key={id} className="flex flex-row items-start gap-4 rounded-lg bg-gradient-to-br from-gray-200 to-gray-50 min-w-[32rem] px-8 py-6 md:gap-6">
                  <div className="h-full w-fit overflow-hidden rounded-md border-2 border-green-100 bg-gray-100">
                    <Image
                      height={500}
                      width={500}
                      src={image}
                      loading="lazy"
                      alt={`Photo by News`}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>			
                  <div className='flex flex-col h-full justify-between w-1/2'>
                    <div className="text-left font-semibold italic text-black">{quote}</div>
                    <a target='_blank' href={newsLink}>
                      <Button className="w-full bg-green-500 hover:bg-green-600">Know More</Button>
                    </a>
                  </div>
                </div>
              ))}
            </>
          :
            <LoadingSkeleton height='32'/>
          }
        </div>
        <button
          onClick={handleScrollRight}
          className="absolute z-50 right-4 -bottom-4 transform -translate-y-1/2 bg-white text-green-500 p-2 rounded-full focus:outline-none"
        >
          <HiArrowCircleRight size={50} />
        </button>
      </div>
    </div>
  );
};

export default TheftNews;
