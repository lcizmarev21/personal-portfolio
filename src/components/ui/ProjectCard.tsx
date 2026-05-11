import type {Project} from "../../types/project.ts"

export default function ProjectCard({project}: {project: Project }) {
    return (
        <div className="flex flex-row justify-between items-center  border rounded w-full h-full p-10 gap-30">

            <div className="w-1/2 flex justify-center ml-24">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover rounded-xl " />
            </div>

            <div className="w-1/2 justify-center flex flex-col">
                <h3 className="text-3xl text-semibold">{project.title} 1 </h3>
                <p className="mt-4 opacity-75"> {project.description} </p>

               <div className="flex gap-2 mt-6 flex-wrap">
                    {project.tags.map((tag) => (
                        <span key={tag} className="text-xs border px-2 py-1 rounded-full opacity-75">
                            {tag}
                        </span>
                     ))}
                </div>
            </div>

        </div>
    )
};