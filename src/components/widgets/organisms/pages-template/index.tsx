import { ReactNode } from "react";

interface PageTemplateProps {
	title: string;
	children: ReactNode;
	padding: boolean;
}

export function PageTemplate({ children, padding, title }: PageTemplateProps) {
	return (
		<div className="flex w-full h-full items-center max-sm:flex-col max-sm:justify-center">
			<div
				className="flex justify-center decoration-black 
        font-oleo text-7xl w-1/2 border-b-2 border-black max-sm:border-0 max-sm:text-3xl max-sm:mb-4"
			>
				{title}
			</div>
			<div
				className={`flex justify-center border-2 border-black 
        w-3/6 h-2/4 bg-white mr-10 ${
					padding && "p-4"
				} font-taviraj text-lg max-sm:mr-0 max-sm:h-auto max-sm:text-base max-sm:w-5/6 ${
					padding && "xl:p-16"
				}`}
			>
				<div className="flex flex-col justify-between w-full h-full">
					{children}
				</div>
			</div>
		</div>
	);
}
