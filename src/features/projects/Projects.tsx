import ProjectCard from "../../components/ui/ProjectCard.tsx"
import {projects} from "../../data/projects_data.ts"
import {motion} from "framer-motion";

export default function Projects() {
    return (
       <motion.section
            id="projects"
            className="min-h-screen scroll-mt-20 snap-start"
            initial={{ opacity: 0, y: 20 , filter:"blur(5px)" }}
            whileInView={{ opacity: 1, y: 0 ,filter:"blur(0px)" }}
            transition={{ duration: 0.8,  ease: "easeOut"}}
            viewport={{ once: false , amount: 0.2 }}

        >
            <div className="w-full mx-auto px-24">

            
                <h1 className="font-bold">
                    Projects
                </h1>

    
                <div className="mt-4">
                    <div className="h-0.5 bg-[#D2D7D9] w-full opacity-75"></div>
                    <div className="h-2 bg-[#D2D7D9] blur-md opacity-25 w-full"></div>
                </div>

                <div className="mt-32 flex items-center justify-center gap-12 mb-32">
                    <ProjectCard project={projects[0]} />
                </div>

            </div>
        </motion.section>
    );
}