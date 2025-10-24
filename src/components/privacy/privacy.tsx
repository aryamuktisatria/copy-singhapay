'use client';

import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      
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
                className="w-10 h-10 md:w-12 md:h-12 text-orange-500"
              >
                <path 
                  fillRule="evenodd" 
                  d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" 
                  clipRule="evenodd" 
                />
              </svg>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-poppins">
              Privacy Policy
            </h1>
            
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-400 mx-auto mb-4"></div>
            
            <p className="text-gray-600 text-base md:text-lg font-poppins max-w-2xl mx-auto">
              Your privacy is important to us. This page will contain our privacy policy and data protection information.
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
                This is the Privacy Policy page for SinghaPay. Detailed privacy policy content will be added here.
              </p>
              
              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
                <p className="text-gray-700 font-poppins text-sm md:text-base">
                  <strong className="text-orange-600">Note:</strong> This is a placeholder page. The complete privacy policy will be added soon with details about data collection, usage, protection, and your rights.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </main>

    </div>
  );
}