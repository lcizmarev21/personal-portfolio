
import {motion} from "framer-motion";
import { useActiveSection } from "../../utils/useActiveSection";

const links = ["home", "projects", "skills", "contact"];

export default function Navbar() {

    

    const active = useActiveSection(links);

    return (
        <nav className="fixed top-0 left-0 w-full flex justify-end px-8 py-4  z-50 bg-none backdrop-blur-xs ">
            <ul className="flex flex-row gap-12 text-lg relative mr-4"> 
                {links.map((item) => (
                    <li key={item} className="relative">
                        <a
                            href={`#${item}`}
                            className={`opacity-75 hover:opacity-100 transition-opacity duration-300 text-xs ${
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
                                className="absolute -bottom-px left-0 right-0 h-px bg-[#D2D7D9] rounded scale-x-150 backdrop-blur-sm "
                                transition={{
                                    type: "spring",
                                    stiffness: 500,
                                    damping: 70,
                                    
                                }}
                            />
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
}