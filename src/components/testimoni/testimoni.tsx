'use client';

import Image from 'next/image';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { useState } from 'react';

interface Testimonial {
  id: number;
  stars: number;
  text: string;
  name: string;
  position: string;
  image: string;
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      stars: 5,
      text: '"Singhapay has streamlined our entire payment process. From fast settlements to reliable UPI integration, their gateway has been a game-changer for our operations. Highly recommended for businesses seeking stability and scale."',
      name: 'Amit Verma',
      position: 'Operations Head, TrendKart India',
      image: '/amit-verma.jpg',
    },
    {
      id: 2,
      stars: 5,
      text: '"We switched to Singhapay after facing delays with our previous provider. The onboarding was smooth, support was responsive, and payments started flowing instantly. It\'s one less thing to worry about!"',
      name: 'Vikram Singh',
      position: 'Founder, CraftNest',
      image: '/vikram-singh.jpg',
    },
    {
      id: 3,
      stars: 5,
      text: '"Singhapay\'s API documentation is clean and developer-friendly. We integrated in under a day."',
      name: 'Rohit Malhotra',
      position: 'Lead Engineer, FinEdge Solutions',
      image: '/rohit-malhotra.jpg',
    },
  ];

  const maxIndex = testimonials.length - 1;

  const handlePrev = () => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex(prev => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < maxIndex) {
      setDirection(1);
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const handleDragEnd = (e: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const swipeThreshold = 30;
    const swipeVelocityThreshold = 300;

    if (Math.abs(info.offset.x) > swipeThreshold || Math.abs(info.velocity.x) > swipeVelocityThreshold) {
      if (info.offset.x > 0) {
        // Swipe right - previous
        if (currentIndex > 0) {
          setDirection(-1);
          setCurrentIndex(prev => prev - 1);
        }
      } else {
        // Swipe left - next
        if (currentIndex < maxIndex) {
          setDirection(1);
          setCurrentIndex(prev => prev + 1);
        }
      }
    }
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95,
    }),
  };

  // Calculate desktop carousel position for 2.5 cards view
  const desktopCardWidth = 50; // 40% of container width
  const desktopGap = -38; // 2% gap
  const desktopTranslateX = currentIndex * (desktopCardWidth + desktopGap);

  return (
    <section className="relative w-full max-w-[1540px] mx-auto min-h-[812px] bg-gradient-to-br from-orange-50/30 to-white overflow-hidden py-12 md:py-16 lg:py-20">
      {/* Polkadot Background - Bottom Left */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 0.6, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="absolute bottom-[60px] left-[-60px] md:bottom-[80px] md:left-[-80px] lg:bottom-[120px] lg:left-[-113px] w-[200px] h-[200px] md:w-[260px] md:h-[265px] lg:w-[330px] lg:h-[338px] z-0 pointer-events-none opacity-40"
      >
        <Image
          src="/polkadot-mission.png"
          alt=""
          fill
          className="object-contain"
          sizes="(max-width: 768px) 200px, (max-width: 1024px) 260px, 330px"
        />
      </motion.div>

      {/* Polkadot Background - Top Right */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 0.5, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="absolute top-[120px] right-[-80px] md:top-[150px] md:right-[-100px] lg:top-[182px] lg:right-[-120px] w-[200px] h-[200px] md:w-[260px] md:h-[265px] lg:w-[330px] lg:h-[338px] z-0 pointer-events-none opacity-40"
      >
        <Image
          src="/polkadot-mission.png"
          alt=""
          fill
          className="object-contain"
          sizes="(max-width: 768px) 200px, (max-width: 1024px) 260px, 330px"
        />
      </motion.div>

      <div className="relative z-10 max-w-[1300px] mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8 md:mb-12 lg:mb-16"
        >
          {/* Badge */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex h-[42px] px-7 py-2 justify-center items-center gap-3 rounded-[21px] bg-white shadow-[0_1px_9px_0_rgba(17,17,18,0.12)] mb-6 md:mb-8 lg:mb-10"
          >
            <span className="text-center font-poppins text-[16px] md:text-[18px] font-semibold bg-gradient-to-r from-[#E65E2A] to-[#F6931C] bg-clip-text text-transparent">
              Testimonials
            </span>
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full max-w-[569px] text-black font-poppins text-[28px] md:text-[32px] lg:text-[36px] font-semibold leading-tight mb-4 md:mb-5"
          >
            Here&apos;s What Our Customer Have Said
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-black font-poppins text-[16px] md:text-[18px] font-normal"
          >
            Let the results speak for themselves.
          </motion.p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative mb-8 md:mb-12">
          {/* Mobile & Tablet: Single Card with Swipe */}
          <div className="lg:hidden">
            <div className="relative h-[420px] md:h-[380px] overflow-hidden px-2">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: 'spring', stiffness: 300, damping: 30 },
                    opacity: { duration: 0.3 },
                    scale: { duration: 0.3 },
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.3}
                  dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                  onDragEnd={handleDragEnd}
                  className="absolute inset-x-[-100px] h-full cursor-grab active:cursor-grabbing px-[100px]"
                >
                  <TestimonialCard testimonial={testimonials[currentIndex]} />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Swipe Instruction */}
            <div className="text-center mt-4">
              <p className="text-gray-500 font-poppins text-sm flex items-center justify-center gap-2">
                <span>Swipe to navigate</span>
                <motion.span
                  animate={{ x: [0, 10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </p>
            </div>
          </div>

          {/* Desktop: 2.5 Cards Layout */}
          <div className="hidden lg:block">
            <div className="relative overflow-hidden px-8">
              <motion.div
                className="flex gap-8"
                animate={{
                  x: `-${desktopTranslateX}%`,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 30,
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.15}
                dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                onDragEnd={handleDragEnd}
                style={{ cursor: 'grab' }}
                whileTap={{ cursor: 'grabbing' }}
              >
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="w-[40%] flex-shrink-0" // 40% width for 2.5 cards view
                  >
                    <TestimonialCard testimonial={testimonial} />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-4 md:gap-6"
        >
          {/* Previous Button */}
          <motion.button
            whileHover={currentIndex > 0 ? { scale: 1.1 } : {}}
            whileTap={currentIndex > 0 ? { scale: 0.95 } : {}}
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="flex w-[32px] h-[32px] p-[4px_3px] items-center justify-center gap-[10px] flex-shrink-0 rounded-[16px] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            style={{
              background: currentIndex === 0 
                ? 'linear-gradient(180deg, #D1D5DB 0%, #9CA3AF 100%)'
                : 'linear-gradient(180deg, #FB5B24 0%, #F8931F 100%)'
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-4 h-4 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </motion.button>

          {/* Dots Indicator */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleDotClick(index)}
                className={`h-[8px] md:h-[10px] rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? 'bg-gradient-to-r from-[#EA5D28] to-[#F8931F] w-[24px] md:w-[32px]'
                    : 'bg-[#D9D9D9] w-[8px] md:w-[10px]'
                }`}
              />
            ))}
          </div>

          {/* Next Button */}
          <motion.button
            whileHover={currentIndex < maxIndex ? { scale: 1.1 } : {}}
            whileTap={currentIndex < maxIndex ? { scale: 0.95 } : {}}
            onClick={handleNext}
            disabled={currentIndex === maxIndex}
            className="flex w-[32px] h-[32px] p-[4px_3px] items-center justify-center gap-[10px] flex-shrink-0 rounded-[16px] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            style={{
              background: currentIndex === maxIndex
                ? 'linear-gradient(180deg, #D1D5DB 0%, #9CA3AF 100%)'
                : 'linear-gradient(180deg, #FB5B24 0%, #F8931F 100%)'
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-4 h-4 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

// Testimonial Card Component
function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: '2px 2px 20px 8px rgba(0,0,0,0.15)' }}
      transition={{ duration: 0.3 }}
      className="w-full h-full min-h-[400px] md:min-h-[360px] lg:min-h-[340px] rounded-[12px] md:rounded-[16px] bg-white shadow-[1px_0_9.3px_4px_rgba(0,0,0,0.10)] p-6 md:p-7 lg:p-8 flex flex-col"
    >
      {/* Stars */}
      <div className="flex gap-[7px] mb-4 md:mb-5">
        {[...Array(testimonial.stars)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ 
              duration: 0.4, 
              delay: i * 0.1,
              type: 'spring',
              stiffness: 200
            }}
            className="w-[16px] h-[16px] md:w-[18px] md:h-[18px] relative flex-shrink-0"
          >
            <Image
              src="/star.png"
              alt="star"
              fill
              className="object-cover"
              sizes="18px"
            />
          </motion.div>
        ))}
      </div>

      {/* Testimonial Text */}
      <p className="flex-1 text-black text-justify font-poppins text-[14px] md:text-[15px] lg:text-[15.5px] font-normal leading-relaxed mb-5 md:mb-6 overflow-auto">
        {testimonial.text}
      </p>

      {/* Author Info */}
      <div className="flex items-center gap-4 md:gap-5 mt-auto">
        {/* Avatar with gradient border effect */}
        <div className="relative flex-shrink-0">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#EA5D28] to-[#F8931F] opacity-30 blur-md"></div>
          <div className="relative w-[70px] h-[70px] md:w-[75px] md:h-[75px] lg:w-[80px] lg:h-[80px] rounded-full overflow-hidden border-3 border-white shadow-lg">
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              fill
              className="object-cover"
              sizes="80px"
            />
          </div>
        </div>

        {/* Name and Position */}
        <div className="flex flex-col gap-1.5 min-w-0">
          <h4 className="font-poppins text-[15px] md:text-[16px] lg:text-[16.5px] font-bold bg-gradient-to-r from-[#EA5D28] via-[#EA5D28] to-[#F8931F] bg-clip-text text-transparent">
            {testimonial.name}
          </h4>
          <p className="font-poppins text-[12px] md:text-[13px] lg:text-[13.5px] font-medium text-gray-600 leading-snug">
            {testimonial.position}
          </p>
        </div>
      </div>
    </motion.div>
  );
}