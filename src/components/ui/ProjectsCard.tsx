import type {Project} from "../../types/project.ts";

export default function ProjectsCard({ project }: { project: Project }) {
    return (
        <div className="flex flex-row  items-center justify-between w-full h-165 gap-10 bg-[#0B0D0D]/70 rounded-3xl p-8">

            <div className="bg-gray-400 rounded-3xl h-full w-1/2  ">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover rounded-lg " />
            </div>

            <div  className="bg-[#D2D7D9]/50 rounded-3xl h-full w-px" />

            

            <div className="flex flex-col gap-4 w-1/2 h-full justify-center items-start">

                <h2 className="text-3xl font-semibold mb-4 text-[#D2D7D9]">
                    {project.title}
                </h2>

                <p className="text-[#D2D7D9] text-sm font-thin">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-4 justify-start items-center">
                    {project.tags.map((tag) => (

                        <div 
                            key={tag}
                            className="flex flex-col items-center justify-center px-4 py-2 rounded-full border-2 border-[#D2D7D9]/70 w-40 ">
                            <span
                                className="text-[#D2D7D9] text-xs font-light "
                            >
                                {tag}
                            </span>
                        </div>
                    ))}
                </div>
                    
            </div>
        </div>
    )
}