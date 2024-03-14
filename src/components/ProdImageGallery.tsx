import YourIcon from "@/config/Icons";
import Image from "next/image";


const ProdImageGallery: React.FC = () => {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
          <div className="flex items-center gap-12">
            <h2 className="text-2xl font-bold lg:text-3xl">DeviceTypes</h2>

            <p className="hidden max-w-screen-sm text-gray-500 md:block">SecureNest offers a range of home security device types designed to safeguard your home and provide peace of mind.</p>
          </div>

          <span className="hidden md:inline-block rounded-lg border bg-white px-4 py-2 text-center text-sm font-semibold text-gray-500 outline-none ring-green-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base">
            <Image
              height={120}
              width={120}
              src="/securenest_bg.png"
              alt="logo"
              className="select-none"
            />
          </span>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6 xl:gap-8">
          {/* Image 1 */}
          <a className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
            <Image src="https://images.unsplash.com/photo-1585206031650-9e9a7c87dcfe?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" layout="fill" alt="Photo by Minh Pham" className="absolute inset-0 object-cover object-center transition duration-200 group-hover:scale-110" />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-green-950 via-transparent to-transparent opacity-100"></div>
            
            <div className="flex items-center">
              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                <YourIcon variant="camera" />
              </span>
              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Security Cameras</span>
            </div>
          </a>

          {/* Image 2 */}
          <a className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
            <Image src="/glassbreak.jpg" layout="fill" alt="Photo by Magicle" className="absolute inset-0 object-cover object-center transition duration-200 group-hover:scale-110" />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-green-950 via-transparent to-transparent opacity-100"></div>
            <div className="flex items-center">
              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                <YourIcon variant="motion" />
              </span>
              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Security Sensors</span>
            </div>
          </a>

          {/* Image 3 */}
          <a className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
            <Image src="https://images.unsplash.com/photo-1665655034446-1536f6de3fe6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" layout="fill" alt="Photo by Martin Sanchez" className="absolute inset-0 object-cover object-center transition duration-200 group-hover:scale-110" />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-green-950 via-transparent to-transparent opacity-100"></div>
            <div className="flex items-center">
              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                <YourIcon variant="alarm" />
              </span>
            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Hazard Detection</span>
            </div>
          </a>

          {/* Image 4 */}
          <a className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
            <Image src="https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" layout="fill" alt="Photo by Lorenzo Herrera" className="absolute inset-0 object-cover object-center transition duration-200 group-hover:scale-110" />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-green-950 via-transparent to-transparent opacity-100"></div>
            <div className="flex items-center">
              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                <YourIcon variant="smartphone" />
              </span>
              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Home Automation</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProdImageGallery;

