import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { ReactNode } from "react";

function IconText({
  src,
  alt,
  children,
}: {
  src: string | StaticImport;
  alt?: string;
  children?: ReactNode;
}) {
  return (
    <div className="flex justify-center items-center gap-2 py-2 px-2 bg-zinc-200 dark:bg-zinc-800 rounded border border-zinc-300 dark:border-zinc-700 ">
      <Image src={src} alt={alt?alt:""} width={20}/>
      <div className="text-sm text-zinc-700 dark:text-zinc-200 cursor-default">{children}</div>
    </div>
  );
}

export default IconText;
