import { auth } from "@/auth";
import SignIn from "@/components/signin";
import SignOut from "@/components/signout";

async function EditPage() {
  const session = await auth();
  if (session?.user?.email == process.env.ADMIN_EMAIL)
    return (
      <main className="page-wide">
        <section className="flex flex-col items-center flex-grow">
          <div className="flex w-full justify-end items-center">
            <SignOut />
          </div>
        </section>
      </main>
    );
  else
    return (
      <main className="page">
        <section className="flex-grow flex flex-col justify-center items-center gap-2">
          <h2 className="text-3xl font-bold">Kd? is that you?</h2>
          <p>Please verify it you, before you proceed to make any changes.</p>
          <SignIn />
        </section>
      </main>
    );
}

export default EditPage;
