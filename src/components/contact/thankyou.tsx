'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function ThankYouPage() {
  const router = useRouter();

  const handleBackToHome = () => {
    router.push('/');
  };

  return (
    <div className="relative w-full min-h-screen bg-white flex items-center justify-center p-4 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute -left-20 top-20 w-[600px] h-[600px] opacity-10 blur-3xl rounded-full animate-pulse"
          style={{
            background: 'linear-gradient(90deg, #EA5D28 0%, #FA921F 100%)',
            animationDuration: '3s'
          }}
        />
        <div 
          className="absolute -right-20 bottom-20 w-[600px] h-[600px] opacity-10 blur-3xl rounded-full animate-pulse"
          style={{
            background: 'linear-gradient(90deg, #FA921F 0%, #EA5D28 100%)',
            animationDuration: '3s',
            animationDelay: '1.5s'
          }}
        />
      </div>

      {/* Main Content Container */}
      <div className="relative max-w-[1440px] w-full">
        <div className="flex flex-col items-center justify-center text-center opacity-0 animate-fadeInUp">
          {/* Thank You Image */}
          <div className="relative w-full max-w-[400px] md:max-w-[500px] lg:max-w-[603px] aspect-[603/454] mb-8 md:mb-10 lg:mb-12">
            <Image
              src="/thankyou.png"
              alt="Thank You"
              fill
              className="object-contain animate-scaleIn"
              priority
            />
          </div>

          {/* Thank You Text */}
          <h1 
            className="text-2xl md:text-3xl lg:text-[40px] font-semibold mb-6 md:mb-8 lg:mb-[31px] px-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            <span className="text-black">Thank your for </span>
            <span 
              className="text-[#EA5D28]"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              expressing your
            </span>
            <span className="text-black"> interest!</span>
          </h1>

          {/* Description */}
          <p 
            className="text-base md:text-lg lg:text-xl text-black max-w-[90%] md:max-w-[600px] lg:max-w-[700px] mb-6 md:mb-8 lg:mb-[33px] leading-relaxed px-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Our team will be in touch with you within 3 business days. 
            You can find more information on our website and telegram channel.
          </p>

          {/* Back to Homepage Button */}
          <button
            onClick={handleBackToHome}
            className="group flex items-center justify-center w-full max-w-[285px] h-[50px] md:h-[55px] lg:h-[60px] px-6 md:px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95 animate-bounceIn"
            style={{
              background: 'linear-gradient(185deg, #EF5F22 -3.48%, #F8931F 127.57%)',
              fontFamily: 'Poppins, sans-serif',
              animationDelay: '400ms'
            }}
          >
            <span className="text-white text-sm md:text-base lg:text-[15px] font-semibold">
              Back To Homepage
            </span>
          </button>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3) translateY(20px);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-scaleIn {
          animation: scaleIn 0.6s ease-out forwards;
          animation-delay: 0.2s;
          opacity: 0;
        }

        .animate-bounceIn {
          animation: bounceIn 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
          opacity: 0;
        }

        @media (max-width: 768px) {
          .animate-fadeInUp {
            animation: fadeInUp 0.6s ease-out forwards;
          }
        }
      `}</style>
    </div>
  );
}