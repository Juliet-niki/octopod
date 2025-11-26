// app/services/page.tsx
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { products } from "@/constants/data";

export default function Services() {
  return (
    <div className="flex flex-col bg-[#F5F8FA]">
      {/* Hero */}
      <section className="bg-none ml:bg-[url('/services-hero-bg.png')] bg-no-repeat bg-cover bg-center">
        <div className="flex flex-col ml:flex-row gap-8 ml:gap-6 lg:gap-10 px-5 sm:px-8 lg:px-16 xl:px-20 py-5 md:py-10 lg:py-12 items-center ml:items-start">
          {/* Text Content */}
          <div className="flex flex-col gap-5 lg:gap-6 w-full ml:w-1/2 ml:max-w-md lg:max-w-xl">
            <h1 className="font-bold ml:font-medium text-[#222222] text-2xl sm:text-3xl ml:text-[36px] lg:text-[42px] xl:text-5xl leading-tight ml:leading-snug lg:leading-tight">
              Complete Automotive Solutions for Nigerian Businesses
            </h1>

            <p className="font-normal text-[#333333] text-xs sm:text-sm lg:text-[16px] xl:text-lg leading-relaxed">
              At Octopod, we supply premium automotive products to fleet
              managers, logistics companies, and commercial operators across
              Nigeria. We deliver nationwide from Lagos, with comprehensive
              support to major commercial centers including Abuja, Port
              Harcourt, and Ibadan.
            </p>

            <Link
              href={"#"}
              className="bg-[#F12328] rounded-lg py-3 px-7 ml:py-3 ml:px-8 lg:py-3.5 lg:px-10 w-max font-semibold text-white text-sm lg:text-base hover:bg-[#d11f24] transition-colors"
            >
              Explore Services
            </Link>
          </div>

          {/* Image Collage */}
          <div className="flex flex-row gap-3 lg:gap-4 w-full ml:w-1/2 justify-center ml:justify-end items-center">
            <Image
              src={"/automotive-maintenance-collage.png"}
              alt="A three-part collage showing car maintenance: a mechanic working under a car, fresh engine oil being poured, and a mechanic working on an engine bay"
              width={594}
              height={420}
              className="w-full max-w-md ml:max-w-lg lg:max-w-xl h-auto"
            />
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="flex flex-col py-8 md:py-10 lg:py-12 px-7.5 lg:px-10 xl:px-20">
        <div className="flex flex-col gap-8">
          <h2 className="font-bold ml:font-medium text-black text-2xl sm:text-3xl ml:text-[36px] lg:text-[40px] leading-9.5 tracking-normal mx-auto">
            What We Offer
          </h2>

          <div className="flex flex-col gap-8.5 md:hidden">
            {products.map((product, index) => (
              <div key={index} className="flex flex-col">
                <div className="bg-[#A8DDCB] rounded-t-lg px-6 pt-5 pb-8">
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-col gap-2">
                      <h3 className="font-bold text-[#222222] text-2xl sm:text-3xl">
                        {product.title}
                      </h3>

                      <p className="font-normal text-[#333333] text-[10px] sm:text-xs leading-4 tracking-normal">
                        {product.description}
                      </p>
                    </div>

                    <ul className="list-circle ml-6 space-y-2.5 font-normal text-[10px] sm:text-xs text-[#333333]">
                      {product.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>

                    <Link
                      href={"/quote"}
                      className="flex gap-1.5 items-center font-semibold text-[#F12328] text-[9px] sm:text-xs"
                    >
                      {product.cta}
                      <FaArrowRight size={12} />
                    </Link>
                  </div>
                </div>
                <Image
                  src={product.image}
                  alt={product.alt}
                  width={800}
                  height={750}
                  className="w-full h-auto  object-cover rounded-b-lg"
                />
              </div>
            ))}
          </div>

          <div className="hidden md:flex flex-col gap-2.5">
            {/* Tyres */}
            <div className="relative flex flex-row my-10 w-full">
              <div className="w-[45%] lg:w-[50%] h-[400px] lg:h-[500px] overflow-hidden">
                <Image
                  src={"/tyre-change.png"}
                  alt={"car mechanic changing car tyre"}
                  width={800}
                  height={750}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute top-12 left-[32%] lg:left-[35%] bg-[#A8DDCB] rounded-xl px-8 lg:px-10 pt-8 lg:pt-10 pb-10 lg:pb-12 w-[68%] lg:w-[65%] shadow-lg">
                <div className="flex flex-col gap-5 lg:gap-6">
                  <div className="flex flex-col gap-3 lg:gap-5">
                    <h3 className="font-bold text-[#222222] text-3xl lg:text-4xl">
                      Tyres
                    </h3>

                    <p className="font-normal text-[#333333] text-[13px] lg:text-[15px] leading-relaxed">
                      We offer a wide range of tyres for cars, commercial
                      vehicles, heavy-duty trailers and trucks. Every tyre is
                      sourced from reputable international manufacturers,
                      ensuring durability, safety, and performance for fleet
                      operations.
                    </p>
                  </div>

                  <ul className="list-circle ml-5 space-y-2.5 text-[13px] lg:text-[15px] text-[#333333]">
                    {[
                      "Extensive selection for passenger cars, commercial fleets and heavy-duty vehicles",
                      "Warranty coverage for premium brands including Michelin, Bridgestone and Dunlop",
                      "Ideal for logistics, transportation, and construction companies",
                      "Options for both premium and budget-conscious buyers",
                    ].map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>

                  <Link
                    href={"/quote"}
                    className="flex gap-2.5 items-center font-semibold text-[#F12328] text-[13px] lg:text-[15px] mt-2"
                  >
                    Request Quote
                    <FaArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Lubricants */}
            <div className="relative flex flex-row-reverse my-10 w-full">
              <div className="absolute top-12 right-[32%] lg:right-[35%] bg-[#A8DDCB] rounded-xl px-8 lg:px-10 pt-8 lg:pt-10 pb-10 lg:pb-12 w-[68%] lg:w-[65%] shadow-lg">
                <div className="flex flex-col gap-5 lg:gap-6">
                  <div className="flex flex-col gap-3 lg:gap-5">
                    <h3 className="font-bold text-[#222222] text-3xl lg:text-4xl">
                      Lubricants
                    </h3>

                    <p className="font-normal text-[#333333] text-[13px] lg:text-[15px] leading-relaxed">
                      Our lubricants are designed to protect engines, reduce
                      wear, and maximise efficiency. Whether for fleet
                      operations or industrial vehicles, we deliver solutions
                      that extend engine life and keep commercial operations
                      running smoothly.
                    </p>
                  </div>

                  <ul className="list-circle ml-5 space-y-2.5 text-[13px] lg:text-[15px] text-[#333333]">
                    {[
                      "High-performance synthetic and mineral oils for commercial applications",
                      "Suitable for cars, trucks, buses and industrial vehicle fleets",
                      "Supplied from globally recognised lubricant brands",
                      "Reduced maintenance costs and extended engine life for maximum ROI",
                    ].map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>

                  <Link
                    href={"/quote"}
                    className="flex gap-2.5 items-center font-semibold text-[#F12328] text-[13px] lg:text-[15px] mt-2"
                  >
                    Request Quote
                    <FaArrowRight size={18} />
                  </Link>
                </div>
              </div>
              <div className="w-[45%] lg:w-[50%] h-[400px] lg:h-[500px] overflow-hidden">
                <Image
                  src={"/oil-refill.png"}
                  alt={"car mechanic changing car tyre"}
                  width={800}
                  height={750}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Battries */}
            <div className="relative flex flex-row my-10 w-full">
              <div className="w-[45%] lg:w-[50%] h-[400px] lg:h-[500px] overflow-hidden">
                <Image
                  src={"/car-battery-testing.png"}
                  alt={"car mechanic changing car tyre"}
                  width={800}
                  height={750}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute top-12 left-[32%] lg:left-[35%] bg-[#A8DDCB] rounded-xl px-8 lg:px-10 pt-8 lg:pt-10 pb-10 lg:pb-12 w-[68%] lg:w-[65%] shadow-lg">
                <div className="flex flex-col gap-5 lg:gap-6">
                  <div className="flex flex-col gap-3 lg:gap-5">
                    <h3 className="font-bold text-[#222222] text-3xl lg:text-4xl">
                      Batteries
                    </h3>

                    <p className="font-normal text-[#333333] text-[13px] lg:text-[15px] leading-relaxed">
                      We provide durable, long-lasting automotive batteries
                      designed to deliver consistent power in all conditions.
                      Every battery we supply is tested and backed by expert
                      support.
                    </p>
                  </div>

                  <ul className="list-circle ml-5 space-y-2.5 text-[13px] lg:text-[15px] text-[#333333]">
                    {[
                      "Reliable options for passenger cars, commercial vehicles and heavy-duty trucks",
                      "Long-lasting performance in Nigeria's challenging weather conditions",
                      "Maintenance-free options for reduced operational costs",
                      "Ideal for logistics fleets and commercial operations",
                    ].map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>

                  <Link
                    href={"/quote"}
                    className="flex gap-2.5 items-center font-semibold text-[#F12328] text-[13px] lg:text-[15px] mt-2"
                  >
                    Request Quote
                    <FaArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
