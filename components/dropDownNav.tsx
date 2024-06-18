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

function DropDownNav() {
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
      className="flex lg:hidden items-center relative"
      initial={false}
      animate={isOpen ? "open" : "closed"}
    >
      <button onClick={() => setIsOpen(!isOpen)}>
        <CiMenuFries size={24} />
      </button>
      <motion.ul
        className="flex flex-col gap-3 absolute w-52 rounded-sm my-3 p-3 bg-zinc-100 dark:bg-zinc-800 drop-shadow top-full right-0"
        variants={{
          open: {
            clipPath: "inset(0% 0% 0% 0% round 5px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05,
            },
          },
          closed: {
            clipPath: "inset(10% 10% 90% 90% round 5px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3,
            },
          },
        }}
      >
        {path !== "/" && (
          <motion.li className="flex items-center gap-4" variants={itemVariants} onClick={() => setIsOpen(false)}>
            <Image src={arrow} alt="alt" width={24} height={24} />
            <Link href="/">Return to Home</Link>
          </motion.li>
        )}
        <motion.li className="ps-10" variants={itemVariants} onClick={() => setIsOpen(false)}>
          <Link href="/projects">Projects</Link>
        </motion.li>
        <motion.li className="ps-10" variants={itemVariants} onClick={() => setIsOpen(false)}>
          <Link href="/blog">Blog</Link>
        </motion.li>
        <motion.li className="ps-10" variants={itemVariants} onClick={() => setIsOpen(false)}>
          <Link href="/experience">Experience</Link>
        </motion.li>
      </motion.ul>
    </motion.nav>
  );
}

export default DropDownNav;
