import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Hero() {

    const [open,isOpen] = useState(false);

    const [language,setLanguage ] = useState("en");
    return (
        <section id="home" className="min-h-screen flex items-center px-8  snap-start "> 
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
                            className="mt-10 opacity-45 font-thin cursor-pointer"
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

                    <div className="flex flex-col gap-5">

                       
                        <p> Based in<span className="font-bold mx-2">Croatia</span>.</p>

                        <div className="flex items-center gap-2 mt-1 text-sm">

                            <motion.button
                                onClick={() => setLanguage("en")}
                                animate={{
                                    opacity: language === "en" ? 1 : 0.4,
                                    fontWeight: language === "en" ? 900 : 400,
                                }}
                                transition={{type:"spring" , stiffness:250, damping:25}}
                                whileHover={{opacity:0.6, scale: 1.1 , y: -4 }}
                                whileTap={{scale: 0.9, y: 0 }}
                                className="relative cursor-pointer"
                            >
                                Eng

                                {language === "en" &&  (
                                    <motion.div
                                        layoutId="languageIndicator"
                                        className="absolute left-0 right-0 -bottom-1 h-0.5 bg-[#D2D7D9]"
                                        transition={{
                                            type:"spring",
                                            stiffness: 300,
                                            damping: 25,
                                        }}
                                    />
                                )}

                            </motion.button>

                            <span> / </span>
                            
                            <motion.button
                                onClick={() => setLanguage("hr")}
                                animate={{
                                    opacity: language === "hr" ? 1 : 0.4,
                                    fontWeight: language === "hr" ? 900 : 400,
                                }}
                                transition={{type:"spring" , stiffness:250, damping:25}}
                                whileHover={{opacity:0.6, scale: 1.1 , y: -4 }}
                                whileTap={{scale: 0.9, y: 0 }}
                                className="relative cursor-pointer"
                            >
                                Hr

                                {language === "hr" &&  (
                                    <motion.div
                                        layoutId="languageIndicator"
                                        className="absolute left-0 right-0 -bottom-1 h-0.5  bg-[#D2D7D9]"
                                        transition={{
                                            type:"spring",
                                            stiffness: 300,
                                            damping: 25,
                                        }}
                                    />
                                )}
                            </motion.button>

                        </div>

                            
                       

                        <div className="flex items-center gap-5 mt-5">
                            <div className="relative flex items-center justify-center">

                                <motion.div
                                    animate={{
                                        scale: [1 , 1.6 ,1],
                                        opacity: [0.3, 0.6 , 0.3]
                                    }}
                                    transition={{
                                        duration: 5,
                                        repeat: Infinity, 
                                        ease: "easeInOut"

                                    }}

                                    className="absolute h-4 w-4 rounded-full bg-green-400"
                                />

                                <div className="h-3 w-3 rounded-full bg-green-400 opacity-30" />

                            </div>

                            <p className="text-sm">
                                Available for work
                            </p>

                        </div>

                        <motion.button
                            initial={{
                                opacity: 0.45,
                                y: 0,
                            }}

                            animate={{
                                opacity: 0.45,
                                y: 0,
                            }}

                            whileHover={{
                                opacity: 1,
                                y: -2,
                                scale: 1.03,
                            }}

                            whileTap={{
                                scale: 0.97,
                                y: 0,
                            }}

                            transition={{
                                duration: 0.25,
                                ease: "easeInOut",
                            }}

                            className="font-semibold text-sm cursor-pointer"
                        >
                            Download CV
                        </motion.button>

                    </div>
                    
                </div>

            </motion.div>
        </section>
    );
}