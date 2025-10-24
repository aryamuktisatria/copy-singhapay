'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/navbar/navbar';
import Footer from '@/components/footer/footer';

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      
      <main className="pt-24 md:pt-28 lg:pt-32 pb-16 md:pb-20 lg:pb-24">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
          
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="inline-flex items-center justify-center gap-2 mb-4">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="w-10 h-10 md:w-12 md:h-12 text-gray-700"
              >
                <path 
                  fillRule="evenodd" 
                  d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625zM7.5 15a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 017.5 15zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H8.25z" 
                  clipRule="evenodd"
                />
                <path 
                  d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" 
                />
              </svg>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-poppins">
              Terms & Conditions
            </h1>
            
            <div className="w-24 h-1 bg-gradient-to-r from-gray-700 to-gray-600 mx-auto mb-4"></div>
            
            <p className="text-gray-600 text-base md:text-lg font-poppins max-w-2xl mx-auto">
              Please read these terms and conditions carefully before using our services.
            </p>
            
            <p className="text-gray-500 text-sm md:text-base font-poppins mt-4">
              Last updated: October 23, 2025
            </p>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 lg:p-16"
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 text-base md:text-lg leading-relaxed font-poppins mb-6">
                This is the Terms & Conditions page for SinghaPay. Detailed terms and conditions content will be added here.
              </p>
              
              <div className="bg-gray-50 border-l-4 border-gray-700 p-6 rounded-r-lg">
                <p className="text-gray-700 font-poppins text-sm md:text-base">
                  <strong className="text-gray-800">Note:</strong> This is a placeholder page. The complete terms and conditions will be added soon with details about service usage, user responsibilities, limitations, and legal agreements.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </main>

      <Footer />
    </div>
  );
}