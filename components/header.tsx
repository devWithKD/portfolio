import { Poppins } from "next/font/google";
import Link from "next/link";
import PageLink from "./pageLinks";
import ThemeSwitcher from "./themeSwitcher";
import DropDownNav from "./dropDownNav";

const popins = Poppins({ weight: "800", subsets: ["latin"] });

export default function Header() {
  return (
    <header className="w-full max-w-[40rem] px-8 md:w-[40rem] h-auto my-5 mt-10 flex justify-between items-center">
      <Link href="/">
        <div
          className={`${popins.className} flex flex-col text-xl text-zinc-300 dark:text-zinc-400`}
        >
          <div className="leading-6">devWith</div>
          <div className="text-zinc-900 dark:text-zinc-50 leading-5">KD</div>
        </div>
      </Link>
      <div className="flex items-center gap-5">
        <nav className="hidden lg:block">
          <ul className="flex gap-5 items-center">
            <li>
              <PageLink href="/projects">Projects</PageLink>
            </li>
            <li>
              <PageLink href="/blog">Blog</PageLink>
            </li>
            <li>
              <PageLink href="/experience">Experience</PageLink>
            </li>
          </ul>
        </nav>
        <DropDownNav />
        <ThemeSwitcher />
      </div>
    </header>
  );
}
