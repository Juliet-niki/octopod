// app/page.tsx
import { partnerLogos } from "@/constants/data";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="w-full h-screen home-hero-bg flex flex-col lg:flex-row pt-32.75 lg:pt-55.5">
        <div className="flex flex-col px-7.5 lg:px-10 xl:px-20 gap-3.75 lg:gap-5">
          <div className="flex flex-col gap-3 lg:gap-6.5 max-w-100 lg:max-w-150 xl:max-w-169">
            <h1 className="font-bold text-[28px] lg:text-5xl xl:text-6xl leading-9.5 lg:leading-17.5 tracking-normal text-white">
              Trusted Supplier of Tyres, Lubricants and Batteries in Nigeria.
            </h1>

            <p className="font-normal text-[10px] lg:text-sm xl:text-base leading-4 lg:leading-6.5 tracking-normal lg:max-w-140 xl:max-w-159.5 text-[#F3F3F3]">
              Octopod Services delivers quality car and truck tyres, automotive batteries, and
              high-performance engine oils & lubricants for businesses across Nigeria.
            </p>
          </div>

          <Link href="/services" className="w-max h-max rounded-lg lg:rounded-2xl py-3 px-4.5 lg:py-4 lg:px-10 bg-[#F12328] font-bold text-xs lg:text-base text-white leading-3 lg:leading-6 tracking-normal">
            Explore Services
          </Link>
        </div>
      </section>

      {/* Partners */}
      <div className="relative w-full overflow-hidden bg-transparent py-3">
        <div className="flex animate-scroll gap-12 w-max">
          {[...partnerLogos, ...partnerLogos, ...partnerLogos].map((logo, index) => (
            <div key={index} className="flex items-center justify-center min-w-[120px] h-11 lg:h-14">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={40}
                className="object-contain opacity-100 hover:opacity-50 transition"
              />
            </div>
          ))}
        </div>
      </div>

      {/* About us */}
      <section className="flex flex-col lg:flex-row w-full lg:justify-between py-10.5 px-7.5 lg:px-10 xl:px-20">
        <div className="flex flex-col gap-3 lg:mt-30 lg:max-w-135.5">
          <h2 className="font-medium text-xs lg:text-lg leading-3 lg:leading-4 tracking-normal text-[#F12328]">
            About us
          </h2>

          <h1 className="font-bold text-[28px] lg:text-[55px] text-[#01000E] leading-9.5 lg:leading-16.5 tracking-normal">
            Driven by Quality, Inspired by Value
          </h1>

          <p className="font-normal text-xs lg:text-lg text-[#333333] leading-5.5 lg:leading-7 tracking-normal">
            Octopod Services is your trusted automotive partner
            in Nigeria. We deliver premium tyres, batteries, and
            engine oils with competitive pricing, nationwide
            delivery, and dedicated support that makes every
            journey safer and smarter.
          </p>

          <Link href="/about" className="rounded-xl lg:rounded-2xl py-2.5 lg:py-4 px-8 lg:px-16 bg-[#16172B] w-max font-bold text-white text-xs lg:text-base lg:leading-6 tracking-normal">
            Learn More
          </Link>
        </div>

        <Image
          src={"/mechanic-fixing-car-tyre.png"}
          alt={"mechanic fixing car tyre"}
          width={622}
          height={538}
          className="mt-10 w-[315px] lg:w-[622px] h-[337px] lg:h-[538px]"
        />
      </section>

      {/* Our Services */}
      <section className="flex flex-col w-full px-7.5 lg:px-10 xl:px-20 bg-[#16172B] items-center py-8.5">
        <h2 className="font-medium text-xs lg:text-lg text-[#A8DDCB] leading-5 tracking-normal">Our Services</h2>

        <h1 className="mt-7.5 text-center font-bold text-[28px] lg:text-[50px] text-white leading-9.5 lg:leading-15 tracking-normal">
          Reliable Products for Every Journey
        </h1>

        <div className="mt-10 lg:mt-20 flex flex-col gap-8 lg:gap-0 lg:flex-row w-full lg:justify-between">
          <div className="bg-white rounded-[14px] lg:rounded-2xl p-7 lg:p-8.5 flex flex-col gap-6 lg:gap-8.5 lg:max-w-95">
            <div className="flex flex-col w-16.5 lg:w-20 h-16.5 lg:h-20 rounded-full bg-[#16172B] items-center justify-center">
              <Image
                src={"/rim-tyre.png"}
                alt="rim tyre"
                width={40}
                height={40}
                className="w-[33px] lg:w-10 h-[33px] lg:h-10"
              />
            </div>

            <div className="flex flex-col gap-1.5 lg:gap-4">
              <h3 className="font-medium text-[22px] lg:text-[26px] text-[#222222] tracking-normal">
                Tyres
              </h3>

              <p className="font-normal text-[#333333] text-[13px] lg:text-base tracking-normal">
                A wide selection of car and truck tyres
                for commercial vehicles, heavy-duty
                trailers, and fleets. Sourced from
                globally recognised brands with
                warranty coverage on premium tyres
                to ensure safety, durability, and
                performance.
              </p>
            </div>

            <Link href={"/services"} className="rounded-xl bg-[#F12328] w-max px-5.5 lg:px-6.5 py-2 lg:py-3 font-normal text-sm lg:text-base text-white">
              View More
            </Link>
          </div>

          <div className="bg-white rounded-[14px] lg:rounded-2xl p-7 lg:p-8.5 flex flex-col gap-6 lg:gap-8.5 lg:max-w-95">
            <div className="flex flex-col w-16.5 lg:w-20 h-16.5 lg:h-20 rounded-full bg-[#16172B] items-center justify-center">
              <Image
                src={"/lubricant-icon.png"}
                alt="Lubricant Icon"
                width={28}
                height={34}
                className="w-7 h-[33px]"
              />
            </div>

            <div className="flex flex-col gap-1.5 lg:gap-4">
              <h3 className="font-medium text-[22px] lg:text-[26px] text-[#222222] tracking-normal">
                Lubricants
              </h3>

              <p className="font-normal text-[#333333] text-[13px] lg:text-base tracking-normal">
                Premium engine oils and lubricants
                that reduce wear, extend engine life
                and improve efficiency.
              </p>
            </div>

            <Link href={"/services"} className="rounded-xl bg-[#F12328] w-max px-5.5 lg:px-6.5 py-2 lg:py-3 font-normal text-sm lg:text-base text-white">
              View More
            </Link>
          </div>

          <div className="bg-white rounded-[14px] lg:rounded-2xl p-7 lg:p-8.5 flex flex-col gap-6 lg:gap-8.5 lg:max-w-95">
            <div className="flex flex-col w-16.5 lg:w-20 h-16.5 lg:h-20 rounded-full bg-[#16172B] items-center justify-center">
              <Image
                src={"/battery-icon.png"}
                alt="battery icon"
                width={46}
                height={40}
                className="w-[38px] lg:w-[46px] h-[33px] lg:h-10"
              />
            </div>

            <div className="flex flex-col gap-1.5 lg:gap-4">
              <h3 className="font-medium text-[22px] lg:text-[26px] text-[#222222] tracking-normal">
                Batteries
              </h3>

              <p className="font-normal text-[#333333] text-[13px] lg:text-base tracking-normal">
                Durable automotive batteries built to
                deliver consistent power and long-lasting
                performance for every type of vehicle on the road.
              </p>
            </div>

            <Link href={"/services"} className="rounded-xl bg-[#F12328] w-max px-5.5 lg:px-6.5 py-2 lg:py-3 font-normal text-sm lg:text-base text-white">
              View More
            </Link>
          </div>
        </div>
      </section>

      {/* Why Octopod is the Right Partner */}
      <section className="flex flex-col w-full px-7.5 lg:px-10 xl:px-20 py-10.5 lg:py-24">
        <div className="flex flex-col gap-10 lg:gap-0 lg:flex-row lg:w-full lg:justify-between">
          <div className="flex flex-col gap-3 lg:gap-7 lg:max-w-121 lg:pt-38">
            <h2 className="font-bold text-black text-[28px] lg:text-[55px] leading-9.5 lg:leading-16.5 tracking-normal">
              Why Octopod is the
              Right Partner
            </h2>

            <p className="font-normal text-[#333333] text-xs lg:text-[22px] leading-5 lg:leading-8 tracking-normal">
              Beyond quality products, we prioritise reliability,
              efficiency, and long-term partnerships to help
              companies reduce downtime, optimize costs, and
              focus on growth.
            </p>

            <Link href={"/quote"} className="lg:mt-20 w-max bg-[#16172B] rounded-xl lg:rounded-2xl py-2.5 lg:py-4 px-6.5 lg:px-14 font-bold text-[10px] lg:text-base text-white">
              Request Quote
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="h-75 lg:h-80 lg:max-w-84 rounded-[18.75px] py-5.5 px-5 bg-[#16172B]">
              <div className="flex flex-col gap-3">
                <Image
                  src={"/fast-delivery-truck-van.png"}
                  alt="fast delivery truck van"
                  width={50}
                  height={50}
                  className="w-[46px] lg:w-[50px] h-[46px] lg:h-[50px]"
                />

                <h4 className="font-bold text-white text-xl lg:text-[22px] leading-6 tracking-normal">
                  Fast Delivery
                </h4>

                <p className="font-normal text-white text-sm leading-6 tracking-normal">
                  Time is critical for your business
                  operations, that&#39;s why we provide fast,
                  reliable delivery of tyres, batteries, and
                  engine oils across Nigeria, with express
                  service to Lagos, Abuja, and Port Harcourt.
                </p>
              </div>
            </div>

            <div className="h-75 lg:h-80 lg:max-w-84 rounded-[18.75px] py-5.5 px-5 border border-[#00000026]">
              <div className="flex flex-col gap-3">
                <Image
                  src={"/discount.png"}
                  alt="discount"
                  width={50}
                  height={50}
                  className="w-[46px] lg:w-[50px] h-[46px] lg:h-[50px]"
                />

                <h4 className="font-bold text-[#222222] text-xl lg:text-[22px] leading-6 tracking-normal">
                  Corporate Discounts
                </h4>

                <p className="font-normal text-[#333333] text-sm leading-6 tracking-normal">
                  Octopod Services values long-term
                  partnerships with businesses and fleet
                  operators. We offer competitive corporate
                  discounts as part of our partnership
                  ommitment to optimise your business
                  operations.
                </p>
              </div>
            </div>

            <div className="h-75 lg:h-80 lg:max-w-84 rounded-[18.75px] py-5.5 px-5 border border-[#00000026]">
              <div className="flex flex-col gap-3">
                <Image
                  src={"/global.png"}
                  alt="global"
                  width={50}
                  height={50}
                  className="w-[46px] lg:w-[50px] h-[46px] lg:h-[50px]"
                />

                <h4 className="font-bold text-[#222222] text-xl lg:text-[22px] leading-6 tracking-normal">
                  Trusted Global Brands
                </h4>

                <p className="font-normal text-[#333333] text-sm leading-6 tracking-normal">
                  We partner with industry-leading tyre and
                  automotive manufacturers, ensuring that
                  every tyre, engine oil, and battery we
                  supply meets the highest safety and
                  performance standards.
                </p>
              </div>
            </div>

            <div className="h-75 lg:h-80 lg:max-w-84 rounded-[18.75px] py-5.5 px-5 border border-[#00000026]">
              <div className="flex flex-col gap-3">
                <Image
                  src={"/support.png"}
                  alt="support"
                  width={50}
                  height={50}
                  className="w-[46px] lg:w-[50px] h-[46px] lg:h-[50px]"
                />

                <h4 className="font-bold text-[#222222] text-xl lg:text-[22px] leading-6 tracking-normal">
                  Dedicated Support
                </h4>

                <p className="font-normal text-[#333333] text-sm leading-6 tracking-normal">
                  Our customer service team is committed
                  to supporting you at every stage. Whether
                  you need product guidance, urgent
                  support, or after-sales service, we provide
                  quick and dependable solutions to keep
                  your business moving.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Request Quote */}
      <section className="max-w-[375px] lg:max-w-full py-9 lg:py-0 px-7.5 lg:px-0 lg:h-[402px] home-rq-bg flex flex-col items-center">
        <div className="flex flex-col items-center lg:mt-12 gap-3 lg:gap-8">
          <h3 className="max-w-62 lg:max-w-full text-center text-[#222222] font-bold text-[22px] lg:text-[50px] leading-5.5 lg:leading-12 tracking-normal">
            Request a Free Quote Today
          </h3>

          <p className="text-center lg:max-w-[702px] font-normal text-[#425466] text-[10px] lg:text-lg leading-3.75 lg:leading-7 tracking-normal">
            Simplify your automotive supply chain with products tailored to your specific
            requirements. Get in touch for tyres, lubricants, and batteries — our team will
            share a detailed quote immediately!
          </p>

          <Link href={"/quote"} className="w-max bg-[#F12328] rounded-lg lg:rounded-2xl py-1.5 lg:py-3 px-10 lg:px-20 font-bold text-[8px] lg:text-base text-white">
            Request Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
