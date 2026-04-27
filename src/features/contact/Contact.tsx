import ContactButton from "../../components/ui/ContactButton.tsx";

export default function Contact() {
    return (
       <section
            id="contact"
            className="min-h-screen"
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
                    <ContactButton contact={{ href: "mailto:example@example.com", icon: "/icons/email.svg", label: "Email" }} />
                    <ContactButton contact={{ href: "https://linkedin.com/in/example", icon: "/icons/linkedin.svg", label: "LinkedIn" }} />
                    <ContactButton contact={{ href: "https://github.com/example", icon: "/icons/github.svg", label: "GitHub" }} />
                </div>

                

            </div>
        </section>
    );
}