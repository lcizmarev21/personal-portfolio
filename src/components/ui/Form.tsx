import SendButton from "./SendButton";

export default function Form(){
    return(
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

            <SendButton />
            
        </form>
    )
}