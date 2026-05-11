import type {Project} from "../../types/project.ts"

export default function ProjectCard({project}: {project: Project }) {
    return (
        <div className="flex flex-row justify-between items-center w-full h-full gap-30 sticky top-30">

            <div className="w-1/2 flex justify-center ml-24 border-r border-[#D2D7D9]/50 pr-12 ">
                <img src={project.image} alt={project.title} className="w-full h-full object-fit rounded-3xl" />
            </div>

            <div className="w-1/2 justify-center flex flex-col">
                <h3 className="text-3xl text-semibold">{project.title} </h3>
                <p className="mt-4 opacity-75 font-light"> {project.description} </p>

               <div className="flex gap-2 mt-6 flex-wrap">
                    {project.tags.map((tag) => (
                        <span key={tag} className="text-xs border px-3 py-1.5 rounded-full opacity-75 font-extralight">
                            {tag}
                        </span>
                     ))}
                </div>
            </div>

        </div>
    )
};