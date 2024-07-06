"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";

function HeaderContainer({ children }: { children: ReactNode }) {
  const path = usePathname();
  return (
    <header
      className={`fixed top-0 w-full ${
        path.startsWith("/edit") ? "w-full lg:w-3/4" : "max-w-[40rem] md:w-[40rem]"
      } h-auto py-5 md:pt-10 bg-zinc-50 dark:bg-zinc-950`}
    >
      {children}
    </header>
  );
}

export default HeaderContainer;
