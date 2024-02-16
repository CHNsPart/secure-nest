import FAQ from '@/components/FAQ'
import Service from '@/components/Service'
import Image from 'next/image'
import React from 'react'

export default function About() {

  return (
    <main className="h-full flex flex-col gap-4 justify-center items-start">

      <div className='h-44 w-full relative overflow-'>
        <h1 className='absolute z-50 w-full h-full flex justify-center items-center text-center text-5xl text-green-950 font-thin'>
          About Us
        </h1>
        <div className='h-full w-full blur-3xl'>
          <Image src="/about.jpg" className='h-full min-w-full object-cover' height={100} width={300} alt="about-banner" />
        </div>
      </div>


      <section className="text-gray-600 body-font container">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col">
            <div className="h-1 bg-gray-200 rounded overflow-hidden">
              <div className="w-24 h-full bg-green-500"></div>
            </div>
            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
              <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">Our Mission</h1>
              <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">{"SecureNest revolutionizes home security with cutting-edge technology, offering AI-powered surveillance and smart home automation. Elevate your peace of mind with our innovative solutions, personalized service, and unwavering support."}</p>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <Image height={500} width={500} alt="content" className="object-cover object-center h-full w-full" src="https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">{"The Heart of SecureNest's Innovation"}</h2>
              <p className="text-base leading-relaxed mt-2">{"At the core of SecureNest's offerings lies cutting-edge technology that sets us apart in the home security landscape. Our systems are equipped with the latest advancements, from artificial intelligence-powered surveillance to smart home automation. We leverage technology to create a comprehensive security ecosystem that adapts to your needs and provides robust protection."}</p>
              <a className="text-green-500 inline-flex items-center mt-3">Learn More
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <Image height={500} width={500} alt="content" className="object-cover object-center h-full w-full" src="https://images.unsplash.com/photo-1563920443079-783e5c786b83?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">{"Elevate Security, and Your Peace of Mind"}</h2>
              <p className="text-base leading-relaxed mt-2">{"Choose SecureNest as your home security partner and experience a level of protection that exceeds expectations. With a perfect blend of cutting-edge technology, personalized solutions, and unwavering customer support, we're here to elevate your home security to new heights. SecureNest – where innovation meets peace of mind, safeguarding your nest with excellence."}</p>
              <a className="text-green-500 inline-flex items-center mt-3">Learn More
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <Image height={500} width={500} alt="content" className="object-cover object-center h-full w-full" src="https://images.unsplash.com/photo-1627704442358-61c8e05c7bf4?q=80&w=1138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">{"Elevating Home Security to New Heights"}</h2>
              <p className="text-base leading-relaxed mt-2">{"SecureNest, where your home's safety is our paramount concern. At SecureNest, we believe in setting a new standard for home security – one that goes beyond traditional measures and embraces innovation to create a fortress of protection for you and your family."}</p>
              <a className="text-green-500 inline-flex items-center mt-3">Learn More
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Service/>

      <FAQ/>

    </main>
  )
}


