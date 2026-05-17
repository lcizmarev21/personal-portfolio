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
        animate={{
            backgroundColor: active ? "#D2D7D9" : "#0B0D0D",
            color: active ? "#0B0D0D" : "#D2D7D9",
            paddingTop: active ? 100 : 24,
            paddingBottom: active ? 100 : 24,
            height: active ? 300 : 150
        }}
        transition={{
            layout: {type:"spring" , damping: 15 , stiffness: 100 },
            backgroundColor: { duration: 0.3},
            color: { duration: 0.3 },
            paddingTop: {duration: 1},
            paddingBottom: {duration: 1}
        }}
        className="border-b px-24 py-8 flex flex-col mx-20 items-center  overflow-hidden min-h-35 "
    >
        <motion.h2 
            animate={{ x: active ? -250 : 0, opacity: 1 }}
            transition={{ type:"spring", stiffness: 120, damping: 20}}
            className="text-2xl font-semibold pb-10"
        >
            {title}
        </motion.h2>

        <AnimatePresence >
            {active && (
                <motion.div 
                    className="flex flex-wrap gap-3 mt-6"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{ opacity: 0}}
                    transition={{duration: 1 , ease:"easeOut"}}
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