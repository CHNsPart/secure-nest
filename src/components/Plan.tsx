import YourIcon from '@/config/Icons';
import React from 'react';

interface PlanProps {
  planName: string;
  features: {
    description: string;
    items: string[];
  };
  price: string;
  buttonText: string;
  buttonColor: string;
  borderColor?: string;
  popular?: boolean;
  link: string
}

const Plan: React.FC<PlanProps> = ({ planName, features, price, buttonText, buttonColor, borderColor, popular, link }) => {

  const color = `border-${borderColor}-500`;

  return (
    <div className={`flex flex-col relative rounded-lg border-2 ${color} p-4 pt-6`}>
      <div className="mb-12">
      { popular &&
        <div className="absolute inset-x-0 -top-3 flex justify-center">
            <span className="flex h-6 items-center justify-center rounded-full bg-green-500 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white">most popular</span>
        </div>
      }
        <div className="mb-2 text-center text-2xl font-bold text-gray-800">{planName}</div>
        <p className="mx-auto w-fit mb-2 px-5 py-2 rounded-full font-bold text-center bg-green-50 text-xs text-green-600">3 YEARS PLAN</p>
        <p className="mx-auto mb-8 px-8 text-center text-gray-500">{features.description}</p>

        <div className="space-y-2">
          {features.items.map((feature, index) => (
            <div key={index} className="flex gap-2">
              {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg> */}
              {feature.includes('Self Monitoring') && <YourIcon variant={"smartphone"} />}
              {feature.includes('WiFi-Smart Camera') && <YourIcon variant={"camera"} />}
              {feature.includes('Cell Phone Signal Booster 5G') && <YourIcon variant={"tower"} />}
              {feature.includes('Door and Window Alarm') && <YourIcon variant={"alarm"} />}
              {feature.includes('Motion Sensor') && <YourIcon variant={"motion"} />}
              {feature.includes('Google Nest Thermostat') && <YourIcon variant={"thermostat"} />}
              
              <span className="text-gray-600">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-auto flex flex-col gap-8">
        <div className="flex items-end justify-center gap-1">
          <span className="self-start text-gray-600">$</span>
          <span className="text-4xl font-bold text-gray-800">{price}</span>
          <span className="text-gray-500">CAD/month</span>
        </div>

        <a href={link} className={`block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-white outline-none bg-${buttonColor}-500 ring-green-300 transition duration-100 hover:bg-green-600 focus-visible:ring active:text-green-950 md:text-base`}>
          {buttonText}
        </a>
      </div>
    </div>
  );
};

export default Plan;

