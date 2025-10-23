// app/page.tsx
'use client';

import { Suspense, useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

import Navbar from "@/components/navbar/navbar";
import Hero from "@/components/hero/hero";
import About from "@/components/about/about";
import Mission from "@/components/mission/mission";
import Offer from "@/components/offer/offer";
import WhyChoose from "@/components/why-choose/why-choose";
import Commitment from "@/components/commitment/commitment";
import Support from "@/components/support/support";
import Testimonials from "@/components/testimoni/testimoni";
import ContactForm from "@/components/contact/contact";
import Footer from "@/components/footer/footer";

// 🔹 Pisahkan logika search params ke komponen terpisah
function HomeContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [showContactForm, setShowContactForm] = useState(true);
  const [contactKey, setContactKey] = useState(Date.now());

  useEffect(() => {
    const signal = searchParams.get('signal');
    console.log('Signal received:', signal);

    if (signal === 'reset') {
      setShowContactForm(false);

      // Hapus query dari URL tanpa refresh
      const cleanUrl = window.location.pathname;
      window.history.replaceState(null, '', cleanUrl);

      // Reset form setelah jeda kecil
      const timer = setTimeout(() => {
        setShowContactForm(true);
        setContactKey(Date.now());
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [searchParams, router]);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Mission />
      <Offer />
      <WhyChoose />
      <Commitment />
      <Support />
      <Testimonials />

      {showContactForm && <ContactForm key={contactKey} />}

      <Footer />
    </>
  );
}

// 🔹 Bungkus komponen yang pakai useSearchParams di dalam Suspense
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Suspense fallback={<div>Loading...</div>}>
        <HomeContent />
      </Suspense>
    </div>
  );
}
