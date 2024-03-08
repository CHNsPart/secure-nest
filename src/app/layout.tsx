import { cn } from "@/lib/utils";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Secure Nest",
  description: "Build your smart home with a Local Canadian security provider.",
  keywords: ["Secure Nest", "home security", "automation", "smart home"],
  alternates: {
    canonical: "https://securenest.ca",
  },
  openGraph: {
    title: "Secure Nest",
    description: "Build your smart home with a Local Canadian security provider.",
    type: "website",
    url: "https://securenest.ca",
    siteName: "Secure Nest",
    images: [
      {
        url: "https://github.com/CHNsPart/secure-nest/assets/58574102/8d507f03-6fb1-42a2-b3a0-1cf82d8e23b0",
        width: 1200,
        height: 630,
        alt: "securenest",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Secure Nest",
    description: "Build your smart home with a Local Canadian security provider.",
    creator: "@CHNsPart",
    images: ["https://github.com/CHNsPart/secure-nest/assets/58574102/8d507f03-6fb1-42a2-b3a0-1cf82d8e23b0"],
  },
}; 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={cn("w-screen", inter.className)}>
        <Navbar />
        {children}
        <Toaster />
        <Footer/>
      </body>
    </html>
  );
}



