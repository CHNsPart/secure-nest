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

import Plans, { priceData } from "@/components/Plans";
import { Product, products } from "@/config/products";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

import { useCookies } from "next-client-cookies";

import { CheckoutSubscriptionBody } from "@/app/checkout-sessions/route";
import { Button } from "@/components/ui/button";
import { loadStripe } from "@stripe/stripe-js";
import { FaStar } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { PiStarFourFill } from "react-icons/pi";
import Stripe from "stripe";
import YourIcon from "@/config/Icons";

export default function Page() {
  const { plan }: any | string = useParams();
  const selectedPriceData = priceData.find((data) => data.id === plan);
  const [installCost, setInstallCost] = useState(false);
  const [productQuantities, setProductQuantities] = useState<any>([]);
  const [initialQuantity, setInitialQuantity] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const [landLine, setLandLine] = useState(false);
  const [landlinePhoneNumber, setLandlinePhoneNumber] = useState(false);

  // const { isAuthenticated, getUser } = getKindeServerSession();
  // const user: any = await getUser();
  // const auth: boolean = await isAuthenticated();

  const cookies: any = useCookies();

  const user: any = cookies.get("user")
    ? JSON.parse(cookies.get("user"))
    : cookies.get("user");

  // console.log(user);

  const handleCheckboxChange = () => {
    setInstallCost(!installCost);
  };

  const handleLandlineCheckboxChange = () => {
    setLandlinePhoneNumber(!landlinePhoneNumber);
  };

  useEffect(() => {
    if (installCost) {
      setProductQuantities((prevQuantities: any) =>
        [
          ...prevQuantities,
          {
            price_data: {
              currency: "cad",
              unit_amount: planInfo?.initialCost * 100,
              product_data: {
                name: planInfo?.name + " installation",
                description:
                  planInfo?.name +
                  ` installation for ${planInfo?.initialCost}/One Time Payment`,
              },
            },
            quantity: 1,
          },
        ].filter((obj: any, index) => {
          return (
            index ===
            [
              ...prevQuantities,
              {
                price_data: {
                  currency: "cad",
                  unit_amount: planInfo?.initialCost * 100,
                  product_data: {
                    name: planInfo?.name + " installation",
                    description:
                      planInfo?.name +
                      ` installation for ${planInfo?.initialCost}/One Time Payment`,
                  },
                },
                quantity: 1,
              },
            ].findIndex(
              (itm: any) =>
                obj?.price_data?.product_data?.name ===
                itm?.price_data?.product_data?.name
            )
          );
        })
      );
    } else {
      // console.log("deleted");
      //remove installation cost from array
      setProductQuantities((prevQuantity: any) =>
        prevQuantity.filter(function (obj: any) {
          return (
            obj?.price_data?.product_data?.name !==
            planInfo?.name + " installation"
          );
        })
      );
    }
  }, [installCost]);

  const addLandline = () => {
    setLandLine(!landLine);
  };

  useEffect(() => {
    if (landLine) {
      setProductQuantities((prevQuantities: any) =>
        [
          ...prevQuantities,
          {
            price_data: {
              currency: "cad",
              unit_amount: 9.99 * 100,
              product_data: {
                name: landlinePhoneNumber
                  ? `Landline Telephone Line With A Number`
                  : `Landline Telephone Line Without A Number`,
                description: `Landline Telephone Line subscription for $9.99/month`,
              },
            },
            quantity: 1,
          },
        ].filter((obj: any, index) => {
          return (
            index ===
            [
              ...prevQuantities,
              {
                price_data: {
                  currency: "cad",
                  unit_amount: 9.99 * 100,
                  product_data: {
                    name: landlinePhoneNumber
                      ? `Landline Telephone Line With A Number`
                      : `Landline Telephone Line Without A Number`,
                    description: `Landline Telephone Line subscription for $9.99/month`,
                  },
                },
                quantity: 1,
              },
            ].findIndex(
              (itm: any) =>
                obj?.price_data?.product_data?.name ===
                itm?.price_data?.product_data?.name
            )
          );
        })
      );
    } else {
      // console.log("deleted");
      //remove installation cost from array
      setProductQuantities((prevQuantity: any) =>
        prevQuantity.filter(function (obj: any) {
          return (
            obj?.price_data?.product_data?.name.slice(0, 23) !==
            `Landline Telephone Line`
          );
        })
      );
    }
  }, [landLine, landlinePhoneNumber]);

  const handleQuantityChange = (
    productName: string,
    price: number | string | any,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    console.log(event.target.value);
    var newQuantity = Number(event.target.value) || 0;
    const productNameLowercase = productName.toLowerCase();

    // setInitialQuantity(Number(event.target.value));

    // setProductQuantities((prevQuantities) => ({
    //   ...prevQuantities,
    //   [productNameLowercase]: {
    //     quantity: newQuantity,
    //     name: productName,
    //   },
    // }));
    if (newQuantity > 0) {
      setProductQuantities((prevQuantities: any) =>
        [
          ...prevQuantities,
          {
            price_data: {
              currency: "cad",
              recurring: {
                interval: "month",
              },
              unit_amount: price * 100,
              product_data: {
                name: productName,
                description: productName + ` subscription for ${price}/month`,
              },
            },
            quantity: newQuantity,
          },
          // {
          //   quantity: newQuantity,
          //   name: productName,
          //   price,
          // },
        ].filter((obj: any, index) => {
          if (
            obj?.price_data?.product_data?.name === productName &&
            obj?.quantity < Number(event.target.value)
          ) {
            obj.quantity = obj?.quantity + 1;
          } else if (
            obj?.price_data?.product_data?.name === productName &&
            obj?.quantity > Number(event.target.value)
          ) {
            obj.quantity = obj?.quantity - 1;
          }
          // console.log(obj?.price_data?.product_data?.name);
          // console.log(productName);
          return (
            index ===
            [
              ...prevQuantities,
              {
                price_data: {
                  currency: "cad",
                  recurring: {
                    interval: "month",
                  },
                  unit_amount: price * 100,
                  product_data: {
                    name: productName,
                    description:
                      productName + ` subscription for ${price}/month`,
                  },
                },
                quantity: newQuantity,
              },
            ].findIndex(
              (itm: any) =>
                obj?.price_data?.product_data?.name ===
                itm?.price_data?.product_data?.name
            )
          );
        })
      );
    } else {
      //remove product if it is set to zero
      setProductQuantities((prevQuantity: any) =>
        prevQuantity.filter(function (obj: any) {
          return obj?.price_data?.product_data?.name !== productName;
        })
      );
    }
  };

  console.log(installCost);
  console.log(productQuantities);

  let planInfo: any = {};

  useEffect(() => {
    if (plan.toLowerCase() === "basic") {
      planInfo = {
        name: "Basic",
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
        name: "Silver",
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
        name: "Gold",
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
        name: "Off-City",
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
  }, [plan, productQuantities, installCost]);

  const router = useRouter();

  const handleContinueToCheckout = async () => {
    setLoading(true);
    // router.push("/api/auth/login");
    if (!user) {
      window.location.href = "/api/auth/login";
    } else {
      console.log(planInfo);

      //create customer
      const customer = await fetch("/api/customer", {
        method: "post",
        body: JSON.stringify(
          {
            name: user?.given_name + " " + user?.family_name,
            email: user?.email,
          },
          null
        ),
        headers: {
          "content-type": "application/json",
        },
      });

      //get the user info
      //create customer
      const getUser = await fetch("/api/getCustomer");

      const getUserInfo = await getUser.json();

      console.log(getUserInfo);

      // step 1: load stripe
      const STRIPE_PK = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!;
      const stripe = await loadStripe(STRIPE_PK);

      // step 2: define the data for monthly subscription
      const body: CheckoutSubscriptionBody = {
        customerId: getUserInfo?.stripeCustomerId,
        // customer_email: "deepta.barua@northsouth.edu",
        interval: "month",
        amount: planInfo?.initialCost * 100,
        plan: planInfo?.name,
        planDescription:
          planInfo?.name + ` subscription for ${planInfo?.initialCost}/month`,
        line_items: [
          ...productQuantities,
          // generate inline price and product
          {
            price_data: {
              currency: "cad",
              recurring: {
                interval: "month",
              },
              unit_amount: planInfo?.initialCost * 100,
              product_data: {
                name: planInfo?.name,
                description:
                  planInfo?.name +
                  ` subscription for ${planInfo?.initialCost}/month`,
              },
            },
            quantity: 1,
          },
        ],
      };

      // const customerResult = await customer.json();

      // step 3: make a post fetch api call to /checkout-session handler
      const result = await fetch("/checkout-sessions", {
        method: "post",
        body: JSON.stringify(body, null),
        headers: {
          "content-type": "application/json",
        },
      });

      // step 4: get the data and redirect to checkout using the sessionId
      const data = (await result.json()) as Stripe.Checkout.Session;
      // console.log(data);
      // alert(JSON.stringify(data));
      const sessionId = data.id!;
      stripe?.redirectToCheckout({ sessionId });

      setLoading(false);
    }
  };

  const Modal = ({ closeModal }: any) => {
    return (
      <div className="fixed top-0 left-0 w-full h-full z-50 overflow-hidden flex justify-center items-center bg-black/50">
        <div className="z-50 p-10 rounded-xl  max-w-md w-full bg-white">
          <span
            className="w-full cursor-pointer text-right flex justify-between py-2 text-red-500"
            onClick={closeModal}
          >
            <span className="text-lg font-semibold text-green-500">
              Add a Landline
            </span>{" "}
            <IoMdCloseCircle size={25} />
          </span>
          <p className="p-2.5 border rounded-xl border-green-500">
            <span className="flex gap-2">
              <FaStar className="text-green-500" /> Free Canada Calling
              (Provinces)
            </span>
            <span className="flex gap-2">
              <FaStar className="text-green-500" /> Keep Existing Number
            </span>
            <span className="flex gap-2">
              <FaStar className="text-green-500" /> Call Display
            </span>
            <span className="flex gap-2">
              <FaStar className="text-green-500" /> Voicemail
            </span>
            <span className="flex gap-2">
              <FaStar className="text-green-500" /> Call Forward
            </span>
            <span className="flex gap-2">
              <FaStar className="text-green-500" /> 3-Way Calling
            </span>
            <span className="flex gap-2">
              <FaStar className="text-green-500" /> Fair Usage Policy
            </span>
          </p>
          <span className="w-full flex justify-between py-2.5">
            <span className="italic text-gray-500">Want to add a number?</span>
            <input
              type="checkbox"
              className="accent-green-400 rounded-full"
              checked={landlinePhoneNumber}
              onChange={handleLandlineCheckboxChange}
            />
          </span>
          <Button
            className={
              landLine
                ? "w-full bg-red-500 hover:bg-red-600"
                : "w-full bg-green-500 hover:bg-green-600"
            }
            onClick={() => {
              closeModal();
              addLandline();
            }}
          >
            {landLine ? `Remove` : `Continue`}
          </Button>
        </div>
      </div>
    );
  };

  // const Modal = ({ closeModal }: any) => {
  //   return (
  //     <div className="fixed top-0 left-0 w-full h-full z-50 overflow-hidden flex justify-center items-center bg-black/50">
  //       <div className="z-50 p-10 rounded-xl bg-white">
  //         <span className="w-full cursor-pointer text-right flex justify-between py-2 text-red-500" onClick={closeModal}>
  //           <span className="text-lg font-semibold text-green-500">Add a Landline</span>{" "}
  //           <IoMdCloseCircle size={25} />
  //         </span>
  //         <p className="p-2.5 border rounded-xl border-green-500">
  //           {/* Modal content */}
  //         </p>
  //         <span className="w-full flex justify-between py-2.5">
  //           <span className="italic text-gray-500">Want to add a number?</span>
  //           {/* Checkbox input */}
  //         </span>
  //         {/* Button for actions */}
  //         <Button className={landLine ? "w-full bg-red-500 hover:bg-red-600" : "w-full bg-green-500 hover:bg-green-600"}>
  //           {landLine ? `Remove` : `Continue`}
  //         </Button>
  //       </div>
  //     </div>
  //   );
  // };
  

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const prodDetails = (title: string) => {
    if (title === "Landline Telephone Line") {
      // console.log("gotem");
      openModal();
    } else {
      return;
    }
  };

  function toTitleCase(str: string) {
    return str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }
  

  const categories = ['home automation', 'security camera', 'security sensors', 'hazard detection'];

  return (
    <div className="container min-h-screen w-full py-12">
      <p className="text-4xl flex gap-2">
        <PiStarFourFill className="text-green-500" />
        {plan.toUpperCase()}
      </p>
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
            {loading ? (
              <>
                <button
                  className={`bg-gray-300 hover:bg-gray-400 text-white font-semibold px-4 py-2 rounded-md mt-4`}
                >
                  Please wait...
                </button>
              </>
            ) : (
              <>
                <button
                  className={`bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-md mt-4`}
                  onClick={handleContinueToCheckout}
                >
                  Continue to checkout
                </button>
              </>
            )}
          </div>
        )}
      </div>
      <div className="border w-full my-6" />
      <h3 className="my-6 text-2xl font-semibold text-green-600">
        Add more items
      </h3>

      {/* Product cards start */}
      {/* <div className="flex justify-start flex-wrap gap-2 w-full">
        {products.map((product: Product, index: number) => {
          const { title, image, basic, silver, gold, offcity } = product;
          const price = getPriceByPlan(plan, basic, silver, gold, offcity);

          // Render card only if the price is not null
          if (price !== null) {
            const productNameLowercase = title.toLowerCase();
            // const productQuantity = productQuantities[productNameLowercase] || {
            //   quantity: 0,
            //   name: title,
            // };

            return (
              <div
                key={index}
                onClick={() => prodDetails(title)}
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
                    {title === "Landline Telephone Line" ? (
                      <div className="bg-green-500 hover:bg-green-600 p-2 rounded-xl text-white cursor-pointer">
                        {landLine ? `ADDED` : `ADD +`}
                      </div>
                    ) : (
                      <input
                        type="number"
                        className="max-w-16 h-10 border rounded-md text-center"
                        // value={productQuantity.quantity}
                        defaultValue={0}
                        min={0}
                        onChange={(e) => handleQuantityChange(title, price, e)}
                      />
                    )}
                  </div>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div> */}

      <div>
        {categories.map(category => (
          <div key={category}>
            <h2 className="text-xl flex items-center gap-2 font-bold mb-4 bg-green-50 text-green-950 py-2.5 px-2 my-2.5 rounded-lg w-full">
              {
                category === "security camera" && <YourIcon className="text-green-950" variant="camera" /> ||
                category === "security sensors" && <YourIcon className="text-green-950" variant="motion" /> ||
                category === "hazard detection" && <YourIcon className="text-green-950" variant="alarm" /> ||
                category === "home automation" && <YourIcon className="text-green-950" variant="smartphone" />
              }
              {toTitleCase(category)}
            </h2>
            <div className="flex justify-start flex-wrap gap-2 w-full">
              {products.filter(product => product.category === category).map((product, index) => {
                const { title, image, basic, silver, gold, offcity } = product;
                const price = getPriceByPlan(plan, basic, silver, gold, offcity);

                // Render card only if the price is not null
                if (price !== null) {
                  const productNameLowercase = title.toLowerCase();

                  return (
                    <div
                      key={index}
                      onClick={() => prodDetails(title)}
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
                          {title === "Landline Telephone Line" ? (
                            <div className="bg-green-500 hover:bg-green-600 p-2 rounded-xl text-white cursor-pointer">
                              {landLine ? `ADDED` : `ADD +`}
                            </div>
                          ) : (
                            <input
                              type="number"
                              className="max-w-16 h-10 border rounded-md text-center"
                              defaultValue={0}
                              min={0}
                              onChange={(e) => handleQuantityChange(title, price, e)}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>
        ))}
      </div>
      {/* Product cards end */}
      {isModalOpen && <Modal closeModal={closeModal} />}
      <div className="flex justify-center items-center w-full my-12">
        <Plans/>
      </div>
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


