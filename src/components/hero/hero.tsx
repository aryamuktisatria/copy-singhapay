'use client';

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id = "hero" className="relative bg-white w-full overflow-hidden">
      
      {/* DESKTOP VERSION (lg:flex) */}
      <div className="hidden lg:flex justify-center items-center relative" style={{ height: "660px" }}>
        
        {/* Hero Right */}
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
            src="/hero-right.png"
            alt="Hero Right"
            fill
            priority
            className="object-cover"
          />

          {/* Ikon 1 */}
          <motion.div
            style={{
              position: "absolute",
              top: "195px", 
              right: "180px",
              zIndex: 10,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "105px",
              height: "104px",
              flexShrink: 0,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          >
            <Image
              src="/bg-icon-hero.png"
              alt="Background Icon 1"
              fill
              className="object-cover"
            />
            <Image
              src="/logo-hero-1.jpg"
              alt="Icon 1"
              width={94}
              height={44}
              priority
              style={{
                zIndex: 11,
                aspectRatio: "47/22",
                objectFit: "cover",
              }}
            />
          </motion.div>

          {/* Ikon 2 (PERBAIKAN KHUSUS INI) */}
          <motion.div
            style={{
              position: "absolute",
              top: "357px", 
              right: "68px",
              zIndex: 10,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "123px", // Ukuran container untuk latar belakang lingkaran
              height: "123px", // Ukuran container untuk latar belakang lingkaran
              flexShrink: 0,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
          >
            {/* Latar Belakang Lingkaran */}
            <Image
              src="/bg-icon-hero.png"
              alt="Background Icon 2"
              fill
              className="object-cover" // Memastikan bg-icon-hero.png mengisi container 123x123px
            />
            {/* Logo hero-2.png - Ukuran disesuaikan agar ada "border" dari latar belakang */}
            <Image
              src="/logo-hero-2.png" 
              alt="Icon 2"
              width={124} // Mengurangi ukuran agar ada jarak dengan border lingkaran
              height={124} // Sesuaikan dengan width agar proporsional
              priority
              style={{
                zIndex: 11, // Pastikan ikon di atas latar belakang
                objectFit: "contain", // Pastikan gambar tidak terpotong
              }}
            />
          </motion.div>

          {/* Ikon 3 */}
          <motion.div
            style={{
              position: "absolute",
              top: "498px", 
              right: "260px",
              zIndex: 10,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "97px",
              height: "96px",
              flexShrink: 0,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
          >
            <Image
              src="/bg-icon-hero.png"
              alt="Background Icon 3"
              fill
              className="object-cover"
            />
            <Image
              src="/logo-hero-3.jpg"
              alt="Icon 3"
              width={84}
              height={45}
              priority
              style={{
                zIndex: 11,
                aspectRatio: "28/15",
                objectFit: "cover",
              }}
            />
          </motion.div>
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

      {/* MOBILE & TABLET VERSION (lg:hidden) - TIDAK DIUBAH */}
      <div className="lg:hidden flex flex-col">
        {/* Hero Left Section */}
        <motion.div 
          className="relative w-full h-[400px] md:h-[500px]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Image
            src="/hero-left.png"
            alt="Hero Left"
            fill
            priority
            className="object-contain"
          />

          {/* Badge Mobile */}
          <motion.div
            className="absolute left-[15px] md:left-[30px] top-[60px] md:top-[80px] inline-flex h-[32px] md:h-[38px] px-[18px] md:px-[24px] py-[20px] md:py-[28px] justify-center items-center gap-[8px] md:gap-[10px] rounded-[16px] md:rounded-[19px]"
            style={{
              background: "#FFF",
              boxShadow: "0 1px 9px 0 rgba(17, 17, 18, 0.12)",
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          >
            <span
              className="text-[11px] md:text-[14px] font-semibold text-center"
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
          </motion.div>

          {/* Judul Mobile */}
          <motion.h1
            className="absolute left-[15px] md:left-[30px] top-[110px] md:top-[140px] text-[24px] md:text-[36px] font-bold w-[85%] md:w-[70%]"
            style={{
              color: "#000",
              fontFamily: "Poppins",
              fontStyle: "normal",
              lineHeight: "1.2",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            Fast, secure, and reliable transactions across borders
          </motion.h1>

          {/* Deskripsi Mobile */}
          <motion.p
            className="absolute left-[15px] md:left-[30px] top-[230px] md:top-[300px] text-[12px] md:text-[14px] w-[85%] md:w-[70%]"
            style={{
              color: "#000",
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "1.4",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            Our solutions are built to simplify global payments while ensuring your
            satisfaction at every step.
          </motion.p>
        </motion.div>

        {/* Hero Right Section */}
        <motion.div 
          className="relative w-full h-[350px] md:h-[450px]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          <Image
            src="/hero-right.png"
            alt="Hero Right"
            fill
            priority
            className="object-cover"
          />

          {/* Icon Mobile 1 */}
          <motion.div
            className="absolute top-[95px] right-[55px] md:top-[110px] md:right-[162px] w-[70px] h-[70px] md:w-[90px] md:h-[90px]"
            style={{ zIndex: 10, display: "flex", justifyContent: "center", alignItems: "center", flexShrink: 0 }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
          >
            <Image src="/bg-icon-hero.png" alt="Background Icon 1" fill className="object-cover" />
            <Image src="/logo-hero-1.jpg" alt="Icon 1" width={94} height={44} priority style={{ zIndex: 11, aspectRatio: "47/22", objectFit: "cover" }} className="w-[60px] h-auto md:w-[80px]" />
          </motion.div>

          {/* Icon Mobile 2 */}
          <motion.div
            className="absolute top-[185px] right-[1px] md:top-[255px] md:right-[65px] w-[80px] h-[80px] md:w-[105px] md:h-[105px]"
            style={{ zIndex: 10, display: "flex", justifyContent: "center", alignItems: "center", flexShrink: 0 }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
          >
            <Image src="/bg-icon-hero.png" alt="Background Icon 2" fill className="object-cover" />
            <div className="w-[80px] h-[80px] md:w-[105px] md:h-[105px]" style={{ zIndex: 11, backgroundImage: "url(/logo-hero-2.png)", backgroundSize: "cover", backgroundPosition: "50% 50%", backgroundRepeat: "no-repeat" }}/>
          </motion.div>

          {/* Icon Mobile 3 */}
          <motion.div
            className="absolute top-[260px] right-[100px] md:top-[378px] md:right-[232px] w-[65px] h-[65px] md:w-[85px] md:h-[85px]"
            style={{ zIndex: 10, display: "flex", justifyContent: "center", alignItems: "center", flexShrink: 0 }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.9, ease: "easeOut" }}
          >
            <Image src="/bg-icon-hero.png" alt="Background Icon 3" fill className="object-cover" />
            <Image src="/logo-hero-3.jpg" alt="Icon 3" width={84} height={45} priority style={{ zIndex: 11, aspectRatio: "28/15", objectFit: "cover" }} className="w-[55px] h-auto md:w-[75px]" />
          </motion.div>
        </motion.div>

        {/* Garis bawah MOBILE/TABLET */}
        <motion.div 
          className="w-full h-[32px] bg-[#E3E6EF]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.1, ease: "easeOut" }}
        ></motion.div>
      </div>
    </section>
  );
}