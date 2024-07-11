"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

const hoverVarient = {
  rest: {
    scaleX: 0,
    transition: {
      duration: 0.2,
      type: "tween",
      ease: "easeInOut",
    },
  },
  hover: {
    scaleX: 1,
    transition: {
      duration: 0.2,
      type: "tween",
      ease: "easeInOut",
    },
  },
};

export default function PageLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode[] | ReactNode | null;
}) {
  const path = usePathname();
  return (
    <Link href={href}>
      <motion.div
        className="flex flex-col justify-center items-center"
        initial={path.startsWith(href) ? "hover" : "rest"}
        whileHover="hover"
        animate={path.startsWith(href) ? "hover" : "rest"}
      >
        {children}
        <motion.div
          className="bg-zinc-900 dark:bg-zinc-50 h-[1px] w-full"
          variants={hoverVarient}
        ></motion.div>
      </motion.div>
    </Link>
  );
}
