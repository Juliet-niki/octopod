// app/quote/page.tsx
"use client";
import React from 'react';

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
        <div className='relative flex flex-col bg-[#F5F8FA]'>
            <span className='absolute top-0 left-0 w-full h-90 lg:h-154 bg-[#16172B] quote-hero-bg z-0'></span>
            <section className="pt-40 lg:pt-48 realtive z-10 flex flex-col items-center bg-transparent text-white px-4 py-16">
                <h2 className="text-2xl font-bold lg:font-medium lg:text-6xl text-center mb-2">
                    Talk To The Team That
                </h2>
                <h2 className="text-2xl font-bold lg:font-medium lg:text-6xl text-center mb-8 lg:mb-20">
                    Keeps You Moving
                </h2>

                <form
                    onSubmit={handleSubmit}
                    className="bg-white text-black rounded-2xl shadow-xl px-6 py-16 lg:px-13 lg:py-20 w-full space-y-4 lg:space-y-8 lg:space-x-8 lg:max-w-7xl grid grid-cols-1 lg:grid-cols-2 justify-between"
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
                                className="block text-[10px] font-medium text-[#16172B] mb-1"
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
                        className="cursor-pointer w-full lg:w-max lg:py-2 lg:px-16 bg-[#F12328] text-white text-[10px] lg:text-base font-bold py-2 rounded-lg hover:bg-red-600 transition"
                    >
                        Request Quote
                    </button>
                </form>
            </section>
        </div>
    );
}
