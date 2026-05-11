
import ProjectCardContainer from "../../components/ui/ProjectCardContainer.tsx";
import {motion} from "framer-motion";

export default function Projects() {
    return (
       <motion.section
            id="projects"
            className="h-[250vh] pt-20 snap-start "
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

               

            </div>

            <ProjectCardContainer />

        </motion.section>
    );
}