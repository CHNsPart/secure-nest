// components/Plan.tsx
"use client"
import React, { useEffect, useState } from 'react';
import Plan from './Plan';
import Loader from './Loader';



export const priceData= [
    {
      "id": "basic",
      "planName": "Basic Plan",
      "features": {
        "description": "Includes Some of our Products",
        "items": [
          "Self Monitoring - From Smartphone",
          "WiFi-Smart Camera",
          "2✕ Door and Window Alarm",
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
          "Self Monitoring - From Smartphone",
          "WiFi-Smart Camera",
          "2✕ Door and Window Alarm",
          "1 Motion Sensor (TP-Link)"
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
          "Self Monitoring - From Smartphone",
          "2✕ WiFi-Smart Camera",
          "4✕ Door and Window Alarm",
          "1 Motion Sensor (TP-Link)",
          "Google Nest Thermostat"
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
          "Self Monitoring - From Smartphone",
          "Cell Phone Signal Booster 5G",
          "WiFi-Smart Camera",
          "2✕ Door and Window Alarm",
        ]
      },
      "price": "34.99",
      "buttonText": "Buy Now",
      "buttonColor": "green",
      "link": "/plans/offcity"
    }
]
  

const Plans: React.FC = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await fetch('https://script.google.com/macros/s/AKfycbyInqc95qgYHdgX-wbFmdA8wbI2iT9J6bf7KRYd9oV83pAW-f_IqE2eYC0F9EMSZ8-T/exec');
        const text = await response.text();
        const data = JSON.parse(text.replace(/^callback\(/, '').replace(/\);?$/, ''));
        // console.log(data);
        setData(data);
        setLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    

    fetchData();
  }, []);

  return (
    <div id='plans' className="bg-white py-6 sm:py-8 lg:py-12 w-full">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-12 lg:text-3xl xl:mb-12">Our Plans for You</h2>
            {!loading ? (
              <div className="mb-6 grid gap-6 grid-cols-1 sm:grid-cols-2 md:mb-8 lg:grid-cols-4 lg:gap-8">
                {data.map((plan: { planName: string; features: { description: string; items: string[]; }; price: string; buttonText: string; buttonColor: string; borderColor: string | undefined; popular: boolean | undefined; link: string; }, index: React.Key | null | undefined) => (
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
            ) : (
              <Loader/>
            )}

            <div className="text-center text-sm text-gray-500 sm:text-base">Need help deciding? <a href="tel:6477767705" className="text-gray-500 underline transition duration-100 hover:text-green-500 active:text-green-600">Get in touch</a>.</div>
        </div>
    </div>
  );
};

export default Plans;





