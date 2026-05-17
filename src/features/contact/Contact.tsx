
import {motion} from "framer-motion";

export default function Contact() {

    const text = "Let's build something together!";
    return (
       <motion.section
            id="contact"
            className="min-h-[90vh] pt-20  "
            initial={{ opacity: 0, y: 40 , filter:"blur(10px)" }}
            whileInView={{ opacity: 1, y: 0 ,filter:"blur(0px)" }}
            transition={{ duration: 1,  ease: "easeInOut"}}
            viewport={{ once: false , amount: 0.2 }}
        >
            <div>
                <div className="w-screen flex flex-col px-24 ">

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
                            className="text-2xl font-semibold leading-tight flex flex-wrap gap-x-1"
                        >
                            {text.split(" ").map((word, index) => (
                                    <motion.span
                                        key={index}
                                        className="
                                            mr-4 inline-block
                                            text-transparent
                                            bg-clip-text
                                            bg-size-[200%_100%]
                                            bg-[linear-gradient(110deg,#666_35%,#fff_50%,#666_65%)]
                                        "
                                        animate={{  
                                            backgroundPosition: [
                                                "200% , 0%",
                                                "-200%, 0%"
                                            ]
                                        }}
                                        transition={{
                                            duration: 6,
                                            ease: "linear",
                                            repeat:Infinity,
                                            repeatType:"loop"
                                        }}
                                        >
                                        {word}
                                    </motion.span>
                            ))}
                        </h2>

                        <div className="mt-20 flex flex-col">

                             <form
                                className="flex flex-col gap-4 items-start justify-center"
                            >
                                <input
                                    className="bg-transparent w-70 text-[#D2D7D9] placeholder-[#D2D7D9] font-light rounded-full px-10 py-3 border border-[#D2D7D9]/50"
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                />

                                <input
                                    className="bg-transparent w-70 text-[#D2D7D9] placeholder-[#D2D7D9] font-light rounded-full px-10 py-3 border border-[#D2D7D9]/50"
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                />

                                <textarea
                                    className="bg-transparent text-[#D2D7D9] placeholder-[#D2D7D9] font-light rounded-2xl px-10  py-6 h-70 w-170  overflow-y-auto resize-none border border-[#D2D7D9]/50 "
                                    name="message"
                                    placeholder="Message"
                                />

                                <button 
                                    type="submit"
                                    className="border border-[#D2D7D9] text-[#0B0D0D] bg-[#D2D7D9] py-2 px-4 w-40 rounded-full ml-65 hover:bg-[#0B0D0D] hover:text-[#D2D7D9]">
                                        Send
                                </button>
                            </form>

                        </div>


                    </div>

                    <div className="flex flex-col items-center justify-center mr-40">

                        <div className="flex-row flex mb-10 gap-10 ">
                                <img src="icons/github.svg" className="w-5 h-5" />
                                <span> :</span>
                                <span> phone number </span>
                        </div>


                        <div className="grid grid-cols-1 grid-rows-3 gap-4   ">
                            <a
                                href="https://github.com/yourname" 
                                target="_blank"
                                className="px-6 py-4 border border-white/20 rounded-2xl text-[#D2D7D9] hover:bg-white hover:text-black transition w-fit"
                            >
                                <img src="/icons/github.svg" className="w-10 h-10" />
                            </a>

                            <a
                                href="https://linkedin.com/in/yourname"
                                target="_blank"
                                className="px-6 py-4 border border-white/20 rounded-2xl text-[#D2D7D9] hover:bg-white hover:text-black transition w-fit "
                            >
                                <img src="/icons/linkedin.svg" className="w-10 h-10 " />
                            </a>

                            <a
                                href="mailto:youremail@gmail.com"
                                className="px-6 py-4 border border-white/20 rounded-2xl text-[#D2D7D9] hover:bg-white hover:text-black transition w-fit"
                            >
                                <img  src="/icons/gmail.svg" className="w-10 h-10 " />
                            </a>
                        </div>
                    </div>


                </div>

            </div>
        </motion.section>
    );
}