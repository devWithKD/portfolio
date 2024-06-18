import PopInDiv from "@/components/popinDiv";

export default function Home() {
  return (
    <PopInDiv>
      <div className="mb-4 text-zinc-800 dark:text-zinc-50">
        <p className="my-2 text-xl font-medium">
          hey, I&apos;m <span className="font-bold">Kedar</span> 👋
        </p>
        <span className="font-light text-base italic">
          (You can call me <span className="font-medium">KD</span>)
        </span>
      </div>
      <p className="mb-4 text-zinc-700 dark:text-zinc-200 font-light tracking-wide">
        A multidisciplinary developer and occasional designer from Kolhapur, India, with a passion
        for exploring all things tech and creating intuitive web apps.
      </p>
      <p className="mb-4 text-zinc-700 dark:text-zinc-200 font-light tracking-wide">
        Back in 2017, I embarked on a journey into the endless world of
        technology with a little project to build a microcontroller-based
        Battery Management System. It&apos;s funny how that small idea sparked a huge
        interest in programming and development, especially in IoT and
        microcontroller programming. That curiosity and enthusiasm have only
        grown since then.
      </p>
      <p className="mb-4 text-zinc-700 dark:text-zinc-200 font-light tracking-wide">
        Nowadays, I&apos;m diving deep into React development and loving every moment
        of it. While my main focus is on crafting awesome React applications, I
        still enjoy tinkering with various tech projects and embracing my
        multidisciplinary roots. I&apos;m excited about where this journey will take
        me next!
      </p>
    </PopInDiv>
  );
}
