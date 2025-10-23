'use client';

import Image from 'next/image';
import { motion, Variants, Transition } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showMapModal, setShowMapModal] = useState(false);

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

  const handleMapClick = () => {
    setShowMapModal(true);
  };

  const handleCloseMapModal = () => {
    setShowMapModal(false);
  };

  const openGoogleMaps = () => {
    window.open('https://maps.google.com/maps?q=Goldcrest+executive,+Jumeirah+lake+tower,+Dubai,+United+Arab+Emirates', '_blank');
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
                    <Image
                      src="/telegram.png"
                      alt="Telegram Icon"
                      width={28}
                      height={28}
                      className="w-full h-full object-contain"
                    />
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

              {/* Map Container - Tampilkan iframe di semua device */}
              <div className="w-full max-w-[500px] lg:w-[420px]">
                {/* Maps iframe untuk semua device */}
                <div className="w-full rounded-xl overflow-hidden shadow-2xl">
                 <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.975605605756!2d55.13647427539693!3d25.06881593688868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6cad1591bc2d%3A0xfc8c05a1d3fea1f!2sGoldcrest%20Executive%20-%20Al%20Thanyah%20Fifth%20-%20Dubai%20-%20Uni%20Emirat%20Arab!5e0!3m2!1sen!2sid!4v1739999999999!5m2!1sen!2sid"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-[300px] md:h-[340px] lg:h-[340px] rounded-xl shadow-2xl"
                  title="SinghaPay Office Location - Dubai"
                />
                </div>

                {/* Fallback Text untuk semua device */}
                <div className="mt-3 text-center">
                  <button
                    onClick={openGoogleMaps}
                    className="text-orange-400 font-poppins text-sm font-medium hover:text-orange-300 transition-colors underline"
                  >
                    Open in Google Maps
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* BOTTOM SECTION - Copyright */}
          <motion.div
            className="mt-10 md:mt-12 lg:mt-14 pt-6 md:pt-8 border-t border-gray-700"
            variants={itemVariants}
          >
            <div className="text-center">
              <p className="text-gray-400 font-poppins text-xs md:text-sm font-normal">
                © 2025 SinghaPay. All rights reserved.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Map Modal untuk Mobile (opsional - jika masih ingin modal) */}
      {showMapModal && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 lg:hidden">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-lg font-semibold text-gray-800">Our Location</h3>
              <button
                onClick={handleCloseMapModal}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="currentColor" 
                  className="w-6 h-6 text-gray-600"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" 
                    clipRule="evenodd" 
                  />
                </svg>
              </button>
            </div>

            {/* Modal Content - Fullscreen Map */}
            <div className="p-4">
              <div className="mb-4">
                <p className="text-gray-600 text-sm mb-2">
                  Goldcrest executive, Jumeirah lake tower, Dubai, United Arab Emirates
                </p>
              </div>
              
              {/* Full Map in Modal */}
              <div className="w-full rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.975605605756!2d55.13647427539693!3d25.06881593688868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6cad1591bc2d%3A0xfc8c05a1d3fea1f!2sGoldcrest%20Executive%20-%20Al%20Thanyah%20Fifth%20-%20Dubai%20-%20Uni%20Emirat%20Arab!5e0!3m2!1sen!2sid!4v1739999999999!5m2!1sen!2sid"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SinghaPay Office Location - Dubai"
              />
              </div>

              {/* Map Options */}
              <div className="space-y-3 mt-4">
                <button
                  onClick={openGoogleMaps}
                  className="w-full bg-orange-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors flex items-center justify-center gap-3"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="currentColor" 
                    className="w-5 h-5"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M8.161 2.58a1.875 1.875 0 011.678 0l4.993 2.498c.106.052.23.052.336 0l3.869-1.935A1.875 1.875 0 0121.75 4.82v12.485c0 .71-.401 1.36-1.037 1.677l-4.875 2.437a1.875 1.875 0 01-1.676 0l-4.994-2.497a.375.375 0 00-.336 0l-3.868 1.935A1.875 1.875 0 012.25 19.18V6.695c0-.71.401-1.36 1.036-1.677l4.875-2.437zM9 6a.75.75 0 01.75.75V15a.75.75 0 01-1.5 0V6.75A.75.75 0 019 6zm6.75 3a.75.75 0 00-1.5 0v8.25a.75.75 0 001.5 0V9z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                  Open in Google Maps App
                </button>

                <button
                  onClick={() => {
                    window.open('https://maps.apple.com/?q=Goldcrest+executive,+Jumeirah+lake+tower,+Dubai,+United+Arab+Emirates', '_blank');
                  }}
                  className="w-full bg-gray-800 text-white py-3 px-4 rounded-lg font-semibold hover:bg-gray-700 transition-colors flex items-center justify-center gap-3"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="currentColor" 
                    className="w-5 h-5"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/>
                  </svg>
                  Open in Apple Maps
                </button>

                {/* Copy Address Button */}
                <button
                  onClick={() => {
                    navigator.clipboard.writeText('Goldcrest executive, Jumeirah lake tower, Dubai, United Arab Emirates');
                    alert('Address copied to clipboard!');
                  }}
                  className="w-full border border-gray-300 text-gray-700 py-3 px-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center gap-3"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="currentColor" 
                    className="w-5 h-5"
                  >
                    <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
                  </svg>
                  Copy Address
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}