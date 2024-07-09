import {
  Dialog,
  DialogHeader,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import SkillForm from "@/components/skill/skillForm";
import { Skill } from "@/model/skill.model";
import { MdEdit } from "react-icons/md";

function SkillDialog({ type, skill }: { type: "edit" | "add"; skill?: Skill }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {type == "add" ? (
          <Button variant="default" className="mt-2 max-w-[8rem]">
            Add Skill
          </Button>
        ):(<Button variant="ghost" className="rounded-full" size="icon">
          <MdEdit size={24}/>
        </Button>)}
      </DialogTrigger>
      <DialogContent className="w-full h-[15rem] md:w-[30rem] md:h-auto">
        <DialogHeader>
          <DialogTitle>
            {type == "add" ? "Add Skill" : "Edit Skill"}
          </DialogTitle>
          <DialogDescription>
            Add name, logo(if available) and level of proficiency, Click save
            when you're done
          </DialogDescription>
        </DialogHeader>
        <SkillForm skill={type == "edit" ? skill : undefined} type={type}/>
      </DialogContent>
    </Dialog>
  );
}

export default SkillDialog;
