'use client';

import Image from 'next/image';
import { motion, Variants, Transition } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as Transition['ease'],
      },
    },
  };

  return (
    <footer className="w-full bg-black">
      <div className="max-w-[1440px] mx-auto">
        <motion.div
          className="relative w-full px-4 sm:px-6 md:px-10 lg:px-16 py-10 md:py-12 lg:py-16"
          initial="hidden"
          animate={isLoaded ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {/* Main Content Container */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12 w-full">
            
            {/* LEFT SECTION - Logo + Contact Info */}
            <motion.div
              className="w-full lg:w-auto lg:max-w-[480px] flex-shrink-0"
              variants={itemVariants}
            >
              {/* Logo */}
              <motion.div
                className="mb-6 md:mb-7 lg:mb-8"
                variants={itemVariants}
              >
                <Image
                  src="/logo-singhapay.png"
                  alt="SinghaPay"
                  width={360}
                  height={95}
                  className="w-[240px] h-[63px] md:w-[300px] md:h-[79px] lg:w-[360px] lg:h-[95px] object-contain"
                  priority
                />
              </motion.div>

              {/* Contact Information */}
              <div className="space-y-4 md:space-y-5 lg:space-y-6 w-full">
                
                {/* Office Address */}
                <motion.div
                  className="flex items-start gap-3 md:gap-4"
                  variants={itemVariants}
                >
                  {/* Location Icon */}
                  <div className="w-5 h-5 md:w-6 md:h-6 lg:w-[28px] lg:h-[28px] flex-shrink-0 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-full h-full text-white"
                    >
                      <path
                        fillRule="evenodd"
                        d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>

                  {/* Address Text */}
                  <p className="text-white font-poppins text-sm md:text-[15px] lg:text-base font-medium leading-relaxed flex-1">
                    Goldcrest executive, Jumeirah lake tower, Dubai, United Arab Emirates
                  </p>
                </motion.div>

                {/* Telegram */}
                <motion.div
                  className="flex items-start gap-3 md:gap-4"
                  variants={itemVariants}
                >
                  {/* Telegram Icon */}
                  <div className="w-5 h-5 md:w-6 md:h-6 lg:w-[28px] lg:h-[28px] flex-shrink-0 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-full h-full text-white"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.54 3.67-.52.36-.99.53-1.42.52-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.24.37-.49 1.02-.75 3.99-1.73 6.65-2.87 7.98-3.43 3.8-1.58 4.59-1.85 5.1-1.86.11 0 .37.03.54.17.14.12.18.28.2.44.01.11.03.35.01.54z"/>
                    </svg>
                  </div>

                  {/* Telegram Text */}
                  <p className="text-white font-poppins text-sm md:text-[15px] lg:text-base font-medium leading-relaxed flex-1">
                    @singhapay
                  </p>
                </motion.div>

                {/* Email */}
                <motion.div
                  className="flex items-start gap-3 md:gap-4"
                  variants={itemVariants}
                >
                  {/* Email Icon */}
                  <div className="w-5 h-5 md:w-6 md:h-6 lg:w-[28px] lg:h-[28px] flex-shrink-0 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-full h-full text-white"
                    >
                      <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                      <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                    </svg>
                  </div>

                  {/* Email Text */}
                  <p className="text-white font-poppins text-sm md:text-[15px] lg:text-base font-medium leading-relaxed flex-1">
                     business@singhapay.com
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* RIGHT SECTION - Our Location & Map */}
            <motion.div
              className="w-full lg:w-auto flex flex-col items-center lg:items-start"
              variants={itemVariants}
            >
              {/* Title */}
              <h3 className="text-white font-poppins text-xl md:text-2xl lg:text-2xl font-semibold mb-2 md:mb-3">
                Our Location
              </h3>
              <div className="w-20 h-[3px] bg-gradient-to-r from-orange-500 to-orange-400 rounded mb-4 md:mb-5 lg:mb-6"></div>

              {/* Map */}
              <div className="w-full max-w-[500px] h-[240px] md:h-[280px] lg:w-[420px] lg:h-[340px] rounded-xl overflow-hidden shadow-2xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.9756056057563!2d55.13647427539695!3d25.068815936888665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6cad1591bc2d%3A0xfc8c05a1d3fea1f!2sGoldcrest%20Executive%20-%20Al%20Thanyah%20Fifth%20-%20Dubai%20-%20Uni%20Emirat%20Arab!5e0!3m2!1sid!2sid!4v1761122504881!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SinghaPay Location - Dubai"
                />
              </div>
            </motion.div>
          </div>

          {/* BOTTOM SECTION  */}
          <motion.div
            className="mt-10 md:mt-12 lg:mt-14 pt-6 md:pt-8 border-t border-gray-700"
            variants={itemVariants}
          >
            {/* Copyright - Moved up to be the first element for better spacing */}
            <div className="text-center">
              <p className="text-gray-400 font-poppins text-xs md:text-sm font-normal">
                © 2025 SinghaPay. All rights reserved.
              </p>
            </div>
            
            {/* Business & Technical Contact (Commented Out) */}
            {/* <div className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-6 lg:gap-8">
              <p className="text-white font-poppins text-xs md:text-sm lg:text-[15px] font-medium leading-normal text-center">
                Business Inquiries: <span className="text-orange-400">business@singhapay.com</span>
              </p>
              <div className="hidden md:block w-[2px] h-4 bg-gray-600"></div>
              <p className="text-white font-poppins text-xs md:text-sm lg:text-[15px] font-medium leading-normal text-center">
                Technical Support: <span className="text-orange-400">techsupport@singhapay.com</span>
              </p>
            </div> */}
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}