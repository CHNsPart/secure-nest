// src/app/plans/[plan]/page.tsx
// "use client";

// import { priceData } from '@/components/Plans';
// import { Product, products } from '@/config/products';
// import Image from 'next/image';
// import { useParams } from 'next/navigation';
// import React, { useState } from 'react';
// // import { products, Product } from './products';

// export default function Page() {
//   const { plan }: any | string = useParams();
//   const selectedPriceData = priceData.find(data => data.id === plan);
//   const [installCost, setInstallCost] = useState(false);
//   console.log(installCost)
//   return (
//     <div className='container min-h-screen w-full py-12'>
//       <p className='text-4xl'>{plan.toUpperCase()}</p>
//       <div className='bg-gray-100 rounded-lg p-10 mt-5'>
//         {selectedPriceData && (
//           <div className='flex flex-col gap-2 md:gap-0 md:flex-row justify-between'>
//             <div>
//               <h2 className='text-2xl font-semibold'>{selectedPriceData.planName}</h2>
//               <p className='text-lg'>${selectedPriceData.price} CAD/Month</p>
//               <span className='italic text-gray-500'>Minimum 3 Years plan</span>
//               <div className='flex items-start gap-2'>
//                 <input type="checkbox" />
//                 <span className='text-sm'>{`Want us to Install for you? $${selectedPriceData.price}CAD/One Time Payment`}</span>
//               </div>
//             </div>
//             <button className={`bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md mt-4`}>
//               Continue  to checkout
//             </button>
//           </div>
//         )}
//       </div>
//       <div className='border w-full my-6' />
//       <h3 className="my-6 text-2xl font-semibold text-green-600">Add more items</h3>

//       {/* Product cards start */}
//       <div className='flex justify-start flex-wrap gap-2 w-full'>
//         {products.map((product: Product, index: number) => {
//           const { title, image, basic, silver, gold, offcity } = product;
//           const price = getPriceByPlan(plan, basic, silver, gold, offcity);

//           // Render card only if the price is not null
//           if (price !== null) {
//             return (
//               <div key={index} className='border w-fit p-2 rounded-xl'>
//                 <Image
//                   width={200}
//                   height={200}
//                   src={image}
//                   alt={title}
//                   className='rounded-lg mb-2'
//                 />
//                 <div className='flex justify-between gap-2'>
//                   <div className='flex flex-col'>
//                     <span className='text-wrap max-w-28'>{title}</span>
//                     <span className=''>{price}</span>
//                   </div>
//                   <input type="number" className='max-w-16 h-10 border rounded-md text-center' />
//                 </div>
//               </div>
//             );
//           }
//           return null;
//         })}
//       </div>
//       {/* Product cards end */}
//     </div>
//   );
// }

// // Function to get the price based on the selected plan
// function getPriceByPlan(planName: string, basic: any, silver: any, gold: any, offcity: any): number | string | null {
//   switch (planName) {
//     case 'basic':
//       return basic.price;
//     case 'silver':
//       return silver.price;
//     case 'gold':
//       return gold.price;
//     case 'offcity':
//       return offcity.price;
//     default:
//       return null;
//   }
// }

// src/app/plans/[plan]/page.tsx
"use client";

import { priceData } from "@/components/Plans";
import { Product, products } from "@/config/products";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

import { useCookies } from "next-client-cookies";

export default function Page() {
  const { plan }: any | string = useParams();
  const selectedPriceData = priceData.find((data) => data.id === plan);
  const [installCost, setInstallCost] = useState(false);
  const [productQuantities, setProductQuantities] = useState<{
    [key: string]: { quantity: number; name: string };
  }>({});

  // const { isAuthenticated, getUser } = getKindeServerSession();
  // const user: any = await getUser();
  // const auth: boolean = await isAuthenticated();
  const cookies = useCookies();

  const user = cookies.get("user");

  const handleCheckboxChange = () => {
    setInstallCost(!installCost);
  };

  const handleQuantityChange = (
    productName: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newQuantity = parseInt(event.target.value, 10) || 0;
    const productNameLowercase = productName.toLowerCase();

    setProductQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productNameLowercase]: {
        quantity: newQuantity,
        name: productName,
      },
    }));
  };

  console.log(installCost);
  console.log(productQuantities);

  let planInfo = {};

  useEffect(() => {
    if (plan.toLowerCase() === "basic") {
      planInfo = {
        name: "Basic Plan",
        initialCost: 14.99,
        planYear: 3,
        installationCost: 14.99,
        extraItems: [
          {
            id: 1,
            name: "Wifi Camera",
            cost: 6.99,
            quantity: 0,
          },
          {
            id: 2,
            name: "Door and window alarm",
            cost: 0.99,
            quantity: 0,
          },
          {
            id: 3,
            name: "Echo shaw 5",
            cost: 8.99,
            quantity: 0,
          },
          {
            id: 4,
            name: "Smart garage door opener",
            cost: 5.99,
            quantity: 0,
          },
          {
            id: 5,
            name: "Glass break sensor",
            cost: 1.75,
            quantity: 0,
          },
          {
            id: 6,
            name: "Motion sensor",
            cost: 3.99,
            quantity: 0,
          },
          {
            id: 7,
            name: "Smart light bulb",
            cost: 0.99,
            quantity: 0,
          },
          {
            id: 8,
            name: "TP-Link indoor plug",
            cost: 1.99,
            quantity: 0,
          },
          {
            id: 9,
            name: "TP-Link Outdoor plug",
            cost: 1.99,
            quantity: 0,
          },
          {
            id: 10,
            name: "Doorbell Camera",
            cost: 6.99,
            quantity: 0,
          },
        ],
      };
    } else if (plan.toLowerCase() === "silver") {
      planInfo = {
        name: "Silver Plan",
        initialCost: 29.99,
        planYear: 3,
        installationCost: 29.99,
        extraItems: [
          {
            id: 1,
            name: "Wifi Camera",
            cost: 5.99,
            quantity: 0,
          },
          {
            id: 2,
            name: "Door and window alarm",
            cost: 0.75,
            quantity: 0,
          },
          {
            id: 3,
            name: "Echo shaw 5",
            cost: 7.99,
            quantity: 0,
          },
          {
            id: 4,
            name: "Smart garage door opener",
            cost: 5.5,
            quantity: 0,
          },
          {
            id: 5,
            name: "Glass break sensor",
            cost: 1.75,
            quantity: 0,
          },
          {
            id: 6,
            name: "Motion sensor",
            cost: 3.5,
            quantity: 0,
          },
          {
            id: 7,
            name: "Smart light bulb",
            cost: 0.75,
            quantity: 0,
          },
          {
            id: 8,
            name: "TP-Link indoor plug",
            cost: 1.75,
            quantity: 0,
          },
          {
            id: 9,
            name: "TP-Link Outdoor plug",
            cost: 1.75,
            quantity: 0,
          },
          {
            id: 10,
            name: "Doorbell Camera",
            cost: 5.99,
            quantity: 0,
          },
          {
            id: 11,
            name: "Cell phone signal booster",
            cost: 13.99,
            quantity: 0,
          },
          {
            id: 12,
            name: "Doorlock",
            cost: 5.75,
            quantity: 0,
          },
          {
            id: 13,
            name: "Google nest thermostat",
            cost: 7.99,
            quantity: 0,
          },
        ],
      };
    } else if (plan.toLowerCase() === "gold") {
      planInfo = {
        name: "Gold Plan",
        initialCost: 49.99,
        planYear: 3,
        installationCost: 49.99,
        extraItems: [
          {
            id: 1,
            name: "Wifi Camera",
            cost: 5.99,
            quantity: 0,
          },
          {
            id: 2,
            name: "Door and window alarm",
            cost: 0.75,
            quantity: 0,
          },
          {
            id: 3,
            name: "Echo shaw 5",
            cost: 7.99,
            quantity: 0,
          },
          {
            id: 4,
            name: "Smart garage door opener",
            cost: 5.5,
            quantity: 0,
          },
          {
            id: 5,
            name: "Glass break sensor",
            cost: 1.75,
            quantity: 0,
          },
          {
            id: 6,
            name: "Motion sensor",
            cost: 3.5,
            quantity: 0,
          },
          {
            id: 7,
            name: "Smart light bulb",
            cost: 0.75,
            quantity: 0,
          },
          {
            id: 8,
            name: "TP-Link indoor plug",
            cost: 1.75,
            quantity: 0,
          },
          {
            id: 9,
            name: "TP-Link Outdoor plug",
            cost: 1.75,
            quantity: 0,
          },
          {
            id: 10,
            name: "Doorbell Camera",
            cost: 5.99,
            quantity: 0,
          },
          {
            id: 11,
            name: "Cell phone signal booster",
            cost: 11.99,
            quantity: 0,
          },
          {
            id: 12,
            name: "Doorlock",
            cost: 4.5,
            quantity: 0,
          },
          {
            id: 13,
            name: "Google nest thermostat",
            cost: 7.99,
            quantity: 0,
          },
        ],
      };
    } else if (plan.toLowerCase() === "offcity") {
      planInfo = {
        name: "Off-City Plan",
        initialCost: 34.99,
        planYear: 3,
        installationCost: 34.99,
        extraItems: [
          {
            id: 1,
            name: "Wifi Camera",
            cost: 5.99,
            quantity: 0,
          },
          {
            id: 2,
            name: "Door and window alarm",
            cost: 0.75,
            quantity: 0,
          },
          {
            id: 3,
            name: "Echo shaw 5",
            cost: 7.99,
            quantity: 0,
          },
          {
            id: 4,
            name: "Smart garage door opener",
            cost: 5.5,
            quantity: 0,
          },
          {
            id: 5,
            name: "Glass break sensor",
            cost: 1.75,
            quantity: 0,
          },
          {
            id: 6,
            name: "Motion sensor",
            cost: 3.5,
            quantity: 0,
          },
          {
            id: 7,
            name: "Smart light bulb",
            cost: 0.75,
            quantity: 0,
          },
          {
            id: 8,
            name: "TP-Link indoor plug",
            cost: 1.75,
            quantity: 0,
          },
          {
            id: 9,
            name: "TP-Link Outdoor plug",
            cost: 1.75,
            quantity: 0,
          },
          {
            id: 10,
            name: "Doorbell Camera",
            cost: 5.99,
            quantity: 0,
          },
          {
            id: 11,
            name: "Cell phone signal booster",
            cost: 11.99,
            quantity: 0,
          },
          {
            id: 12,
            name: "Doorlock",
            cost: 4.75,
            quantity: 0,
          },
          {
            id: 13,
            name: "Google nest thermostat",
            cost: 7.99,
            quantity: 0,
          },
        ],
      };
    }
  }, [plan]);

  const router = useRouter();

  const handleContinueToCheckout = () => {
    // router.push("/api/auth/login");
    if (!user) {
      window.location.href = "/api/auth/login";
    } else {
      console.log(planInfo);
    }
  };

  return (
    <div className="container min-h-screen w-full py-12">
      <p className="text-4xl">{plan.toUpperCase()}</p>
      <div className="bg-gray-100 rounded-lg p-10 mt-5">
        {selectedPriceData && (
          <div className="flex flex-col gap-2 md:gap-0 md:flex-row justify-between">
            <div>
              <h2 className="text-2xl font-semibold">
                {selectedPriceData.planName}
              </h2>
              <p className="text-lg">${selectedPriceData.price} CAD/Month</p>
              <span className="italic text-gray-500">Minimum 3 Years plan</span>
              <div className="flex items-start md:items-center gap-2">
                <input
                  className="accent-green-400 rounded-full"
                  type="checkbox"
                  onChange={handleCheckboxChange}
                />
                <span className="text-sm">{`Want us to Install for you? $${selectedPriceData.price}CAD/One Time Payment`}</span>
              </div>
            </div>
            <button
              className={`bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-md mt-4`}
              onClick={handleContinueToCheckout}
            >
              Continue to checkout
            </button>
          </div>
        )}
      </div>
      <div className="border w-full my-6" />
      <h3 className="my-6 text-2xl font-semibold text-green-600">
        Add more items
      </h3>

      {/* Product cards start */}
      <div className="flex justify-start flex-wrap gap-2 w-full">
        {products.map((product: Product, index: number) => {
          const { title, image, basic, silver, gold, offcity } = product;
          const price = getPriceByPlan(plan, basic, silver, gold, offcity);

          // Render card only if the price is not null
          if (price !== null) {
            const productNameLowercase = title.toLowerCase();
            const productQuantity = productQuantities[productNameLowercase] || {
              quantity: 0,
              name: title,
            };

            return (
              <div
                key={index}
                className="border hover:border-green-500 w-full md:max-w-56 p-2 rounded-xl"
              >
                <Image
                  width={200}
                  height={200}
                  src={image}
                  alt={title}
                  className="rounded-lg object-contain h-28 w-auto mb-2"
                />
                <div className="flex justify-between gap-2">
                  <div className="flex flex-col justify-between">
                    <span className="text-wrap max-w-28">{title}</span>
                    <span className="text-wrap">
                      {typeof price === "number"
                        ? `$${price}CAD/`
                        : `${price.toLocaleUpperCase()} `}
                      <span className="text-sm font-semibold text-green-600">
                        {typeof price === "number" ? "Month" : "add extra?"}
                      </span>
                    </span>
                  </div>
                  <div>
                    <input
                      type="number"
                      className="max-w-16 h-10 border rounded-md text-center"
                      value={productQuantity.quantity}
                      onChange={(e) => handleQuantityChange(title, e)}
                    />
                  </div>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
      {/* Product cards end */}
    </div>
  );
}

// Function to get the price based on the selected plan
function getPriceByPlan(
  planName: string,
  basic: any,
  silver: any,
  gold: any,
  offcity: any
): number | string | null {
  const getPrice = (price: number | string | null): number | string | null => {
    if (typeof price === "number") {
      return price;
    } else if (
      typeof price === "string" &&
      price.toLowerCase() === "included"
    ) {
      return "included";
    }
    return null;
  };

  return getPrice(
    {
      basic: basic.price,
      silver: silver.price,
      gold: gold.price,
      offcity: offcity.price,
    }[planName]
  );
}

// Update the getPriceByProductName function
function getPriceByProductName(productName: string): number {
  const product = products.find((p) => p.title === productName);
  if (product) {
    const { basic, silver, gold, offcity } = product;
    return getPriceByPlan(productName, basic, silver, gold, offcity) as number;
  }
  return 0;
}
