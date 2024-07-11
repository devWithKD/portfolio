import { signOut } from "@/auth";
import { GoSignOut } from "react-icons/go";
import { Button } from "./ui/button";

export function SignOutButton() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <Button type="submit" variant="secondary" className="flex items-center gap-2" >
        <span> Logout</span>
        <GoSignOut size={20}/>
      </Button>
    </form>
  );
}
