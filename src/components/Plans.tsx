// components/Plan.tsx

import React from 'react';
import Plan from './Plan';

export const priceData= [
    {
      "id": "basic",
      "planName": "Basic Plan",
      "features": {
        "description": "Includes Some of our Products",
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
      "price": "14.99",
      "buttonText": "Buy Now",
      "buttonColor": "green",
      "link": "/plans/basic"
    },
    {
      "id": "silver",
      "planName": "Silver Plan",
      "features": {
        "description": "Includes Most of our Products",
        "items": [
          "Cell phone signal booster",
          "Doorlock",
          "Wifi Camera",
          "Door and Window Alarm",
          "Echo Shaw 5",
          "Smart garage door opener",
          "Glass Break Sensor",
          "Google nest thermostat",
          "Motion sensor",
          "Smart light bulb",
          "TP-Link indoor plug",
          "TP-Link Outdoor plug",
          "Doorbell Camera"
        ]
      },
      "price": "29.99",
      "buttonText": "Buy Now",
      "buttonColor": "green",
      "borderColor": "green",
      "popular": true,
      "link": "/plans/silver",
    },
    {
      "id": "gold",
      "planName": "Gold Plan",
      "features": {
        "description": "Includes All of our Products",
        "items": [
          "Cell phone signal booster",
          "Doorlock",
          "Wifi Camera",
          "Door and Window Alarm",
          "Echo Shaw 5",
          "Smart garage door opener",
          "Glass Break Sensor",
          "Google nest thermostat",
          "Motion sensor",
          "Smart light bulb",
          "TP-Link indoor plug",
          "TP-Link Outdoor plug",
          "Doorbell Camera"
        ]
      },
      "price": "49.99",
      "buttonText": "Buy Now",
      "buttonColor": "green",
      "link": "/plans/gold"
    },
    {
      "id": "offcity",
      "planName": "Off-City Plan",
      "features": {
        "description": "For Outer City Desntinations",
        "items": [
          "Cell phone signal booster",
          "Doorlock",
          "Wifi Camera",
          "Door and Window Alarm",
          "Echo Shaw 5",
          "Smart garage door opener",
          "Glass Break Sensor",
          "Google nest thermostat",
          "Motion sensor",
          "Smart light bulb",
          "TP-Link indoor plug",
          "TP-Link Outdoor plug",
          "Doorbell Camera"
        ]
      },
      "price": "34.99",
      "buttonText": "Buy Now",
      "buttonColor": "green",
      "link": "/plans/offcity"
    }
]
  

const Plans: React.FC = () => {
  return (
    <div id='plans' className="bg-white py-6 sm:py-8 lg:py-12 w-full">
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
                    link={plan.link}
                />
            ))}
            </div>
            <div className="text-center text-sm text-gray-500 sm:text-base">Need help deciding? <a href="#" className="text-gray-500 underline transition duration-100 hover:text-green-500 active:text-green-600">Get in touch</a>.</div>
        </div>
    </div>
  );
};

export default Plans;
