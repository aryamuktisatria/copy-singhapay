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

    const floatingVariants: Variants = {
        hidden: { opacity: 0, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: 'easeOut',
            },
        },
    };

    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                delay: i * 0.15,
                ease: 'easeOut',
            },
        }),
    };

    const bgVariants: Variants = {
        hidden: { opacity: 0, scale: 0.8, x: 100 },
        visible: {
            opacity: 1,
            scale: 1,
            x: 0,
            transition: {
                duration: 1.2,
                ease: 'easeOut',
            },
        },
    };

    return (
        <section 
            className="relative w-full max-w-[1440px] mx-auto bg-white py-16 md:py-20 lg:py-24 overflow-hidden flex flex-col items-center px-4"
        >
            {/* Background Decoration - Bottom Right */}
            <motion.div
                variants={bgVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="absolute z-0 pointer-events-none"
                style={{
                    // Mobile
                    width: '300px',
                    height: '169px',
                    bottom: '0px',
                    right: '0px',
                    opacity: 0.54,
                }}
            >
                <Image
                    src="/bg-support.png"
                    alt="Background decoration"
                    fill
                    className="object-contain object-bottom-right"
                    sizes="(max-width: 768px) 300px, (max-width: 1024px) 500px, 835px"
                    style={{
                        filter: 'brightness(0.95)',
                    }}
                />
            </motion.div>

            <motion.div
                className="w-full flex flex-col items-center text-center relative z-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={containerVariants}
            >
                {/* Title */}
                <motion.h1
                    variants={itemVariants}
                    className="max-w-[800px] text-3xl md:text-[36px] font-poppins font-semibold text-black leading-tight mb-4"
                >
                    Multi-Currency Support
                </motion.h1>

                {/* Description */}
                <motion.p
                    variants={itemVariants}
                    className="max-w-[1074px] text-base md:text-[18px] font-poppins font-normal text-black leading-relaxed 
                    mb-8 md:mb-10 lg:mb-0"
                >
                    SinghaPay supports payments from a wide range of popular UPI applications,
                    including PhonePe, Paytm, Google Pay, and WhatsApp Pay, enabling users to make
                    transactions quickly and conveniently through their preferred app.
                </motion.p>

                        <div className="relative w-full max-w-[1200px] mb-8 md:mb-10 lg:mb-12 **-mt-8 md:-mt-10 lg:-mt-12**">
                            
                            {/* Payment Icons Container */}
                            <div className="relative z-10 flex justify-center items-center min-h-[280px] md:min-h-[350px] lg:min-h-[450px]">
                                                {/* PhonePe - Top Left */}
                        {/* PhonePe - Top Left */}
                        <motion.div
                        variants={floatingVariants}
                        whileHover={{ scale: 1.1, y: -5 }}
                        className="absolute 
                            top-[50px] left-[8%]
                            md:top-[70px] md:left-[12%]
                            lg:top-[320px] lg:left-[11%]
                            w-[65px] h-[65px] md:w-[75px] md:h-[75px] lg:w-[85px] lg:h-[85px] 
                            rounded-full bg-white shadow-lg flex items-center justify-center 
                            transition-all duration-300 hover:shadow-xl"
                        >
                        <div className="relative w-[45px] h-[45px] md:w-[60px] md:h-[60px] lg:w-[72px] lg:h-[72px]">
                            <Image
                            src="/phone-pe.png"
                            alt="PhonePe"
                            fill
                            className="object-contain"
                            sizes="90px"
                            />
                        </div>
                        </motion.div>

                        {/* WhatsApp Pay - Middle Left */}
                        <motion.div
                        variants={floatingVariants}
                        whileHover={{ scale: 1.1, y: -5 }}
                        className="absolute 
                            top-[130px] left-[4%]
                            md:top-[150px] md:left-[6%]
                            lg:top-[270px] lg:left-[21%]
                            w-[65px] h-[65px] md:w-[75px] md:h-[75px] lg:w-[85px] lg:h-[85px] 
                            rounded-full bg-white shadow-lg flex items-center justify-center 
                            transition-all duration-300 hover:shadow-xl"
                        >
                        <div className="relative w-[48px] h-[25px] md:w-[55px] md:h-[28px] lg:w-[65px] lg:h-[33px]">
                            <Image
                            src="/wa-pay.png"
                            alt="WhatsApp Pay"
                            fill
                            className="object-contain"
                            sizes="72px"
                            />
                        </div>
                        </motion.div>

                        {/* Amazon Pay - Bottom Left */}
                        <motion.div
                        variants={floatingVariants}
                        whileHover={{ scale: 1.1, y: -5 }}
                        className="absolute 
                            top-[180px] left-[18%]
                            md:top-[250px] md:left-[14%]
                            lg:top-[210px] lg:left-[30%] 
                            w-[65px] h-[65px] md:w-[75px] md:h-[75px] lg:w-[85px] lg:h-[85px]
                            rounded-full bg-white shadow-lg flex items-center justify-center 
                            transition-all duration-300 hover:shadow-xl z-20"
                        >
                        {/* 💡 Logo diperbesar 1.2x tanpa ubah wadah */}
                        <div className="relative aspect-[1/1] w-[96%] md:w-[100%] lg:w-[100%]">
                            <Image
                            src="/amazon-pay.png"
                            alt="Amazon Pay"
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 72px, (max-width: 1024px) 85px, 100px"
                            />
                        </div>
                        </motion.div>
                        {/* Center Card - Indian Rupee */}
                        <motion.div
                            variants={itemVariants}
                            whileHover={{ scale: 1.05, y: -8 }}
                            className="relative flex w-full max-w-[210px] md:max-w-[240px] lg:max-w-[265px] 
                                px-5 md:px-6 lg:px-7 py-4 md:py-5 lg:py-6 
                                justify-center items-center 
                                rounded-[14px] bg-white shadow-xl gap-3 md:gap-4 lg:gap-[16px] 
                                hover:shadow-2xl transition-all duration-300 z-20"
                        >
                            <div className="w-[48px] h-[48px] md:w-[52px] md:h-[52px] lg:w-[56px] lg:h-[56px] 
                                flex-shrink-0 rounded-full overflow-hidden relative">
                                <Image
                                    src="/india.png"
                                    alt="India Flag"
                                    fill
                                    className="object-cover" 
                                    sizes="56px" 
                                />
                            </div>

                            <div className="flex flex-col items-start justify-center text-left">
                                <span className="text-[17px] md:text-[19px] lg:text-[21px] font-poppins font-semibold text-black leading-tight">
                                    Indian Rupee
                                </span> 
                                <span className="text-[15px] md:text-[17px] lg:text-[19px] font-poppins font-normal text-[#67687A] leading-tight">
                                    INR
                                </span>
                            </div>
                        </motion.div>

                        {/* Paytm - Bottom Right */}
                        <motion.div
                            variants={floatingVariants}
                            whileHover={{ scale: 1.1, y: -5 }}
                            className="absolute 
                                top-[180px] right-[12%]
                                md:top-[220px] md:right-[16%]
                                lg:top-[210px] lg:right-[30%]
                                w-[65px] h-[65px] md:w-[75px] md:h-[75px] lg:w-[85px] lg:h-[85px] 
                                rounded-full bg-white shadow-lg flex items-center justify-center 
                                transition-all duration-300 hover:shadow-xl"
                        >
                            <div className="relative w-[44px] h-[15px] md:w-[52px] md:h-[18px] lg:w-[62px] lg:h-[21px]">
                                <Image
                                    src="/pay-tm.jpg"
                                    alt="Paytm"
                                    fill
                                    className="object-contain" 
                                    sizes="62px"
                                />
                            </div>
                        </motion.div>

                        {/* Google Pay - Middle Right */}
                        <motion.div
                            variants={floatingVariants}
                            whileHover={{ scale: 1.1, y: -5 }}
                            className="absolute 
                                top-[115px] right-[3%]
                                md:top-[140px] md:right-[5%]
                                lg:top-[270px] lg:right-[21%]
                                w-[65px] h-[65px] md:w-[75px] md:h-[75px] lg:w-[85px] lg:h-[85px] 
                                rounded-full bg-white shadow-lg flex items-center justify-center 
                                transition-all duration-300 hover:shadow-xl"
                        >
                            <div className="relative w-[50px] h-[22px] md:w-[58px] md:h-[26px] lg:w-[66px] lg:h-[30px]">
                                <Image
                                    src="/gpay.png"
                                    alt="Google Pay"
                                    fill
                                    className="object-contain" 
                                    sizes="66px"
                                />
                            </div>
                        </motion.div>

                        {/* UPI - Top Right */}
                        <motion.div
                            variants={floatingVariants}
                            whileHover={{ scale: 1.1, y: -5 }}
                            className="absolute 
                                top-[50px] right-[8%]
                                md:top-[70px] md:right-[12%]
                                lg:top-[320px] lg:right-[11%]
                                w-[65px] h-[65px] md:w-[75px] md:h-[75px] lg:w-[85px] lg:h-[85px] 
                                rounded-full bg-white shadow-lg flex items-center justify-center 
                                transition-all duration-300 hover:shadow-xl"
                        >
                            <div className="relative w-[52px] h-[26px] md:w-[62px] md:h-[30px] lg:w-[70px] lg:h-[34px]">
                                <Image
                                    src="/upi.jpg"
                                    alt="UPI"
                                    fill
                                    className="object-contain" 
                                    sizes="70px"
                                />
                            </div>
                        </motion.div>

                    </div>
                </div>

                {/* Coming Soon Text */}
                <motion.p
                    variants={itemVariants}
                    className="max-w-[1100px] text-base md:text-[18px] font-poppins font-normal text-black text-center leading-relaxed 
                    mb-10 md:mb-14 lg:mb-16 px-4"
                >
                  Expanding Our Reach — Launching Soon:
                </motion.p>

                {/* Currency Cards Grid */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 lg:gap-[18px] w-full max-w-[1140px] px-4"
                >
                    {/* Bangladesh Card */}
                    <motion.div
                        custom={0}
                        variants={cardVariants}
                        whileHover={{ y: -8, boxShadow: '0 8px 30px -4px rgba(0, 0, 0, 0.25)' }}
                        className="flex flex-col w-full max-w-[270px] mx-auto p-5 md:p-6 lg:px-[12px] lg:pt-[18px] lg:pb-[68px] 
                            items-start rounded-[14px] bg-white shadow-[0_0_11.3px_-1px_rgba(0,0,0,0.25)] 
                            transition-all duration-300"
                    >
                        <div className="flex items-start gap-3 mb-4">
                            <div className="w-[52px] h-[52px] flex-shrink-0 rounded-full overflow-hidden relative">
                                <Image
                                    src="/bangladesh.png"
                                    alt="Bangladesh Flag"
                                    fill
                                    className="object-cover"
                                    sizes="52px"
                                />
                            </div>
                            <h3 className="flex-1 text-black font-poppins text-[20px] md:text-[21px] font-semibold leading-normal">
                                Bangladeshi Taka
                            </h3>
                        </div>
                        <p className="w-full text-[#67687A] font-poppins text-[16px] md:text-[17px] font-normal leading-normal">
                            BDT (Coming Soon)
                        </p>
                    </motion.div>

                    {/* Vietnamese Dong Card */}
                    <motion.div
                        custom={1}
                        variants={cardVariants}
                        whileHover={{ y: -8, boxShadow: '0 8px 30px -4px rgba(0, 0, 0, 0.25)' }}
                        className="flex flex-col w-full max-w-[270px] mx-auto p-5 md:p-6 lg:px-[12px] lg:pt-[18px] lg:pb-[68px] 
                            items-start rounded-[14px] bg-white shadow-[0_0_11.3px_-1px_rgba(0,0,0,0.25)] 
                            transition-all duration-300"
                    >
                        <div className="flex items-start gap-3 mb-4">
                            <div className="w-[52px] h-[52px] flex-shrink-0 rounded-full overflow-hidden relative">
                                <Image
                                    src="/vietnam.png"
                                    alt="Vietnam Flag"
                                    fill
                                    className="object-cover"
                                    sizes="52px"
                                />
                            </div>
                            <h3 className="flex-1 text-black font-poppins text-[20px] md:text-[21px] font-semibold leading-normal">
                                Vietnamese Dong
                            </h3>
                        </div>
                        <p className="w-full text-[#67687A] font-poppins text-[16px] md:text-[17px] font-normal leading-normal">
                            VND (Coming Soon)
                        </p>
                    </motion.div>

                    {/* Myanmar Kyat Card */}
                    <motion.div
                        custom={2}
                        variants={cardVariants}
                        whileHover={{ y: -8, boxShadow: '0 8px 30px -4px rgba(0, 0, 0, 0.25)' }}
                        className="flex flex-col w-full max-w-[270px] mx-auto p-5 md:p-6 lg:px-[12px] lg:pt-[18px] lg:pb-[68px] 
                            items-start rounded-[14px] bg-white shadow-[0_0_11.3px_-1px_rgba(0,0,0,0.25)] 
                            transition-all duration-300"
                    >
                        <div className="flex items-start gap-3 mb-4">
                            <div className="w-[52px] h-[52px] flex-shrink-0 rounded-full overflow-hidden relative">
                                <Image
                                    src="/myanmar.png"
                                    alt="Myanmar Flag"
                                    fill
                                    className="object-cover"
                                    sizes="52px"
                                />
                            </div>
                            <h3 className="flex-1 text-black font-poppins text-[20px] md:text-[21px] font-semibold leading-normal">
                                Myanmar Kyat
                            </h3>
                        </div>
                        <p className="w-full text-[#67687A] font-poppins text-[16px] md:text-[17px] font-normal leading-normal">
                            MMK (Coming Soon)
                        </p>
                    </motion.div>

                    {/* Thailand Baht Card */}
                    <motion.div
                        custom={3}
                        variants={cardVariants}
                        whileHover={{ y: -8, boxShadow: '0 8px 30px -4px rgba(0, 0, 0, 0.25)' }}
                        className="flex flex-col w-full max-w-[270px] mx-auto p-5 md:p-6 lg:px-[12px] lg:pt-[18px] lg:pb-[68px] 
                            items-start rounded-[14px] bg-white shadow-[0_0_11.3px_-1px_rgba(0,0,0,0.25)] 
                            transition-all duration-300"
                    >
                        <div className="flex items-start gap-3 mb-4">
                            <div className="w-[52px] h-[52px] flex-shrink-0 rounded-full overflow-hidden relative">
                                <Image
                                    src="/thailand.png"
                                    alt="Thailand Flag"
                                    fill
                                    className="object-cover"
                                    sizes="52px"
                                />
                            </div>
                            <h3 className="flex-1 text-black font-poppins text-[20px] md:text-[21px] font-semibold leading-normal">
                                Thailand Baht
                            </h3>
                        </div>
                        <p className="w-full text-[#67687A] font-poppins text-[16px] md:text-[17px] font-normal leading-normal">
                            THB (Coming Soon)
                        </p>
                    </motion.div>
                </motion.div>

            </motion.div>

            {/* Background Decoration - Bottom Right (Tablet & Desktop) */}
            <motion.div
                variants={bgVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="hidden md:block absolute z-0 pointer-events-none"
                style={{
                    // Tablet
                    width: '500px',
                    height: '281px',
                    bottom: '0px',
                    right: '0px',
                    opacity: 0.54,
                }}
            >
                <Image
                    src="/bg-support.png"
                    alt="Background decoration"
                    fill
                    className="object-contain object-bottom-right lg:!w-[835px] lg:!h-[470px]"
                    sizes="(max-width: 1024px) 500px, 835px"
                />
            </motion.div>
        </section>
    );
}