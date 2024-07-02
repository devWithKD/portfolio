import { signIn } from "@/auth";
import { FaGithub } from "react-icons/fa6";

function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github");
      }}
      className="mt-4"
    >
      <button type="submit" className="dark:bg-zinc-50 bg-zinc-800 p-2 rounded-md flex items-center gap-2 dark:text-zinc-800 text-zinc-50">
        <FaGithub size={20} className=""/>
        <p className="font-semibold">Signin with GitHub</p>
      </button>
    </form>
  );
}

export default SignIn;
