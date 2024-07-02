import { signOut } from "@/auth";
import React from "react";
import Image from "next/image";
import arrow from "@/assets/arrow_left_white.png"

function SignOut() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <button
        type="submit"
        className="dark:text-zinc-50 text-zinc-800 flex items-center gap-2"
      >
        <span>SignOut</span>

        <Image
          src={arrow}
          alt="alt"
          width={24}
          className="invert dark:invert-0 rotate-180 -z-[1]"
          priority
        />
      </button>
    </form>
  );
}

export default SignOut;
