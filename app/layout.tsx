import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import GoogleAnalytics from "./GoogleAnalytics";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

import "./globals.css";

const primaryFont = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]})
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lindrit Sulaj",
  description: "I help businesses from all over the world create a strong online presence with my web development & SEO services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleAnalytics GA_TRACKING_ID="G-Y148D4GHC8" />
      <body className={primaryFont.className}>
        <Navbar />
        {children}
        <Footer />
        <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </body>
    </html>
  );
}
