import { Product, products } from '@/config/products';
import Image from 'next/image';
import React from 'react'

export default function page() {
  return (
    <div className='container h-full w-full py-12'>
        <p className='text-4xl mb-12'>{"All Available Products"}</p>
        <div className='flex justify-start flex-wrap flex-auto gap-2 w-full'>
        {products.map((product: Product, index: number) => {
          const { title, image, description } = product;
            return (
              <div key={index} className='border relative group hover:border-green-500 w-full md:max-w-56 p-2 rounded-xl'>
                <Image
                  width={200}
                  height={200}
                  src={image}
                  alt={title}
                  className='rounded-lg object-contain h-28 w-auto mb-2'
                />
                <div className='flex justify-between gap-2'>
                  <div className='flex flex-col justify-between'>
                    <span className='text-wrap w-full'>{title}</span>
                    <span className='absolute text-wrap border-b min-h-full border-green-500 hidden top-0 left-0 z-50 p-5 rounded-xl shadow-2xl bg-white group-hover:block text-sm text-gray-500 w-full'>{description}</span>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  )
}
