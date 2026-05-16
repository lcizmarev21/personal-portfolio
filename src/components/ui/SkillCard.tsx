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
        transition={{layout:{duration: 0.5, ease:"easeInOut"}, scale:{ ease:"easeOut"}}}
        animate={{backgroundColor: active ? "#D2D7D9" : "#0B0D0D" , color: active ? "#0B0D0D" : "#D2D7D9" , paddingTop: active ? 100 : 24 , paddingBottom: active ? 100 : 24  }}
        
        className="border-b px-24 py-8 flex flex-col mx-20 items-center"
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
                    transition={{duration:0.2}}
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