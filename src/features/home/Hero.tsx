import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section id="home" className="min-h-screen flex items-center px-8 scroll-mt-20">
            <motion.div 
                className="w-full flex flex-row justify-between items-center gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >

                {/* Left side */}
                <div 
                    className="flex-1  justify-start pl-50"
                >
                    <h1
                        className="text-2xl font-bold leading-snug">
                        Hello, I'm Leon. <br /> <br />
                        Front end developer focused on building <br />
                        clean and responsive web applications.
                    </h1>

                    <motion.button 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="mt-10 opacity-45 font-thin"
                    >
                        More ...
                    </motion.button>
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