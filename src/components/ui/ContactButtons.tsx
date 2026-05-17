import { motion } from "framer-motion";

export default function ContactButtons() {
  return (
    <div className="grid grid-cols-1 grid-rows-3 gap-4">
      <motion.a
        href="https://github.com/yourname"
        
        whileHover={{
          scale: 1.15,
          y: -4,
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 250, damping: 15 }}
        className="px-6 py-4 border border-white/20 rounded-2xl bg-white w-fit h-fit"
      >
        <img src="/icons/github.svg" className="w-10 h-10" />
      </motion.a>

      <motion.a
        href="https://linkedin.com/in/yourname"
        whileHover={{
          scale: 1.15,
          y: -4,
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 250, damping: 15 }}
        className="px-6 py-4 border border-white/20 rounded-2xl bg-white w-fit h-fit"
      >
        <img src="/icons/linkedin.svg" className="w-10 h-10" />
      </motion.a>

      <motion.a
        href="mailto:youremail@gmail.com"
        whileHover={{
          scale: 1.15,
          y: -4,
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 250, damping: 15 }}
        className="px-6 py-4 border border-white/20 rounded-2xl bg-white w-fit h-fit"
      >
        <img src="/icons/gmail.svg" className="w-10 h-10" />
      </motion.a>

    </div>
  );
}