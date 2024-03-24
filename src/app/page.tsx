import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  RegisterLink
} from "@kinde-oss/kinde-auth-nextjs/server";
import ImageSlider from "@/components/ImageSlider";
import FeaturesSection from "@/components/FeatureSection";
import TestimonialSection from "@/components/TestimonialSection";
import TheftNews from "@/components/TheftNews";

export default function Home() {
  return (
    <main className="h-full w-full flex flex-col gap-4 justify-center items-start">

      {/* Hero Section */}
      <section className="text-gray-600 container body-font">
        <div className="container w-full mx-auto flex px-5 py-10 md:py-24 md:flex-col flex-col items-center">
          <div className="lg:flex-grow flex flex-col md:items-center md:text-center mb-16 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Build your smart home with a Local<br/>Canadian security provider
            </h1>
            <p className="mb-8 w-full md:w-1/2 leading-relaxed">Choose from our selection of home security and automation plans. Add or remove devices to 
              {" "}
              <span className="text-green-600">
                {"customize your chosen plan to your family’s unique needs."}  
              </span>
            </p>
            <div className="flex justify-center">
              <RegisterLink>
                <Button className="text-white bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-700 rounded">Register</Button>
              </RegisterLink>
              <a href="/plans">
                <Button className="ml-4 text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded">Plans</Button>
              </a>
            </div>
          </div>
          <div className="w-1/2 flex flex-col md:flex-row justify-center items-center flex-auto gap-2">
            <Image 
              priority
              className="w-full md:w-1/3 h-1/3 object-cover object-center rounded"
              width="0"
              height="0"
              sizes="50vw"
              alt="hero" src="/hero1.png"
            />
            <div className="w-full flex gap-2 justify-center flex-auto flex-wrap">
              <Image 
                priority
                className="w-full h-fit object-cover object-center rounded"
                width="0"
                height="0"
                sizes="50vw"
                alt="hero" src="/hero2.png"
              />
              <Image 
                priority
                className="w-full h-fit object-cover object-center rounded"
                width="0"
                height="0"
                sizes="50vw"
                alt="hero" src="/hero3.png"
              />
              <Image 
                priority
                className="w-full h-1/2 object-cover object-center rounded"
                width="0"
                height="0"
                sizes="50vw"
                alt="hero" src="/hero4.png"
              />
            </div>
            <Image 
              priority
              className="w-full md:w-1/3 h-auto object-cover object-center rounded"
              width="0"
              height="0"
              sizes="50vw"
              alt="hero" src="/hero5.jpeg"
            />
          </div>
        </div>
      </section>

      <FeaturesSection/>
      {/*  Duty Section */}
      {/* <section className="text-gray-600 body-font container">
        <div className="px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex w-full mb-20 flex-wrap">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Free Installation & Delivery</h1>
            <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
              <span className="mb-2">We offer a free installation service for all plans. Our professional technicians will ensure that your system is installed correctly and efficiently, so you can start enjoying peace of mind right away.</span>
              <span>
                For self-installations, enjoy the convenience of free delivery service on all plans. we will deliver everything you need straight to your doorstep at no extra cost.
              </span>
            </p>
          </div>
          <div className="flex w-full flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <Image quality={100} height={500} width={1080} alt="gallery" className="w-full object-cover h-full object-center block" src="/dpic1.jpg" />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Image quality={100} height={500} width={1080} alt="gallery" className="w-full object-cover h-full object-center block" src="/dpic4.jpg" />
              </div>
              <div className="md:p-2 p-1 w-full">
                <Image quality={100} height={500} width={1080} alt="gallery" className="w-full h-full object-cover object-center block" src="/dpic3.jpg" />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                <Image quality={100} height={500} width={1080} alt="gallery" className="w-full h-full object-cover object-center block" src="/dpic2.jpg" />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Image quality={100} height={500} width={1080} alt="gallery" className="w-full object-cover h-full object-center block" src="/dpic5.jpg" />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Image quality={100} height={500} width={1080} alt="gallery" className="w-full object-cover h-full object-center block" src="/dpic6.jpg" />
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <div className="w-full bg-gray-100 py-16">
        <div className="container w-full flex flex-col md:flex-row items-center gap-5">
          <Image
              width="500"
              height="500"
              sizes="100%"
              priority
              className="w-full object-contain h-16" 
              src="/main_logo.png" alt="Logo"
            />
            <p className="w-fit">
              SecureNest is a leading local Canadian home security company serving the Greater Toronto Area (GTA) and beyond. With a commitment to innovation and personalized service, SecureNest offers state-of-the-art security technology, including smart home integration, Self-monitoring, HD video surveillance, and smart sensors. Their customized security solutions cater to the unique needs of each client, ensuring peace of mind and protection for families and homes. SecureNest is deeply invested in community engagement, actively participating in outreach programs and partnerships to make neighbourhoods safer. With SecureNest, homeowners can trust in a reliable and community-centric approach to home security.
            </p>
        </div>
      </div>

      <TestimonialSection/>

      <TheftNews/>
    </main>
  );
}





