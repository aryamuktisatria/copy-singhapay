"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Tutup menu otomatis kalau layar di-resize ke ukuran desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="relative flex items-center justify-between bg-[#000000] h-[140px] w-full px-[31px]">
      {/* Logo */}
      <div className="flex items-center">
        <Image
          src="/logo-singhapay.png"
          alt="SinghaPay Logo"
          width={284}
          height={75}
          priority
          className="w-[200px] md:w-[240px] lg:w-[284px] h-auto"
        />
      </div>

      {/* Menu tengah - Desktop */}
      <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 items-center gap-[68px] text-white font-poppins font-medium text-[18px] leading-normal text-center">
        <span className="hover:text-[#FFC808] cursor-pointer transition-colors duration-200">About Us</span>
        <span className="hover:text-[#FFC808] cursor-pointer transition-colors duration-200">Our Features</span>
        <span className="hover:text-[#FFC808] cursor-pointer transition-colors duration-200">Services</span>
        <span className="hover:text-[#FFC808] cursor-pointer transition-colors duration-200">Solutions</span>
      </div>

      {/* Button Contact Us - Desktop */}
      <div className="hidden lg:flex">
        <Button
          className="w-[176px] h-[60px] px-[29px] py-[13px] rounded-[30px]
            bg-gradient-to-br from-[#EF5F22] to-[#F8931F] text-white font-poppins font-semibold text-[15px]
            transition-all duration-300 hover:brightness-110 hover:shadow-lg"
        >
          Contact Us
        </Button>
      </div>

      {/* Hamburger Menu - Mobile/Tablet */}
      <button
        className="lg:hidden flex items-center justify-center text-white hover:text-[#FFC808] transition-all duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.8}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>

      {/* Dropdown Menu - Mobile */}
      {isOpen && (
        <div className="absolute top-[120px] left-0 w-full bg-[#000000] flex flex-col items-center gap-6 py-6 text-white font-poppins font-medium text-[18px] lg:hidden transition-all duration-300">
          <span className="hover:text-[#FFC808] cursor-pointer">About Us</span>
          <span className="hover:text-[#FFC808] cursor-pointer">Our Features</span>
          <span className="hover:text-[#FFC808] cursor-pointer">Services</span>
          <span className="hover:text-[#FFC808] cursor-pointer">Solutions</span>

          <Button
            className="w-[160px] h-[50px] rounded-[30px]
              bg-gradient-to-br from-[#EF5F22] to-[#F8931F] text-white font-poppins font-semibold text-[15px]
              transition-all duration-300 hover:brightness-110 hover:shadow-lg"
          >
            Contact Us
          </Button>
        </div>
      )}
    </nav>
  );
}
