import {projects} from "../../data/projects_data.ts"
import ProjectsCard from "../../components/ui/ProjectCard.tsx";

export default function ProjectCardContainer() {
    return (
         <div className="mt-12 flex flex-col gap-24 h-screen items-center justify-center sticky top-0">
                            {
                                projects.map((project, index) => {
                                return ( <ProjectsCard key={index} project={project}/> )
                                })
                            }                       
                            </div>
    );
}   