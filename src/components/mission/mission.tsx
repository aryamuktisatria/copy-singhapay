'use client';

import Image from 'next/image';
import { motion, Variants, Transition } from 'framer-motion';

export default function Mission() {
  // =========================================================
  // 1. ANIMATION VARIANTS (Framer Motion)
  // =========================================================

  // Konfigurasi transisi standar yang stabil
  const transitionConfig: Transition = {
    duration: 0.8,
    // Menggunakan string standar 'easeOut' untuk stabilitas
    ease: 'easeOut',
  };

  // Varian untuk efek slide-up dan fade-in pada teks/konten
  const slideUpVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: transitionConfig,
    },
  };

  // Varian untuk stagger container
  const staggerContainer: Variants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.15,
      },
    },
  };

  // Varian untuk dekorasi (menggunakan transisi yang stabil)
  const decorVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.0,
        ease: 'easeOut',
      },
    },
  };


  // =========================================================
  // 2. STYLES (Untuk gradien teks)
  // =========================================================

  const orangeGradientStyle = {
    background: 'linear-gradient(90deg, #F85D1D 12.02%, #F6931C 70.19%)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  // =========================================================
  // 3. KOMPONEN DEKORASI REUSABLE
  // =========================================================

  // Lingkaran di kanan atas
  const TopRightCircles = () => (
    <>
      {/* Lingkaran luar */}
      <motion.div
        variants={decorVariants}
        className="absolute w-[437px] h-[437px] border-[5px] rounded-full border-orange-400/30"
        style={{
          top: '-300px',
          right: '-300px',
          transform: 'rotate(1.008deg)',
          zIndex: 1,
        }}
      />
      {/* Lingkaran dalam */}
      <motion.div
        variants={decorVariants}
        className="absolute w-[344px] h-[344px] border-[5px] rounded-full border-orange-400/30"
        style={{
          top: '-250px',
          right: '-250px',
          transform: 'rotate(1.008deg)',
          zIndex: 1,
        }}
      />
    </>
  );

  // Lingkaran di kiri bawah
  const BottomLeftCircles = () => (
    <>
      {/* Lingkaran luar */}
      <motion.div
        variants={decorVariants}
        className="absolute w-[437px] h-[437px] border-[5px] rounded-full border-orange-400/30"
        style={{
          bottom: '-300px',
          left: '-300px',
          transform: 'rotate(1.008deg)',
          zIndex: 1,
        }}
      />
      {/* Lingkaran dalam */}
      <motion.div
        variants={decorVariants}
        className="absolute w-[344px] h-[344px] border-[5px] rounded-full border-orange-400/30"
        style={{
          bottom: '-250px',
          left: '-250px',
          transform: 'rotate(1.008deg)',
          zIndex: 1,
        }}
      />
    </>
  );

  // =========================================================
  // 4. MAIN COMPONENT RENDER
  // =========================================================

  return (
    <motion.section
      id="features" // Section ID
      className="relative flex flex-col bg-white mx-auto overflow-hidden"
      style={{
        width: '100%',
        maxWidth: '1537px',
        flexShrink: 0,
        marginTop: '-60px',
        zIndex: 25,
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerContainer}
    >
      {/* ==================== BAGIAN ATAS (MISSION) ==================== */}
      <div className="relative w-full px-4 md:px-10 lg:px-44 pt-16 pb-10 flex flex-col lg:flex-row lg:justify-between lg:items-start">

        {/* Dekorasi hanya tampil di desktop/large screens ke atas */}
        <div className="hidden lg:block">
          <TopRightCircles />
        </div>

        {/* Polkadot kanan atas (Posisi disesuaikan per breakpoint) */}
        <motion.div
          variants={decorVariants}
          className="absolute w-[100px] h-[103px] lg:w-[143px] lg:h-[146px] z-20"
          style={{
            top: '50px', 
            right: '20px',
          }}
        >
          <Image
            src="/polkadot-mission.png"
            alt="Polkadot Mission"
            fill
            style={{ objectFit: 'contain' }}
            sizes="(max-width: 1024px) 100px, 143px"
          />
        </motion.div>

        {/* Teks Kiri (Mission) - Teks selalu URUTAN PERTAMA (order-1) di Mobile/Tablet dan Desktop */}
        <motion.div
          variants={slideUpVariants}
          // Di Mobile/Tablet, ini adalah order-1 (muncul duluan/di atas). Di Desktop, tetap di order-1 (posisi kiri).
          className="w-full lg:max-w-md mt-6 lg:mt-16 **order-1**"
        >
          <h2 className="font-['Poppins'] text-3xl md:text-4xl font-bold text-[#444] mb-2">
            Our <span style={orangeGradientStyle}>Mission</span>
          </h2>
          <p
            className="text-base md:text-lg text-justify font-['Poppins'] font-normal text-gray-800"
            style={{
              lineHeight: '1.8',
              letterSpacing: '0.5px',
            }}
          >
            To make digital payments accessible, secure, and efficient, enabling businesses and
            individuals to thrive in India&apos;s rapidly growing digital economy.
          </p>
        </motion.div>

        {/* Gambar Kanan (Mission Right) - Gambar selalu URUTAN KEDUA (order-2) di Mobile/Tablet dan Desktop */}
        <motion.div
          variants={slideUpVariants}
          // Di Mobile/Tablet, ini adalah order-2 (muncul setelah teks/di bawah teks). Di Desktop, ini adalah order-2 (posisi kanan).
          className="relative w-full h-[200px] md:h-[250px] lg:w-[406px] lg:h-[200px] mt-10 lg:mt-16 **order-2** flex justify-center lg:justify-end"
        >
          {/* Gambar utama */}
          <div className="relative w-full md:w-3/4 lg:w-[406px] h-full rounded-lg overflow-hidden">
            <Image
              src="/mission-right.jpg"
              alt="Mission Right"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 75vw, 406px"
            />
          </div>

          {/* Overlay hijau + logo (Posisi Absolut di atas gambar utama) */}
          <motion.div
            variants={decorVariants}
            className="absolute flex items-center justify-center bg-[url('/bg-icon-hero.png')] bg-cover bg-center 
                       w-[60px] h-[58px] md:w-[68px] md:h-[66px] z-10"
            style={{
              bottom: '5%',
              left: '5%',
            }}
          >
            <Image
              src="/logo-hero-1.jpg"
              alt="Logo Hero"
              width={60}
              height={28}
              sizes="60px"
              style={{ objectFit: 'contain' }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* ==================== BAGIAN BAWAH (VISION) - MIRRORED ==================== */}
      <div className="relative w-full px-4 md:px-10 lg:px-44 pt-10 pb-20 flex flex-col lg:flex-row lg:justify-between lg:items-end mt-10 lg:mt-0">

        {/* Dekorasi hanya tampil di desktop/large screens ke atas */}
        <div className="hidden lg:block">
          <BottomLeftCircles />
        </div>

        {/* Polkadot bawah kiri (Posisi disesuaikan per breakpoint) */}
        <motion.div
          variants={decorVariants}
          className="absolute w-[100px] h-[103px] lg:w-[143px] lg:h-[146px] z-20"
          style={{
            bottom: '20px',
            left: '20px',
          }}
        >
          <Image
            src="/polkadot-mission.png"
            alt="Polkadot Mission Bottom"
            fill
            style={{ objectFit: 'contain' }}
            sizes="(max-width: 1024px) 100px, 143px"
          />
        </motion.div>

        {/* Gambar Kiri (Mission Left) - Di Mobile/Tablet, Gambar ini URUTAN KEDUA */}
        <motion.div
          variants={slideUpVariants}
          className="relative w-full h-[200px] md:h-[250px] lg:w-[406px] lg:h-[200px] mt-10 lg:mt-0 **order-2** lg:order-1 flex justify-center lg:justify-start"
        >
          <div className="relative w-full md:w-3/4 lg:w-[406px] h-full rounded-lg overflow-hidden">
            <Image
              src="/mission-left.jpg"
              alt="Mission Left"
              fill
              style={{ borderRadius: '8px', objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 75vw, 406px"
            />
          </div>
        </motion.div>

        {/* Teks Kanan (Vision) - Di Mobile/Tablet, Teks ini URUTAN PERTAMA */}
        <motion.div
          variants={slideUpVariants}
          className="w-full lg:max-w-md mt-6 lg:mt-0 **order-1** lg:order-2"
        >
          <h2 className="font-['Poppins'] text-3xl md:text-4xl font-bold text-[#444] mb-2">
            Our <span style={orangeGradientStyle}>Vision</span>
          </h2>
          <p
            className="text-base md:text-lg text-justify font-['Poppins'] font-normal text-gray-800"
            style={{
              lineHeight: '1.8',
              letterSpacing: '0.8px',
            }}
          >
            To become India’s most trusted and innovative payment gateway, bridging businesses and consumers with world-class financial technology.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}