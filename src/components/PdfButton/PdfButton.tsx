import { FaDownload } from "react-icons/fa6";

export default function PdfButton() {
  
  const downloadCV = () => {
  const resume = document.createElement("a");
    const fileUrl = "src/assets/pdf/ViniciusLuna.pdf"
    resume.href = fileUrl;
    resume.download = "ViniciusLuna.pdf";
    document.body.appendChild(resume);
    resume.click();
    document.body.removeChild(resume);
  }
  
  return (
    <div>
      <button onClick={downloadCV} className="bg-sidebar border-none font-nunito flex gap-2 items-center 
      justify-center hover:border-sidebar focus:outline-none transition-all duration-150">
        <FaDownload />
        Baixar CV
      </button>
    </div>
  );
} 
