// app/services/page.tsx
import Link from 'next/link';
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { products } from "@/constants/data";

export default function Services() {
    return (
        <div className="flex flex-col bg-[#F5F8FA]">
            {/* Hero */}
            <section className='flex flex-col lg:flex-row px-5 lg:px-7 xl:px-20 pt-20 lg:pt-30 services-hero-bg w-full lg:justify-between'>
                <div className='flex flex-col gap-4 lg:gap-4.5 lg:max-w-168.5'>
                    <h1 className='font-bold lg:font-medium text-black text-[28px] lg:text-6xl leading-9.5 lg:leading-20 tracking-normal'>
                        Complete Automotive
                        Solutions for Nigerian
                        Businesses
                    </h1>

                    <p className='font-normal text-black text-[10px] lg:text-base leading-4 lg:leading-6.5 tracking-normal lg:max-w-159.5'>
                        At Octopod, we supply premium automotive products to fleet
                        managers, logistics companies, and commercial operators across
                        Nigeria. We deliver nationwide from Lagos, with comprehensive
                        support to major commercial centers including Abuja,
                        Port Harcourt, and Ibadan.
                    </p>

                    <Link href={"#"} className='bg-[#F12328] rounded-lg lg:rounded-2xl py-2.5 lg:py-3 px-4 lg:px-12 w-max font-bold text-white text-xs lg:text-base'>
                        Explore Services
                    </Link>
                </div>

                <Image
                    src={"/automotive-maintenance-collage.png"}
                    alt='A three-part collage showing car maintenance: a mechanic working under a car, fresh engine oil being poured, and a mechanic working on an engine bay'
                    width={594}
                    height={420}
                    className='mt-12 lg:mt-0 mb-16 w-84.5 lg:w-148.5 h-59.5 lg:h-105'
                />
            </section>

            {/* What We Offer */}
            <section className='flex flex-col pt-2.5 pb-10 lg:py-20 px-7.5 lg:px-10 xl:px-20'>
                <div className='flex flex-col gap-8.75'>
                    <h2 className='font-bold lg:font-medium text-black text-[28px] lg:text-[55px] leading-9.5 tracking-normal mx-auto'>
                        What We Offer
                    </h2>

                    <div className='flex flex-col gap-8.5 lg:hidden'>
                        {products.map((product, index) => (
                            <div key={index} className='flex flex-col'>
                                <div className='bg-[#A8DDCB] rounded-t-lg px-6 pt-5 pb-8'>
                                    <div className='flex flex-col gap-3'>
                                        <div className='flex flex-col gap-2'>
                                            <h3 className='font-bold text-[#222222] text-2xl'>
                                                {product.title}
                                            </h3>

                                            <p className='font-normal text-[#333333] text-[10px] leading-4 tracking-normal'>
                                                {product.description}
                                            </p>
                                        </div>

                                        <ul className="list-circle ml-6 space-y-2.5 font-normal text-[10px] text-[#333333]">
                                            {product.features.map((feature, i) => (
                                                <li key={i}>{feature}</li>
                                            ))}
                                        </ul>

                                        <Link href={"/quote"} className='flex gap-1.5 items-center font-semibold text-[#F12328] text-[9px]'>
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
                                    className='w-full h-auto rounded-b-lg'
                                />
                            </div>
                        ))}
                    </div>

                    <div className='hidden lg:flex flex-col gap-2.5'>
                        {/* Tyres */}
                        <div className='flex flex-row py-10 w-full mx-auto'>
                            <div className='relative w-1/2 h-auto'>
                                <Image
                                    src={"/tyre-change.png"}
                                    alt={"car mechanic changing car tyre"}
                                    width={800}
                                    height={750}
                                    className='w-full h-auto'
                                />
                            </div>

                            <div className='absolute w-1/2 mt-20 ml-124 max-w-175 bg-[#A8DDCB] rounded-xl px-7.5 pt-7 pb-12'>
                                <div className='flex flex-col gap-6'>
                                    <div className='flex flex-col gap-5'>
                                        <h3 className='font-bold text-[#222222] text-4xl'>
                                            Tyres
                                        </h3>

                                        <p className='font-normal text-[#333333] text-lg'>
                                            We offer a wide range of tyres for cars,
                                            commercial vehicles,heavy-duty trailers and trucks.
                                            Every tyre is sourced from reputable international
                                            manufacturers, ensuring durability, safety,
                                            and performance for fleet operations.
                                        </p>
                                    </div>

                                    <ul className="list-circle ml-7.5 space-y-2.5 font-normal text-lg text-[#333333]">
                                        {[
                                            "Extensive selection for passenger cars, commercial fleets and heavy-duty vehicles",
                                            "Warranty coverage for premium brands including Michelin, Bridgestone and Dunlop",
                                            "Ideal for logistics, transportation, and construction companies",
                                            "Options for both premium and budget-conscious buyers"
                                        ].map((feature, i) => (
                                            <li key={i}>{feature}</li>
                                        ))}
                                    </ul>

                                    <Link href={"/quote"} className='flex gap-3.5 items-center font-semibold text-[#F12328] text-base'>
                                        Request Quote
                                        <FaArrowRight size={20} />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Lubricants */}
                        <div className='flex flex-row py-10 w-full mx-auto'>
                            <div className='bg-[#A8DDCB] rounded-xl px-7.5 pt-7 pb-12'>
                                <div className='flex flex-col gap-6'>
                                    <div className='flex flex-col gap-5'>
                                        <h3 className='font-bold text-[#222222] text-4xl'>
                                            Lubricants
                                        </h3>

                                        <p className='font-normal text-[#333333] text-lg'>
                                            Our lubricants are designed to protect engines,
                                            reduce wear, and maximise efficiency. Whether
                                            for fleet operations or industrial vehicles,
                                            we deliver solutions that extend engine life
                                            and keep commercial operations running smoothly.
                                        </p>
                                    </div>

                                    <ul className="list-circle ml-7.5 space-y-2.5 font-normal text-lg text-[#333333]">
                                        {[
                                            "High-performance synthetic and mineral oils for commercial applications",
                                            "Suitable for cars, trucks, buses and industrial vehicle fleets",
                                            "Supplied from globally recognised lubricant brands",
                                            "Reduced maintenance costs and extended engine life for maximum ROI"
                                        ].map((feature, i) => (
                                            <li key={i}>{feature}</li>
                                        ))}
                                    </ul>

                                    <Link href={"/quote"} className='flex gap-3.5 items-center font-semibold text-[#F12328] text-base'>
                                        Request Quote
                                        <FaArrowRight size={20} />
                                    </Link>
                                </div>
                            </div>

                            <div className='w-full h-auto'>
                                <Image
                                    src={"/oil-refill.png"}
                                    alt={"Engine oil being poured into the oil filler opening of a car engine"}
                                    width={800}
                                    height={750}
                                    className='w-full h-auto'
                                />
                            </div>
                        </div>

                        {/* Battries */}
                        <div className='flex flex-row py-10 w-full mx-auto'>
                            <div className='relative w-1/2 h-auto'>
                                <Image
                                    src={"/car-battery-testing.png"}
                                    alt={"Close-up of a hand placing a red test lead on the positive terminal of a blue and yellow car battery in an engine bay"}
                                    width={800}
                                    height={750}
                                    className='w-full h-auto'
                                />
                            </div>

                            <div className='absolute w-1/2 mt-20 ml-124 max-w-175 bg-[#A8DDCB] rounded-xl px-7.5 pt-7 pb-12'>
                                <div className='flex flex-col gap-6'>
                                    <div className='flex flex-col gap-5'>
                                        <h3 className='font-bold text-[#222222] text-4xl'>
                                            Batteries
                                        </h3>

                                        <p className='font-normal text-[#333333] text-lg'>
                                            We provide durable, long-lasting automotive
                                            batteries designed to deliver consistent
                                            power in all conditions. Every battery
                                            we supply is tested and backed by expert support.
                                        </p>
                                    </div>

                                    <ul className="list-circle ml-7.5 space-y-2.5 font-normal text-lg text-[#333333]">
                                        {[
                                            "Reliable options for passenger cars, commercial vehicles and heavy-duty trucks",
                                            "Long-lasting performance in Nigeria's challenging weather conditions",
                                            "Maintenance-free options for reduced operational costs",
                                            "Ideal for logistics fleets and commercial operations"
                                        ].map((feature, i) => (
                                            <li key={i}>{feature}</li>
                                        ))}
                                    </ul>

                                    <Link href={"/quote"} className='flex gap-3.5 items-center font-semibold text-[#F12328] text-base'>
                                        Request Quote
                                        <FaArrowRight size={20} />
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
