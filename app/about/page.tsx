// app/about/page.tsx
import Link from 'next/link';
import Image from "next/image";
import { coreValues, clientsLogos } from "@/constants/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us",
    description:
        "Learn about Octopod Services — our journey, mission, vision, and the values driving our commitment to quality automotive products across Nigeria.",
    openGraph: {
        title: "About Octopod Services",
        description:
            "Discover Octopod's story, our mission to simplify automotive supply chains, and our commitment to reliability and value.",
        url: "https://octopodservices.com/about",
        siteName: "Octopod Services",
        images: [
            {
                url: "/og-about.jpg", // design og image
                width: 1200,
                height: 630,
                alt: "About Octopod Services - Quality Automotive Solutions",
            },
        ],
        locale: "en_NG",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "About Octopod Services",
        description:
            "Driven by quality, inspired by value. Learn more about Octopod's journey and mission.",
        images: ["/og-about.jpg"], // design og image
    },
};

export default function About() {
    return (
        <div className="flex flex-col bg-[#F5F8FA]">
            {/* Hero */}
            <section className="flex flex-col lg:flex-row px-5 lg:px-7 xl:px-20 pt-20 lg:pt-30 services-hero-bg w-full lg:justify-between">
                <div className='flex flex-col gap-4 lg:gap-4.5 lg:max-w-168.5'>
                    <h1 className='font-bold lg:font-medium text-black text-[28px] lg:text-6xl leading-9.5 lg:leading-20 tracking-normal'>
                        The Octopod Journey
                    </h1>

                    <p className='font-normal text-black text-[10px] lg:text-base leading-4 lg:leading-6.5 tracking-normal lg:max-w-159.5'>
                        Octopod was founded to address long-standing gaps in
                        Nigeria&#39;s automotive supply sector. Many businesses faced
                        fragmented supplier networks, excessive bureaucracy, inflated
                        costs, and frequent stockouts that disrupted operations.
                        We saw the need for a simpler and more dependable
                        approach that prioritised quality, consistency, and service.
                        That&#39;s why we set out to deliver high-quality tyres, lubricants,
                        and batteries at competitive prices, supported by a seamless
                        and responsive customer experience.
                    </p>

                    <Link href={"#"} className='bg-[#F12328] rounded-lg lg:rounded-2xl py-2.5 lg:py-3 px-4 lg:px-12 w-max font-bold text-white text-xs lg:text-base'>
                        Learn More
                    </Link>
                </div>

                <Image
                    src={"/mechanic-auto-service-collage.png"}
                    alt="A vertical four-part photo collage showing a mechanic crouching in a workshop, a mechanic touching a raised car's tire, and a close-up of a classic car's front end and headlight"
                    width={594}
                    height={420}
                    className='mt-12 lg:mt-0 mb-16 w-84.5 lg:w-148.5 h-59.5 lg:h-105'
                />
            </section>

            {/* Service That Goes Beyond Supply */}
            <section className='flex flex-col gap-6 lg:gap-0 lg:flex-row lg:w-full lg:justify-between py-15 px-7.5 lg:px-10 xl:px-20'>
                <div className='flex flex-col gap-6 lg:max-w-165'>
                    <h2 className='font-bold lg:font-medium text-[#333333] lg:text-[#16172B] text-[28px] lg:text-[55px] leading-9 lg:leading-16.5 tracking-normal text-center lg:text-left'>
                        Service That Goes Beyond Supply
                    </h2>

                    <p className='font-normal text-[#333740] text-center lg:text-left text-xs lg:text-base'>
                        We built our reputation on consistency, trust and
                        service that goes beyond supply. Over the years, we
                        have grown into a trusted partner for organizations
                        that depend on automotive solutions to keep their
                        operations moving. Our journey is defined by a
                        commitment to international quality standards,
                        competitive pricing and a people-first approach
                        that ensures every client receives value and
                        peace of mind.
                    </p>

                    <div className='hidden lg:flex flex-row gap-3 items-center bg-[#16172B] rounded-lg py-3 pl-6 pr-16 w-max'>
                        <Image
                            src={"/brandmark-emblem-tagline-1.png"}
                            alt="Brandmark(Emblem) Tagline 1"
                            width={60}
                            height={64}
                            className='w-15 h-16'
                        />

                        <span className='font-bold text-[#F3F3F3] text-xl'>
                            Driven by quality, Inspired by value
                        </span>
                    </div>
                </div>

                <div className='flex flex-col lg:hidden gap-2.5'>
                    <Image
                        src={"/expert-auto-consultation-service.jpg"}
                        alt="Expert consultation between mechanic and customer demonstrates service that goes beyond supply"
                        width={314}
                        height={162}
                        className='w-full h-auto rounded-xl'
                    />

                    <div className='bg-[#F12328] rounded-xl px-5 py-7'>
                        <div className='flex flex-col gap-2.5'>
                            <h3 className='font-bold text-white text-sm'>
                                Our Mission
                            </h3>

                            <p className='font-normal text-white text-xs'>
                                To provide high-quality tyres, batteries, and
                                lubricants at competitive prices, while
                                ensuring a seamless, reliable, and
                                customer-focused experience.
                            </p>
                        </div>
                    </div>

                    <div className='bg-[#16172B] rounded-xl px-5 py-7'>
                        <div className='flex flex-col gap-2.5'>
                            <h3 className='font-bold text-white text-sm'>
                                Our Vision
                            </h3>

                            <p className='font-normal text-white text-xs'>
                                To become Africa&#39;s most reputable and
                                reliable partner in the automotive industry,
                                renowned for delivering exceptional value,
                                safety, and customer-centric solutions
                                across corporate and public organizations
                                within Africa.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='hidden lg:flex flex-row gap-13.5'>
                    <div className='flex flex-col h-59 items-center mt-2'>
                        <span className='w-3 h-3 rounded-full bg-[#F12328]'></span>
                        <span className='w-px flex-1 border-l-2 border-dashed border-[#D9C6B8]'></span>
                        <span className='w-3 h-3 rounded-full bg-[#F12328]'></span>
                    </div>

                    <div className='flex flex-col gap-15'>
                        <div className='flex flex-col gap-3 max-w-md'>
                            <h3 className='font-medium text-[#F12328] text-3xl'>
                                Our Mission
                            </h3>

                            <p className='font-normal text-[#333333] text-lg'>
                                To provide high-quality tyres, batteries, and
                                lubricants at competitive prices, while ensuring a
                                seamless, reliable, and customer-focused experience.
                            </p>
                        </div>

                        <div className='flex flex-col gap-3 max-w-md'>
                            <h3 className='font-medium text-[#F12328] text-3xl'>
                                Our Vision
                            </h3>

                            <p className='font-normal text-[#333333] text-lg'>
                                To become Africa&#39;s most reputable and reliable
                                partner in the automotive industry, renowned for
                                delivering exceptional value, safety, and
                                customer-centric solutions across corporate and
                                public organizations within Africa.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Core Values */}
            <section className='flex flex-col gap-10 py-13 lg:py-20 px-7.5 lg:px-10 xl:px-20'>
                <div className='flex flex-col gap-3'>
                    <h5 className='font-medium text-[#F12328] text-xs lg:text-lg'>
                        Our Core Values
                    </h5>
                    <h2 className='font-bold lg:font-medium text-black text-[28px] lg:text-[55px] leading-9.5 lg:leading-16.5 tracking-normal'>
                        Values That Drive Octopod Forward
                    </h2>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-10'>
                    {coreValues.map((value, index) => (
                        <div
                            key={index}
                            className='bg-[white] rounded-2xl border border-[#C7C7CC] py-5 lg:py-10 px-7.5 lg:px-10'
                        >
                            <div className='flex flex-col gap-3.5'>
                                <Image
                                    src={"/fast-delivery-truck-black.png"}
                                    alt='fast delivery truck'
                                    width={40}
                                    height={40}
                                    className='w-10 h-10'
                                />

                                <h3 className='font-bold text-[#222222] text-lg lg:text-2xl'>
                                    {value.title}
                                </h3>

                                <p className='font-normal text-[#333333] text-xs lg:text-sm leading-5 lg:leading-6 tracking-normal'>
                                    {value.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Our Clients */}
            <section className='flex flex-col gap-10 py-13 lg:py-20 px-7.5 lg:px-10 xl:px-20'>
                <div className='flex flex-col items-center gap-2'>
                    <h3 className='font-bold text-[#313131] text-3xl lg:font-medium lg:text-[55px]'>
                        Our Clients
                    </h3>
                    <p className='text-[#333333] text-center font-normal text-xs lg:text-lg'>
                        Serving businesses across Nigeria with quality and consistency.
                    </p>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-18'>
                    {clientsLogos.map((logo, index) => (
                        <div key={index} className='flex bg-white rounded-xl py-9.5 px-6 shadow-sm items-center justify-center'>
                            <Image
                                src={logo.image}
                                alt={logo.alt}
                                width={274}
                                height={154}
                                className={logo.sizeClasses}
                            />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
