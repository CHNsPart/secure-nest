// // TestimonialSection.tsx
// "use client";

// import Image from 'next/image';
// import React, { useRef } from 'react';

// const TestimonialSection: React.FC = () => {
//   const testimonialContainerRef = useRef<HTMLDivElement>(null);

//   // Mock testimonial data
//   const testimonialData = [
//     {
//       id: 1,
//       quote: '“This is a section of some simple filler text, also known as placeholder text.”',
//       author: 'John McCulling',
//       role: 'CEO / Datadrift',
//       image: 'https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=112',
//     },
//     {
//       id: 2,
//       quote: '“This is a section of some simple filler text, also known as placeholder text.”',
//       author: 'Christian Ferrer',
//       role: 'Designer',
//       image: 'https://images.unsplash.com/photo-1532073150508-0c1df022bdd1?auto=format&q=75&fit=crop&w=112',
//     },
//     {
//       id: 3,
//       quote: '“This is a section of some simple filler text, also known as placeholder text.”',
//       author: 'John McCulling',
//       role: 'CEO / Datadrift',
//       image: 'https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=112',
//     },
//     {
//       id: 4,
//       quote: '“This is a section of some simple filler text, also known as placeholder text.”',
//       author: 'Christian Ferrer',
//       role: 'Designer',
//       image: 'https://images.unsplash.com/photo-1532073150508-0c1df022bdd1?auto=format&q=75&fit=crop&w=112',
//     },
//     {
//         id: 5,
//         quote: '“This is a section of some simple filler text, also known as placeholder text.”',
//         author: 'Christian Ferrer',
//         role: 'Designer',
//         image: 'https://images.unsplash.com/photo-1532073150508-0c1df022bdd1?auto=format&q=75&fit=crop&w=112',
//       }
//     // Add more data for additional testimonials
//   ];

//   const handleScrollRight = () => {
//     if (testimonialContainerRef.current) {
//       testimonialContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
//     }
//   };

//   return (
//     <div className="relative bg-white py-6 sm:py-8 lg:py-12">
//       <div className="mx-auto max-w-screen-xl px-4 md:px-8">
//         <h2 className="mb-8 text-center text-2xl font-bold text-gray-800 md:mb-12 lg:text-3xl">What others say about us</h2>

//         <div
//           ref={testimonialContainerRef}
//           className="flex gap-4 md:gap-8 overflow-x-auto"
//           style={{ scrollbarWidth: 'none' }}
//         >
//           {/* Testimonial loop */}
//           {testimonialData.map((testimonial) => (
//             <div key={testimonial.id} className="flex flex-col items-center gap-4 rounded-lg bg-green-500 px-8 py-6 md:gap-6">
//               <div className="max-w-md text-center text-white lg:text-lg">{testimonial.quote}</div>

//               <div className="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
//                 <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-green-100 bg-gray-100 md:h-14 md:w-14">
//                   <Image
//                     height={200}
//                     width={200}
//                     src={testimonial.image}
//                     loading="lazy"
//                     alt={`Photo by ${testimonial.author}`}
//                     className="h-full w-full object-cover object-center"
//                   />
//                 </div>

//                 <div>
//                   <div className="text-center text-sm font-bold text-green-50 sm:text-left md:text-base">{testimonial.author}</div>
//                   <p className="text-center text-sm text-green-200 sm:text-left md:text-sm">{testimonial.role}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//           {/* Testimonial loop - end */}
//         </div>

//         {/* Floating button for scrolling */}
//         <button
//           onClick={handleScrollRight}
//           className="absolute z-50 top-1/2 right-4 transform -translate-y-1/2 bg-green-500 text-white p-2 rounded-full focus:outline-none"
//         >
//           Scroll Right
//         </button>
//       </div>
//     </div>
//   );
// };

// export default TestimonialSection;








// TestimonialSection.tsx
"use client";

import Image from 'next/image';
import React, { useRef } from 'react';
import { HiArrowCircleRight } from "react-icons/hi";

const TestimonialSection: React.FC = () => {
  const testimonialContainerRef = useRef<HTMLDivElement>(null);

  // Mock testimonial data
  const testimonialData = [
    {
      id: 1,
      quote: '“This is a section of some simple filler text, also known as placeholder text.”',
      author: 'John McCulling',
      role: 'CEO / Datadrift',
      image: 'https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=112',
    },
    {
      id: 2,
      quote: '“This is a section of some simple filler text, also known as placeholder text.”',
      author: 'Christian Ferrer',
      role: 'Designer',
      image: 'https://images.unsplash.com/photo-1532073150508-0c1df022bdd1?auto=format&q=75&fit=crop&w=112',
    },
    {
      id: 3,
      quote: '“This is a section of some simple filler text, also known as placeholder text.”',
      author: 'John McCulling',
      role: 'CEO / Datadrift',
      image: 'https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=112',
    },
    {
      id: 4,
      quote: '“This is a section of some simple filler text, also known as placeholder text.”',
      author: 'Christian Ferrer',
      role: 'Designer',
      image: 'https://images.unsplash.com/photo-1532073150508-0c1df022bdd1?auto=format&q=75&fit=crop&w=112',
    },
    {
        id: 5,
        quote: '“This is a section of some simple filler text, also known as placeholder text.”',
        author: 'Christian Ferrer',
        role: 'Designer',
        image: 'https://images.unsplash.com/photo-1532073150508-0c1df022bdd1?auto=format&q=75&fit=crop&w=112',
      }
    // Add more data for additional testimonials
  ];

  const handleScrollRight = () => {
    if (testimonialContainerRef.current) {
      testimonialContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative container w-full bg-white py-6 sm:py-8 lg:py-16">
      <div className="mx-auto max-w-screen-xl">
        <h2 className="mb-8 text-center text-2xl font-bold text-gray-800 md:mb-12 lg:text-3xl">What others say about us</h2>

        <div
          ref={testimonialContainerRef}
          className="flex gap-4 md:gap-8 overflow-x-auto w-full" 
          style={{ scrollbarWidth: 'none' }}
        >
          {/* Testimonial loop */}
          {testimonialData.map((testimonial) => (
            <div key={testimonial.id} className="flex flex-col items-center gap-4 rounded-lg bg-gradient-to-br from-green-500 to-green-800 min-w-96 px-8 py-6 md:gap-6">
              <div className="max-w-md text-center text-white lg:text-lg">{testimonial.quote}</div>

              <div className="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
                <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-green-100 bg-gray-100 md:h-14 md:w-14">
                  <Image
                    height={200}
                    width={200}
                    src={testimonial.image}
                    loading="lazy"
                    alt={`Photo by ${testimonial.author}`}
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <div>
                  <div className="text-center text-sm font-bold text-green-50 sm:text-left md:text-base">{testimonial.author}</div>
                  <p className="text-center text-sm text-green-200 sm:text-left md:text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
          {/* Testimonial loop - end */}
        </div>

        {/* Floating button for scrolling */}
        <button
          onClick={handleScrollRight}
          className="absolute z-50 top-2.5/5 right-4 transform -translate-y-1/2 bg-white text-green-500 p-2 rounded-full focus:outline-none"
        >
          <HiArrowCircleRight size={50} />
        </button>
      </div>
    </div>
  );
};

export default TestimonialSection;
