"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Commitment() {
  const [isVisible, setIsVisible] = useState(false);

  // Efek animasi ketika komponen muncul
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("commitment-section");
      if (!section) return;
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        setIsVisible(true);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="commitment-section"
      className="relative flex items-center justify-center w-full min-h-[549px] bg-[rgba(239,243,247,0.53)] overflow-hidden px-4 sm:px-6 lg:px-8 py-12 lg:py-0"
    >
      {/* Container utama untuk desktop */}
      <div className="w-full max-w-[1440px] mx-auto relative h-full flex flex-col lg:flex-row items-center justify-between">
        
        {/* Background kiri - Desktop Only */}
        <div className="hidden lg:block absolute"
          style={{
            top: "350px", // lebih kebawah
            left: "-180px", // lebih ke kiri
            width: "273.244px",
            height: "253.842px",
            transform: "rotate(-151.712deg)",
            flexShrink: 0,
          }}
        >
          <Image
            src="/commitment-left.png"
            alt="Commitment Left"
            fill
            style={{
              objectFit: "cover",
            }}
            loading="lazy"
          />
        </div>

        {/* Background kanan atas - Desktop Only */}
        <div className="hidden lg:block absolute"
          style={{
            top: "-240px",
            left: "1200px", // lebih ke kanan
            width: "317.285px",
            height: "294.756px",
            flexShrink: 0,
          }}
        >
          <Image
            src="/commitment-right.png"
            alt="Commitment Right"
            fill
            style={{
              objectFit: "cover",
            }}
            loading="lazy"
          />
        </div>

        {/* Background untuk Tablet & Mobile */}
        <div className="lg:hidden absolute top-2 right-2 w-24 h-24 md:w-32 md:h-32 opacity-40">
          <Image
            src="/commitment-right.png"
            alt="Commitment Right Mobile"
            fill
            style={{
              objectFit: "contain",
            }}
            loading="lazy"
          />
        </div>

        <div className="lg:hidden absolute bottom-2 left-2 w-20 h-20 md:w-28 md:h-28 opacity-40 rotate-45">
          <Image
            src="/commitment-left.png"
            alt="Commitment Left Mobile"
            fill
            style={{
              objectFit: "contain",
            }}
            loading="lazy"
          />
        </div>

        {/* Text Content - Left Side */}
        <div className={`w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center z-20 mb-8 lg:mb-0 transition-all duration-700 delay-200 ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
        }`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[36px] font-poppins font-bold text-black mb-4 lg:mb-6 text-center lg:text-left">
            Our Commitment
          </h2>
          <div className="w-full max-w-[450px] lg:max-w-[674px]">
            <p className="text-black text-justify font-poppins text-sm sm:text-base md:text-[16px] font-normal leading-relaxed sm:leading-loose">
              At SinghaPay, we go beyond just processing payments. We are dedicated
              to helping businesses grow by providing secure, reliable, and
              innovative financial solutions that meet today&apos;s digital-first
              economy.
            </p>
          </div>
        </div>

        {/* Image Content - Right Side */}
        <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-end items-center z-20">
          
          {/* Gradient oranye di atas gambar - Desktop Only */}
          <div className={`hidden lg:block absolute transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
            style={{
              top: "4px",
              left: "10px",
              width: "333px",
              height: "333px",
              borderRadius: "11px",
              background: "linear-gradient(180deg, rgba(242,96,36,0.29) 0%, rgba(248,147,31,0.29) 100%)",
              zIndex: 3,
            }}
          ></div>

          {/* Gambar utama */}
          <div className={`relative w-full max-w-[90%] sm:max-w-[577px] h-[250px] sm:h-[300px] md:h-[350px] lg:h-[385px] transition-all duration-700 delay-100 ${
                isVisible
               ? "opacity-100 translate-y-0 scale-100 lg:-translate-x-[110px] lg:translate-y-[20px]"
                : "opacity-0 translate-y-10 scale-95"
            }`}
            style={{
              borderRadius: "112px 13px 13px 13px",
              overflow: "hidden",
              zIndex: 2,
            }}
          >
            <Image
              src="/commitment.jpg"
              alt="Commitment Image"
              fill
              style={{
                objectFit: "cover",
              }}
              className="transition-transform duration-500 hover:scale-105"
              loading="lazy"
            />
            
            {/* Gradient overlay untuk mobile & tablet */}
            <div className="lg:hidden absolute inset-0 bg-gradient-to-br from-orange-400/20 to-yellow-500/20 mix-blend-overlay"></div>
          </div>
        </div>
      </div>

      {/* Additional responsive styling */}
      <style jsx>{`
        @media (max-width: 1024px) and (min-width: 769px) {
          /* Tablet specific styles */
          section {
            min-height: 500px;
          }
          
          .max-w-\[90\%\] {
            max-width: 500px !important;
          }
        }
        
        @media (max-width: 768px) {
          /* Mobile specific styles */
          section {
            min-height: 450px;
          }
          
          .max-w-\[90\%\] {
            max-width: 400px !important;
          }
        }
        
        @media (max-width: 480px) {
          section {
            min-height: 400px;
          }
          
          .max-w-\[90\%\] {
            max-width: 100% !important;
          }
        }
        
        /* Smooth animations */
        .transition-all {
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </section>
  );
}