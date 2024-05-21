import Icons from "./Icons/Icons";
import Description from "./Description/Description";
import List from "./List/List";
import GenericTemplate from "../../../components/GenericTemplate/GenericTemplate";
import { SiTypescript } from "react-icons/si";
import { SiNestjs } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

export default function PortfolioTemplate() {
  return (
    <GenericTemplate>
      <Description />
      <div className="font-bold font-nunito mt-8 text-2xl">Experiência</div>
      <div className="mt-6">
        <List />
      </div>
      <div className="mt-8 flex items-center gap-7">
        <SiTypescript className="h-10 w-10" />
        <SiNestjs className="h-10 w-10" />
        <FaReact className="h-10 w-10" />
        <FaVuejs className="h-10 w-10" />
        <FaCss3Alt className="h-10 w-10" />
        <RiTailwindCssFill className="h-10 w-10" />
      </div>
      <div className="mt-8">
        <Icons />
      </div>
    </GenericTemplate>
  );
}
