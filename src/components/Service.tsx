import Image from 'next/image'
import React from 'react'

export default function Service() {
    const serviceData = [
        {
          id: 1,
          src: "https://images.unsplash.com/photo-1542704792-e30dac463c90?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          title: "Toronto",
        },
        {
          id: 2,
          src: "https://images.unsplash.com/photo-1563734769255-5fdadc94747b?q=80&w=1369&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          title: "Mississauga",
        },
        {
          id: 3,
          src: "https://images.unsplash.com/photo-1559145649-8d6c3222fb00?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          title: "Barrie",
        },
        {
          id: 4,
          src: "https://images.unsplash.com/photo-1706637623267-d54c547c7ade?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          title: "Hamilton",
        },
        {
          id: 5,
          src: "https://images.unsplash.com/photo-1618094224836-939723d417dc?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          title: "Oakville",
        },
        {
          id: 6,
          src: "https://images.unsplash.com/photo-1591751778040-a74c5435ce42?q=80&w=1227&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          title: "Brampton",
        },
      ]
  return (
    <div className="bg-white w-full py-6 sm:py-8 lg:py-12 container">
        <div className="mx-auto max-w-screen-xl px-4 md:px-12">
            
            <div className="mb-10 md:mb-16">
                <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Service Area</h2>
            </div>

            <div className="grid grid-cols-2 gap-x-4 gap-y-6 sm:gap-y-8 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">

            {serviceData.map((service) => (
                <div key={service.id} className="flex flex-col items-center gap-2 sm:flex-row md:gap-4">
                <div className="h-24 w-24 overflow-hidden rounded-xl bg-gray-100 shadow-lg md:h-32 md:w-32">
                    <Image
                        src={service.src} 
                        height={100}
                        width={200} 
                        quality={100}
                        priority
                        className="object-cover object-center h-full w-full rounded-lg" 
                        alt={service.title} 
                    />              
                </div>
                <div className="text-center font-bold text-green-600 sm:text-left md:text-lg">{service.title}</div>
                </div>
            ))}
                
            </div>
        </div>
    </div>
  )
}
