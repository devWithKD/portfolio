import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Prvoider from "@/components/providers";

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
        className={`${poppins.className} w-screen flex flex-col justify-center items-center bg-zinc-50 dark:bg-zinc-950 transition-all duration-300`}
      >
        <Prvoider>
          <Header />
          <main className="w-full mt-14 max-w-[40rem] px-8 md:w-[40rem] pt-12">
            {children}
          </main>
        </Prvoider>
      </body>
    </html>
  );
}
