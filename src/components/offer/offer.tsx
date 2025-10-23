'use client';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from '@/components/ui/carousel';
import { useEffect, useState } from 'react';

const offerData = [
  {
    id: 1,
    icon: '/money.png',
    title: 'Payment Gateway Services',
    description:
      'Secure and reliable online payment processing for businesses of all sizes.',
  },
  {
    id: 2,
    icon: '/integration.png',
    title: 'API Integrations',
    description:
      'Easy-to-use APIs that allow merchants to integrate SinghaPay with websites, mobile apps, and platforms.',
  },
  {
    id: 3,
    icon: '/fraud-prevention.png',
    title: 'Fraud Protection & Security',
    description:
      'Advanced risk management and compliance systems to protect merchants and customers.',
  },
  {
    id: 4,
    icon: '/deal.png',
    title: 'Settlement & Reconciliation',
    description: 'Fast, transparent, and accurate fund settlements.',
  },
  {
    id: 5,
    icon: '/customer-support.png',
    title: '24/7 Customer Support',
    description:
      'Dedicated support team to assist with all technical and operational queries.',
  },
];

export default function Offer() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    });
  }, [api]);

  const progressPercentage = count > 0 ? ((current + 1) / count) * 100 : 0;

  return (
    <section
      id="services"
      className="relative w-full min-h-[621px] bg-[#ECEDF3] pb-[60px] animate-fade-in"
    >
      {/* Background kiri-kanan */}
      <div className="absolute left-0 bottom-0 w-[233px] h-[502px] hidden lg:block">
        <Image
          src="/bg-offer-left.png"
          alt="Background Offer Left"
          fill
          className="object-cover"
        />
      </div>

      <div className="absolute right-0 bottom-0 w-[233px] h-[502px] hidden lg:block">
        <Image
          src="/bg-offer.png"
          alt="Background Offer Right"
          fill
          className="object-cover"
        />
      </div>

      {/* Konten */}
      <div className="relative z-10">
        <h2 className="text-center pt-[60px] lg:pt-[77px] text-[28px] md:text-[32px] lg:text-[36px] px-4 font-poppins font-bold text-black">
          What We Offer
        </h2>

        <div className="mt-[50px] md:mt-[55px] lg:mt-[60px] px-[20px] md:px-[40px] lg:px-[100px]">
          <Carousel
            setApi={setApi}
            opts={{
              align: 'start',
              loop: false,
            }}
            className="w-full max-w-[1245px] mx-auto"
          >
            <CarouselContent className="-ml-[15px]">
              {offerData.map((item, index) => (
                <CarouselItem
                  key={item.id}
                  className="pl-[15px] basis-full sm:basis-1/2 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                  style={{
                    animation: `fade-in 0.6s ease-out ${index * 0.1}s backwards`,
                  }}
                >
                  <div className="relative pt-[29px]">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex w-[58px] h-[58px] p-[13px] items-center justify-center rounded-[29px] bg-gradient-to-b from-[#F25F1E] to-[#F8931F] shadow-[0_2px_6px_0_rgba(0,0,0,0.10)] z-10">
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={31}
                        height={31}
                        className="flex-shrink-0 aspect-square object-cover"
                      />
                    </div>

                    <div className="card-hover flex flex-col w-full max-w-[288px] min-h-[280px] pt-[49px] px-[20px] pb-[40px] justify-start items-center rounded-[45px_8px_8px_8px] bg-white shadow-[0_4px_6px_0_rgba(0,0,0,0.10)] mx-auto transition-transform duration-300 ease-in-out hover:translate-y-[-5px] hover:shadow-[0_8px_12px_0_rgba(0,0,0,0.15)]">
                      <h3 className="text-black text-center font-poppins text-[18px] font-bold leading-tight mb-[11px] min-h-[48px] line-clamp-2">
                        {item.title}
                      </h3>

                      <div className="w-[99px] h-[4px] rounded-[16px] bg-gradient-to-r from-[#F26024] to-[#F8931F] mb-[24px]" />

                      <p className="text-black text-center font-poppins text-[14px] font-normal leading-relaxed line-clamp-4">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation & progress bar */}
            <div className="flex items-center justify-center gap-[15px] md:gap-[20px] mt-[35px] px-4">
              {/* Previous */}
              <CarouselPrevious
                className="arrow-button relative left-[15px] md:left-0 top-0 transform-none w-[40px] h-[40px] flex-shrink-0 border-2 border-gray-300 bg-white p-0 rounded-full transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-md disabled:opacity-40 disabled:cursor-not-allowed"
                disabled={!canScrollPrev}
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-gray-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5 8.25 12l7.5-7.5"
                    />
                  </svg>
                </div>
              </CarouselPrevious>

              {/* Progress bar */}
              <div className="w-full max-w-[312px] h-[5px] -mt-[18px] rounded-[37px] bg-gray-300 flex-shrink-0 relative overflow-hidden">
                <div
                  className="absolute left-0 top-0 h-full rounded-[37px] bg-gradient-to-r from-[#F26024] to-[#F8931F] transition-all duration-400 ease-in-out"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>

              {/* Next */}
              <CarouselNext
                className="arrow-button relative right-[15px] md:right-0 top-0 transform-none w-[40px] h-[40px] flex-shrink-0 border-2 border-gray-300 bg-white p-0 rounded-full transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-md disabled:opacity-40 disabled:cursor-not-allowed"
                disabled={!canScrollNext}
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-gray-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              </CarouselNext>
            </div>
          </Carousel>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </section>
  );
}