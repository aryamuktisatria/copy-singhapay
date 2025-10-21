import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Font imports
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
    url: "https://singhapay.com", // optional
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
  metadataBase: new URL("https://singhapay.com"), // optional
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
