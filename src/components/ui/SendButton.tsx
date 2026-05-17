import {motion} from "framer-motion";

export default function SendButton(){
    return(
        <motion.button 
        type="submit"
        className="border-[#D2D7D9] text-[#0B0D0D] bg-[#D2D7D9] py-2 px-4 w-40 rounded-full ml-65 font-medium"
        transition={{type:"spring" , stiffness:250, damping:15}}
        whileHover={{ scale: 1.2 , y: -4 }}
        whileTap={{scale: 0.9, y: 0 }}
        >
            Send
         </motion.button>
    )
}