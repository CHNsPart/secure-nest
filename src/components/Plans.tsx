// components/Plan.tsx

import React from 'react';
import Plan from './Plan';

const priceData= [
    {
      "planName": "Basic Plan",
      "features": {
        "description": "For individuals and organizations who want to try our system",
        "items": [
          "Wifi Camera",
          "Door and Window Alarm",
          "Echo Shaw 5",
          "Smart garage door opener",
          "Glass Break Sensor",
          "Motion sensor",
          "Smart light bulb",
          "TP-Link indoor plug",
          "TP-Link Outdoor plug",
          "Doorbell Camera"
        ]
      },
      "price": "100",
      "buttonText": "Buy Now",
      "buttonColor": "green",
    },
    {
      "planName": "Team Plan",
      "features": {
        "description": "Advanced features for individuals and organizations",
        "items": [
          "Unlimited file storage",
          "10 GB bandwidth per month",
          "10,000 tasks per month",
          "Email support",
          "100 Webhooks"
        ]
      },
      "price": "19",
      "buttonText": "Buy Now",
      "buttonColor": "green",
      "borderColor": "green",
      "popular": true
    },
    {
      "planName": "Enterprise Plan",
      "features": {
        "description": "Maximum performance for organizations",
        "items": [
          "Unlimited file storage",
          "Unlimited bandwidth per month",
          "1,000,000 tasks per month",
          "Email and phone support",
          "Unlimited Webhooks"
        ]
      },
      "price": "49",
      "buttonText": "Buy Now",
      "buttonColor": "green",
    },
    {
        "planName": "Enterprise Plan",
        "features": {
          "description": "Maximum performance for organizations",
          "items": [
            "Unlimited file storage",
            "Unlimited bandwidth per month",
            "1,000,000 tasks per month",
            "Email and phone support",
            "Unlimited Webhooks"
          ]
        },
        "price": "49",
        "buttonText": "Buy Now",
        "buttonColor": "green",
      }
  ]
  

const Plans: React.FC = () => {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12 w-full">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-12 lg:text-3xl xl:mb-12">Our Plans for You</h2>
            <div className="mb-6 grid gap-6 sm:grid-cols-2 md:mb-8 lg:grid-cols-4 lg:gap-8">
            {priceData.map((plan, index) => (
                <Plan
                    key={index}
                    planName={plan.planName}
                    features={plan.features}
                    price={plan.price}
                    buttonText={plan.buttonText}
                    buttonColor={plan.buttonColor}
                    borderColor={plan.borderColor}
                    popular={plan.popular}
                />
            ))}
            </div>
            <div className="text-center text-sm text-gray-500 sm:text-base">Need help deciding? <a href="#" className="text-gray-500 underline transition duration-100 hover:text-green-500 active:text-green-600">Get in touch</a>.</div>
        </div>
    </div>
  );
};

export default Plans;
