"use client";
import React, { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import { CiMenuFries } from "react-icons/ci";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import arrow from "@/assets/arrow_left_white.png";

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

function DropDownNav({ isAuthenticated=false }: { isAuthenticated?: boolean }) {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname();
  useEffect(() => setMounted(true), []);
  if (!mounted)
    return (
      <Image
        src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
        width={24}
        height={24}
        sizes="24x24"
        alt="Loading Light/Dark Toggle"
        priority={false}
        title="Loading Light/Dark Toggle"
      />
    );
  return (
    <motion.nav
      className="flex sm:hidden items-center"
      initial={false}
      animate={isOpen ? "open" : "closed"}
    >
      <button onClick={() => setIsOpen(!isOpen)}>
        <CiMenuFries size={24} />
      </button>
      <motion.ul
        className="absolute flex flex-col max-w-[40rem] md:w-[40rem] rounded-sm my-3 px-3 bg-zinc-100 dark:bg-zinc-900 z-30 drop-shadow top-12 right-0 left-0 "
        variants={{
          open: {
            clipPath: "inset(0% 0% 0% 0%)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05,
            },
          },
          closed: {
            clipPath: "inset(0% 0% 100% 0%)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3,
            },
          },
        }}
      >
        {path !== "/" && (
          <motion.li
            className="flex items-center gap-4 my-2 first:mt-4 last:mb-4"
            variants={itemVariants}
          >
            <Image
              src={arrow}
              alt="alt"
              width={24}
              height={24}
              className="invert dark:invert-0"
              priority
            />
            <Link href="/" onClick={() => setIsOpen(false)}>
              Return to Home
            </Link>
          </motion.li>
        )}
        <motion.li
          className="ps-10 my-2 first:mt-4 last:mb-4"
          variants={itemVariants}
        >
          <Link href="/projects" onClick={() => setIsOpen(false)}>
            Projects
          </Link>
        </motion.li>
        <motion.li
          className="ps-10 my-2 first:mt-4 last:mb-4"
          variants={itemVariants}
        >
          <Link href="/blog" onClick={() => setIsOpen(false)}>
            Blog
          </Link>
        </motion.li>
        <motion.li
          className="ps-10 my-2 first:mt-4 last:mb-4"
          variants={itemVariants}
        >
          <Link href="/resume" onClick={() => setIsOpen(false)}>
            Resume
          </Link>
        </motion.li>
        <motion.li
          className="ps-10 my-2 first:mt-4 last:mb-4"
          variants={itemVariants}
        >
          <Link href="/edit" onClick={() => setIsOpen(false)}>
            Edit
          </Link>
        </motion.li>
      </motion.ul>
    </motion.nav>
  );
}

export default DropDownNav;
