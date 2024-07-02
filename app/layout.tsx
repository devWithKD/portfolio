import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Prvoider from "@/components/providers";
import Footer from "@/components/footer";
import Link from "next/link";
import PageLink from "@/components/pageLinks";
import ThemeSwitcher from "@/components/themeSwitcher";
import DropDownNav from "@/components/dropDownNav";
import { auth } from "@/auth";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "devWithKD | Fullstack Developer - React, Node.js, UI/UX Design",
  description:
    "Welcome to KD's portfolio, your destination for top-tier React and Node.js development. Specializing in dynamic, SEO-optimized web applications and innovative UI/UX designs. Explore my expertise in crafting high-performing solutions tailored for businesses of all sizes.",
  openGraph: {
    siteName: "KD's Portfolio",
    title: "devWithKD | Fullstack Developer - React, Node.js, UI/UX Design",
    description:
      "Welcome to KD's portfolio, your destination for top-tier React and Node.js development. Specializing in dynamic, SEO-optimized web applications and innovative UI/UX designs. Explore my expertise in crafting high-performing solutions tailored for businesses of all sizes.",
    url: "https://devwithkd.com",
  },
  twitter: {
    site: "@devWithKD",
    title: "devWithKD | Fullstack Developer - React, Node.js, UI/UX Design",
    description:
      "Welcome to KD's portfolio, your destination for top-tier React and Node.js development. Specializing in dynamic, SEO-optimized web applications and innovative UI/UX designs. Explore my expertise in crafting high-performing solutions tailored for businesses of all sizes.",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.className} w-screen min-h-screen flex flex-col items-center bg-zinc-50 dark:bg-zinc-950`}
      >
        <Prvoider>
          <Header>
            <div className="relative w-full flex justify-between items-center px-8">
              <Link href="/">
                <div
                  className={`${poppins.className} flex flex-col text-xl text-zinc-400 font-[800]`}
                >
                  <div className="leading-6">devWith</div>
                  <div className="text-zinc-900 dark:text-zinc-50 leading-5 ">
                    KD
                  </div>
                </div>
              </Link>
              <div className="flex items-center gap-5">
                <nav className="hidden sm:block">
                  <ul className="flex gap-5 items-center">
                    <li>
                      <PageLink href="/projects">Projects</PageLink>
                    </li>
                    <li>
                      <PageLink href="/blog">Blog</PageLink>
                    </li>
                    <li>
                      <PageLink href="/resume">Resume</PageLink>
                    </li>
                    {session?.user?.email === process.env.ADMIN_EMAIL && (
                      <li>
                        <PageLink href="/edit">Edit</PageLink>
                      </li>
                    )}
                  </ul>
                </nav>
                <ThemeSwitcher />
                <DropDownNav />
              </div>
            </div>
          </Header>
          {children}
          <Footer />
        </Prvoider>
      </body>
    </html>
  );
}
