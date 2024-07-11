import { auth } from "@/auth";
import { SignInButton } from "@/components/signInButton";
import { SignOutButton } from "@/components/signOutButton";
import Link from "next/link";
import { ReactNode } from "react";

async function Layout({ children }: Readonly<{ children: ReactNode }>) {
  const session = await auth();
  if (!session?.user)
    return (
      <main className="wide-page flex gap-4 flex-col justify-center items-center">
        <h1 className="text-3xl md:text-6xl font-bold text-zinc-900 dark:text-zinc-200">
          Kd? Is that you??
        </h1>
        <p className="text-xl md:text-2xl font-semibold text-zinc-800 dark:text-zinc-300">
          Please confirm by signing in, will ya?
        </p>
        <SignInButton />
      </main>
    );
  return (
    <main className="wide-page flex flex-col md:flex-row gap-4">
      <div className="md:min-w-40 my-0 md:my-4 h-fit flex flex-col gap-4">
        <ul className="px-4 py-3 flex flex-wrap sm:flex-nowrap md:flex-col justify-start md:justify-center text-center md:text-start items-start gap-8 md:gap-3 rounded-md border dark:border-zinc-700 dark:bg-zinc-800">
          <li className="w-fit sm:w-full cursor-pointer text-zinc-300 hover:text-zinc-200 font-light hover:scale-[1.02] transition-all duration-150 ease-in-out">
            <Link href="/edit/blogs">Blogs</Link>
          </li>
          <li className="w-fit sm:w-full cursor-pointer text-zinc-300 hover:text-zinc-200 font-light hover:scale-[1.02] transition-all duration-150 ease-in-out">
            <Link href="/edit/skills">Skills</Link>
          </li>
          <li className="w-fit sm:w-full cursor-pointer text-zinc-300 hover:text-zinc-200 font-light hover:scale-[1.02] transition-all duration-150 ease-in-out">
            <Link href="/edit/projects">Projects</Link>
          </li>
          <li className="w-fit sm:w-full cursor-pointer text-zinc-300 hover:text-zinc-200 font-light hover:scale-[1.02] transition-all duration-150 ease-in-out">
            <Link href="/edit/resume">Resume</Link>
          </li>
        </ul>
        <SignOutButton/>
      </div>
      {children}
    </main>
  );
}

export default Layout;
