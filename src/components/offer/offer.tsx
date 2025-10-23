'use client';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselApi } from '@/components/ui/carousel';
import { useEffect, useState } from 'react';

const offerData = [
  {
    id: 1,
    icon: '/money.png',
    title: 'Payment Gateway Services',
    description: 'Secure and reliable online payment processing for businesses of all sizes.',
  },
  {
    id: 2,
    icon: '/integration.png',
    title: 'API Integrations',
    description: 'Easy-to-use APIs that allow merchants to integrate SinghaPay with websites, mobile apps, and platforms.',
  },
  {
    id: 3,
    icon: '/fraud-prevention.png',
    title: 'Fraud Protection & Security',
    description: 'Advanced risk management and compliance systems to protect merchants and customers.',
  },
  {
    id: 4,
    icon: '/money.png',
    title: 'Settlement & Reconciliation',
    description: 'Fast, transparent, and accurate fund settlements.',
  },
  {
    id: 5,
    icon: '/customer-support.png',
    title: '24/7 Customer Support',
    description: 'Dedicated support team to assist with all technical and operational queries.',
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
    id='services'  
    className="relative w-full animate-fade-in"
      style={{
        minHeight: '621px',
        flexShrink: 0,
        background: '#ECEDF3',
        paddingBottom: '60px',
      }}
    >
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
        .card-hover {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .card-hover:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 12px 0 rgba(0, 0, 0, 0.15) !important;
        }
        .arrow-button {
          transition: all 0.3s ease;
          border-radius: 50%;
          border: 2px solid transparent;
        }
        .arrow-button:hover:not(:disabled) {
          transform: scale(1.1);
          border: 2px solid #fff;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
        }
        .arrow-button:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }
      `}</style>

      <div
        style={{
          position: 'absolute',
          left: '0',
          bottom: '0',
          width: '233px',
          height: '502px',
          flexShrink: 0,
        }}
        className="hidden lg:block"
      >
        <Image
          src="/bg-offer-left.png"
          alt="Background Offer Left"
          fill
          style={{
            objectFit: 'cover',
          }}
        />
      </div>

      <div
        style={{
          position: 'absolute',
          right: '0',
          bottom: '0',
          width: '233px',
          height: '502px',
          flexShrink: 0,
        }}
        className="hidden lg:block"
      >
        <Image
          src="/bg-offer.png"
          alt="Background Offer Right"
          fill
          style={{
            objectFit: 'cover',
          }}
        />
      </div>

      <div className="relative z-10">
        <h2
          className="text-center pt-[60px] lg:pt-[77px] text-[28px] md:text-[32px] lg:text-[36px] px-4"
          style={{
            color: '#000',
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: 'normal',
          }}
        >
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
                    <div
                      style={{
                        position: 'absolute',
                        top: '0',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        display: 'flex',
                        width: '58px',
                        height: '58px',
                        padding: '13px',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '10px',
                        flexShrink: 0,
                        borderRadius: '29px',
                        background: 'linear-gradient(180deg, #F25F1E 0%, #F8931F 100%)',
                        boxShadow: '0 2px 6px 0 rgba(0, 0, 0, 0.10)',
                        zIndex: 10,
                      }}
                    >
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={31}
                        height={31}
                        style={{
                          flexShrink: 0,
                          aspectRatio: '1/1',
                          objectFit: 'cover',
                        }}
                      />
                    </div>

                    <div
                      className="card-hover"
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                        maxWidth: '288px',
                        minHeight: '280px',
                        padding: '49px 20px 40px 20px',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        borderRadius: '45px 8px 8px 8px',
                        background: '#FFF',
                        boxShadow: '0 4px 6px 0 rgba(0, 0, 0, 0.10)',
                        margin: '0 auto',
                      }}
                    >
                      <h3
                        style={{
                          alignSelf: 'stretch',
                          color: '#000',
                          textAlign: 'center',
                          fontFamily: 'Poppins',
                          fontSize: '18px',
                          fontStyle: 'normal',
                          fontWeight: 700,
                          lineHeight: '1.3',
                          marginBottom: '11px',
                          minHeight: '48px',
                          maxHeight: '60px',
                          overflow: 'hidden',
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                        }}
                      >
                        {item.title}
                      </h3>

                      <div
                        style={{
                          width: '99px',
                          height: '4px',
                          borderRadius: '16px',
                          background: 'linear-gradient(90deg, #F26024 0%, #F8931F 100%)',
                          marginBottom: '24px',
                        }}
                      />

                      <p
                        style={{
                          alignSelf: 'stretch',
                          color: '#000',
                          textAlign: 'center',
                          fontFamily: 'Poppins',
                          fontSize: '14px',
                          fontStyle: 'normal',
                          fontWeight: 400,
                          lineHeight: '1.6',
                          maxHeight: '96px',
                          overflow: 'hidden',
                          display: '-webkit-box',
                          WebkitLineClamp: 4,
                          WebkitBoxOrient: 'vertical',
                        }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="flex items-center justify-center gap-[15px] md:gap-[20px] mt-[35px] px-4">
              <CarouselPrevious
                className=" relative left-[15px] md:left-0 top-0 transform-none transition-all"
                disabled={!canScrollPrev}
                style={{
                    width: '40px',
                    height: '40px',
                    flexShrink: 0,
                    // Hapus styling border/background lama, fokus pada konten di dalam
                    background: 'transparent',
                    padding: 0,
                    border: 'none',
                    // Tambahkan opacity saat disabled
                    opacity: canScrollPrev ? 1 : 0.5,
                    cursor: canScrollPrev ? 'pointer' : 'not-allowed',
                }}
            >
                {/* Container untuk Background Image dan Icon */}
                <div className="relative w-[40px] h-[40px] rounded-full">
                    {/* Background Image (Bundar Putih) */}
                    <Image 
                        src="/bg-icon-hero.png" 
                        alt="Previous Background" 
                        fill 
                        style={{ objectFit: 'cover' }} 
                        className="rounded-full" // Tambahkan rounded-full untuk memastikan berbentuk bundar
                    />
                    {/* SVG Icon Previous (Hitam, strokeWidth 1.5) */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        // Atur ukuran menjadi size-6 (w-6 h-6) untuk memenuhi permintaan size-6
                        className="absolute inset-0 m-auto w-6 h-6 text-black"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                </div>
            </CarouselPrevious>

              <div
                style={{
                  width: '100%',
                  maxWidth: '312px',
                  height: '5px',
                  top: '-18px',
                  borderRadius: '37px',
                  background: '#E0E0E0',
                  flexShrink: 0,
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    height: '100%',
                    width: `${progressPercentage}%`,
                    borderRadius: '37px',
                    background: 'linear-gradient(90deg, #F26024 0%, #F8931F 100%)',
                    transition: 'width 0.4s ease-in-out',
                  }}
                />
              </div>

             <CarouselNext
                className="arrow-button relative right-[15px] md:right-0 top-0 transform-none transition-all"
                disabled={!canScrollNext}
                style={{
                    width: '40px',
                    height: '40px',
                    flexShrink: 0,
                    // Hapus styling border/background lama, fokus pada konten di dalam
                    background: 'transparent',
                    padding: 0,
                    border: 'none',
                    // Tambahkan opacity saat disabled
                    opacity: canScrollNext ? 1 : 0.5,
                    cursor: canScrollNext ? 'pointer' : 'not-allowed',
                }}
            >
                {/* Container untuk Background Image dan Icon */}
                <div className="relative w-[40px] h-[40px] rounded-full">
                    {/* Background Image (Bundar Putih) */}
                    {/* Pastikan gambar /bg-icon-hero.png sudah bundar atau atur overflow-hidden jika perlu */}
                    <Image 
                        src="/bg-icon-hero.png" 
                        alt="Next Background" 
                        fill 
                        style={{ objectFit: 'cover' }} 
                        className="rounded-full" // Tambahkan rounded-full untuk memastikan berbentuk bundar
                    />
                    {/* SVG Icon Next (Hitam, strokeWidth 1.5) */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        // Atur ukuran menjadi size-6 (w-6 h-6) untuk memenuhi permintaan size-6
                        className="absolute inset-0 m-auto w-6 h-6 text-black" 
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </div>
            </CarouselNext>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}