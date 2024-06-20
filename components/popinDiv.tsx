"use client";
import { motion, Variants } from "framer-motion";
import {
  Children,
  isValidElement,
  ReactNode,
} from "react";

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const childVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

function PopInDiv({
  children,
  className,
}: {
  children?: ReactNode[] | ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      transition={{ duration: 0.5 }}
      className={className}
    >
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          const MotionElement = motion(child.type);
          return <MotionElement {...child.props} variants={childVariants} />;
        }
        return child;
      })}
    </motion.div>
  );
}

export default PopInDiv;
