import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function GenericTemplate(props: {
    children: ReactNode
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-2/3 w-2/3 bg-sidebar shadow-2xl shadow-black rounded-xl p-8 flex flex-col"
    >
        {props.children}
    </motion.div>
  );
}
