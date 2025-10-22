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
                    // ADJUSTMENT 1: Reduced bottom margin for closer placement to the icons
                    className="max-w-[1074px] text-base md:text-[18px] font-poppins font-normal text-black leading-relaxed mb-8 md:mb-12 lg:mb-16"
                >
                    SinghaPay supports payments from a wide range of popular UPI applications,
                    including PhonePe, Paytm, Google Pay, and WhatsApp Pay, enabling users to make
                    transactions quickly and conveniently through their preferred app.
                </motion.p>

                {/* Payment Icons Section with Background */}
                <div 
                    // ADJUSTMENT 2: Reduced bottom margin on this container
                    className="relative w-full max-w-[1200px] mb-0 md:mb-4 lg:mb-8"
                >
                    
                    {/* Payment Icons Container */}
                    <div className="relative z-10 flex justify-center items-center min-h-[300px] md:min-h-[400px] lg:min-h-[500px]">
                        
                        {/* PhonePe - Top Left */}
                        <motion.div
                            variants={floatingVariants}
                            whileHover={{ scale: 1.1, y: -5 }}
                            className="absolute 
                                top-[60px] left-[10%]                                 /* Mobile: Tetap */
                                md:top-[80px] md:left-[15%]                              /* Tablet: Tetap */
                                lg:top-[310px] lg:left-[12%]                             /* DESKTOP: Posisi Baru (Geser sedikit ke bawah: 100px -> 120px; Lebih kiri: 17% -> 10%) */
                                w-[60px] h-[60px] md:w-[70px] md:h-[70px] lg:w-[81px] lg:h-[81px] 
                                rounded-full bg-white shadow-lg flex items-center justify-center 
                                transition-all duration-300"
                        >
                            {/* Kontainer Logo: Diperbesar ukurannya di Desktop (lg:) dan rasionya disesuaikan */}
                            <div className="relative 
                                w-[50px] h-[14px]                                      /* Mobile */
                                md:w-[60px] md:h-[17px]                                 /* Tablet */
                                lg:w-[71px] lg:h-[30px]                                 /* DESKTOP: Lebar 71px, Tinggi ditingkatkan menjadi 30px */
                            ">
                                <Image
                                    src="/phone-pe.png"
                                    alt="PhonePe"
                                    fill
                                    // Ganti object-contain menjadi object-cover agar logo memenuhi area kontainer
                                    className="object-cover" 
                                    sizes="71px"
                                />
                            </div>
                        </motion.div>

                        {/* WhatsApp Pay - Middle Left */}
                        <motion.div
                            variants={floatingVariants}
                            whileHover={{ scale: 1.1, y: -5 }}
                            className="absolute 
                                top-[120px] left-[5%]                                   /* Mobile: Tetap */
                                md:top-[140px] md:left-[8%]                              /* Tablet: Tetap */
                                lg:top-[260px] lg:left-[21%]                             /* DESKTOP: Posisi Baru (Lebih tinggi: 170px -> 100px; Lebih kiri: 25% -> 20%) */
                                w-[60px] h-[60px] md:w-[70px] md:h-[70px] lg:w-[81px] lg:h-[81px] 
                                rounded-full bg-white shadow-lg flex items-center justify-center 
                                transition-all duration-300"
                        >
                            <div className="relative w-[50px] h-[24px] md:w-[60px] md:h-[28px] lg:w-[70px] lg:h-[33px]">
                                <Image
                                    src="/wa-pay.png"
                                    alt="WhatsApp Pay"
                                    fill
                                    className="object-cover"
                                    sizes="70px"
                                />
                            </div>
                        </motion.div>

                        {/* Amazon Pay - Bottom Left */}
                        <motion.div
                            variants={floatingVariants}
                            whileHover={{ scale: 1.1, y: -5 }}
                            className="absolute 
                                top-[180px] left-[15%]                                  /* Mobile */
                                md:top-[220px] md:left-[20%]                             /* Tablet */
                                lg:top-[230px] lg:left-[30%]                             /* DESKTOP: Geser ke kiri dari 32% menjadi 25% */
                                w-[60px] h-[60px] md:w-[70px] md:h-[70px] lg:w-[81px] lg:h-[81px] 
                                rounded-full bg-white shadow-lg flex items-center justify-center 
                                transition-all duration-300"
                        >
                            {/* Kontainer Logo: Diperbesar ukurannya di Desktop (lg:) dan rasionya disesuaikan */}
                            <div className="relative 
                                w-[48px] h-[14px]                                      /* Mobile */
                                md:w-[57px] md:h-[17px]                                 /* Tablet */
                                lg:w-[70px] lg:h-[30px]                                 /* DESKTOP: Lebar 70px, Tinggi 30px (rasio lebih baik) */
                            ">
                                <Image
                                    src="/amazon-pay.png"
                                    alt="Amazon Pay"
                                    fill
                                    // Ganti object-contain dengan object-cover atau hapus object-contain
                                    // object-cover memaksa gambar mengisi kontainer, object-contain akan membuatnya kecil
                                    className="object-cover" 
                                    sizes="70px"
                                />
                            </div>
                        </motion.div>

                        {/* Center Card - Indian Rupee */}
                        <motion.div
                            variants={itemVariants}
                            whileHover={{ scale: 1.05, y: -8 }}
                            className="relative flex w-full max-w-[200px] md:max-w-[230px] lg:max-w-[255px] px-4 md:px-5 lg:px-6 py-4 md:py-4 lg:py-5 justify-center items-center 
                                rounded-[14px] bg-white shadow-xl gap-3 md:gap-4 lg:gap-[15px] 
                                hover:shadow-2xl transition-all duration-300 z-20"
                        >
                            <div className="w-[45px] h-[45px] md:w-[48px] md:h-[48px] lg:w-[51px] lg:h-[51px] flex-shrink-0 rounded-full overflow-hidden relative">
                                <Image
                                    src="/india.png"
                                    alt="India Flag"
                                    fill
                                    className="object-cover" 
                                    sizes="58px" 
                                />
                            </div>

                            <div className="flex flex-col items-start justify-center text-left">
                                <span className="text-[16px] md:text-[18px] lg:text-[20px] font-poppins font-semibold text-black leading-tight">
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
                                top-[180px] right-[15%]                                 /* Mobile: Tetap */
                                md:top-[220px] md:right-[20%]                             /* Tablet: Tetap */
                                lg:top-[230px] lg:right-[30%]                            /* DESKTOP: Posisi Baru (Lebih bawah: 264px -> 300px; Lebih kanan: 32% -> 25%) */
                                w-[60px] h-[60px] md:w-[70px] md:h-[70px] lg:w-[81px] lg:h-[81px] 
                                rounded-full bg-white shadow-lg flex items-center justify-center 
                                transition-all duration-300"
                        >
                            {/* Kontainer Logo: Diperbesar ukurannya di Desktop (lg:) */}
                            <div className="relative 
                                w-[40px] h-[13px]                                      /* Mobile */
                                md:w-[48px] md:h-[16px]                                 /* Tablet */
                                lg:w-[60px] lg:h-[30px]                                 /* DESKTOP: Lebar 60px, Tinggi ditingkatkan menjadi 30px */
                            ">
                                <Image
                                    src="/pay-tm.jpg"
                                    alt="Paytm"
                                    fill
                                    // Ganti object-contain menjadi object-cover agar logo tidak kepenyet
                                    className="object-cover" 
                                    sizes="60px"
                                />
                            </div>
                        </motion.div>

                        {/* Google Pay - Middle Right */}
                        <motion.div
                            variants={floatingVariants}
                            whileHover={{ scale: 1.1, y: -5 }}
                            className="absolute 
                                top-[120px] right-[5%]                                  /* Mobile: Tetap */
                                md:top-[150px] md:right-[8%]                             /* Tablet: Tetap */
                                lg:top-[260px] lg:right-[21%]                            /* DESKTOP: Posisi Baru (Sedikit bawah: 175px -> 200px; Lebih kanan: 27% -> 20%) */
                                w-[60px] h-[60px] md:w-[70px] md:h-[70px] lg:w-[81px] lg:h-[81px] 
                                rounded-full bg-white shadow-lg flex items-center justify-center 
                                transition-all duration-300"
                        >
                            {/* Kontainer Logo: Diperbesar ukurannya di Desktop (lg:) */}
                            <div className="relative 
                                w-[46px] h-[20px]                                      /* Mobile */
                                md:w-[55px] md:h-[24px]                                 /* Tablet */
                                lg:w-[64px] lg:h-[28px]                                 /* DESKTOP: Tinggi ditingkatkan menjadi 35px */
                            ">
                                <Image
                                    src="/gpay.png"
                                    alt="Google Pay"
                                    fill
                                    // Ganti object-contain menjadi object-cover
                                    className="object-cover" 
                                    sizes="64px"
                                />
                            </div>
                        </motion.div>

                        {/* UPI - Top Right */}
                        <motion.div
                            variants={floatingVariants}
                            whileHover={{ scale: 1.1, y: -5 }}
                            className="absolute 
                                top-[60px] right-[10%]                                  /* Mobile: Tetap */
                                md:top-[70px] md:right-[12%]                             /* Tablet: Tetap */
                                lg:top-[310px] lg:right-[12%]                            /* DESKTOP: Posisi Baru (Lebih bawah: 101px -> 130px; Lebih kanan: 19% -> 12%) */
                                w-[60px] h-[60px] md:w-[70px] md:h-[70px] lg:w-[81px] lg:h-[81px] 
                                rounded-full bg-white shadow-lg flex items-center justify-center 
                                transition-all duration-300"
                        >
                            {/* Kontainer Logo: Diperbesar ukurannya di Desktop (lg:) */}
                            <div className="relative 
                                w-[50px] h-[24px]                                      /* Mobile */
                                md:w-[59px] md:h-[28px]                                 /* Tablet */
                                lg:w-[68px] lg:h-[32px]                                 /* DESKTOP: Tinggi ditingkatkan menjadi 40px */
                            ">
                                <Image
                                    src="/upi.jpg"
                                    alt="UPI"
                                    fill
                                    // Ganti object-contain menjadi object-cover
                                    className="object-cover" 
                                    sizes="68px"
                                />
                            </div>
                        </motion.div>

                    </div>
                </div>

                {/* Coming Soon Text */}
                <motion.p
                    variants={itemVariants}
                    className="max-w-[1100px] text-base md:text-[18px] font-poppins font-normal text-black text-center leading-relaxed mb-12 md:mb-16 px-4"
                >
                    SinghaPay is preparing to launch Multi-Currency Support, enabling merchants and users to transact in a variety of global currencies beyond INR.
                </motion.p>

                {/* Currency Cards Grid */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-[17px] w-full max-w-[1100px] px-4"
                >
                    {/* Bangladesh Card */}
                    <motion.div
                        custom={0}
                        variants={cardVariants}
                        whileHover={{ y: -8, boxShadow: '0 0 20px -1px rgba(0, 0, 0, 0.3)' }}
                        className="flex flex-col w-full max-w-[255px] mx-auto p-4 md:px-[10px] md:pt-[17px] md:pb-[64px] items-start rounded-[14px] bg-white shadow-[0_0_11.3px_-1px_rgba(0,0,0,0.25)] transition-all duration-300"
                    >
                        <div className="flex items-start gap-3 mb-4">
                            <div className="w-[51px] h-[51px] flex-shrink-0 rounded-full overflow-hidden relative">
                                <Image
                                    src="/bangladesh.png"
                                    alt="Bangladesh Flag"
                                    fill
                                    className="object-cover"
                                    sizes="51px"
                                />
                            </div>
                            <h3 className="w-[170px] text-black font-poppins text-[20px] font-semibold leading-normal">
                                Bangladesh Taka
                            </h3>
                        </div>
                        <p className="w-full text-[#67687A] font-poppins text-[16px] font-normal leading-normal">
                            BDT (Coming Soon)
                        </p>
                    </motion.div>

                    {/* Second Card - Placeholder */}
                    <motion.div
                        custom={1}
                        variants={cardVariants}
                        whileHover={{ y: -8, boxShadow: '0 0 20px -1px rgba(0, 0, 0, 0.3)' }}
                        className="flex flex-col w-full max-w-[255px] mx-auto p-4 md:px-[10px] md:pt-[17px] md:pb-[64px] items-start rounded-[14px] bg-white shadow-[0_0_11.3px_-1px_rgba(0,0,0,0.25)] transition-all duration-300"
                    >
                        <div className="flex items-start gap-3 mb-4">
                            <div className="w-[51px] h-[51px] flex-shrink-0 rounded-full overflow-hidden relative">
                                <Image
                                    src="/vietnam.png"
                                    alt="Vietnam Flag"
                                    fill
                                    className="object-cover"
                                    sizes="51px"
                                />
                            </div>
                            <h3 className="w-[170px] text-black font-poppins text-[20px] font-semibold leading-normal">
                                Vietnamese Dong
                            </h3>
                        </div>
                        <p className="w-full text-[#67687A] font-poppins text-[16px] font-normal leading-normal">
                            VND (Coming Soon)
                        </p>
                    </motion.div>

                    {/* Third Card - Placeholder */}
                    <motion.div
                        custom={2}
                        variants={cardVariants}
                        whileHover={{ y: -8, boxShadow: '0 0 20px -1px rgba(0, 0, 0, 0.3)' }}
                        className="flex flex-col w-full max-w-[255px] mx-auto p-4 md:px-[10px] md:pt-[17px] md:pb-[64px] items-start rounded-[14px] bg-white shadow-[0_0_11.3px_-1px_rgba(0,0,0,0.25)] transition-all duration-300"
                    >
                        <div className="flex items-start gap-3 mb-4">
                            <div className="w-[51px] h-[51px] flex-shrink-0 rounded-full overflow-hidden relative">
                                <Image
                                    src="/myanmar.png"
                                    alt="Myanmar Flag"
                                    fill
                                    className="object-cover"
                                    sizes="51px"
                                />
                            </div>
                            <h3 className="w-[170px] text-black font-poppins text-[20px] font-semibold leading-normal">
                                Myanmar Kyat
                            </h3>
                        </div>
                        <p className="w-full text-[#67687A] font-poppins text-[16px] font-normal leading-normal">
                            MMK (Coming Soon)
                        </p>
                    </motion.div>

                    {/* Fourth Card - Placeholder */}
                    <motion.div
                        custom={3}
                        variants={cardVariants}
                        whileHover={{ y: -8, boxShadow: '0 0 20px -1px rgba(0, 0, 0, 0.3)' }}
                        className="flex flex-col w-full max-w-[255px] mx-auto p-4 md:px-[10px] md:pt-[17px] md:pb-[64px] items-start rounded-[14px] bg-white shadow-[0_0_11.3px_-1px_rgba(0,0,0,0.25)] transition-all duration-300"
                    >
                        <div className="flex items-start gap-3 mb-4">
                            <div className="w-[51px] h-[51px] flex-shrink-0 rounded-full overflow-hidden relative">
                                <Image
                                    src="/thailand.png"
                                    alt="Thailand Flag"
                                    fill
                                    className="object-cover"
                                    sizes="51px"
                                />
                            </div>
                            <h3 className="w-[170px] text-black font-poppins text-[20px] font-semibold leading-normal">
                                Thailand Baht
                            </h3>
                        </div>
                        <p className="w-full text-[#67687A] font-poppins text-[16px] font-normal leading-normal">
                            THB (Coming Soon)
                        </p>
                    </motion.div>
                </motion.div>

            </motion.div>
        </section>
    );
}