// app/page.tsx
import { ourServices, partnerLogos, rightPartnerDeals } from "@/constants/data";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-[url('/home-hero-mobile.png')] md:bg-[url('/home-hero-desktop.png')] bg-no-repeat bg-cover bg-center w-full h-screen flex flex-col md:flex-row">
        <div className="my-0 mt-[72px] md:my-auto flex flex-col px-7.5 lg:px-10 xl:px-20 gap-3.75 lg:gap-5">
          <div className="flex flex-col gap-3 lg:gap-6.5 max-w-full md:max-w-150 xl:max-w-169">
            <h1 className="text-[28px] sm:text-[48px] md:text-[50px] lg:text-[60px] font-bold md:font-medium home-hero-heading leading-9.5 sm:leading-16 lg:leading-17.5 tracking-normal text-white">
              Trusted Supplier of Tyres, Lubricants and Batteries in Nigeria.
            </h1>

            <p className="font-normal home-hero-p leading-4 sm:leading-5 md:leading-6.5 tracking-normal md:max-w-140 xl:max-w-159.5 text-[#F3F3F3] text-[10px] sm:text-[14px] md:text-[16px]">
              Octopod Services delivers quality car and truck tyres, automotive
              batteries, and high-performance engine oils & lubricants for
              businesses across Nigeria.
            </p>
          </div>

          <Link
            href="/services"
            className="w-max h-max rounded-lg lg:rounded-2xl py-3 px-4.5 lg:py-4 lg:px-10 bg-[#F12328] font-bold text-xs lg:text-base text-white leading-3 lg:leading-6 tracking-normal"
          >
            Explore Services
          </Link>
        </div>
      </section>

      {/* Partners */}
      <section className="relative w-full overflow-hidden bg-transparent py-3">
        <div className="flex animate-scroll gap-12 w-max">
          {[...partnerLogos, ...partnerLogos, ...partnerLogos].map(
            (logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center min-w-[120px] h-11 lg:h-14"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={40}
                  className="object-contain opacity-100 hover:opacity-50 transition"
                />
              </div>
            )
          )}
        </div>
      </section>

      {/* About us */}
      <section className="flex flex-col lg:flex-row w-full gap-10 lg:gap-2.5 md:justify-between py-10.5 px-7.5 lg:px-10 xl:px-20">
        <div className="flex flex-col gap-3 lg:max-w-135.5 my-auto">
          <h4 className="font-medium text-xs md:text-lg leading-3 lg:leading-4 tracking-normal text-[#F12328]">
            About us
          </h4>

          <h2 className="font-bold text-[28px] sm:text-[32px] md:text-[42px] lg:text-[55px] text-[#01000E] leading-9.5 md:leading-14 lg:leading-16.5 tracking-normal">
            Driven by Quality, Inspired by Value
          </h2>

          <p className="font-normal text-xs lg:text-lg text-[#333333] leading-5.5 lg:leading-7 tracking-normal">
            Octopod Services is your trusted automotive partner in Nigeria. We
            deliver premium tyres, batteries, and engine oils with competitive
            pricing, nationwide delivery, and dedicated support that makes every
            journey safer and smarter.
          </p>

          <Link
            href="/about"
            className="rounded-xl lg:rounded-2xl py-2.5 lg:py-4 px-8 lg:px-16 bg-[#16172B] w-max font-bold text-white text-xs lg:text-base lg:leading-6 tracking-normal"
          >
            Learn More
          </Link>
        </div>

        <Image
          src={"/mechanic-fixing-car-tyre.png"}
          alt={"mechanic fixing car tyre"}
          width={622}
          height={538}
          className="my-auto mx-auto md:mx-0 object-cover w-full lg:w-[622px] h-auto sm:h-[400px] lg:h-[538px] rounded-2xl"
        />
      </section>

      {/* Our Services */}
      <section className="flex flex-col w-full px-7.5 lg:px-10 xl:px-20 py-16 bg-[#16172B] items-center ">
        <h2 className="font-medium text-xs lg:text-lg text-[#A8DDCB] leading-5 tracking-normal">
          Our Services
        </h2>

        <h3 className="mt-4 text-center font-bold text-[28px] lg:text-[50px] text-white leading-9.5 lg:leading-15 tracking-normal">
          Reliable Products for Every Journey
        </h3>

        <div className="mt-10 lg:mt-12  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-8 md:gap-10 lg:gap-18 w-full">
          {ourServices.map((service, index) => (
            <article
              key={index}
              className="bg-white rounded-[14px] lg:rounded-2xl p-7 lg:p-8.5 flex flex-col gap-6 lg:gap-8.5 lg:max-w-95"
            >
              <div className="flex flex-col w-16.5 lg:w-20 h-16.5 lg:h-20 rounded-full bg-[#16172B] items-center justify-center">
                <Image
                  src={service.image}
                  alt={service.alt}
                  width={40}
                  height={40}
                  className="w-8 lg:w-10 h-8 lg:h-10"
                />
              </div>

              <div className="flex flex-col gap-1.5 lg:gap-4">
                <h4 className="font-medium text-[22px] lg:text-[26px] text-[#222222] tracking-normal">
                  {service.title}
                </h4>

                <p className="font-normal text-[#333333] text-[13px] lg:text-base tracking-normal">
                  {service.description}
                </p>
              </div>

              <Link
                href={service.link}
                className="rounded-xl bg-[#F12328] w-max px-5.5 lg:px-6.5 py-2 lg:py-3 font-normal text-sm lg:text-base text-white mt-auto"
              >
                View More
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Why Octopod is the Right Partner */}
      <section className="flex flex-col w-full px-7.5 lg:px-10 xl:px-20 py-10.5 lg:py-24">
        <div className="flex flex-col gap-10 lg:gap-[2%] lg:flex-row lg:justify-between w-full">
          <div className="w-full lg:w-[43%] flex flex-col gap-3 lg:gap-7 mt-auto">
            <h2 className="font-bold text-black text-[28px] sm:text-[32px] md:text-[40px] lg:text-[55px] leading-9.5 md:leading-14 lg:leading-16.5 tracking-normal">
              Why Octopod is the Right Partner
            </h2>

            <p className="font-normal text-[#333333] text-xs sm:text-sm lg:text-[22px] leading-5 lg:leading-8 tracking-normal">
              Beyond quality products, we prioritise reliability, efficiency,
              and long-term partnerships to help companies reduce downtime,
              optimize costs, and focus on growth.
            </p>

            <Link
              href={"/quote"}
              className="lg:mt-16 lg:mb-5 w-max bg-[#16172B] rounded-xl lg:rounded-2xl py-2.5 lg:py-4 px-6.5 lg:px-14 font-bold text-[10px] lg:text-base text-white"
            >
              Request Quote
            </Link>
          </div>

          <div className="w-full lg:w-[55%] grid grid-cols-1 sm:grid-cols-2 mx-auto lg:mx-0 lg:grid-cols-2 gap-6">
            {rightPartnerDeals.map((deal, index) => (
              <div
                key={index}
                className="group/partner h-max min-h-72 lg:min-h-80 lg:max-w-84 rounded-[18.75px] py-5.5 px-5 first:bg-[#16172B] first:border-none border border-[#00000026]"
              >
                <div className="flex flex-col gap-3">
                  <Image
                    src={deal.image}
                    alt={deal.alt}
                    width={50}
                    height={50}
                    className="w-[46px] lg:w-[50px] h-[46px] lg:h-[50px]"
                  />

                  <h4 className="font-bold group-first/partner:text-white text-[#222222] text-xl lg:text-[22px] leading-6 tracking-normal">
                    {deal.title}
                  </h4>

                  <p className="font-normal group-first/partner:text-white/80 text-[#222222] text-sm leading-6 tracking-normal">
                    {deal.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Request Quote */}
      <section className="bg-[url('/home-rq-mobile.png')] lg:bg-[url('/home-rq-desktop.png')] bg-cover bg-center bg-no-repeat max-w-full py-9 md:py-10 lg:pt-12 lg:pb-20 px-7.5 lg:px-0 flex flex-col items-center">
        <div className="flex flex-col text-center items-center gap-3 lg:gap-8">
          <h2 className="w-[80%] sm:w-full text-[#222222] font-bold text-[22px] sm:text-[28px] md:text-[35px] lg:text-[50px] leading-5.5 sm:leading-8 lg:leading-12 tracking-normal">
            Request a Free Quote Today
          </h2>

          <p className="w-full sm:max-w-[75%] lg:max-w-[702px] font-normal text-[#425466] text-[10px] sm:text-xs md:text-sm lg:text-lg leading-3.75 sm:leading-5 lg:leading-7 tracking-normal">
            Simplify your automotive supply chain with products tailored to your
            specific requirements. Get in touch for tyres, lubricants, and
            batteries — our team will share a detailed quote immediately!
          </p>

          <Link
            href={"/quote"}
            className="w-max bg-[#F12328] rounded-lg lg:rounded-2xl py-1.5 md:py-2 lg:py-3 px-10 lg:px-20 font-bold text-[8px] md:text-[10px] lg:text-base text-white"
          >
            Request Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
