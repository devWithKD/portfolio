import { Poppins } from "next/font/google";
import Link from "next/link";
import PageLink from "./pageLinks";
import ThemeSwitcher from "./themeSwitcher";

const popins = Poppins({ weight: "800", subsets: ["latin"] });

export default function Header() {
  return (
    <header className="w-4/6 h-auto my-5 mt-10 flex justify-between items-center">
      <Link href="/">
        <div
          className={`${popins.className} flex flex-col text-xl text-zinc-300 dark:text-zinc-400`}
        >
          <div className="leading-6">devWith</div>
          <div className="text-zinc-900 dark:text-zinc-50 leading-5">KD</div>
        </div>
      </Link>
      <nav>
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
          <li>
            <ThemeSwitcher />
          </li>
        </ul>
      </nav>
    </header>
  );
}
