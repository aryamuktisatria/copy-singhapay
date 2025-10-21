'use client';

import Image from 'next/image';
import { motion, Variants, Transition } from 'framer-motion';

export default function Support() {
  
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut' as Transition['ease'], 
      },
    },
  };

  return (
    <section 
      className="relative w-full max-w-[1440px] mx-auto bg-white py-16 md:py-20 lg:py-24 overflow-hidden flex flex-col items-center px-4"
    >
      <motion.div
        className="w-full flex flex-col items-center text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <motion.h1
          variants={itemVariants}
          className="max-w-[800px] text-3xl md:text-[36px] font-poppins font-semibold text-black leading-tight mb-4"
        >
          Multi-Currency Support
        </motion.h1>


        <motion.p
          variants={itemVariants}
          className="max-w-[1074px] text-base md:text-[18px] font-poppins font-normal text-black leading-relaxed mb-12 md:mb-16"
        >
          SinghaPay supports payments from a wide range of popular UPI applications,
          including PhonePe, Paytm, Google Pay, and WhatsApp Pay, enabling users to make
          transactions quickly and conveniently through their preferred app.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex w-full max-w-xs md:max-w-[255px] px-6 py-5 justify-center items-center 
                     rounded-[14px] bg-white shadow-xl gap-4 md:gap-[15px] 
                     hover:shadow-2xl transition-shadow duration-300"
        >
          <div className="w-[51px] h-[51px] flex-shrink-0 rounded-full overflow-hidden relative">
            <Image
              src="/india.png"
              alt="India Flag"
              fill
              className="object-cover" 
              sizes="58px" 
            />
          </div>

      <div className="flex flex-col items-start justify-center text-left">
            <span className="text-[18px] md:text-[20px] font-poppins font-semibold text-black leading-tight">
              Indian Rupee
            </span> 
            <span className="w-full text-center text-[17px] md:text-[19px] font-poppins font-normal text-[#67687A] leading-tight">
              INR
            </span>
         </div>
        </motion.div>
      </motion.div>
    </section>
  );
}