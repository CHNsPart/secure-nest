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
  description: "Build your smart home with a Local Canadian security provider",
  keywords: ["Secure Nest", "home security", "automation", "smart home"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const imageUrl = '/images/opengraph-image.png';
  
  return (
    <html lang="en">
      <head>
        {/* Meta tags for OpenGraph */}
        <meta property="og:image" content={imageUrl} />
        <meta property="og:image:type" content="image/png" /> {/* Set the appropriate image type */}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter card meta tags */}
        <meta name="twitter:image" content={imageUrl} />
        <meta name="twitter:image:type" content="image/png" /> {/* Set the appropriate image type */}
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



