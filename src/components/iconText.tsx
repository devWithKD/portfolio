import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { ReactNode } from "react";

function IconText({
  src,
  alt,
  children,
}: {
  src?: string | StaticImport;
  alt?: string;
  children?: ReactNode;
}) {
  return (
    <div className="flex justify-center items-center gap-2 py-1 px-2 bg-zinc-200 dark:bg-zinc-800 rounded-md border border-zinc-300 dark:border-zinc-700 ">
      {src && (
        <Image
          src={src}
          alt={alt ? alt : ""}
          width={22}
          height={22}
          priority
          className="h-auto"
        />
      )}
      <div className="text-sm text-zinc-700 dark:text-zinc-200 cursor-default">
        {children}
      </div>
    </div>
  );
}

export default IconText;
