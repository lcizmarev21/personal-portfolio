import {useRef, useState} from "react";
import {motion,useScroll, useMotionValueEvent} from "framer-motion";
import SkillCard from "../../components/ui/SkillCard";
import { frontend,backend,tools } from "../../data/skills_data";

export default function Skills() {

    const ref = useRef<HTMLDivElement | null>(null);

    const skillSections = [
        { title: "Frontend", skills: frontend },
        { title: "Backend", skills: backend },
        { title: "Tools", skills: tools },
    ];

    const [active, setActive] = useState(0);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    }); 

    useMotionValueEvent(scrollYProgress, "change", (v) => {
        const index = Math.min(
            skillSections.length - 1,
            Math.floor(v * skillSections.length )
        );

        setActive(index);
    });

    return (
       <motion.section
            ref={ref}
            id="skills"
            className="min-h-screen h-[300vh] "
            initial={{ opacity: 0, y: 40 , filter:"blur(19px)" }}
            whileInView={{ opacity: 1, y: 0 ,filter:"blur(0px)" }}
            transition={{ duration: 1,  ease: "easeInOut"}}
            viewport={{ once: false , amount: 0.2 }}
        >
            <div className="sticky top-0 h-screen flex flex-col items-center justify-start pt-20 ">

                <div className="flex flex-col w-screen px-24">

                    <h1 className="font-bold text-md text-[#D2D7D9]">
                        Skills
                    </h1>

        
                    <div className="mt-4">
                        <div className="h-0.5 bg-[#D2D7D9] w-full opacity-75"></div>
                        <div className="h-2 bg-[#D2D7D9] blur-md opacity-25 w-full"></div>
                    </div>

                </div>


                <motion.div 
                    layout
                    className="flex flex-col w-full justify-center  px-24 mt-20 gap-6">
                   {skillSections.map((section, index) => (
                        <SkillCard
                        key={section.title}
                        title={section.title}
                        skills={section.skills}
                        active={active === index}
                        />
                    ))}
                </motion.div>



            </div>
        </motion.section>
    );
}