import PortfolioTemplate from "@/pages/Portfolio/PortfolioTemplate/PortfolioTemplate";
import PdfButton from '../../components/PdfButton/PdfButton';

export default function Portfolio() {
    return (
        <div className="flex justify-center items-center min-w-full h-full">
            <PortfolioTemplate />
            <div className="absolute right-5 top-5">
                <PdfButton />
            </div>
        </div>
    )
}