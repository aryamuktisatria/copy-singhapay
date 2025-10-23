'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

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
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);

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
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  // Touch and Mouse Events for Swipe
  const handleTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
    setIsDragging(true);
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setStartX(clientX);
    setPrevTranslate(currentTranslate);
  };

  const handleTouchMove = (e: React.TouchEvent | React.MouseEvent) => {
    if (!isDragging) return;
    
    const currentX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const diff = currentX - startX;
    setCurrentTranslate(prevTranslate + diff);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    
    setIsDragging(false);
    const movedBy = currentTranslate - prevTranslate;

    // If moved enough to trigger slide change
    if (Math.abs(movedBy) > 50) {
      if (movedBy > 0 && currentIndex > 0) {
        // Swipe right - go to previous
        setCurrentIndex(currentIndex - 1);
      } else if (movedBy < 0 && currentIndex < maxIndex) {
        // Swipe left - go to next
        setCurrentIndex(currentIndex + 1);
      }
    }
    
    // Reset translate
    setCurrentTranslate(0);
    setPrevTranslate(0);
  };

  // Auto-play (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < maxIndex) {
        setCurrentIndex(prev => prev + 1);
      } else {
        setCurrentIndex(0);
      }
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentIndex, maxIndex]);

  return (
    <section className="relative w-full max-w-[1440px] mx-auto min-h-[812px] bg-gradient-to-br from-orange-50/30 to-white overflow-hidden px-4 py-12 md:py-16 lg:py-20">
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

        {/* Testimonials Carousel - 1 Card on Mobile/Tablet, 3 on Desktop */}
        <div className="relative mb-8 md:mb-12 overflow-hidden">
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-4 md:gap-6 lg:gap-8"
              animate={{
                x: isDragging 
                  ? currentTranslate 
                  : `calc(-${currentIndex * 100}% - ${currentIndex * 16}px)`,
              }}
              transition={{
                duration: isDragging ? 0 : 0.6,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onMouseDown={handleTouchStart}
              onMouseMove={handleTouchMove}
              onMouseUp={handleTouchEnd}
              onMouseLeave={handleTouchEnd}
              style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
            >
              {testimonials.map((testimonial, idx) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="w-full lg:w-[calc(33.333%-16px)] min-w-full lg:min-w-[calc(33.333%-16px)] h-auto md:h-[278px] rounded-[10px] bg-white shadow-[1px_0_9.3px_4px_rgba(0,0,0,0.10)] p-5 md:p-6 flex flex-col flex-shrink-0"
                >
                  {/* Stars */}
                  <div className="flex gap-[7px] mb-4 md:mb-5">
                    {[...Array(testimonial.stars)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                        className="w-[14px] h-[14px] relative"
                      >
                        <Image
                          src="/star.png"
                          alt="star"
                          fill
                          className="object-cover"
                          sizes="14px"
                        />
                      </motion.div>
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="flex-1 text-black text-justify font-poppins text-[14px] md:text-[15px] font-normal leading-relaxed mb-4 md:mb-5">
                    {testimonial.text}
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center gap-5">
                    {/* Avatar with border */}
                    <div className="relative">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#EA5D28] to-[#F8931F] opacity-20 blur-sm"></div>
                      <div className="relative w-[80px] h-[55px] md:w-[106px] md:h-[71px] rounded-full overflow-hidden border-2 border-gray-200">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                          sizes="106px"
                        />
                      </div>
                    </div>

                    {/* Name and Position */}
                    <div className="flex flex-col gap-1">
                      <h4 className="font-poppins text-[14px] md:text-[15px] font-bold bg-gradient-to-r from-[#EA5D28] via-[#EA5D28] to-[#F8931F] bg-clip-text text-transparent">
                        {testimonial.name}
                      </h4>
                      <p className="font-poppins text-[12px] md:text-[13px] font-medium bg-gradient-to-r from-[#EA5D28] to-[#F8931F] bg-clip-text text-transparent">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Swipe Instruction for Mobile */}
          <div className="lg:hidden text-center mt-4">
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
            className={`flex w-[32px] h-[32px] items-center justify-center rounded-full text-white shadow-lg transition-all duration-300 ${
              currentIndex === 0
                ? 'bg-gray-300 cursor-not-allowed opacity-50'
                : 'bg-gradient-to-b from-[#FB5B24] to-[#F8931F] hover:shadow-xl'
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4"
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
                className={`h-[7px] rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? 'bg-[#EA5D28] w-[20px]'
                    : 'bg-[#D9D9D9] w-[7px]'
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
            className={`flex w-[32px] h-[32px] items-center justify-center rounded-full text-white shadow-lg transition-all duration-300 ${
              currentIndex === maxIndex
                ? 'bg-gray-300 cursor-not-allowed opacity-50'
                : 'bg-gradient-to-b from-[#FB5B24] to-[#F8931F] hover:shadow-xl'
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4"
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