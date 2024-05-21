import { FaLaptop } from "react-icons/fa";
import { LiaBookSolid } from "react-icons/lia";

export default function List() {
  return (
    <>
      <ul>
        <li className="font-nunito text-lg p-3 flex items-center">
          <LiaBookSolid className="mr-8" /> Fiap
        </li>
        <li className="font-nunito text-lg p-3 flex items-center">
          <LiaBookSolid className="mr-8" /> Etec Camargo Aranha
        </li>
        <li className="font-nunito text-lg p-3 flex items-center">
          <FaLaptop className="mr-8" /> Gerador de Devs
        </li>
        <li className="font-nunito text-lg p-3 flex items-center">
          <FaLaptop className="mr-8" /> MadeinWeb
        </li>
      </ul>
    </>
  );
}
