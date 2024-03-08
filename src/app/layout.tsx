import { cn } from "@/lib/utils";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/Footer";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Secure Nest",
  description: "Build your smart home with a Local Canadian security provider",
  keywords: ["Secure Nest", "home security", "automation", "smart home"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  
  return (
    <html lang="en">
      <Head>

        <meta property="og:url" content="https://securenest.ca" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Secure Nest" />
        <meta property="og:description" content="Build your smart home with a Local Canadian security provider." />
        <meta property="og:image" content="https://github.com/CHNsPart/secure-nest/assets/58574102/8d507f03-6fb1-42a2-b3a0-1cf82d8e23b0" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="securenest.ca" />
        <meta property="twitter:url" content="https://securenest.ca" />
        <meta name="twitter:title" content="Secure Nest" />
        <meta name="twitter:description" content="Build your smart home with a Local Canadian security provider." />
        <meta name="twitter:image" content="https://github.com/CHNsPart/secure-nest/assets/58574102/8d507f03-6fb1-42a2-b3a0-1cf82d8e23b0" />

      </Head>
      <body suppressHydrationWarning={true} className={cn("w-screen", inter.className)}>
        <Navbar />
        {children}
        <Toaster />
        <Footer/>
      </body>
    </html>
  );
}



