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
      <section className="pt-40 lg:pt-48 realtive bg-transparent z-10 flex flex-col items-center text-white px-5 lg:px-12 py-16">
        <h2 className="font-bold ml:font-medium text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-center mb-2">
          Talk To The Team That
        </h2>
        <h2 className="font-bold ml:font-medium text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          Keeps You Moving
        </h2>

        <form
          onSubmit={handleSubmit}
          className="bg-white text-black rounded-2xl shadow-xl grid grid-cols-1 md:grid-cols-2 w-full px-6 sm:px-8 py-10 md:px-7 md:py-12 lg:px-10 lg:py-14 gap-5 sm:gap-6 md:gap-y-8 lg:gap-7 lg:gap-y-10 justify-between"
        >
          {[
            { label: "Company Name", asterisk: "*", name: "company" },
            { label: "Contact Person Name", asterisk: "*", name: "contact" },
            { label: "Email Address", asterisk: "*", name: "email" },
            { label: "Phone Number", asterisk: "*", name: "phone" },
            { label: "Business Type", asterisk: "", name: "businessType" },
            { label: "Products Needed", asterisk: "", name: "products" },
            { label: "Quantity", asterisk: "", name: "quantity" },
            { label: "Technical Specifications", asterisk: "", name: "specs" },
            { label: "Delivery Location", asterisk: "", name: "location" },
            { label: "Preferred Payment", asterisk: "", name: "payment" },
            { label: "Delivery Timeframe", asterisk: "", name: "timeframe" },
            {
              label: "Special Requirements",
              asterisk: "",
              name: "requirements",
            },
          ].map((field) => (
            <div key={field.name}>
              <label
                htmlFor={field.name}
                className="block text-[12px] md:text-[14px] font-medium text-[#16172B] mb-1"
              >
                {field.label}
                <span className="text-[#F12328]">{field.asterisk}</span>
              </label>
              <input
                type="text"
                id={field.name}
                name={field.name}
                onChange={handleChange}
                className="w-full border border-[#B7B8BA] rounded-md p-2 md:p-3 focus:ring-1 focus:ring-[#F12328] focus:outline-none"
                required={field.label.includes("*")}
              />
            </div>
          ))}

          <button
            type="submit"
            className="cursor-pointer md:col-span-2 mt-7 mx-auto w-full md:w-fit py-4 px-16 bg-[#F12328] text-white text-[12px] md:text-[14px] lg:text-base font-bold rounded-2xl hover:bg-red-600 transition"
          >
            Request Quote
          </button>
        </form>
      </section>
    </div>
  );
}
