import { cn } from "@/lib/utils";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/Footer";
import ogImage from "../../public/images/opengraph-image.png";

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
        url: ogImage.src,
        width: ogImage.width,
        height: ogImage.height,
        alt: "securenest",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Secure Nest",
    description: "Build your smart home with a Local Canadian security provider.",
    creator: "@CHNsPart",
    images: [ogImage.src],
  },
}; 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  
  return (
    <html lang="en">
      <head>
        {/* Meta tags for OpenGraph */}
        <meta property="og:image" content="https://secure-nest-551plx6zj-chnspart.vercel.app/_next/static/media/opengraph-image.01e8f428.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter card meta tags */}
        <meta name="twitter:image" content="https://secure-nest-551plx6zj-chnspart.vercel.app/_next/static/media/opengraph-image.01e8f428.png" />
        <meta name="twitter:image:type" content="image/png" />
        <meta name="twitter:image:width" content="1200" />
        <meta name="twitter:image:height" content="630" />
      </head>
      <body suppressHydrationWarning={true} className={cn("w-screen", inter.className)}>
        <Navbar />
        {children}
        <Toaster />
        <Footer/>
      </body>
    </html>
  );
}