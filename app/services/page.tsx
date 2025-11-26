// app/services/page.tsx
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { products } from "@/constants/data";

export default function Services() {
  return (
    <div className="flex flex-col bg-[#F5F8FA]">
      {/* Hero */}
      <section className="bg-none md:bg-[url('/services-hero-bg.png')] bg-no-repeat bg-cover bg-center flex flex-col md:flex-row gap-10 md:gap-4 px-5 lg:px-7 xl:px-20 pt-5 sm:pt-8 lg:pt-7 pb-5 w-full md:justify-between items-center">
        <div className="flex flex-col gap-4 lg:gap-4.5 w-full md:max-w-110 lg:max-w-150">
          <h1 className="font-bold md:font-medium text-black text-[28px] sm:text-3xl md:text-4xl lg:text-5xl leading-9.5 sm:leading-10 md:leading-14 lg:leading-16 tracking-normal">
            Complete Automotive Solutions for Nigerian Businesses
          </h1>

          <p className="font-normal text-black text-[10px] sm:text-xs md:text-sm leading-4 sm:leading-5 md:leading-6.5 tracking-normal lg:max-w-140">
            At Octopod, we supply premium automotive products to fleet managers,
            logistics companies, and commercial operators across Nigeria. We
            deliver nationwide from Lagos, with comprehensive support to major
            commercial centers including Abuja, Port Harcourt, and Ibadan.
          </p>

          <Link
            href={"#"}
            className="bg-[#F12328] rounded-lg lg:rounded-2xl py-2.5 lg:py-3 px-4 lg:px-12 w-max font-bold text-white text-xs lg:text-base"
          >
            Explore Services
          </Link>
        </div>

        <Image
          src={"/automotive-maintenance-collage.png"}
          alt="A vertical four-part photo collage showing a mechanic crouching in a workshop, a mechanic touching a raised car's tire, and a close-up of a classic car's front end and headlight"
          width={594}
          height={420}
          className="w-full h-auto md:min-w-80 md:h-96 lg:min-w-140 lg:h-105"
        />
      </section>

      {/* What We Offer */}
      <section className="flex flex-col pt-2.5 pb-10 lg:py-20 px-7.5 lg:px-10 xl:px-20">
        <div className="flex flex-col gap-8.75">
          <h2 className="font-bold md:font-medium text-black text-[28px] sm:text-[30px] md:text-[36px] lg:text-[50px] leading-9.5 tracking-normal mx-auto">
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
                  src={"/car-battery-testing.png"}
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
