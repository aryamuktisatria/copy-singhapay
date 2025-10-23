import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

// Font import
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "SinghaPay | Trusted Global Payment Solutions",
  description:
    "Fast, secure, and reliable transactions for businesses worldwide. SinghaPay simplifies your global payment experience with innovative financial solutions.",
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "SinghaPay – Trusted Global Payment Solutions",
    description:
      "Empowering businesses with secure and innovative payment technologies across the globe.",
    url: "https://singhapay.com",
    siteName: "SinghaPay",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "SinghaPay Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SinghaPay | Trusted Global Payment Solutions",
    description:
      "Fast, secure, and reliable transactions for modern businesses.",
    images: ["/logo.png"],
  },
  metadataBase: new URL("https://singhapay.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
