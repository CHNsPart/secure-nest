// import ProdHero from '@/components/ProdHero';
// import ProdImageGallery from '@/components/ProdImageGallery';
// import { Product, products } from '@/config/products';
// import Image from 'next/image';
// import React from 'react';

// export default function ProductsPage() {
//   return (
//     <div className='container h-full w-full py-12'>
//       <ProdHero/>
//       <p className='text-4xl mb-12'>All Available Products</p>
//       <ProdImageGallery/>
//       <div className='flex justify-start flex-wrap flex-auto gap-5 w-full'>
//         {products.map((product: Product, index: number) => {
//           const { title, image, description, category } = product;
//           return (
//             <div key={index} className='max-w-md mx-auto py-12 bg-white rounded-xl shadow-md overflow-hidden md:max-w-full'>
//               <div className='md:flex'>
//                 <div className='md:shrink-0'>
//                   <Image
//                     width={200}
//                     height={200}
//                     src={image}
//                     alt={title}
//                     className='h-48 w-full object-contain md:h-full md:w-48'
//                   />
//                 </div>
//                 <div className='p-8'>
//                   <div className='uppercase tracking-wide text-sm text-green-500 font-semibold'>{category}</div>
//                   <a href="#" className='block mt-1 text-lg leading-tight font-medium text-black hover:underline'>
//                     {title}
//                   </a>
//                   <p className='mt-2 text-slate-500'>{description}</p>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }











import ProdHero from '@/components/ProdHero';
import ProdImageGallery from '@/components/ProdImageGallery';
import YourIcon from '@/config/Icons';
import { Product, products } from '@/config/products';
import Image from 'next/image';
import React from 'react';

export default function ProductsPage() {
  // Filter products by category
  const securityCameras = products.filter(product => product.category === 'security camera');
  const securitySensors = products.filter(product => product.category === 'security sensors');
  const hazardDetection = products.filter(product => product.category === 'hazard detection');
  const homeAutomation = products.filter(product => product.category === 'home automation');

  return (
    <div className='container h-full w-full py-12'>
      <ProdHero/>
      <p className='text-4xl mb-12'>All Available Products</p>
      <ProdImageGallery/>

      {/* Render products by category */}
      <div className='flex justify-start flex-wrap flex-auto gap-5 w-full'>
        {/* Security Cameras */}
        <div className='w-full grid grid-cols-1 lg:grid-cols-3 gap-4'>
          <h2 className='text-2xl font-bold text-green-950 py-8 flex items-center lg:justify-center gap-2 bg-green-50 px-5 rounded-xl'><YourIcon size='7' variant="camera" />Security Cameras</h2>
          {securityCameras.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>

        {/* Security Sensors */}
        <div className='w-full grid grid-cols-1 lg:grid-cols-3 gap-4'>
          <h2 className='text-2xl font-bold text-green-950 py-8 flex items-center lg:justify-center gap-2 bg-green-50 px-5 rounded-xl'><YourIcon size='7' variant="motion" />Security Sensors</h2>
          {securitySensors.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>

        {/* Hazard Detection */}
        <div className='w-full grid grid-cols-1 lg:grid-cols-3 gap-4'>
          <h2 className='text-2xl font-bold text-green-950 py-8 flex items-center lg:justify-center gap-2 bg-green-50 px-5 rounded-xl'><YourIcon size='7' variant="alarm" />Hazard Detection</h2>
          {hazardDetection.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>

        {/* Home Automation */}
        <div className='w-full grid grid-cols-1 lg:grid-cols-3 gap-4'>
          <h2 className='text-2xl font-bold text-green-950 py-8 flex items-center lg:justify-center gap-2 bg-green-50 px-5 rounded-xl'><YourIcon size='7' variant="smartphone" />Home Automation</h2>
          {homeAutomation.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

interface ProductCardProps {
  product: Product;
}


// Product Card Component
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { title, image, description, category } = product;

  return (
    <div className='min-w-full mx-auto py-12 bg-white rounded-xl shadow-md overflow-hidden md:min-w-full'>
      <div className='md:flex md:flex-col'>
        <div className='md:shrink-0'>
          <Image
            width={200}
            height={200}
            src={image}
            alt={title}
            className='h-48 w-full object-contain md:h-full md:w-48 md:mx-5'
          />
        </div>
        <div className='p-8'>
          <div className='uppercase tracking-wide text-sm text-green-500 font-semibold py-2'>{category}</div>
          <a href="#" className='block mt-1 text-lg leading-tight font-medium text-black'>
            {title}
          </a>
          <p className='mt-2 text-slate-500'>{description}</p>
        </div>
      </div>
    </div>
  );
};


