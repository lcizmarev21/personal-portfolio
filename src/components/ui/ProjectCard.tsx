import type {Project} from "../../types/project.ts"

export default function ProjectCard({project}: {project: Project }) {
    return (
        <div className="flex flex-row gap-48">

            <div className="w-1/2">
                <img  />
            </div>

            <div className="w-1/2">
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