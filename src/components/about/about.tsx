// src/components/about/about.tsx

"use client";

import Image from "next/image";

export default function About() {
  // Styles untuk gradien oranye teks judul
  const orangeGradientStyle = {
    background: "linear-gradient(90deg, #ED5F21 0%, #F8931F 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    color: "transparent",
  };

  // Styles untuk gradien oranye badge
  const orangeGradientBadgeStyle = {
    background: "linear-gradient(90deg, #EC6127 0%, #F8931F 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    color: "transparent",
  };

  // Konstanta posisi Left untuk blok teks dan garis (Hanya dipakai di Desktop)
  const TEXT_BLOCK_LEFT = "679px";
  const SEPARATOR_LEFT = "661px";

  // Gradient untuk Separator 1 (Desktop)
  const separatorGradient1 = "linear-gradient(180deg, #F36223 0%, #F58E1C 100%)";
  // Gradient untuk Separator 2 (Desktop)
  const separatorGradient2 = "linear-gradient(180deg, #F26423 0%, #F8931F 100%)";


  // --- KOMPONEN UNTUK DESKTOP (lg:flex) ---
  const DesktopLayout = () => (
    <div 
      className="hidden lg:block relative bg-white overflow-hidden flex-shrink-0 w-full" 
      style={{ height: "717px" }}
    >
      {/* 4. Polkadot Kedua (Posisi Kanan Atas) */}
      <div
        className="absolute overflow-hidden" 
        style={{
          top: "15px", left: "1264px", width: "182px", height: "98px",
          transform: "rotate(90deg)", flexShrink: 0, aspectRatio: "13/7",
        }}
      >
        <Image src="/polkadot.png" alt="Polkadot Decoration 2" fill priority className="object-cover" style={{ transform: 'rotate(-90deg)' }} />
      </div>
      
      {/* 5. Badge Teks / Button Style */}
      <div
        className="absolute inline-flex justify-center items-center gap-3 rounded-[21px] shadow-md"
        style={{
          top: "51px", left: "878px", height: "42px",
          padding: "34px 28px", background: "#FFF",
          boxShadow: "0 1px 9px 0 rgba(17, 17, 18, 0.12)",
        }}
      >
        <span
          className="text-center font-['Poppins'] font-semibold"
          style={{ fontSize: "18px", lineHeight: "normal", ...orangeGradientBadgeStyle }}
        >
          About Our Company
        </span>
      </div>

      {/* 6. Judul Utama */}
      <h2
        className="absolute font-['Poppins'] font-semibold text-black"
        style={{
          top: "150px", left: "670px", width: "680px", 
          fontSize: "42px", lineHeight: "1.2", 
        }}
      >
        Choose Us For Your {" "}
        <span style={orangeGradientStyle}>Payment Services And Experience</span>
        {" "}The Different Firsthand!
      </h2>
      
      {/* 7. BLOK TEKS 1 (Deskripsi 1) */}
      <div
        className="absolute"
        style={{
          top: "367px", left: TEXT_BLOCK_LEFT, width: "671px",
          color: "#000", textAlign: "justify", fontFamily: "Poppins",
          fontSize: "16px", fontWeight: 400, lineHeight: "1.5", marginTop: "-10px",
        }}
      >
        SinghaPay is a leading digital payment solutions provider, committed to simplifying financial transactions for businesses and individuals across India. With a strong focus on security, reliability, and innovation, we deliver seamless payment services that empower merchants, fintech partners, and consumers to transact with confidence.
      </div>
      
      {/* 7a. Garis Vertikal 1 (Separator) */}
      <div
        className="absolute"
        style={{
          top: "367px", left: SEPARATOR_LEFT, width: "2px",
          height: "81px", flexShrink: 0, background: separatorGradient1,
        }}
      ></div>
      
      {/* 8. BLOK TEKS 2 (Deskripsi 2) */}
      <div
        className="absolute"
        style={{
          top: "479px", left: TEXT_BLOCK_LEFT, width: "674px",
          color: "#000", textAlign: "justify", fontFamily: "Poppins",
          fontSize: "16px", fontWeight: 400, lineHeight: "1.5", marginTop: "-2px",
        }}
      >
        We prioritize ease of use and cutting-edge technology, offering tailored solutions for various sectors. Our vision is to be the most trusted and efficient bridge for global and local commerce, fostering economic growth through secure and fast payment infrastructure.
      </div>
      
      {/* 8a. Garis Vertikal 2 (Separator) */}
      <div
        className="absolute"
        style={{
          top: "479px", left: SEPARATOR_LEFT, width: "2px",
          height: "66px", flexShrink: 0, background: separatorGradient2,
        }}
      ></div>
      
      {/* 1. about.png (Gambar Utama) - z-10 di depan polkadot */}
      <div
        className="absolute overflow-hidden rounded-lg z-10"
        style={{
          top: "161px", left: "193px", width: "328px",
          height: "469px", flexShrink: 0,
        }}
      >
        <Image src="/about.png" alt="About Us Image" fill priority className="object-cover"/>
      </div>

      {/* 2. polkadot.png (Di Belakang Gambar Utama) - z-0 di belakang gambar */}
      <div
        className="absolute overflow-hidden" 
        style={{
          top: "30px", left: "386px", width: "278px",
          height: "189.451px", transform: "rotate(90deg)", flexShrink: 0,
          aspectRatio: "278.00/189.45",
        }}
      >
        <Image src="/polkadot.png" alt="Polkadot Decoration" fill priority className="object-cover" style={{ transform: 'rotate(-90deg)' }} />
      </div>

      {/* 3. ellips-oren.svg & play.png (Ikon Play) - z-20 di atas semuanya */}
      <div
        className="absolute flex justify-center items-center z-20 cursor-pointer rounded-full"
        style={{
          top: "523px", left: "491px", width: "60px", height: "60px", 
          flexShrink: 0, background: "linear-gradient(180deg, #F26024 0%, #F6931C 100%)",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", 
        }}
      >
        <Image src="/play.png" alt="Play Icon" width={24} height={24} priority style={{ zIndex: 11, filter: "brightness(0) invert(1)" }}/>
      </div>
    </div>
  );


  // --- KOMPONEN UNTUK MOBILE & TABLET (lg:hidden) ---
  const MobileTabletLayout = () => (
    <div className="lg:hidden bg-white w-full py-10 md:py-16 px-4 md:px-10">
      
      {/* Konten Teks (Order pertama) */}
      <div className="w-full mb-10 md:mb-16">
        {/* 5. Badge Teks / Button Style (Dibuat center di mobile) */}
        <div
          className="inline-flex justify-center items-center gap-2 rounded-[21px] shadow-md px-4 py-2 mb-4 md:mb-6"
          style={{
            background: "#FFF",
            boxShadow: "0 1px 9px 0 rgba(17, 17, 18, 0.12)",
          }}
        >
          <span
            className="text-center font-['Poppins'] font-semibold text-sm md:text-base"
            style={orangeGradientBadgeStyle}
          >
            About Our Company
          </span>
        </div>

        {/* 6. Judul Utama */}
        <h2
          className="font-['Poppins'] font-semibold text-black text-2xl md:text-4xl leading-snug mb-6 md:mb-8"
        >
          Choose Us For Your {" "}
          <span style={orangeGradientStyle}>Payment Services And Experience</span>
          {" "}The Different Firsthand!
        </h2>

        {/* Deskripsi Teks & Separator (Menggunakan Flexbox untuk sejajar) */}
        <div className="flex flex-col gap-6 md:gap-8">
          
          {/* 7. BLOK TEKS 1 */}
          <div className="flex">
            {/* Garis Vertikal 1 (Separator) */}
            <div
              className="mr-4 flex-shrink-0"
              style={{
                width: "2px",
                height: "81px",
                background: separatorGradient1,
              }}
            ></div>
            <p
              className="text-sm md:text-base text-justify font-['Poppins'] font-normal text-gray-800"
            >
              SinghaPay is a leading digital payment solutions provider, committed to simplifying financial transactions for businesses and individuals across India. With a strong focus on security, reliability, and innovation, we deliver seamless payment services that empower merchants, fintech partners, and consumers to transact with confidence.
            </p>
          </div>

          {/* 8. BLOK TEKS 2 */}
          <div className="flex">
            {/* Garis Vertikal 2 (Separator) */}
            <div
              className="mr-4 flex-shrink-0"
              style={{
                width: "2px",
                height: "66px",
                background: separatorGradient2,
              }}
            ></div>
            <p
              className="text-sm md:text-base text-justify font-['Poppins'] font-normal text-gray-800"
            >
              We prioritize ease of use and cutting-edge technology, offering tailored solutions for various sectors. Our vision is to be the most trusted and efficient bridge for global and local commerce, fostering economic growth through secure and fast payment infrastructure.
            </p>
          </div>
        </div>
      </div>
      
      {/* Area Gambar (Order kedua) */}
      <div className="relative w-full h-[400px] md:h-[500px] flex justify-center items-center">
        {/* Gambar Utama (relative, centered) */}
        <div className="relative w-4/5 h-full rounded-lg overflow-hidden z-10">
          <Image src="/about.png" alt="About Us Image" fill priority className="object-cover"/>
        </div>

        {/* Polkadot Di Belakang Gambar (absolut dan di belakang) */}
        <div
          className="absolute overflow-hidden z-0" 
          style={{
            top: "30px", right: "20px", width: "150px", height: "100px", 
            transform: "rotate(90deg)", aspectRatio: "13/7",
          }}
        >
          <Image src="/polkadot.png" alt="Polkadot Decoration" fill priority className="object-cover" style={{ transform: 'rotate(-90deg)' }} />
        </div>
        
        {/* Ikon Play (absolut, di atas gambar) */}
        <div
          className="absolute flex justify-center items-center z-20 cursor-pointer rounded-full"
          style={{
            bottom: "30px", left: "20%", width: "60px", height: "60px", 
            background: "linear-gradient(180deg, #F26024 0%, #F6931C 100%)",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", 
          }}
        >
          <Image src="/play.png" alt="Play Icon" width={24} height={24} priority style={{ zIndex: 11, filter: "brightness(0) invert(1)" }}/>
        </div>
      </div>

    </div>
  );

  return (
    // Container Luar
    <div 
      className="flex justify-center items-center w-full" 
      style={{ paddingBottom: "41px", backgroundColor: "#E3E6EF" }}
    >
      {/* Desktop Layout (1024px ke atas) */}
      <DesktopLayout />
      
      {/* Mobile & Tablet Layout (Di bawah 1024px) */}
      <MobileTabletLayout />
      
    </div>
  );
}