
import {motion} from "framer-motion";
import Form from "../../components/ui/Form";
import ContactButtons from "../../components/ui/ContactButtons";

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

                        <div 
                            className="mt-20 flex flex-col"
                        >
                            
                            <Form />
                        
                        </div>


                    </div>

                    <div className="flex flex-col items-center justify-center mr-40">

                        <div className="flex-row flex mb-20 gap-10 ">
                                <img src="icons/github.svg" className="w-5 h-5" />
                                <span className="font-bold"> : </span>
                                <span className="font-bold text-l"> +385 199 9310 123 </span>
                        </div>


                        <ContactButtons />

                    </div>


                </div>

            </div>
        </motion.section>
    );
}