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
          className="relative w-full min-h-[433px] px-4 sm:px-6 lg:px-8 py-8 lg:py-12"
          initial="hidden"
          animate={isLoaded ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {/* Main Content Container */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center w-full">
            {/* Left Section - Contact Info */}
            <motion.div
  className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-between lg:pl-8 lg:pt-[34px]"
  variants={itemVariants}
>
  {/* LEFT SECTION - Logo + Contact */}
<motion.div
  className="w-full lg:w-auto mb-8 lg:mb-0 -mt-[14px]"
  variants={itemVariants}
>
  {/* Logo */}
  <motion.div
    className="mb-6 lg:mb-[25px] pl-[2px]" // sedikit padding kiri biar sejajar visual
    variants={itemVariants}
  >
    <Image
      src="/logo-singhapay.png"
      alt="SinghaPay"
      width={360}
      height={95}
      className="w-[280px] h-[74px] sm:w-[320px] sm:h-[84px] lg:w-[360px] lg:h-[95px] object-contain"
      priority
    />
  </motion.div>

  {/* Contact Information */}
  <div className="space-y-4 lg:space-y-7 w-full">
    {/* Office Address */}
    <motion.div
      className="flex items-start gap-3 lg:gap-4 pl-[2px]" // sejajarkan dengan logo
      variants={itemVariants}
    >
      {/* Location Icon */}
      <div className="w-6 h-6 lg:w-[26px] lg:h-[26px] flex-shrink-0 mt-1">
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
      <p className="text-white font-poppins text-sm lg:text-base font-medium leading-normal flex-1">
        Office Address: xxx
      </p>
    </motion.div>

    {/* Telegram */}
    <motion.div
      className="flex items-start gap-3 lg:gap-4 pl-[2px]"
      variants={itemVariants}
    >
      {/* Telegram Icon */}
      <div className="w-6 h-6 lg:w-[26px] lg:h-[26px] flex-shrink-0 mt-1">
        <Image
          src="/telegram.svg"
          alt="Telegram"
          width={26}
          height={26}
          className="w-full h-full object-contain brightness-0 invert"
        />
      </div>

      {/* Telegram Text */}
      <p className="text-white font-poppins text-sm lg:text-base font-medium leading-normal flex-1">
        Telegram: @singhapay
      </p>
    </motion.div>

    {/* Email */}
    <motion.div
      className="flex items-start gap-3 lg:gap-4 pl-[2px]"
      variants={itemVariants}
    >
      {/* Email Icon */}
      <div className="w-6 h-6 lg:w-[26px] lg:h-[26px] flex-shrink-0 mt-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-full h-full text-white"
        >
          <path
            fillRule="evenodd"
            d="M5.478 5.559A1.5 1.5 0 0 1 6.912 4.5H9A.75.75 0 0 0 9 3H6.912a3 3 0 0 0-2.868 2.118l-2.411 7.838a3 3 0 0 0-.133.882V18a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-4.162c0-.299-.045-.596-.133-.882l-2.412-7.838A3 3 0 0 0 17.088 3H15a.75.75 0 0 0 0 1.5h2.088a1.5 1.5 0 0 1 1.434 1.059l2.213 7.191H17.89a3 3 0 0 0-2.684 1.658l-.256.513a1.5 1.5 0 0 1-1.342.829h-3.218a1.5 1.5 0 0 1-1.342-.83l-.256-.512a3 3 0 0 0-2.684-1.658H3.265l2.213-7.191Z"
            clipRule="evenodd"
          />
          <path
            fillRule="evenodd"
            d="M12 2.25a.75.75 0 0 1 .75.75v6.44l1.72-1.72a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 0 1 1.06-1.06l1.72 1.72V3a.75.75 0 0 1 .75-.75Z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      {/* Email Text */}
      <p className="text-white font-poppins text-sm lg:text-base font-medium leading-normal flex-1">
        Email: support@singhapay.com
      </p>
    </motion.div>
  </div>
</motion.div>


  {/* CENTER SECTION - Business Inquiries & Technical Support */}
  <motion.div
    className="w-full lg:w-auto text-center lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-[400px]"
    variants={itemVariants}
  >
    <div className="space-y-2">
      <p className="text-white font-poppins text-xs lg:text-[13px] font-medium leading-normal">
        Business Inquiries: business@singhapay.com
      </p>
      <p className="text-white font-poppins text-xs lg:text-[13px] font-medium leading-normal">
        Technical Support: techsupport@singhapay.com
      </p>
    </div>
  </motion.div>
</motion.div>


            {/* Right Section - Our Location & Map */}
            <motion.div
              className="w-full lg:w-auto flex flex-col items-center justify-center lg:justify-start mt-8 lg:mt-0"
              variants={itemVariants}
            >
              {/* Title */}
              <h3 className="text-white font-poppins text-lg lg:text-xl font-semibold mb-2">
                Our Location
              </h3>
              <div className="w-16 h-[3px] bg-orange-500 rounded mb-4"></div>

              {/* Map */}
              <div className="w-full max-w-[325px] h-[250px] sm:h-[300px] lg:w-[400px] lg:h-[325px] rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.9756056057563!2d55.13647427539695!3d25.068815936888665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6cad1591bc2d%3A0xfc8c05a1d3fea1f!2sGoldcrest%20Executive%20-%20Al%20Thanyah%20Fifth%20-%20Dubai%20-%20Uni%20Emirat%20Arab!5e0!3m2!1sid!2sid!4v1761122504881!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: '7px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SinghaPay - Dubai"
                />
              </div>
            </motion.div>
          </div>

          {/* Mobile Layout Adjustments */}
          <div className="lg:hidden mt-8 pt-8 border-t border-gray-700">
            <motion.div
              className="text-center space-y-2"
              variants={itemVariants}
            >
              <p className="text-white font-poppins text-xs font-medium leading-normal">
                Business Inquiries: business@singhapay.com
              </p>
              <p className="text-white font-poppins text-xs font-medium leading-normal">
                Technical Support: techsupport@singhapay.com
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
