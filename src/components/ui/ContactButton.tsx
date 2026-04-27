import type { Contact } from "../../types/contact";
export default function ContactButton({ contact }: { contact: Contact }) {
    return (
        <a
            href={contact.href}
            target="_blank"
            className="flex flex-row items-center gap-2  duration-300 border-2 rounded-md px-4 py-4 border-[#D2D7D9] opacity-75"
        >
            <div  className="bg-[#D2D7D9] blur-md opacity-25 " />
            <img src={contact.icon} alt={contact.label} className="w-5 h-5" />
        </a>
    );
}