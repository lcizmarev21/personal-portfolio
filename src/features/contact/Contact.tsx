import ContactButton from "../../components/ui/ContactButton.tsx";
import {motion} from "framer-motion";

export default function Contact() {
    return (
       <motion.section
            id="contact"
            className="min-h-screen scroll-mt-20 snap-start"
            initial={{ opacity: 0, y: 20 , filter:"blur(5px)" }}
            whileInView={{ opacity: 1, y: 0 ,filter:"blur(0px)" }}
            transition={{ duration: 0.8,  ease: "easeOut"}}
            viewport={{ once: false , amount: 0.2 }}
        >
            <div className="w-full mx-auto px-24">

            
                <h1 className="font-bold">
                    Contact
                </h1>

    
                <div className="mt-4">
                    <div className="h-0.5 bg-[#D2D7D9] w-full opacity-75"></div>
                    <div className="h-2 bg-[#D2D7D9] blur-md opacity-25 w-full"></div>
                </div>

                <div className=" mt-32 flex items-center justify-center gap-12  ">
                    <ContactButton contact={{ link: "mailto:example@example.com", icon: "/icons/gmail.svg", label: "Email" }} />
                    <ContactButton contact={{ link: "https://linkedin.com/in/example", icon: "/icons/linkedin.svg", label: "LinkedIn" }} />
                    <ContactButton contact={{ link: "https://github.com/example", icon: "/icons/github.svg", label: "GitHub" }} />
                </div>

                

            </div>
        </motion.section>
    );
}