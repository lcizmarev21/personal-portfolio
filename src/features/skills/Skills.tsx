import SkillLayout from "../../components/ui/SkillLayout.tsx";

export default function Skills() {
    return (
       <section
            id="skills"
            className="min-h-screen"
        >
            <div className="w-full mx-auto px-24">

            
                <h1 className="font-bold">
                    Skills
                </h1>

    
                <div className="mt-4">
                    <div className="h-0.5 bg-[#D2D7D9] w-full opacity-75"></div>
                    <div className="h-2 bg-[#D2D7D9] blur-md opacity-25 w-full"></div>
                </div>

                <div className="mt-10">
                    <SkillLayout />
                </div>

            </div>
        </section>
    );
}