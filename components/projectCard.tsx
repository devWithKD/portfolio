import { ReactNode } from "react";
import { MdArrowOutward } from "react-icons/md";

function ProjectCard({
  title,
  link,
  children,
}: {
  title: string;
  link?: string;
  children: ReactNode;
}) {
  return (
    <div className="max-w-64 max-h-60 flex flex-col justify-center items-start">
      <a href={link} className="flex mb-2 items-center gap-1">
        <h3 className="text-base text-zinc-800 dark:text-zinc-100 font-medium">{title}</h3>
        <MdArrowOutward size={20} className="text-zinc-500 dark:text-zinc-300 hover:-rotate-6 transition duration-200"/>
      </a>
      <p className="text-sm text-zinc-700 dark:text-zinc-200 font-light">{children}</p>
    </div>
  );
}

export default ProjectCard;
