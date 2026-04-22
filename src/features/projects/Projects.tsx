import ProjectCard from "../../components/ui/ProjectCard.tsx"
import {projects} from "../../data/projects_data.ts"

export default function Projects() {
    return (
       <section
            id="projects"
            className="min-h-screen py-20"
        >
            <div className="w-full mx-auto px-24">

            
                <h1 className="font-bold">
                    Projects
                </h1>

    
                <div className="mt-4">
                    <div className="h-0.5 bg-[#D2D7D9] w-full opacity-75"></div>
                    <div className="h-2 bg-[#D2D7D9] blur-md opacity-25 w-full"></div>
                </div>

                <div className="h-screen flex items-center justify-center">
                    <ProjectCard project={projects[0]} />
                </div>

            </div>
        </section>
    );
}