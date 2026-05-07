

import {motion} from "framer-motion";
import {useActiveSection} from "../../animations/hooks/useActiveSection";

const links = ["home", "projects", "skills", "contact"];

export default function Navbar() {

    

    const active = useActiveSection(links);

    return (
        <nav className="fixed top-0 left-0 w-full flex justify-end px-8 py-4 bg-[#0B0D0D] z-50">
            <ul className="flex flex-row gap-12 text-lg relative"> 
                {links.map((item) => (
                    <li key={item} className="relative">
                        <a
                            href={`#${item}`}
                            className={`opacity-75 hover:opacity-100 transition-opacity duration-300 ${
                                active === item
                                ? " font-bold opacity-100"
                                : " font-normal opacity-60"
                            }`}
                        >
                            {item.charAt(0).toUpperCase() + item.slice(1)}
                        </a>
                    

                        {active === item && (
                            <motion.div
                                layoutId="underline"
                                className="absolute -bottom-1 left-0 right-0 h-0.75  bg-[#D2D7D9] rounded scale-x-125 shadow-md "
                                transition={{
                                    type: "spring",
                                    stiffness: 500,
                                    damping: 50,
                                }}
                            />
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
}