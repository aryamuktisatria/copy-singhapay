'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface FormData {
  name: string;
  email: string;
  companyName: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name: string;
  email: string;
  companyName: string;
  phone: string;
  message: string;
}

interface CardItem {
  icon: string;
  title: string;
  description: string;
}

export default function ContactForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showThankYou, setShowThankYou] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    companyName: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({
    name: '',
    email: '',
    companyName: '',
    phone: '',
    message: ''
  });

  // Validasi functions
  const validateName = (name: string): string => {
    if (!name.trim()) return 'Name is required';
    if (/[0-9]/.test(name)) return 'Name should not contain numbers';
    if (name.length < 2) return 'Name should be at least 2 characters long';
    return '';
  };

  const validateEmail = (email: string): string => {
    if (!email.trim()) return 'Email is required';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return 'Please enter a valid email address';
    return '';
  };

  const validateCompanyName = (companyName: string): string => {
    if (!companyName.trim()) return 'Company name is required';
    if (companyName.length < 2) return 'Company name should be at least 2 characters long';
    return '';
  };

  const validatePhone = (phone: string): string => {
    if (!phone.trim()) return 'Phone is required';
    const phoneRegex = /^\+?[0-9\s\-\(\)]{10,}$/;
    if (!phoneRegex.test(phone)) return 'Please enter a valid phone number';
    return '';
  };

  const validateMessage = (message: string): string => {
    if (!message.trim()) return 'Message is required';
    if (message.length > 300) return 'Message should not exceed 300 characters';
    return '';
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {
      name: validateName(formData.name),
      email: validateEmail(formData.email),
      companyName: validateCompanyName(formData.companyName),
      phone: validatePhone(formData.phone),
      message: validateMessage(formData.message)
    };

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== '');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setIsLoading(false);
        setShowThankYou(true);
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          companyName: '',
          phone: '',
          message: ''
        });
        setErrors({
          name: '',
          email: '',
          companyName: '',
          phone: '',
          message: ''
        });
      } else {
        alert(data.error || 'Failed to send message. Please try again.');
        setIsLoading(false);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
      setIsLoading(false);
    }
  };

  const handleBackToForm = (): void => {
    setShowThankYou(false);
  };

  const handleBackToHomepage = (): void => {
    router.push('/');
  };

  const cards: CardItem[] = [
    {
      icon: '/conversation.png',
      title: 'Talk to Us',
      description: 'Help you build the best solution for your company.'
    },
    {
      icon: '/conversation.png',
      title: 'Make your request easy',
      description: 'Schedule demos, request for quotation, and access documentation'
    },
    {
      icon: '/conversation.png',
      title: 'Specific request',
      description: 'Request regarding specific services'
    }
  ];

  return (
    <div className="relative w-full min-h-screen bg-white overflow-hidden">
      {/* Thank You Card Overlay */}
      {showThankYou && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full mx-auto shadow-2xl transform animate-scaleIn">
            <div className="p-8 text-center">
              {/* Thank You Image */}
              <div className="relative w-32 h-32 mx-auto mb-6 animate-float">
                <Image
                  src="/thankyou.png"
                  alt="Thank You"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Thank You Text */}
              <h2 
                className="text-2xl font-semibold mb-4 text-gray-800"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Thank You for Your Interest!
              </h2>

              {/* Description */}
              <p 
                className="text-gray-600 mb-6 leading-relaxed"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Our team will be in touch with you within 3 business days. 
                You can find more information on our website and telegram channel.
              </p>

              {/* Buttons Container */}
              <div className="flex flex-col gap-3">
                <button
                  onClick={handleBackToForm}
                  className="w-full py-3 px-6 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 border-2 border-orange-500 bg-transparent"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                  }}
                >
                  <span className="text-orange-500 text-sm font-semibold hover:text-orange-600">
                    Send Another Message
                  </span>
                </button>

                <button
                  onClick={handleBackToHomepage}
                  className="w-full py-3 px-6 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
                  style={{
                    background: 'linear-gradient(185deg, #EF5F22 -3.48%, #F8931F 127.57%)',
                    fontFamily: 'Poppins, sans-serif',
                  }}
                >
                  <span className="text-white text-sm font-semibold">
                    Back To Homepage
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 bg-black/50 z-40 flex items-center justify-center">
          <div className="bg-white rounded-lg p-8 flex flex-col items-center gap-4">
            <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-lg font-semibold text-gray-700" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Sending your message...
            </p>
          </div>
        </div>
      )}

      {/* Background Wave - Blurred and rotated */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute -left-20 top-20 w-[800px] lg:w-[1233px] h-[250px] lg:h-[384px] opacity-20 blur-2xl rounded-full"
          style={{
            transform: 'rotate(9deg)',
            background: 'linear-gradient(90deg, #EA5D28 0%, #FA921F 100%)'
          }}
        />
      </div>

      {/* Main Container */}
      <div className="relative max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 py-10 lg:py-20">
        {/* Header Section */}
        <div className="mb-8 lg:mb-14 animate-fadeIn">
          <h1 
            className="text-2xl md:text-3xl lg:text-[32px] font-semibold mb-4"
            style={{
              fontFamily: 'Poppins, sans-serif',
              background: 'linear-gradient(90deg, #EA5D28 0%, #FA921F 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Contact Us
          </h1>
          <p 
            className="text-base md:text-lg lg:text-xl text-black leading-normal max-w-[1259px]"
            style={{ fontFamily: 'Poppins, sans-serif', textAlign: 'justify' }}
          >
            We&apos;d love to hear from you. Whether you are a business looking for payment solutions, a partner exploring collaboration opportunities, or a customer needing support, our team is here to help.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Left Side - Cards */}
          <div className="lg:col-span-5 xl:col-span-4 space-y-4 lg:space-y-6">
            {cards.map((card: CardItem, index: number) => (
              <div
                key={index}
                className="flex items-start gap-3 lg:gap-4 p-5 lg:p-7 rounded-lg bg-[#FFDDCB] transition-all duration-300 hover:shadow-lg hover:scale-[1.02] animate-slideIn"
                style={{
                  animationDelay: `${index * 150}ms`
                }}
              >
                <div className="flex-shrink-0 w-[50px] lg:w-[62px] h-[50px] lg:h-[62px] flex items-center justify-center">
                  <Image
                    src={card.icon}
                    alt={card.title}
                    width={62}
                    height={62}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 
                    className="text-base lg:text-xl font-semibold mb-1 lg:mb-2 text-black"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {card.title}
                  </h3>
                  <p 
                    className="text-sm lg:text-base text-black/80 leading-snug"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Form */}
          <div className="lg:col-span-7 xl:col-span-8">
            <form 
              className="rounded-lg p-6 md:p-8 lg:p-12 animate-fadeInUp shadow-md"
              style={{
                background: 'linear-gradient(0deg, #FFDDCB 0%, #FFDDCB 100%)',
                animationDelay: '300ms'
              }}
              onSubmit={handleSubmit}
            >
              <div className="space-y-5 lg:space-y-6">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                  <div className="space-y-2">
                    <label className="text-sm lg:text-base font-semibold text-black block" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Name<span className="text-[#FF0707]">*</span>
                    </label>
                    <input
                      name="name"
                      type="text"
                      placeholder="Your Name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-2.5 lg:py-3 rounded bg-white border focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all ${
                        errors.name ? 'border-red-500' : 'border-gray-200 focus:border-orange-500'
                      }`}
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                      disabled={isLoading}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm lg:text-base font-semibold text-black block" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Email Address<span className="text-[#FF0707]">*</span>
                    </label>
                    <input
                      name="email"
                      type="email"
                      placeholder="Email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2.5 lg:py-3 rounded bg-white border focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all ${
                        errors.email ? 'border-red-500' : 'border-gray-200 focus:border-orange-500'
                      }`}
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                      disabled={isLoading}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Company Name and Phone Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                  <div className="space-y-2">
                    <label className="text-sm lg:text-base font-semibold text-black block" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Company Name<span className="text-[#FF0707]">*</span>
                    </label>
                    <input
                      name="companyName"
                      type="text"
                      placeholder="Company Name"
                      required
                      value={formData.companyName}
                      onChange={handleChange}
                      className={`w-full px-4 py-2.5 lg:py-3 rounded bg-white border focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all ${
                        errors.companyName ? 'border-red-500' : 'border-gray-200 focus:border-orange-500'
                      }`}
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                      disabled={isLoading}
                    />
                    {errors.companyName && (
                      <p className="text-red-500 text-sm mt-1">{errors.companyName}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm lg:text-base font-semibold text-black block" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Phone<span className="text-[#FF0707]">*</span>
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      placeholder="Phone (e.g., +1234567890)"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-2.5 lg:py-3 rounded bg-white border focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all ${
                        errors.phone ? 'border-red-500' : 'border-gray-200 focus:border-orange-500'
                      }`}
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                      disabled={isLoading}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label className="text-sm lg:text-base font-semibold text-black block" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Your Message<span className="text-[#FF0707]">*</span>
                    </label>
                    <span className={`text-sm ${formData.message.length > 300 ? 'text-red-500' : 'text-gray-500'}`}>
                      {formData.message.length}/300
                    </span>
                  </div>
                  <textarea
                    name="message"
                    placeholder="Your Text Here..."
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    maxLength={300}
                    className={`w-full px-4 py-3 rounded bg-white border focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all resize-y min-h-[140px] lg:min-h-[174px] ${
                      errors.message ? 'border-red-500' : 'border-gray-200 focus:border-orange-500'
                    }`}
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                    disabled={isLoading}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="rounded-lg py-3 px-10 lg:px-14 text-sm lg:text-base font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-xl active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    background: 'linear-gradient(130deg, rgba(244, 97, 37, 0.83) -7.18%, rgba(248, 147, 31, 0.83) 77.4%)'
                  }}
                >
                  {isLoading ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
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

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }

        .animate-slideIn {
          animation: slideIn 0.6s ease-out forwards;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out forwards;
        }

        @media (max-width: 768px) {
          .animate-slideIn {
            animation: fadeIn 0.6s ease-out forwards;
          }
        }
      `}</style>
    </div>
  );
}