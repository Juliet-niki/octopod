// app.layout.tsx
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    template: "%s - Octopod Services",
    default: "Octopod Services",
  },
  description: "Trusted Supplier of Tyres, Lubricants and Batteries in Nigeria",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased`}>
        <Navbar />
        <main className="flex flex-col w-full mt-[58px] lg:mt-[92px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
