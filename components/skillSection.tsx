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

function SkillSection() {
  return (
    <div className="flex gap-2 flex-wrap">
      <IconText src={jsLogo} alt="Logo for JavaScript">
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
      </IconText>
    </div>
  );
}

export default SkillSection;
