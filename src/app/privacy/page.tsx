import PrivacyPolicy from '@/components/privacy/privacy';
import Navbar from '@/components/navbar/navbar';
import Footer from '@/components/footer/footer';

export const metadata = {
  title: 'Privacy Policy | SinghaPay',
  description: 'Privacy Policy for SinghaPay - Learn how we protect and handle your data',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <PrivacyPolicy />
      <Footer />
    </div>
  );
}
