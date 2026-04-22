import SkillCard from "./SkillCard";
import { frontend , backend, tools } from "../../data/skills_data.ts";

export default function SkillLayout() {
    return (
        <div className="mt-24 flex flex-row gap-12 justify-center">
            <div>
                <h2 className="text-xl font-bold mb-4">Frontend</h2>
                <div className="flex flex-col gap-4">
                    {frontend.map((skill) => (
                        <SkillCard key={skill.name} skill={skill} />
                    ))}
                </div>
            </div>

            <div>
                <h2 className="text-xl font-bold mb-4">Backend</h2>
                <div className="flex flex-col gap-4">
                    {backend.map((skill) => (
                        <SkillCard key={skill.name} skill={skill} />
                    ))}
                </div>
            </div>

            <div>
                <h2 className="text-xl font-bold mb-4">Tools</h2>
                <div className="flex flex-col gap-4">
                    {tools.map((skill) => (
                        <SkillCard key={skill.name} skill={skill} />
                    ))}
                </div>
            </div>
        </div>
    );
}