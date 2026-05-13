
import {motion} from "framer-motion";

export default function Contact() {
    return (
       <motion.section
            id="contact"
            className="min-h-screen   pt-20 "
            initial={{ opacity: 0, y: 20 , filter:"blur(5px)" }}
            whileInView={{ opacity: 1, y: 0 ,filter:"blur(0px)" }}
            transition={{ duration: 0.8,  ease: "easeOut"}}
            viewport={{ once: false , amount: 0.2 }}
        >
            <div>
                <div className="w-screen flex flex-col px-24">

                    <h1 className="font-bold">
                        Contact
                    </h1>
        
                    <div className="mt-4">
                        <div className="h-0.5 bg-[#D2D7D9] w-full opacity-75"></div>
                        <div className="h-2 bg-[#D2D7D9] blur-md opacity-25 w-full"></div>
                    </div>

                </div>

                <div className="mt-30 flex flex-row items-center justify-between  px-36">

                    <div className="flex-col flex items-center justify-center">

                        <h2 
                            className="text-2xl font-semibold"
                        >
                            Let's build something together!
                        </h2>

                        <div className="mt-20 flex flex-col">

                             <form
                                className="flex flex-col gap-4"
                            >
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your name"
                                />

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your email"
                                />

                                <textarea
                                    name="message"
                                    placeholder="Message"
                                />

                                <button type="submit">
                                    Send
                                </button>
                            </form>

                        </div>


                    </div>


                    <div className="grid grid-cols-1 grid-rows-3 gap-4">
                        <a
                            href="https://github.com/yourname"
                            target="_blank"
                            className="px-6 py-4 border border-white/20 rounded-2xl text-[#D2D7D9] hover:bg-white hover:text-black transition"
                        >
                            GitHub
                        </a>

                        <a
                            href="https://linkedin.com/in/yourname"
                            target="_blank"
                            className="px-6 py-4 border border-white/20 rounded-2xl text-[#D2D7D9] hover:bg-white hover:text-black transition"
                        >
                            LinkedIn
                        </a>

                        <a
                            href="mailto:youremail@gmail.com"
                            className="px-6 py-4 border border-white/20 rounded-2xl text-[#D2D7D9] hover:bg-white hover:text-black transition"
                        >
                            Email
                        </a>
                    </div>


                </div>

            </div>
        </motion.section>
    );
}