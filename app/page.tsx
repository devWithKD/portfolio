import PopInDiv from "@/components/popinDiv";
import ProjectCard from "@/components/projectCard";
import SkillSection from "@/components/skillSection";
import Image from "next/image";
import photo from "@/assets/circular_placeholder.svg";

export default function Home() {
  return (
    <PopInDiv>
      <div className="text-zinc-800 dark:text-zinc-50">
        <p className="my-2 text-xl font-medium">
          hey, I&apos;m <span className="font-bold">Kedar</span> 👋
          <span className=" ms-3 font-light text-base italic">
            (You can call me <span className="font-medium">KD</span>)
          </span>
        </p>
        <p className="my-4 text-zinc-700 dark:text-zinc-200 font-light">
          I&apos;m a dynamic developer and occasional designer hailing from
          Kolhapur, with a strong passion for all things tech.
        </p>
        <div className="w-full my-6 flex justify-center items-center">
          <div className="w-full aspect-video bg-white rounded-md text-black flex justify-center items-center">
            PHOTO PLACE HOLDER
          </div>
        </div>
        <p className="mb-4 text-zinc-700 dark:text-zinc-200 font-light">
          Back in 2017, I kicked off this cool project to build a Battery
          Management System with a microcontroller. This little project set off
          a massive passion for programming in me. My curiosity and excitement
          have been on the rise ever since.
        </p>
        <p className="mb-4 text-zinc-700 dark:text-zinc-200 font-light">
          Currently, I am immersing myself in React development and enjoying
          every moment. While my main focus is on building exceptional React
          applications, I still take pleasure in exploring a variety of tech
          projects, showcasing my multidisciplinary background. I&apos;m excited
          to see what the next phase of this captivating journey brings!
        </p>
        <p className="mt-6 mb-4 text-xl font-medium">My Skills..</p>
        <SkillSection />
        <p className="mt-6 mb-4 text-xl font-medium">Projects</p>
        <div className=" grid grid-cols-3 gap-5 ">
          <ProjectCard title="Cadence" link="https://cadence.devwithkd.com/">
            A React and Firebase-powered Kanban board for efficient workflow
            management.
          </ProjectCard>
        </div>
        <p className="my-6 text-xl font-medium">Connect</p>
        <p>
          Reach me at <a href="mailto: kd@devwithkd.com" className="underline">kd@devwithkd.com</a> or <a href="https://twitter.com/messages/compose?recipient_id=1063841225571131393" className="underline">@devWithKD</a>
        </p>
      </div>
    </PopInDiv>
  );
}
