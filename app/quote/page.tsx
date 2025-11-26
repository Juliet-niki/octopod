// app/quote/page.tsx
"use client";
import React from "react";

export default function Quote() {
  const [form, setForm] = React.useState({
    company: "",
    contact: "",
    email: "",
    phone: "",
    businessType: "",
    products: "",
    quantity: "",
    specs: "",
    location: "",
    payment: "",
    timeframe: "",
    requirements: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
    alert("Quote request submitted!");
  };

  return (
    <div className="relative flex flex-col bg-[#F5F8FA]">
      <span className="absolute top-0 left-0 w-full h-90 md:h-145 lg:h-154 bg-[#16172B] quote-hero-bg z-0"></span>
      <section className="pt-40 lg:pt-48 realtive bg-transparent z-10 flex flex-col items-center text-white px-5 md:px-20 py-16">
        <h2 className="font-bold md:font-medium text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-center mb-2">
          Talk To The Team That
        </h2>
        <h2 className="font-bold md:font-medium text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          Keeps You Moving
        </h2>

        <form
          onSubmit={handleSubmit}
          className="bg-white text-black rounded-2xl shadow-xl px-6 py-10 lg:px-13 lg:py-20 w-full space-y-5 lg:space-y-8 md:space-x-8 grid grid-cols-1 md:grid-cols-2 justify-between"
        >
          {[
            { label: "Company Name*", name: "company" },
            { label: "Contact Person Name*", name: "contact" },
            { label: "Email Address*", name: "email" },
            { label: "Phone Number*", name: "phone" },
            { label: "Business Type", name: "businessType" },
            { label: "Products Needed", name: "products" },
            { label: "Quantity", name: "quantity" },
            { label: "Technical Specifications", name: "specs" },
            { label: "Delivery Location", name: "location" },
            { label: "Preferred Payment", name: "payment" },
            { label: "Delivery Timeframe", name: "timeframe" },
            { label: "Special Requirements", name: "requirements" },
          ].map((field) => (
            <div key={field.name}>
              <label
                htmlFor={field.name}
                className="block text-[12px] md:text-[14px] font-medium text-[#16172B] mb-1"
              >
                {field.label}
              </label>
              <input
                type="text"
                id={field.name}
                name={field.name}
                onChange={handleChange}
                className="w-full border border-[#B7B8BA] rounded-md p-2 focus:ring-1 focus:ring-[#F12328] focus:outline-none"
                required={field.label.includes("*")}
              />
            </div>
          ))}

          <button
            type="submit"
            className="cursor-pointer md:col-span-2 mt-7 mx-auto w-full md:w-max md:py-2 md:px-16 bg-[#F12328] text-white text-[11px] md:text-[14px] lg:text-base font-bold py-2 rounded-lg hover:bg-red-600 transition"
          >
            Request Quote
          </button>
        </form>
      </section>
    </div>
  );
}
