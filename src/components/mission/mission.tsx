'use client';

import Image from 'next/image';
import { motion, Variants, Transition } from 'framer-motion';

export default function Mission() {
  // =========================================================
  // ANIMATION VARIANTS
  // =========================================================

  const transitionConfig: Transition = {
    duration: 0.8,
    ease: 'easeOut',
  };

  const slideUpVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: transitionConfig,
    },
  };

  const staggerContainer: Variants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.15,
      },
    },
  };

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
  // STYLES
  // =========================================================

  // Gaya gradien untuk teks "Mission" dan "Vision"
  const orangeGradientStyle = {
    background: 'linear-gradient(90deg, #F85D1D 12.02%, #F6931C 70.19%)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  // =========================================================
  // DECORATION COMPONENTS (Hanya desktop)
  // =========================================================

  // Lingkaran dekorasi kanan atas
  const TopRightCircles = () => (
    <>
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

  // Lingkaran dekorasi kiri bawah
  const BottomLeftCircles = () => (
    <>
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
  // MAIN COMPONENT RENDER
  // =========================================================

  return (
    <motion.section
      id="features"
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
      {/* ==================== MISSION SECTION (Teks Kiri, Gambar Kanan) ==================== */}
      <div className="relative w-full px-6 md:px-10 lg:px-44 pt-16 pb-10 flex flex-col lg:flex-row lg:justify-between lg:items-start">
        
        {/* Dekorasi lingkaran besar (Hanya desktop) */}
        <div className="hidden lg:block">
          <TopRightCircles />
        </div>

        {/* Dekorasi Polkadot kanan atas (Responsif) */}
        <motion.div
          variants={decorVariants}
          className="absolute z-0 
                     w-[80px] h-[82px] top-[210px] right-[5px]
                     md:top-41 md:right-40
                     lg:top-8 lg:right-34" 
        >
          <Image
            src="/polkadot-mission.png"
            alt="Polkadot decoration"
            fill
            style={{ objectFit: 'contain' }}
            sizes="(max-width: 768px) 80px, (max-width: 1024px) 110px, 143px"
          />
        </motion.div>

        {/* Konten Utama Mission */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start w-full gap-8 lg:gap-12">
          
          {/* Text - Mission (Order 1: Kiri di desktop, Atas di mobile) */}
          <motion.div
            variants={slideUpVariants}
            className="w-full lg:max-w-md order-1 lg:-ml-18 z-10" 
          >
            <h2 className="font-['Poppins'] text-2xl md:text-3xl lg:text-4xl font-bold text-[#444] mb-3 md:mb-4">
              Our <span style={orangeGradientStyle}>Mission</span>
            </h2>
            <p
              className="text-sm md:text-base lg:text-lg text-justify font-['Poppins'] font-normal text-gray-800"
              style={{
                lineHeight: '1.8',
                letterSpacing: '0.5px',
              }}
            >
              To make digital payments accessible, secure, and efficient, enabling businesses and
              individuals to thrive in India&apos;s rapidly growing digital economy.
            </p>
          </motion.div>

          {/* Image - Mission (Order 2: Kanan di desktop, Bawah di mobile) */}
          <motion.div
            variants={slideUpVariants}
            className="relative w-full lg:w-[406px] order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[320px] h-[180px] md:max-w-[380px] md:h-[220px] lg:w-[406px] lg:h-[250px] rounded-lg overflow-hidden">
              <Image
                src="/mission-right.jpg"
                alt="Mission illustration"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 320px, (max-width: 1024px) 380px, 406px"
              />
            </div>

            <div
              className="absolute flex items-center justify-center 
                         bg-[url('/bg-icon-hero.png')] bg-cover bg-center 
                         w-[58px] h-[52px] md:w-[65px] md:h-[63px] lg:w-[68px] lg:h-[66px] 
                         z-10 
                         top-[30%] right-[53%] md:top-[31%] md:right-[52%] lg:top-[30%] lg:right-[50%]"
            >
              <Image
                src="/logo-hero-1.jpg"
                alt="Logo"
                width={50} 
                height={28}
                sizes="(max-width: 768px) 40px, (max-width: 1024px) 50px, 60px"
                style={{ objectFit: 'contain' }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* ==================== VISION SECTION (Gambar Kiri, Teks Kanan) ==================== */}
      <div className="relative w-full px-6 md:px-10 lg:px-44 pt-10 pb-20 flex flex-col lg:flex-row lg:justify-between lg:items-start mt-10 lg:mt-16">
        
        {/* Dekorasi lingkaran besar (Hanya desktop) */}
        <div className="hidden lg:block">
          <BottomLeftCircles />
        </div>

        {/* Dekorasi Polkadot kiri bawah (Responsif, z-0 agar di belakang) */}
        <motion.div
          variants={decorVariants}
          className="absolute z-0 
                     w-[80px] h-[82px] bottom-[45px] left-[2px]
                     md:w-[110px] md:h-[113px] md:bottom-[30px] md:left-[140px]
                     lg:w-[143px] lg:h-[146px] lg:bottom-[20px] lg:left-[100px]"
          style={{
            pointerEvents: 'none', 
          }}
        >
          <Image
            src="/polkadot-mission.png"
            alt="Polkadot decoration"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 80px, (max-width: 1024px) 110px, 143px"
          />
        </motion.div>

        {/* Konten Utama Vision */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start w-full gap-8 lg:gap-12">
          
          {/* Image - Vision (Order 2/1: Kiri di desktop, Bawah di mobile) */}
          <motion.div
            variants={slideUpVariants}
            className="relative w-full lg:w-[406px] order-2 lg:order-1 flex justify-center lg:justify-start"
          >
            <div className="relative w-full max-w-[320px] h-[180px] md:max-w-[380px] md:h-[220px] lg:w-[406px] lg:h-[250px] rounded-lg overflow-hidden">
              <Image
                src="/mission-left.jpg"
                alt="Vision illustration"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 320px, (max-width: 1024px) 380px, 406px"
              />
            </div>
          </motion.div>

          {/* Text - Vision (Kanan di desktop, Atas di mobile) */}
          <motion.div
            variants={slideUpVariants}
            className="w-full lg:max-w-md order-1 lg:order-2 z-10"
          >
            <h2 className="font-['Poppins'] text-2xl md:text-3xl lg:text-4xl font-bold text-[#444] mb-3 md:mb-4">
              Our <span style={orangeGradientStyle}>Vision</span>
            </h2>
            <p
              className="text-sm md:text-base lg:text-lg text-justify font-['Poppins'] font-normal text-gray-800"
              style={{
                lineHeight: '1.8',
                letterSpacing: '0.8px',
              }}
            >
              To become India&apos;s most trusted and innovative payment gateway, bridging businesses and consumers with world-class financial technology.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}