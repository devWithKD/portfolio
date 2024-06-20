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
  title: "devWithKD",
  description:
    "Welcome to devWithKD's portfolio. Explore my projects, skills & professional journey. Check out innovative web applications, UI/UX designs, and more.",
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
