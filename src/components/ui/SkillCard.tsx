import type { Skill } from '../../types/skills.ts';

type Props = {
    skill: Skill;
}

export default function SkillCard({ skill }: Props) {
    return (
        <div className="flex items-center gap-3 border border-[#D2D7D9] rounded-lg px-4 py-2">

            <img src={skill.icon} alt={`${skill.name} icon`} className="w-6 h-6" />

            <span className="text-sm font-medium">
                {skill.name}
            </span>
        </div>

    );
}