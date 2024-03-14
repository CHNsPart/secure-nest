import Image from "next/image";

const ProdHero: React.FC = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <Image 
            height={600}
            width={720}
            className="object-cover object-center rounded" 
            alt="hero" 
            src="/prodHero.png" 
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <div className='uppercase tracking-wide text-sm text-green-500 font-semibold py-2'>SECURENEST SECURITY PRODUCTS</div>
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Smart devices for a safer home</h1>
          <p className="mb-8 leading-relaxed">Everything you need to create your seamless home security system from Canada’s most trusted alarm service. Get the right devices and enjoy monitoring and alerts from your Control Panel or from our SmartHome app.</p>
        </div>
      </div>
    </section>
  );
};

export default ProdHero;
