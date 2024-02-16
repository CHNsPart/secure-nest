// FeatureSection.tsx
import React from 'react';

const FeatureSection: React.FC = () => {
  // Mock data for features
  const featuresData = [
    {
      id: 1,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: 'Technical support',
      description: 'Speak to our professional technical support with less than 5 minutes of waiting on call.',
    },
    {
      id: 2,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: 'Smart home monitoring for peace of mind',
      description: 'Manage your home security system using your smartphone. From anywhere.',
    },
    {
        id: 3,
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="2500" height="2500" viewBox="0 0 192.756 192.756"><g fillRule="evenodd" clipRule="evenodd"><path fill="#fff" d="M0 0h192.756v192.756H0V0z"/>
            <path fill="#cf4044" d="M45.248 140.84V51.917H2.834v88.923h42.414zM189.922 140.84V51.917H147.65v88.923h42.272zM95.973 136.934h-3.572v-17.075l-19.171 1.786 3.572-6.834-20.814-15.266 5.525-3.096-5.358-14.598 11.384 2.763 4.214-5.859 14.48 14.456-7.645-27.792 9.098 5.192 8.287-14.956 8.287 14.956 9.263-5.192-7.81 27.792 14.621-14.456 4.24 5.859 11.217-2.763-5.359 14.598 5.693 3.096-20.98 15.266 3.738 6.834-19.195-1.786v17.075h-3.715z"/></g>
          </svg>
        ),
        title: 'Local Canadian provider',
        description: 'We are a local company, Which means Faster Response Times, Personalized Service and Local Expertise.',

      },
    // Add more data for the third feature if needed
  ];

  return (
    <div className="container bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        {/* text - start */}
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Our competitive advantage</h2>
          <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
            Safety, security and a house run smoothly all with a Smart Home monitoring system
          </p>
        </div>
        {/* text - end */}

        <div className="grid gap-12 sm:grid-cols-2 xl:grid-cols-3 xl:gap-16">
          {/* feature - loop */}
          {featuresData.slice(0, 3).map((feature) => (
            <div key={feature.id} className="flex flex-col items-center">
              <div className="mb-2 flex h-12 w-12 items-center justify-center text-green-500 sm:mb-4 md:h-14 md:w-14">
                {feature.icon}
              </div>

              <h3 className="mb-2 text-center text-lg font-semibold md:text-xl">{feature.title}</h3>
              <p className="mb-2 text-center text-gray-500">{feature.description}</p>
            </div>
          ))}
          {/* feature - end */}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
