import Link from "next/link";

function EditPage() {
  return (
    <div className="w-full flex flex-grow flex-col gap-2 mt-8 items-center">
      <h1 className="text-3xl md:text-6xl font-semibold text-zinc-700 dark:text-zinc-200">
        Welcome KD
      </h1>
      <p className="text-xl md:text-2xl font-semibold text-zinc-700 dark:text-zinc-300">
        What would you like to change?
      </p>
      <div className="grid grid-cols-2 gap-6 mt-8">
        <Link
          className="option-card"
          href="/edit/blogs"
        >
          <div className="text-center text-wrap text-ellipsis overflow-hidden">
            Blogs
          </div>
        </Link>
        <Link
          className="option-card" 
          href="/edit/skills"
        >
          <div className="text-center text-wrap text-ellipsis overflow-hidden">
            Skills
          </div>
        </Link>
        <Link
          className="option-card"
          href="/edit/projects"
        >
          <div className=" text-center text-wrap text-ellipsis overflow-hidden">
            Projects
          </div>
        </Link>
        <Link
          className="option-card"
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
