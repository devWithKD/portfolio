"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { GoMoon, GoSun } from "react-icons/go";

function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);

  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

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

  if (resolvedTheme === "dark")
    return (
      <div className="flex justify-center items-center w-6 h-6 cursor-pointer" onClick={() => setTheme("light")}>
        <GoSun size={20}/>
      </div>
    );
  if (resolvedTheme === "light")
    return (
      <div className="flex justify-center items-center w-6 h-6 cursor-pointer" onClick={() => setTheme("dark")}>
        <GoMoon size={20} />
      </div>
    );
}

export default ThemeSwitcher;
