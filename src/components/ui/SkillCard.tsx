import SkillPill from "./SkillPill";
import type { Skill } from "../../types/skills";

interface Props {
    title: string;
    skills: Skill[];
    active: boolean;
}

export default function SkillCard({
    title,
    skills,
    active
}: Props) {
    return (
        <div
            className={`border-b px-8 py-8 transition-all duration-500 ${
                active ? "bg-white text-black" : "bg-transparent text-[#D2D7D9]"
            }`}
        >
            <h2 className="text-2xl font-semibold">
                {title}
            </h2>

            <div className="flex flex-wrap gap-3 mt-6">
                {skills.map((skill) => (
                    <SkillPill
                        key={skill.name}
                        skill={skill}
                    />
                ))}
            </div>
        </div>
    );
}