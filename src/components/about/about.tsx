'use client';

import Image from "next/image";
import { motion, Variants, Transition } from "framer-motion";

export default function About() {
  const orangeGradientStyle = {
    background: "linear-gradient(90deg, #ED5F21 0%, #F8931F 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    color: "transparent",
  };

  const separatorGradient1 = "linear-gradient(180deg, #F36223 0%, #F58E1C 100%)";
  const separatorGradient2 = "linear-gradient(180deg, #F26423 0%, #F8931F 100%)";

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as Transition['ease'],
      },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut" as Transition['ease'],
      },
    },
  };

  const playButtonVariants: Variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "backOut" as Transition['ease'],
      },
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.2,
      },
    },
  };

  // --- DESKTOP LAYOUT ---
  const DesktopLayout = () => (
    <div 
      className="hidden lg:block relative bg-white overflow-hidden flex-shrink-0 w-full" 
      style={{ height: "717px" }}
    >
      {/* Polkadot Decoration */}
      <motion.div
        className="absolute overflow-hidden" 
        style={{
          top: "15px", left: "1264px", width: "182px", height: "98px",
          transform: "rotate(90deg)", flexShrink: 0, aspectRatio: "13/7",
        }}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <Image 
          src="/polkadot.png" 
          alt="Polkadot Decoration" 
          fill 
          priority 
          className="object-cover" 
          style={{ transform: 'rotate(-90deg)' }} 
        />
      </motion.div>
      
      {/* Badge */}
      <motion.div
        className="absolute inline-flex justify-center items-center gap-3 rounded-[21px] shadow-md"
        style={{
          top: "51px", left: "878px", height: "42px",
          padding: "34px 28px", background: "#FFF",
          boxShadow: "0 1px 9px 0 rgba(17, 17, 18, 0.12)",
        }}
        variants={itemVariants}
        initial="hidden"
        animate="visible"
      >
        <span
          className="text-center font-['Poppins'] font-semibold"
          style={{ fontSize: "18px", lineHeight: "normal", ...orangeGradientStyle }}
        >
          About Our Company
        </span>
      </motion.div>

      {/* Main Title */}
      <motion.h2
        className="absolute font-['Poppins'] font-semibold text-black"
        style={{
          top: "150px", left: "670px", width: "680px", 
          fontSize: "42px", lineHeight: "1.2", 
        }}
        variants={itemVariants}
        initial="hidden"
        animate="visible"
      >
        Choose Us For Your {" "}
        <span style={orangeGradientStyle}>Payment Services And Experience</span>
        {" "}The Different Firsthand!
      </motion.h2>
      
      {/* Text Block 1 */}
      <motion.div
        className="absolute"
        style={{
          top: "367px", left: "679px", width: "671px",
          color: "#000", textAlign: "justify", fontFamily: "Poppins",
          fontSize: "16px", fontWeight: 400, lineHeight: "1.5", marginTop: "-10px",
        }}
        variants={itemVariants}
        initial="hidden"
        animate="visible"
      >
        SinghaPay is a leading digital payment solutions provider, committed to simplifying financial transactions for businesses and individuals across India. With a strong focus on security, reliability, and innovation, we deliver seamless payment services that empower merchants, fintech partners, and consumers to transact with confidence.
      </motion.div>
      
      {/* Separator 1 */}
      <motion.div
        className="absolute"
        style={{
          top: "367px", left: "661px", width: "2px",
          height: "81px", flexShrink: 0, background: separatorGradient1,
        }}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      ></motion.div>
      
      {/* Text Block 2 */}
      <motion.div
        className="absolute"
        style={{
          top: "479px", left: "679px", width: "674px",
          color: "#000", textAlign: "justify", fontFamily: "Poppins",
          fontSize: "16px", fontWeight: 400, lineHeight: "1.5", marginTop: "-2px",
        }}
        variants={itemVariants}
        initial="hidden"
        animate="visible"
      >
        We prioritize ease of use and cutting-edge technology, offering tailored solutions for various sectors. Our vision is to be the most trusted and efficient bridge for global and local commerce, fostering economic growth through secure and fast payment infrastructure.
      </motion.div>
      
      {/* Separator 2 */}
      <motion.div
        className="absolute"
        style={{
          top: "479px", left: "661px", width: "2px",
          height: "66px", flexShrink: 0, background: separatorGradient2,
        }}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      ></motion.div>
      
      {/* Main Image */}
      <motion.div
        className="absolute overflow-hidden rounded-lg z-10"
        style={{
          top: "161px", left: "193px", width: "328px",
          height: "469px", flexShrink: 0,
        }}
        variants={imageVariants}
        initial="hidden"
        animate="visible"
      >
        <Image 
          src="/about.png" 
          alt="About Us Image" 
          fill 
          priority 
          className="object-cover"
          sizes="(max-width: 1024px) 80vw, 328px"
        />
      </motion.div>

      {/* Background Polkadot */}
      <motion.div
        className="absolute overflow-hidden" 
        style={{
          top: "30px", left: "386px", width: "278px",
          height: "189.451px", transform: "rotate(90deg)", flexShrink: 0,
          aspectRatio: "278.00/189.45",
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Image 
          src="/polkadot.png" 
          alt="Polkadot Decoration" 
          fill 
          priority 
          className="object-cover" 
          style={{ transform: 'rotate(-90deg)' }} 
        />
      </motion.div>

      {/* Play Button */}
      <motion.div
        className="absolute flex justify-center items-center z-20 cursor-pointer rounded-full"
        style={{
          top: "523px", left: "491px", width: "60px", height: "60px", 
          flexShrink: 0, background: "linear-gradient(180deg, #F26024 0%, #F6931C 100%)",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", 
        }}
        variants={playButtonVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
      >
        <Image 
          src="/play.png" 
          alt="Play Icon" 
          width={24} 
          height={24} 
          priority 
          style={{ zIndex: 11, filter: "brightness(0) invert(1)" }}
        />
      </motion.div>
    </div>
  );

  // --- MOBILE & TABLET LAYOUT ---
  const MobileTabletLayout = () => (
    <div className="lg:hidden bg-white w-full py-10 md:py-16 px-4 md:px-10">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Text Content */}
        <div className="w-full mb-10 md:mb-16">
          {/* Badge */}
          <motion.div
            className="inline-flex justify-center items-center gap-2 rounded-[21px] shadow-md px-4 py-2 mb-4 md:mb-6 mx-auto"
            style={{
              background: "#FFF",
              boxShadow: "0 1px 9px 0 rgba(17, 17, 18, 0.12)",
            }}
            variants={itemVariants}
          >
            <span
              className="text-center font-['Poppins'] font-semibold text-sm md:text-base"
              style={orangeGradientStyle}
            >
              About Our Company
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h2
            className="font-['Poppins'] font-semibold text-black text-2xl md:text-4xl leading-snug mb-6 md:mb-8 text-center"
            variants={itemVariants}
          >
            Choose Us For Your {" "}
            <span style={orangeGradientStyle}>Payment Services And Experience</span>
            {" "}The Different Firsthand!
          </motion.h2>

          {/* Text Blocks with Separators */}
          <div className="flex flex-col gap-6 md:gap-8">
            {/* Text Block 1 */}
            <motion.div className="flex" variants={itemVariants}>
              <div
                className="mr-4 flex-shrink-0"
                style={{
                  width: "2px",
                  height: "81px",
                  background: separatorGradient1,
                }}
              ></div>
              <p className="text-sm md:text-base text-justify font-['Poppins'] font-normal text-gray-800">
                SinghaPay is a leading digital payment solutions provider, committed to simplifying financial transactions for businesses and individuals across India. With a strong focus on security, reliability, and innovation, we deliver seamless payment services that empower merchants, fintech partners, and consumers to transact with confidence.
              </p>
            </motion.div>

            {/* Text Block 2 */}
            <motion.div className="flex" variants={itemVariants}>
              <div
                className="mr-4 flex-shrink-0"
                style={{
                  width: "2px",
                  height: "66px",
                  background: separatorGradient2,
                }}
              ></div>
              <p className="text-sm md:text-base text-justify font-['Poppins'] font-normal text-gray-800">
                We prioritize ease of use and cutting-edge technology, offering tailored solutions for various sectors. Our vision is to be the most trusted and efficient bridge for global and local commerce, fostering economic growth through secure and fast payment infrastructure.
              </p>
            </motion.div>
          </div>
        </div>
        
        {/* Image Section */}
        <div className="relative w-full h-[300px] md:h-[400px] flex justify-center items-center">
          {/* Background Polkadot */}
          <motion.div
            className="absolute overflow-hidden z-0" 
            style={{
              top: "20px", right: "10%", width: "120px", height: "80px", 
              transform: "rotate(90deg)",
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Image 
              src="/polkadot.png" 
              alt="Polkadot Decoration" 
              fill 
              priority 
              className="object-cover" 
              style={{ transform: 'rotate(-90deg)' }} 
            />
          </motion.div>
          
          {/* Main Image */}
          <motion.div
            className="relative w-4/5 h-full rounded-lg overflow-hidden z-10"
            variants={imageVariants}
          >
            <Image 
              src="/about.png" 
              alt="About Us Image" 
              fill 
              priority 
              className="object-cover"
              sizes="(max-width: 768px) 80vw, (max-width: 1024px) 60vw, 400px"
            />
          </motion.div>

          {/* Play Button for mobile/tablet */}
          <motion.div
            className="absolute flex justify-center items-center z-20 cursor-pointer rounded-full 
                      right-[5%] sm:right-[1%] md:right-[6%]" 
            style={{
              bottom: "20px", 
              width: "50px", 
              height: "50px", 
              background: "linear-gradient(180deg, #F26024 0%, #F6931C 100%)",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", 
            }}
            variants={playButtonVariants}
            whileHover="hover"
          >
            <Image 
              src="/play.png" 
              alt="Play Icon" 
              width={20} 
              height={20} 
              priority 
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );

  return (
    <div 
      id="about"
      className="flex justify-center items-center w-full" 
      style={{ paddingBottom: "41px", backgroundColor: "#E3E6EF" }}
    >
      <DesktopLayout />
      <MobileTabletLayout />
    </div>
  );
}