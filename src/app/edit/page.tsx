import Link from "next/link";

function EditPage() {
  return (
    <div className="w-full flex flex-grow flex-col gap-2 justify-center items-center">
      <h1 className="text-3xl md:text-6xl font-semibold text-zinc-200">
        Welcome KD
      </h1>
      <p className="text-xl md:text-2xl font-semibold text-zinc-300">
        What would you like to change?
      </p>
      <div className="grid grid-cols-2 gap-8 mt-8">
        <Link
          className="w-32 h-32 p-2 flex justify-center items-center rounded-md dark:bg-zinc-800 text-3xl md:text-4xl dark:text-zinc-500 hover:dark:bg-zinc-700 hover:scale-105 transition-all duration-150"
          href="/edit/blogs"
        >
          <div className="text-center text-wrap text-ellipsis overflow-hidden">
            Blogs
          </div>
        </Link>
        <Link
          className="w-32 h-32 p-2 flex justify-center items-center rounded-md dark:bg-zinc-800 text-3xl md:text-4xl dark:text-zinc-500 hover:dark:bg-zinc-700 hover:scale-105 transition-all duration-150"
          href="/edit/skills"
        >
          <div className="text-center text-wrap text-ellipsis overflow-hidden">
            Skills
          </div>
        </Link>
        <Link
          className="w-32 h-32 p-2 flex justify-center items-center rounded-md dark:bg-zinc-800 text-3xl md:text-4xl dark:text-zinc-500 hover:dark:bg-zinc-700 hover:scale-105 transition-all duration-150"
          href="/edit/projects"
        >
          <div className=" text-center text-wrap text-ellipsis overflow-hidden">
            Projects
          </div>
        </Link>
        <Link
          className="w-32 h-32 p-2 flex justify-center items-center rounded-md dark:bg-zinc-800 text-3xl md:text-4xl dark:text-zinc-500 hover:dark:bg-zinc-700 hover:scale-105 transition-all duration-150"
          href="/edit/resume"
        >
          <div className="text-center text-wrap text-ellipsis overflow-hidden">
            Resume
          </div>
        </Link>
      </div>
    </div>
  );
}

export default EditPage;
