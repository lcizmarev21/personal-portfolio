import type { Skill } from "../../types/skills";

export default function SkillPill({skill} : {skill: Skill}) {
    return (
        <div className="flex items-center gap-4 px-6 py-4 rounded-full border bg-[#D2D7D9] text-[#0B0D0D]">
        
        <img
        src={skill.icon}
        alt={skill.name}
        className="w-4 h-4"
        />

      <span className="text-sm font-md">
        {skill.name}
      </span>

    </div>
  );
}
    