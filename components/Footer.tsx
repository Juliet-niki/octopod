"use client";
import Link from 'next/link';
import React from 'react';
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";

export default function Footer() {
  const [email, setEmail] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribed:", email);
    setEmail("");
  };

  return (
    <footer className='w-full h-max footer-bg flex flex-col px-7.5 lg:px-10 xl:px-20 py-14 lg:pt-18.5 lg:pb-6'>
      <div className='w-full flex flex-col lg:flex-row lg:justify-between'>
        <div className='flex flex-col gap-3 lg:max-w-154'>
          <h3 className='font-semibold text-white text-[32px] lg:text-[55px] leading-10.5 lg:leading-17.5 tracking-normal'>
            Driven by Quality,
            Inspired by Value
          </h3>

          <div className='flex flex-row gap-2 lg:gap-2.5'>
            <Link href={"#"} className='flex flex-row items-center justify-center rounded lg:rounded-lg border border-white p-1 lg:p-2'>
              <FaInstagram size={12} className='text-white lg:w-4 lg:h-4' />
            </Link>
            <Link href={"#"} className='flex flex-row items-center justify-center rounded lg:rounded-lg border border-white p-1 lg:p-2'>
              <FaFacebookF size={12} className='text-white lg:w-4 lg:h-4' />
            </Link>
            <Link href={"#"} className='flex flex-row items-center justify-center rounded lg:rounded-lg border border-white p-1 lg:p-2'>
              <AiOutlineYoutube size={12} className='text-white lg:w-4 lg:h-4' />
            </Link>
            <Link href={"#"} className='flex flex-row items-center justify-center rounded lg:rounded-lg border border-white p-1 lg:p-2'>
              <FaLinkedinIn size={12} className='text-white lg:w-4 lg:h-4' />
            </Link>
            <Link href="mailto:info@octopodservices.com" className='flex flex-row items-center justify-center rounded lg:rounded-lg border border-white p-1 lg:p-2'>
              <HiOutlineMail size={12} className='text-white lg:w-4 lg:h-4' />
            </Link>
          </div>

          {/* <Link href="mailto:info@octopodservices.com" className='hidden lg:flex flex-row gap-2'>
            <span className='flex flex-row items-center justify-center rounded-md border border-white px-1.5 py-0.5'>
              <HiOutlineMail size={16} className='text-white' />
            </span>

            <p className='font-normal text-white text-xs lg:text-xl'>info@octopodservices.com</p>
          </Link> */}

          <p className='font-normal text-white text-xs lg:text-xl'>Mon-Fri (9am to 5pm)</p>
        </div>

        <div className='flex flex-col lg:max-w-132.5'>
          <div className='mt-10 lg:mt-0 flex flex-col'>
            <p className='font-normal text-white text-base lg:text-[26px]'>
              Subscribe to our newsletter for the latest tips and trends
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-4 flex flex-row items-center w-full justify-between bg-white p-1.5 rounded-[18px] lg:rounded-4xl overflow-hidden shadow-sm"
            >
              <input
                type="email"
                placeholder="Enter your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-2 bg-transparent focus:outline-none font-normal text-xs lg:text-base placeholder:text-black"
              />

              <button
                type="submit"
                className="cursor-pointer rounded-[18px] lg:rounded-4xl w-max bg-[#16172B] text-white font-bold px-3 lg:px-5 py-2.5 text-[10px] lg:text-base hover:opacity-90 transition-colors"
              >
                Subscribe Now
              </button>
            </form>
          </div>

          <ul className="mt-5 flex items-center list-none gap-6 font-normal text-white text-base lg:text-[22px]">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/blog">Blog</Link></li>
          </ul>
        </div>
      </div>

      <div className='mt-20 border-0 border-t-[0.3px] lg:border-t-[0.5px] border-[#A8DDCB] -mx-7.5 lg:-mx-10 xl:-mx-20'></div>

      <div className='mx-0.5 lg:mx-0 mt-10 lg:mt-6 flex flex-col lg:flex-row gap-1.5 lg:gap-0 lg:w-full lg:justify-between items-center text-center'>
        <div className='flex flex-col lg:hidden gap-1.5 text-sm'>
          <Link href={"#"} className='font-normal text-white'>
            Privacy policy
          </Link>
          <Link href={"#"} className='font-normal text-white'>
            Terms of Service
          </Link>
        </div>

        <p className='font-normal text-white text-sm lg:text-lg'>
          © 2025 Octopod Services All Rights Reserved
        </p>

        <div className='hidden lg:flex flex-row gap-2.5 items-center text-lg'>
          <Link href={"#"} className='font-normal text-white'>
            Privacy policy
          </Link>

          <div className='rounded-full w-2 h-2 bg-[#D9D9D9]'></div>

          <Link href={"#"} className='font-normal text-white'>
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
