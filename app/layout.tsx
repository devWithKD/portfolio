import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Prvoider from "@/components/providers";

const inter = Inter({ subsets: ["latin"] });

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
        className={`${inter.className} w-screen flex flex-col justify-center items-center`}
      >
        <Prvoider>
          <Header />
          <main className="w-4/6">{children}</main>
        </Prvoider>
      </body>
    </html>
  );
}
