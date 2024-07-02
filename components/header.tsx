"use client";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function Header({
  children,
}: {
  children: ReactNode | ReactNode[];
}) {
  const path = usePathname();
  return (
    <header
      className={`fixed top-0 w-full ${
        path == "/edit" ? "w-3/4" : "max-w-[40rem] sm:w-[40rem]"
      } h-auto py-5 sm:pt-10 bg-zinc-50 dark:bg-zinc-950`}
    >
      {children}
    </header>
  );
}
