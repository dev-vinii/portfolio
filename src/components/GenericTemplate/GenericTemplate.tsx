import { motion } from "framer-motion";
import Icons from "./Icons/Icons";
import Description from "./Description/Description";
import { FaLaptop } from "react-icons/fa";
import { LiaBookSolid } from "react-icons/lia";

export default function GenericTemplate() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="h-2/3 w-2/3 bg-sidebar shadow-2xl shadow-black rounded-xl p-8 flex flex-col"
    >
      <Description />
      <div className="font-bold font-nunito mt-8 text-2xl">Experiência</div>
      <div className="mt-6">
        <ul>
          <li className="font-nunito text-lg p-3 flex items-center">
            <LiaBookSolid className="mr-8"/> Fiap
          </li>
          <li className="font-nunito text-lg p-3 flex items-center">
            <LiaBookSolid className="mr-8"/> Etec Camargo Aranha
          </li>
          <li className="font-nunito text-lg p-3 flex items-center">
            <FaLaptop className="mr-8"/> Gerador de Devs
          </li>
          <li className="font-nunito text-lg p-3 flex items-center">
            <FaLaptop className="mr-8"/> MadeinWeb
          </li>
        </ul>
      </div>
      <div className="mt-auto">
        <Icons />
      </div>
    </motion.div>
  );
}
