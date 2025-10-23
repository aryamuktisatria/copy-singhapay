'use client';

import Navbar from "@/components/navbar/navbar";
import ContactForm from "@/components/contact/contact";
import Footer from "@/components/footer/footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <ContactForm />
      <Footer />
    </div>
  );
}