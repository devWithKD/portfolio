import IconText from "./iconText";
import jsLogo from "@/assets/javascript.svg";
import reactLogo from "@/assets/react.svg";
import tsLogo from "@/assets/typescript.svg";
import dockerLogo from "@/assets/docker.svg";
import mongoLogo from "@/assets/mongodb-icon-2.svg";
import csharpLogo from "@/assets/csharp.svg";
import cppLogo from "@/assets/c++.svg";
import clangLogo from "@/assets/c-lang.svg";
import nodeLogo from "@/assets/nodejs-icon.svg";
import tailwindLogo from "@/assets/tailwind-css.svg";
import unityLogo from "@/assets/unity-logo.svg";
import unrealLogo from "@/assets/unreal-1.svg";
import fusionLogo from "@/assets/fusion-360.webp";
import { Skill } from "@/model/skill.model";
import { ApiResponse } from "@/types/ApiResponse";

const getSkills = async () => {
  const res = await fetch("http://127.0.0.1:3000/api/skill", {
    next: { revalidate: 3600 },
  });
  const data: ApiResponse = await res.json();
  if (!data.success) return null
  return data.skills;
};

async function SkillSection() {
  const skills = await getSkills();
  if (!skills) return <p>Error Loading Skills</p>;
  return (
    <div className="flex gap-2 flex-wrap">
      {skills.map((skill) => (
        <IconText>{skill.name}</IconText>
      ))}
      {/* <IconText src={jsLogo} alt="Logo for JavaScript">
        JavaScript
      </IconText>
      <IconText src={reactLogo} alt="Logo for ReactJS">
        React
      </IconText>
      <IconText src={tsLogo} alt="Logo for TypeScript">
        TypeScript
      </IconText>
      <IconText src={nodeLogo} alt="Logo for NodeJS">
        NodeJS
      </IconText>
      <IconText src={mongoLogo} alt="Logo for MongoDB">
        MongoDB
      </IconText>
      <IconText src={tailwindLogo} alt="Logo for Tailwind CSS">
        Tailwind CSS
      </IconText>
      <IconText src={dockerLogo} alt="Logo for Docker">
        Docker
      </IconText>
      <IconText src={clangLogo} alt="Logo for C language">
        C
      </IconText>
      <IconText src={cppLogo} alt="Logo for C++ language">
        C++
      </IconText>
      <IconText src={csharpLogo} alt="Logo for C# language">
        C#
      </IconText>
      <IconText src={unityLogo} alt="Logo for Unity3D">
        Unity3D
      </IconText>
      <IconText src={unrealLogo} alt="Logo for Unreal Engine">
        Unreal Engine
      </IconText>
      <IconText src={fusionLogo} alt="Logo for Autodesk Fusion 360">
        Fusion 360
      </IconText> */}
    </div>
  );
}

export default SkillSection;
