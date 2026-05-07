import type {Project} from "../../types/project.ts"

export default function ProjectCard({project}: {project: Project }) {
    return (
        <div className="flex flex-row justify-between items-center gap-6 p-6 border rounded w-full h-auto">

            <div className="w-1/2 items-start flex">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            </div>

            <div className="w-1/2 items-center flex flex-col">
                <h3 className="text-3xl text-semibold">{project.title} 1 </h3>
                <p className="mt-4"> {project.description} </p>

               <div className="flex gap-2 mt-4 flex-wrap">
                    {project.tags.map((tag) => (
                        <span key={tag} className="text-xs border px-2 py-1 rounded">
                            {tag}
                        </span>
                     ))}
                </div>
            </div>

        </div>
    )
};