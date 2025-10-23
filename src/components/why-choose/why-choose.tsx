'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const whyChooseData = [
  {
    id: 1,
    text: 'Trusted technology infrastructure with ',
    boldText: 'high uptime and fast processing.',
  },
  {
    id: 2,
    text: 'Regulatory compliance aligned with Indian financial standards and guidelines.',
    boldText: 'Regulatory compliance',
    isBoldFirst: true,
  },
  {
    id: 3,
    text: 'Simple integration for multiple platforms.',
    boldText: '',
  },
  {
    id: 4,
    text: 'Competitive pricing with ',
    boldText: 'transparent fee structures.',
  },
  {
    id: 5,
    text: 'Proven track record of supporting ',
    boldText: 'merchants, startups, and enterprises across industries.',
  },
];

export default function WhyChoose() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id='solutions'
      className="relative w-full mx-auto overflow-hidden"
      style={{
        maxWidth: '1440px',
        minHeight: '660px',
        flexShrink: 0,
        background: '#FFF',
      }}
    >
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
        .animate-fade-in-left {
          animation: fade-in-left 0.8s ease-out;
        }
        .animate-fade-in-right {
          animation: fade-in-right 0.8s ease-out;
        }
        .list-item-hover {
          transition: all 0.3s ease;
        }
        .list-item-hover:hover {
          transform: translateX(8px);
          background: rgba(248, 147, 31, 0.05);
          border-radius: 8px;
          padding-left: 8px;
        }
      `}</style>

      {/* DESKTOP VERSION  */}
      <div className="hidden lg:block relative h-[660px]">
        {/* Background gradient box */}
        <div
          className={isVisible ? 'animate-fade-in-up' : 'opacity-0'}
          style={{
            position: 'absolute',
            top: '140px',
            left: '63px',
            width: '333px',
            height: '333px',
            flexShrink: 0,
            borderRadius: '11px',
            background: 'linear-gradient(180deg, rgba(242, 96, 36, 0.29) 0%, rgba(248, 147, 31, 0.29) 100%)',
            zIndex: 1,
          }}
        />

        {/* Polkadot decoration - Behind other images */}
        <div
          className={isVisible ? 'animate-fade-in-up' : 'opacity-0'}
          style={{
            position: 'absolute',
            top: '140px',
            left: '540px',
            width: '182px',
            height: '98px',
            transform: 'rotate(90deg)',
            flexShrink: 0,
            zIndex: 1,
            animationDelay: '0.3s',
          }}
        >
          <Image
            src="/polkadot.png"
            alt="Polkadot"
            fill
            style={{
              aspectRatio: '13/7',
              objectFit: 'cover',
            }}
          />
        </div>

        {/* Gelombang image */}
        <div
          className={isVisible ? 'animate-fade-in-left' : 'opacity-0'}
          style={{
            position: 'absolute',
            top: '178px',
            left: '-101px',
            width: '738.768px',
            height: '343.414px',
            transform: 'rotate(-2.202deg)',
            flexShrink: 0,
            zIndex: 2,
            animationDelay: '0.2s',
          }}
        >
          <Image
            src="/gelombang.png"
            alt="Gelombang"
            fill
            style={{
              aspectRatio: '738.77/343.41',
              objectFit: 'cover',
            }}
          />
        </div>

        {/* Why choose main image - Moved more to the left */}
        <div
          className={isVisible ? 'animate-fade-in-left' : 'opacity-0'}
          style={{
            position: 'absolute',
            top: '189px',
            left: '90px',
            width: '577px',
            height: '385px',
            flexShrink: 0,
            zIndex: 3,
            animationDelay: '0.4s',
          }}
        >
          <Image
            src="/why-choose.png"
            alt="Why Choose"
            fill
            style={{
              aspectRatio: '577/385',
              borderRadius: '13px',
              objectFit: 'cover',
            }}
          />
        </div>

        {/* Right content section */}
        <div
          className={isVisible ? 'animate-fade-in-right' : 'opacity-0'}
          style={{
            position: 'absolute',
            top: '189px',
            left: '740px',
            right: '189px',
            zIndex: 5,
            animationDelay: '0.5s',
          }}
        >
          <h2
            style={{
              color: '#000',
              fontFamily: 'Poppins',
              fontSize: '36px',
              fontStyle: 'normal',
              fontWeight: 600,
              lineHeight: 'normal',
              marginBottom: '22px',
            }}
          >
            Why Choose SinghaPay India?
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {whyChooseData.map((item, index) => (
              <div
                key={item.id}
                className="list-item-hover"
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '15px',
                  animation: `fade-in-right 0.6s ease-out ${0.6 + index * 0.1}s backwards`,
                }}
              >
                <div style={{ flexShrink: 0, marginTop: '2px' }}>
                  <Image
                    src="/checklist.png"
                    alt="Checklist"
                    width={26}
                    height={26}
                    style={{
                      aspectRatio: '1/1',
                      objectFit: 'cover',
                    }}
                  />
                </div>
                <p
                  style={{
                    color: '#000',
                    textAlign: 'justify',
                    fontFamily: 'Poppins',
                    fontSize: '16px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: '1.6',
                    margin: 0,
                  }}
                >
                  {item.isBoldFirst ? (
                    <>
                      <span style={{ fontWeight: 700 }}>{item.boldText}</span>
                      {' ' + item.text}
                    </>
                  ) : (
                    <>
                      {item.text}
                      {item.boldText && <span style={{ fontWeight: 700 }}>{item.boldText}</span>}
                    </>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TABLET & MOBILE VERSION*/}
      <div className="lg:hidden px-[20px] md:px-[40px] py-[60px] md:py-[80px]">
        <div className="relative mb-[40px] md:mb-[60px]">
          {/* Background gradient box - Mobile/Tablet */}
          <div
            className={isVisible ? 'animate-fade-in-up' : 'opacity-0'}
            style={{
              width: '100%',
              maxWidth: '280px',
              height: '280px',
              borderRadius: '11px',
              background: 'linear-gradient(180deg, rgba(242, 96, 36, 0.29) 0%, rgba(248, 147, 31, 0.29) 100%)',
              margin: '0 auto 20px',
              position: 'relative',
              zIndex: 1, 
            }}
          />

          {/* Gelombang image - Mobile/Tablet */}
          <div
            className={isVisible ? 'animate-fade-in-left' : 'opacity-0'}
            style={{
              position: 'absolute',
              top: '40px',
              left: '-20px',
              width: '100%',
              maxWidth: '400px',
              height: '200px',
              transform: 'rotate(-2.202deg)',
              zIndex: 2, 
              animationDelay: '0.2s',
            }}
          >
            <Image
              src="/gelombang.png"
              alt="Gelombang"
              fill
              style={{
                objectFit: 'cover',
              }}
            />
          </div>
          <div
  className={
    isVisible ?
    'animate-fade-in-up mt-[-220px] mx-right md:mt-[-260px] md:ml-auto md:mr-[50px]'
    : 
    'opacity-0'
  }
  style={{
    position: 'relative', 
    width: '100%',
    maxWidth: '400px',
    height: '280px',
    zIndex: 3, 
    borderRadius: '13px',
    overflow: 'hidden',
    animationDelay: '0.4s',
  }}
>
  <Image
    src="/why-choose.png"
    alt="Why Choose"
    fill
    style={{
      objectFit: 'cover',
    }}
  />
</div>
        </div>

        {/* Content section - Mobile/Tablet */}
        <div 
          className={isVisible ? 'animate-fade-in-up' : 'opacity-0'} 
          style={{ 
            animationDelay: '0.5s',
            marginTop: '80px', 
          }}
        >
          <h2
            className="text-[28px] md:text-[32px] mb-[20px] md:mb-[25px]"
            style={{
              color: '#000',
              fontFamily: 'Poppins',
              fontStyle: 'normal',
              fontWeight: 600,
              lineHeight: 'normal',
            }}
          >
            Why Choose SinghaPay India?
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            {whyChooseData.map((item, index) => (
              <div
                key={item.id}
                className="list-item-hover"
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                  animation: `fade-in-up 0.6s ease-out ${0.6 + index * 0.1}s backwards`,
                }}
              >
                <div style={{ flexShrink: 0, marginTop: '2px' }}>
                  <Image
                    src="/checklist.png"
                    alt="Checklist"
                    width={24}
                    height={24}
                    style={{
                      aspectRatio: '1/1',
                      objectFit: 'cover',
                    }}
                  />
                </div>
                <p
                  className="text-[14px] md:text-[16px]"
                  style={{
                    color: '#000',
                    textAlign: 'justify',
                    fontFamily: 'Poppins',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: '1.6',
                    margin: 0,
                  }}
                >
                  {item.isBoldFirst ? (
                    <>
                      <span style={{ fontWeight: 700 }}>{item.boldText}</span>
                      {' ' + item.text}
                    </>
                  ) : (
                    <>
                      {item.text}
                      {item.boldText && <span style={{ fontWeight: 700 }}>{item.boldText}</span>}
                    </>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}