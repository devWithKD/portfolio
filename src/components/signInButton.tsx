import { signIn } from "@/auth";
import { FaGithub } from "react-icons/fa6";

export function SignInButton() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github");
      }}
    >
      <button type="submit" className="flex gap-2 items-center p-2 rounded-md bg-zinc-900 dark:bg-zinc-300 text-zinc-100 dark:text-zinc-900">
        <FaGithub className="" size={20} />
        <span> Signin with GitHub</span>
      </button>
    </form>
  );
}
