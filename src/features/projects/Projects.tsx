
import ProjectsCard from "../../components/ui/ProjectsCard.tsx";
import {motion} from "framer-motion";

export default function Projects() {
    return (
       <motion.section
            id="projects"
            className="h-screen pt-20 "
            initial={{ opacity: 0, y: 20 , filter:"blur(5px)" }}
            whileInView={{ opacity: 1, y: 0 ,filter:"blur(0px)" }}
            transition={{ duration: 0.8,  ease: "easeOut"}}
            viewport={{ once: false , amount: 0.2 }}

        >
            <div className="w-full mx-auto px-24">

            
                <h1 className="font-bold text-md text-[#D2D7D9]">
                    Projects
                </h1>

    
                <div className="mt-4">
                    <div className="h-0.5 bg-[#D2D7D9] w-full opacity-75"></div>
                    <div className="h-2 bg-[#D2D7D9] blur-md opacity-25 w-full"></div>
                </div>

                <div className="mt-10 flex items-center justify-between w-full">

                
                    <div className="flex items-center justify-center w-16">
                        <span className="text-[#D2D7D9]/30 text-4xl font-thin">
                            |
                        </span>
                    </div>

                    
                    <div className="flex-1 px-6">
                        <ProjectsCard />
                    </div>

                    
                    <div className="flex items-center justify-center w-16">
                        <span className="text-[#D2D7D9]/30 text-4xl font-thin">
                            &gt;
                        </span>
                    </div>

                </div>

                <div className="flex flex-row gap-10 mt-10 justify-center items-center">
                    <span className="rounded-full border border-[#D2D7D9] bg-[#D2D7D9]  px-2 py-2  cursor-pointer" />
                    <span className="rounded-full border border-[#D2D7D9]  px-2 py-2  cursor-pointer" />
                    <span className="rounded-full border border-[#D2D7D9]  px-2 py-2  cursor-pointer" />
                </div>

            </div>

        </motion.section>
    );
}