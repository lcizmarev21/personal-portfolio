
import ProjectsCard from "../../components/ui/ProjectsCard.tsx";
import {projects} from "../../data/projects_data.ts";
import {useRef, useState} from "react";
import {useMotionValueEvent, motion,useScroll, useTransform,  } from "framer-motion";

export default function Projects() {

    const [current,setCurrent] = useState(0);

    const ref = useRef<HTMLDivElement | null>(null);
    const {scrollYProgress} = useScroll({
        target:ref,
        
    })
    const x = useTransform(scrollYProgress, [0,1], ["0%", "-205%"]);

    useMotionValueEvent(scrollYProgress,"change", (y) => {
        const index = Math.round(y * (projects.length-1));
        setCurrent(index);
    });
    
   

    return (
       <motion.section
            ref={ref}
            id="projects"
            className="h-[300vh]"
            initial={{ opacity: 0, y: 40 , filter:"blur(10px)" }}
            whileInView={{ opacity: 1, y: 0 ,filter:"blur(0px)" }}
            transition={{ duration: 1,  ease: "easeInOut"}}
            viewport={{ once: false , amount: 0.2 }}

        >
            <div className="sticky top-0 h-screen flex flex-col items-center justify-start pt-20">

                <div className="flex flex-col w-screen px-24">
                    <h1 className="font-bold text-md text-[#D2D7D9]">
                        Projects
                    </h1>

        
                    <div className="mt-4">
                        <div className="h-0.5 bg-[#D2D7D9] w-full opacity-75"></div>
                        <div className="h-2 bg-[#D2D7D9] blur-md opacity-25 w-full"></div>
                    </div>
                </div>

                <div className="mt-10 flex items-center justify-between w-full">

                
                    <div className="flex items-center justify-center w-16">
                        <span className="text-[#D2D7D9]/30 text-4xl font-thin">
                            |
                        </span>
                    </div>

                         <div className="overflow-hidden w-full px-10">

                            <motion.div
                                className="flex flex-row gap-20 px-4"
                                style={{ x }}
                            >
                                {projects.map((p, index) => (
                                    <motion.div 
                                        key={index} 
                                        className="min-w-full flex justify-center" 
                                        id={`project-${index}`}
                                        animate={{ scale: current === index? 1 : 0.9, opacity: current === index ? 1 : 0.35, filter: current === index ? "blur(0px)" : "blur(5px)"}}
                                        transition={{ duration: 0.5 , ease:"easeInOut"}}
                                    >
                                        <ProjectsCard project={p} />
                                    </motion.div>
                                ))}
                            </motion.div>

                        </div>

                    
                    <div className="flex items-center justify-center w-16">
                        <span className="text-[#D2D7D9]/30 text-4xl font-thin">
                            &gt;
                        </span>
                    </div>

                </div>

                <div className="flex flex-row gap-10 mt-10 justify-center items-center">
                    {projects.map((_, index) => (
                        <span
                        key={index}
                        className={`rounded-full border px-2 py-2 cursor-pointer ${
                            current === index
                            ? "bg-[#D2D7D9]"
                            : "border-[#D2D7D9]"
                        }`}
                        />
                    ))}
                    </div>

            </div>

        </motion.section>
    );
}