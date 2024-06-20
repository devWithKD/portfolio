import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Prvoider from "@/components/providers";
import Footer from "@/components/footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title:
    "devWithKD: Fullstack Developer Specializing in React and Node.js | Portfolio",
  description:
    "Welcome to KD's portfolio, your destination for exploring top-tier web development projects and professional development journey. Discover innovative UI/UX designs and high-performing web applications crafted by an experienced Fullstack Developer specializing in React and Node.js. With a proven track record in building dynamic, SEO-optimized web applications, I provide high-quality development services ideal for businesses of all sizes. Elevate your digital presence by hiring a professional React developer and bring your project vision to life.",
  openGraph: {
    title:
      "devWithKD: Fullstack Developer Specializing in React and Node.js | Portfolio",
    description:
      "Welcome to KD's portfolio, your destination for exploring top-tier web development projects and professional development journey. Discover innovative UI/UX designs and high-performing web applications crafted by an experienced Fullstack Developer specializing in React and Node.js. With a proven track record in building dynamic, SEO-optimized web applications, I provide high-quality development services ideal for businesses of all sizes. Elevate your digital presence by hiring a professional React developer and bring your project vision to life.",
    url: "https://devwithkd.com",
  },
  twitter: {
    title:
      "devWithKD: Fullstack Developer Specializing in React and Node.js | Portfolio",
    description:
      "Welcome to KD's portfolio, your destination for exploring top-tier web development projects and professional development journey. Discover innovative UI/UX designs and high-performing web applications crafted by an experienced Fullstack Developer specializing in React and Node.js. With a proven track record in building dynamic, SEO-optimized web applications, I provide high-quality development services ideal for businesses of all sizes. Elevate your digital presence by hiring a professional React developer and bring your project vision to life.",
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
        className={`${poppins.className} w-full min-h-screen flex flex-col items-center bg-zinc-50 dark:bg-zinc-950`}
      >
        <Prvoider>
          <Header />
          <main className="w-full flex-grow mt-14 max-w-[40rem] px-8 md:w-[40rem] py-12 ">
            {children}
          </main>
          <Footer />
        </Prvoider>
      </body>
    </html>
  );
}
