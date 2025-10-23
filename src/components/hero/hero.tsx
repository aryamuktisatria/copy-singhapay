'use client';

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="relative bg-white w-full overflow-hidden">
      
      {/* DESKTOP VERSION (lg:flex) */}
      <div className="hidden lg:flex justify-center items-center relative" style={{ height: "660px" }}>
        
        {/* Hero Right dengan gambar fix yang sudah include icons */}
        <motion.div
          className="relative"
          style={{
            width: "866px",
            height: "650px",
            flexShrink: 0,
            zIndex: 1,
            marginRight: "-680px",
            marginTop: "-10px",
          }}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src="/hero-right-fix.png"
            alt="Hero Right with integrated icons"
            fill
            priority
            className="object-cover"
          />
        </motion.div>

        {/* Hero Left (Container Gambar dan Teks) */}
        <motion.div
          className="absolute left-0 top-0"
          style={{
            width: "900px", 
            height: "700px", 
            flexShrink: 0,
            zIndex: 5,
            marginLeft: "20px", 
            marginTop: "-30px", 
            overflow: "hidden",
          }}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src="/hero-left.png"
            alt="Hero Left"
            fill
            priority
            className="object-contain"
          />

          {/* Frame teks/Badge */}
          <motion.div
            style={{
              position: "absolute",
              left: "60px",
              top: "120px", 
              display: "inline-flex",
              height: "42px",
              padding: "34px 28px",
              justifyContent: "center",
              alignItems: "center",
              gap: "12px",
              borderRadius: "21px",
              background: "#FFF",
              boxShadow: "0 1px 9px 0 rgba(17, 17, 18, 0.12)",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            <span
              style={{
                textAlign: "center",
                fontFamily: "Poppins",
                fontSize: "18px",
                fontWeight: 600,
                background: "linear-gradient(90deg, #EB6422 0%, #F8931F 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Trusted Global Payment Solutions
            </span>
          </motion.div>

          {/* Judul utama */}
          <motion.h1
            style={{
              position: "absolute",
              left: "60px",
              top: "140px", 
              marginTop: "80px", 
              color: "#000",
              fontFamily: "Poppins",
              fontSize: "50px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "1.3",
              width: "600px",
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          >
            Fast, secure, and reliable transactions across borders
          </motion.h1>

          {/* Deskripsi */}
          <motion.p
            style={{
              position: "absolute",
              left: "60px",
              top: "350px", 
              marginTop: "80px",
              transform: "translateY(185px)", 
              color: "#000",
              fontFamily: "Poppins",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "1.8",
              width: "500px",
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
          >
            Our solutions are built to simplify global payments while ensuring your
            satisfaction at every step.
          </motion.p>
        </motion.div>

        {/* Garis bawah DESKTOP */}
        <motion.div
          className="absolute bottom-0 w-full h-[27px] bg-[#E3E6EF] lg:h-[40px]" 
          style={{ zIndex: 10 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2, ease: "easeOut" }}
        ></motion.div>
      </div>

      {/* MOBILE & TABLET VERSION */}
      <div className="lg:hidden relative flex flex-col bg-gradient-to-b from-white to-gray-50">

        <div className="relative w-full px-4 md:px-8 pt-10 md:pt-16 pb-4 md:pb-8">
          
          {/* Badge - Centered and pushed up */}
          <motion.div
            className="flex justify-center mb-5 md:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <div
              className="inline-flex h-[36px] md:h-[42px] px-5 md:px-7 py-3 md:py-4 justify-center items-center gap-2 rounded-full"
              style={{
                background: "#FFF",
                boxShadow: "0 2px 12px 0 rgba(17, 17, 18, 0.15)",
              }}
            >
              <span
                className="text-[12px] md:text-[15px] font-semibold text-center whitespace-nowrap"
                style={{
                  fontFamily: "Poppins",
                  fontWeight: 600,
                  background: "linear-gradient(90deg, #EB6422 0%, #F8931F 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Trusted Global Payment Solutions
              </span>
            </div>
          </motion.div>

          {/* Title - Centered & Responsive */}
          <motion.h1
            className="text-center text-[28px] md:text-[42px] font-bold mb-3 md:mb-5 px-0 md:px-8 leading-tight"
            style={{
              color: "#000",
              fontFamily: "Poppins",
              fontStyle: "normal",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            Fast, secure, and reliable transactions across borders
          </motion.h1>

          {/* Description - Centered & Readable */}
          <motion.p
            className="text-center text-[13px] md:text-[16px] px-4 md:px-12 mb-8 md:mb-12 max-w-[600px] mx-auto"
            style={{
              color: "#444",
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "1.6",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            Our solutions are built to simplify global payments while ensuring your
            satisfaction at every step.
          </motion.p>
        </div>

        {/* Hero Right Section dengan gambar fix - Clean dan simple */}
        <motion.div 
          className="relative w-full h-[320px] md:h-[420px] mb-0"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
        >
          <Image
            src="/hero-right-fix.png"
            alt="Hero Right with integrated icons"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </motion.div>

        {/* Bottom Line with gradient */}
        <motion.div 
          className="w-full h-[32px] md:h-[38px]"
          style={{
            background: "linear-gradient(180deg, #E3E6EF 0%, #D5D9E3 100%)"
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.3, ease: "easeOut" }}
        ></motion.div>
      </div>
    </section>
  );
}