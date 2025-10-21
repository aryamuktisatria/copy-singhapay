import Navbar from "@/components/navbar/navbar";
import Hero from "@/components/hero/hero";
import About from "@/components/about/about"; 
import Mission from "@/components/mission/mission";
import Offer from "@/components/offer/offer";
import WhyChoose from "@/components/why-choose/why-choose";
import Commitment from "@/components/commitment/commitment";
import Support from "@/components/support/support";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Mission />
      <Offer />
      <WhyChoose />
      <Commitment />
      <Support />
    </div>
  );
}
