import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Prvoider from "@/components/providers";
import Footer from "@/components/footer";
import { cn } from "@/lib/utils";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title:
    "devWithKD | Fullstack Developer - React, Node.js, UI/UX Design",
  description:
    "Welcome to KD's portfolio, your destination for top-tier React and Node.js development. Specializing in dynamic, SEO-optimized web applications and innovative UI/UX designs. Explore my expertise in crafting high-performing solutions tailored for businesses of all sizes.",
  openGraph: {
    siteName: "KD's Portfolio",
    title:
      "devWithKD | Fullstack Developer - React, Node.js, UI/UX Design",
    description:
      "Welcome to KD's portfolio, your destination for top-tier React and Node.js development. Specializing in dynamic, SEO-optimized web applications and innovative UI/UX designs. Explore my expertise in crafting high-performing solutions tailored for businesses of all sizes.",
    url: "https://devwithkd.com",
  },
  twitter: {
    site:"@devWithKD",
    title:
      "devWithKD | Fullstack Developer - React, Node.js, UI/UX Design",
    description:
      "Welcome to KD's portfolio, your destination for top-tier React and Node.js development. Specializing in dynamic, SEO-optimized web applications and innovative UI/UX designs. Explore my expertise in crafting high-performing solutions tailored for businesses of all sizes.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(`${poppins.className} w-full min-h-screen flex flex-col items-center bg-zinc-50 dark:bg-zinc-950`)}
      >
        <Prvoider>
          <Header />
            {children}
          <Footer />
        </Prvoider>
      </body>
    </html>
  );
}