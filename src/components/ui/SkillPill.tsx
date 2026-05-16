import type { Skill } from "../../types/skills";
import { motion} from "framer-motion"

export default function SkillPill({skill} : {skill: Skill}) {
    return (
        <motion.div className="flex items-center justify-center gap-4 px-6 py-4 rounded-full border w-40  bg-[#D2D7D9] text-[#0B0D0D]"
          transition={{damping:15, stiffness:250, type:"spring"}}
          whileHover={{scale:1.15,background:"#0B0D0D" , color:"#D2D7D9" }}
          

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
    