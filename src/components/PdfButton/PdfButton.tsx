import { FaDownload } from "react-icons/fa6";

export default function PdfButton() {
  return (
    <div>
      <button className="bg-sidebar border-none font-nunito flex gap-2 items-center 
      justify-center hover:border-sidebar focus:outline-none transition-all duration-150">
        <FaDownload />
        Baixar CV
      </button>
    </div>
  );
} 
