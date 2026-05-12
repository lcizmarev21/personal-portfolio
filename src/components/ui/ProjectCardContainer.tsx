import {projects} from "../../data/projects_data.ts"
import ProjectsCard from "../../components/ui/ProjectCard.tsx";

export default function ProjectCardContainer() {
    return (
         <div className="mt-30 flex flex-row justify-between gap-25 items-center  ">
            {
                projects.map((project, index) => {
                return ( <ProjectsCard key={index} project={project}/> )
                })
            }                       
        </div>
    );
}   