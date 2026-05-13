import SkillPill from "./SkillPill";
import type { Skill } from "../../types/skills";
import {motion, AnimatePresence} from "framer-motion";

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

    <motion.div
        layout
        transition={{layout:{duration: 0.5, ease:"easeInOut"}, scale:{ duration:0.1, ease:"easeOut"}}}
        animate={{scale: active ? 1.02 : 1}}
        
        className={`border-b px-24 py-8 transition-all duration-300 flex flex-col mx-20 items-center ${
            active ? "bg-white text-black py-25" : "bg-transparent text-[#D2D7D9] py-6"
        }`}
    >
        <h2 className="text-2xl font-semibold pb-10">
            {title}
        </h2>

        <AnimatePresence>
            {active && (
                <motion.div 
                    className="flex flex-wrap gap-3 mt-6"
                    initial={{opacity:0, y:-10 }}
                    animate={{opacity:1 , y: 0 }}
                    exit={{opacity:0, y:-10}}
                    transition={{duration:0.1}}
                >
                    {skills.map((skill) => (
                        <SkillPill
                            key={skill.name}
                            skill={skill}
                        />
                    ))}
                </motion.div>
            )}
        </AnimatePresence>
    </motion.div>

    
    );
}