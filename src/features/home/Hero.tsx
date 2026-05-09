import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Hero() {

    const [open,isOpen] = useState(false);
    return (
        <section id="home" className="min-h-screen flex items-center px-8 scroll-mt-20  ">
            <motion.div 
                className="w-full flex flex-row justify-between items-center gap-6"
                initial={{ opacity: 0, y: 20 , filter:"blur(5px)" }}
                animate={{ opacity: 1, y: 0 ,filter:"blur(0px)" }}
                transition={{ duration: 0.8,  ease: "easeOut"}}
            >

                {/* Left side */}
                <div 
                    className="flex-1  justify-start pl-50"
                >
                    <h1
                        className="text-2xl font-bold leading-snug ">
                        Hello, I'm Leon. <br /> <br />
                        Front end developer focused on building <br />
                        clean and responsive web applications.
                    </h1>

                    <div className="relative ">
                        <motion.button 
                            transition={{type:"spring" , stiffness:250, damping:15}}
                            whileHover={{opacity:0.6, scale: 1.25 , y: -4 }}
                            whileTap={{scale: 0.9, y: 0 }}
                            className="mt-10 opacity-45 font-thin"
                            onClick={() => 
                                isOpen((o) => !o) 
                            }
                        >
                            More ...
                        </motion.button>
                        <AnimatePresence>
                            {open && (
                                <motion.div id="more" className="mt-10 opacity-45 font-thin absolute top-full "
                                    initial={{ opacity: 0, y:20 , filter:"blur(10px)"}}
                                    animate={{ opacity: 1, y: 0 , filter:"blur(0)"}}
                                    exit={{opacity:0 , y:20, filter:"blur(10px)"}}
                                    transition={{ duration: 0.5 }}
                                >
                                    <p>
                                    I've been learning frontend development by myself for the past year, focusing on modern JavaScript frameworks and responsive design principles. <br /> <br /> 

                                    Currently looking for an internship or junior position where I can gain real-world experience and continue to develop my skills. I'm eager to learn and collaborate with experienced professionals in the field. 
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                   
                    </div>

                </div>


                {/* Right side */}
                <div className="flex-1 flex justify-end pr-50">

                    <div className="flex flex-col gap-6">
                        <div>
                            <p> Based in Croatia </p>
                            <p className="font-thin"> English / Croatian </p>
                        </div>

                        <div className="flex items-center gap-2">
                            <span className=" relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"/>
                            </span>
                            <p> Available for work </p>
                        </div>

                        <button className="font-semibold text-sm opacity-45 "> Download CV </button>
                    </div>
                    
                </div>

            </motion.div>
        </section>
    );
}