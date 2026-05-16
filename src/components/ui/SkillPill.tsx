import type { Skill } from "../../types/skills";
import { motion} from "framer-motion"

export default function SkillPill({skill} : {skill: Skill}) {
    return (
        <motion.div 
          className="flex items-center justify-center gap-4 px-6 py-4 rounded-full border w-40  bg-[#D2D7D9] text-[#0B0D0D]"
          initial={{
            opacity: 0,
            scale: 0.9,
            filter:"blur(8px)"
          }}
          animate={{
            opacity:1,
            scale:1,
            filter:"blur(0px)"
          }}
          exit={{
            opacity: 0,
            scale: 0.9,
            filter:"blur(8px)"
          }}
          transition={{
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={{
              scale: 1.12,
              backgroundColor: "#0B0D0D",
              color: "#D2D7D9",
          }}
        >
        
        <img
        src={skill.icon}
        alt={skill.name}
        className="w-4 h-4"
        />

      <span className="text-sm font-md">
        {skill.name}
      </span>

    </motion.div>
  );
}
    