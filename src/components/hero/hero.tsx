"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-white w-full overflow-hidden">
      
      {/* DESKTOP VERSION (lg:flex) */}
      <div className="hidden lg:flex justify-center items-center relative" style={{ height: "660px" }}>
        
        {/* Hero Right */}
        <div
          className="relative"
          style={{
            width: "866px",
            height: "650px",
            flexShrink: 0,
            zIndex: 1,
            marginRight: "-680px",
            marginTop: "-10px",
          }}
        >
          <Image
            src="/hero-right.png"
            alt="Hero Right"
            fill
            priority
            className="object-cover"
          />

          {/* Ikon 1 */}
          <div
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
          </div>

          {/* Ikon 2 (PERBAIKAN KHUSUS INI) */}
          <div
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
          </div>

          {/* Ikon 3 */}
          <div
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
          </div>
        </div>

        {/* Hero Left (Container Gambar dan Teks) */}
        <div
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
        >
          <Image
            src="/hero-left.png"
            alt="Hero Left"
            fill
            priority
            className="object-contain"
          />

          {/* Frame teks/Badge */}
          <div
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
          </div>

          {/* Judul utama */}
          <h1
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
              lineHeight: "normal",
              width: "500px",
            }}
          >
            Fast, secure, and reliable transactions across borders
          </h1>

          {/* Deskripsi */}
          <p
            style={{
              position: "absolute",
              left: "60px",
              top: "160px", 
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
          >
            Our solutions are built to simplify global payments while ensuring your
            satisfaction at every step.
          </p>
        </div>

        {/* Garis bawah DESKTOP */}
        <div
          className="absolute bottom-0 w-full h-[27px] bg-[#E3E6EF] lg:h-[40px]" 
          style={{ zIndex: 10 }}
        ></div>
      </div>

      {/* MOBILE & TABLET VERSION (lg:hidden) - TIDAK DIUBAH */}
      <div className="lg:hidden flex flex-col">
        {/* Hero Left Section */}
        <div className="relative w-full h-[400px] md:h-[500px]">
          <Image
            src="/hero-left.png"
            alt="Hero Left"
            fill
            priority
            className="object-contain"
          />

          {/* Badge Mobile */}
          <div
            className="absolute left-[15px] md:left-[30px] top-[60px] md:top-[80px] inline-flex h-[32px] md:h-[38px] px-[18px] md:px-[24px] py-[20px] md:py-[28px] justify-center items-center gap-[8px] md:gap-[10px] rounded-[16px] md:rounded-[19px]"
            style={{
              background: "#FFF",
              boxShadow: "0 1px 9px 0 rgba(17, 17, 18, 0.12)",
            }}
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
          </div>

          {/* Judul Mobile */}
          <h1
            className="absolute left-[15px] md:left-[30px] top-[110px] md:top-[140px] text-[24px] md:text-[36px] font-bold w-[85%] md:w-[70%]"
            style={{
              color: "#000",
              fontFamily: "Poppins",
              fontStyle: "normal",
              lineHeight: "1.2",
            }}
          >
            Fast, secure, and reliable transactions across borders
          </h1>

          {/* Deskripsi Mobile */}
          <p
            className="absolute left-[15px] md:left-[30px] top-[230px] md:top-[300px] text-[12px] md:text-[14px] w-[85%] md:w-[70%]"
            style={{
              color: "#000",
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "1.4",
            }}
          >
            Our solutions are built to simplify global payments while ensuring your
            satisfaction at every step.
          </p>
        </div>

        {/* Hero Right Section */}
        <div className="relative w-full h-[350px] md:h-[450px]">
          <Image
            src="/hero-right.png"
            alt="Hero Right"
            fill
            priority
            className="object-cover"
          />

          {/* Icon Mobile 1 */}
          <div
            className="absolute top-[95px] right-[55px] md:top-[110px] md:right-[162px] w-[70px] h-[70px] md:w-[90px] md:h-[90px]"
            style={{ zIndex: 10, display: "flex", justifyContent: "center", alignItems: "center", flexShrink: 0 }}
          >
            <Image src="/bg-icon-hero.png" alt="Background Icon 1" fill className="object-cover" />
            <Image src="/logo-hero-1.jpg" alt="Icon 1" width={94} height={44} priority style={{ zIndex: 11, aspectRatio: "47/22", objectFit: "cover" }} className="w-[60px] h-auto md:w-[80px]" />
          </div>

          {/* Icon Mobile 2 */}
          <div
            className="absolute top-[185px] right-[1px] md:top-[255px] md:right-[65px] w-[80px] h-[80px] md:w-[105px] md:h-[105px]"
            style={{ zIndex: 10, display: "flex", justifyContent: "center", alignItems: "center", flexShrink: 0 }}
          >
            <Image src="/bg-icon-hero.png" alt="Background Icon 2" fill className="object-cover" />
            <div className="w-[80px] h-[80px] md:w-[105px] md:h-[105px]" style={{ zIndex: 11, backgroundImage: "url(/logo-hero-2.png)", backgroundSize: "cover", backgroundPosition: "50% 50%", backgroundRepeat: "no-repeat" }}/>
          </div>

          {/* Icon Mobile 3 */}
          <div
            className="absolute top-[260px] right-[100px] md:top-[378px] md:right-[232px] w-[65px] h-[65px] md:w-[85px] md:h-[85px]"
            style={{ zIndex: 10, display: "flex", justifyContent: "center", alignItems: "center", flexShrink: 0 }}
          >
            <Image src="/bg-icon-hero.png" alt="Background Icon 3" fill className="object-cover" />
            <Image src="/logo-hero-3.jpg" alt="Icon 3" width={84} height={45} priority style={{ zIndex: 11, aspectRatio: "28/15", objectFit: "cover" }} className="w-[55px] h-auto md:w-[75px]" />
          </div>
        </div>

        {/* Garis bawah MOBILE/TABLET */}
        <div className="w-full h-[32px] bg-[#E3E6EF]"></div>
      </div>
    </section>
  );
}