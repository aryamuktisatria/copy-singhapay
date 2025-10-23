"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [animateNavbar, setAnimateNavbar] = useState(false);

  const isContactPage = pathname === "/contact";

  // animasi muncul navbar
  useEffect(() => {
    const timer = setTimeout(() => setAnimateNavbar(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // auto tutup menu pas resize ke desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // efek scroll (ubah background navbar + tombol scroll top)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      setShowScrollTop(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // fungsi scroll ke section atau navigate ke halaman
  const scrollToSection = (id: string) => {
    // Jika di halaman contact dan user klik menu lain, redirect ke home dulu
    if (isContactPage && id !== "contact") {
      router.push(`/#${id}`);
      setIsOpen(false);
      return;
    }

    // Jika sudah di home, scroll langsung
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  };

  // Handle contact button click
  const handleContactClick = () => {
    if (isContactPage) {
      // Jika sudah di halaman contact, scroll ke atas
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Jika di halaman lain, navigate ke /contact
      router.push("/contact");
    }
    setIsOpen(false);
  };

  // scroll ke atas
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Handle logo click
  const handleLogoClick = () => {
    if (isContactPage) {
      router.push("/");
    } else {
      scrollToTop();
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between h-[140px] px-[31px]
          transition-all duration-500 ease-in-out
          ${animateNavbar ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"}
          ${scrolled ? "bg-[rgba(0,0,0,0.85)] backdrop-blur-md shadow-md" : "bg-black"}
        `}
      >
        {/* Logo */}
        <div
          className="flex items-center cursor-pointer"
          onClick={handleLogoClick}
        >
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
          <span
            onClick={() => scrollToSection("about")}
            className="hover:text-[#FFC808] cursor-pointer transition-colors duration-200"
          >
            About Us
          </span>
          <span
            onClick={() => scrollToSection("features")}
            className="hover:text-[#FFC808] cursor-pointer transition-colors duration-200"
          >
            Our Features
          </span>
          <span
            onClick={() => scrollToSection("services")}
            className="hover:text-[#FFC808] cursor-pointer transition-colors duration-200"
          >
            Services
          </span>
          <span
            onClick={() => scrollToSection("solutions")}
            className="hover:text-[#FFC808] cursor-pointer transition-colors duration-200"
          >
            Solutions
          </span>
        </div>

        {/* Button Contact Us - Desktop */}
        <div className="hidden lg:flex">
          <Button
            onClick={handleContactClick}
            className="w-[176px] h-[60px] px-7 py-3 rounded-[30px]
             bg-gradient-to-br from-[#EF5F22] to-[#F8931F] text-white font-poppins font-semibold text-[15px]
             transition-all duration-300 hover:brightness-110 shadow-lg"
          >
            Contact Us
          </Button>
        </div>

        {/* Hamburger Menu - Mobile/Tablet */}
        <button
          className="lg:hidden flex items-center justify-center text-white hover:text-[#FFC808] transition-all duration-300 z-50"
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
          <div
            className="absolute top-full left-0 w-full bg-black flex flex-col items-center gap-6 py-6 text-white font-poppins font-medium text-[18px] lg:hidden z-40"
          >
            <span onClick={() => scrollToSection("about")} className="hover:text-[#FFC808] cursor-pointer">
              About Us
            </span>
            <span onClick={() => scrollToSection("features")} className="hover:text-[#FFC808] cursor-pointer">
              Our Features
            </span>
            <span onClick={() => scrollToSection("services")} className="hover:text-[#FFC808] cursor-pointer">
              Services
            </span>
            <span onClick={() => scrollToSection("solutions")} className="hover:text-[#FFC808] cursor-pointer">
              Solutions
            </span>

            <Button
              onClick={handleContactClick}
              className="w-[160px] h-[50px] rounded-[30px]
              bg-gradient-to-br from-[#EF5F22] to-[#F8931F] text-white font-poppins font-semibold text-[15px]
              transition-all duration-300 hover:brightness-110 shadow-lg"
            >
              Contact Us
            </Button>
          </div>
        )}
      </nav>

      {/* Spacer biar konten gak ketutup navbar */}
      <div className="pt-[140px]"></div>

      {/* Tombol Scroll to Top */}
      <div
        className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ease-in-out
          ${showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"}
        `}
      >
        <button
          onClick={scrollToTop}
          className="bg-black border border-white p-3 rounded-full shadow-lg hover:opacity-80 transition-all duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
          </svg>
        </button>
      </div>
    </>
  );
}