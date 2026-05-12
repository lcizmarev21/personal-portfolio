export default function ProjectsCard() {
    return (
        <div className="flex flex-row  items-center justify-between w-full h-165 gap-10 bg-[#0B0D0D]/70 rounded-3xl p-8">

            <div className="bg-gray-400 rounded-3xl h-full w-1/2 ">
                <img src="/images/project1.png" alt="Project 1" className="w-64 h-40 object-cover rounded-lg " />
            </div>

            <div  className="bg-[#D2D7D9]/50 rounded-3xl h-full w-px" />

            

            <div className="flex flex-col gap-4 w-1/2 h-full justify-center items-start">
            
                <h2 className="text-3xl font-semibold mb-4 text-[#D2D7D9]">
                    Project Title
                </h2>

                <p className="text-[#D2D7D9] text-sm font-thin">
                    Project description goes here.
                </p>

                <div className="flex flex-wrap gap-4 mt-4">
                    <span className="px-4 py-2 text-[#D2D7D9] rounded-full border border-[#D2D7D9] text-xs font-thin">
                        View Code
                    </span>
                </div>
                    
            </div>
        </div>
    )
}