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
  description: "Build your smart home with a Local Canadian security provider.",
  keywords: ["Secure Nest", "home security", "automation", "smart home"],
  alternates: {
    canonical: "https://securenest.ca",
  },
  openGraph: {
    title: "Secure Nest",
    description: "Build your smart home with a Local Canadian security provider.",
    type: "website",
    locale: 'en_US',
    url: "https://securenest.ca",
    siteName: "Secure Nest",
    images: [
      {
        url: "https://i.ibb.co/hdpg8Ft/securenestog.png",
        width: "1200",
        height: "630",
        alt: "securenest",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Secure Nest",
    description: "Build your smart home with a Local Canadian security provider.",
    creator: "@CHNsPart",
    images: ["https://i.ibb.co/hdpg8Ft/securenestog.png"],
  },
}; 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  
  return (
    <html lang="en">
      <Head>

      <link rel="icon" href="./favicon.ico" />

        <meta property="og:url" content="https://securenest.ca"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="Secure Nest"/>
        <meta property="og:description" content="Build your smart home with a Local Canadian security provider."/>
        <meta property="og:image" content="https://i.ibb.co/hdpg8Ft/securenestog.png"/>

        <meta name="twitter:card" content="summary_large_image"/>
        <meta property="twitter:domain" content="securenest.ca"/>
        <meta property="twitter:url" content="https://securenest.ca"/>
        <meta name="twitter:title" content="Secure Nest"/>
        <meta name="twitter:description" content="Build your smart home with a Local Canadian security provider."/>
        <meta name="twitter:image" content="https://i.ibb.co/hdpg8Ft/securenestog.png"/>

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