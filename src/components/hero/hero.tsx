"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex justify-center items-center bg-white w-full overflow-hidden">
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
      </div>

      {/* Hero Left (menimpa hero-right) */}
      <div
  className="absolute left-0 top-0"
  style={{
    width: "851px",
    height: "635px",
    flexShrink: 0,
    zIndex: 5,
    marginLeft: "65px",
    marginTop: "-10px", // 🔹 dinaikkan sedikit ke atas
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

        {/* Frame teks di atas hero-left */}
        <div
          style={{
            position: "absolute",
            left: "25px", 
            top: "131px",
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
            left: "25px",
            top: "131px",
            marginTop: "120px",
            color: "#000",
            fontFamily: "Poppins",
            fontSize: "50px",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "normal",
            // PERUBAHAN UTAMA: Mengurangi lebar agar teks menjadi 3 baris
            width: "500px", 
        }}
        >
        Fast, secure, and reliable transactions across borders
        </h1>

        {/* Deskripsi */}
        <p
          style={{
            position: "absolute",
            left: "25px", 
            top: "181px",
            marginTop: "120px", // sejajar jarak dasar
            transform: "translateY(145px)", // sebelumnya 120px → ditambah 25px agar lebih lega antar teks
            color: "#000",
            fontFamily: "Poppins",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
            width: "500px",
          }}
        >
          Our solutions are built to simplify global payments while ensuring
          your satisfaction at every step.
        </p>
      </div>

      {/* Garis bawah */}
      <div
        className="absolute bottom-0 w-full h-[27px] bg-[#E3E6EF]" // Mengganti width: "1440px" dengan w-full
        style={{ zIndex: 10 }}
      ></div>
    </section>
  );
}
