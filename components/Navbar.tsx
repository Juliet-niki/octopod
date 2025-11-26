// components/Navbar.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoMenu, IoCloseOutline } from "react-icons/io5";

export default function Navbar() {
  const [showMenu, setShowMenu] = React.useState(false);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-white z-50 ${
        showMenu ? "h-screen" : "h-max"
      } px-7.5 py-4 lg:px-10 xl:px-20 lg:py-6`}
    >
      <nav className="mx-auto flex flex-row w-full items-center justify-between">
        {/* Logo */}
        <Link href={"/"}>
          <Image
            src={"/logo.png"}
            alt="Octopod Services logo"
            width={160}
            height={36.41}
            className="w-[78px] h-[17.75px] lg:w-40 lg:h-9"
          />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden ml:flex items-center list-none gap-8 m-0 p-0 font-semibold text-[17px] text-[#333333]">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
        </ul>

        {/* Desktop CTA */}
        <Link
          href={"/quote"}
          className="hidden lg:flex flex-col items-center bg-[#16172B] px-10 py-2.5 rounded-2xl font-bold text-base leading-6 tracking-normal text-center text-white hover:opacity-90 transition"
        >
          Request Quote
        </Link>

        {/* Hamburger (mobile only) */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle menu"
          className="flex lg:hidden flex-col items-center p-px text-[#16172B] cursor-pointer focus:outline-none"
        >
          {showMenu ? <IoCloseOutline size={28} /> : <IoMenu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="lg:hidden bg-white animate-fadeIn">
          <ul className="flex flex-col space-y-6 -mx-7.5 mt-8 font-medium">
            <li className="border-b-[0.6px] border-[#D9D9D9] pb-3.5">
              <Link href="/" onClick={toggleMenu} className="px-7.5">
                Home
              </Link>
            </li>
            <li className="border-b-[0.6px] border-[#D9D9D9] pb-3.5">
              <Link href="/about" onClick={toggleMenu} className="px-7.5">
                About
              </Link>
            </li>
            <li className="border-b-[0.6px] border-[#D9D9D9] pb-3.5">
              <Link href="/services" onClick={toggleMenu} className="px-7.5">
                Services
              </Link>
            </li>
            <li className="border-b-[0.6px] border-[#D9D9D9] pb-3.5">
              <Link href="/blog" onClick={toggleMenu} className="px-7.5">
                Blog
              </Link>
            </li>
          </ul>

          <Link
            href="/quote"
            className="block w-full text-center mt-14 bg-[#16172B] text-white px-6 py-3 rounded-xl font-bold leading-6 hover:opacity-90 transition"
            onClick={toggleMenu}
          >
            Request Quote
          </Link>
        </div>
      )}
    </header>
  );
}
