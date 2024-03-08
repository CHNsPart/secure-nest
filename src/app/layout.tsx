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
        <meta property="og:image" content={ogImage.src} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content={ogImage.width.toString()} />
        <meta property="og:image:height" content={ogImage.height.toString()} />

        {/* Twitter card meta tags */}
        <meta name="twitter:image" content={ogImage.src} />
        <meta name="twitter:image:type" content="image/png" />
        <meta name="twitter:image:width" content={ogImage.width.toString()} />
        <meta name="twitter:image:height" content={ogImage.height.toString()} />
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