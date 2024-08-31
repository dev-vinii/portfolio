export default function Career() {
	const careerData = [
		{
			company:
				"ETEC Professor Camargo Aranha - Análise e Desenvolvimento de Sistemas",
			date: "2020 - 2021",
		},
		{
			company: "Gerador de Devs - Desenvolvimento front end ",
			date: "2023",
		},
		{
			company: "Faculdade de informática e  Administração Paulista",
			date: "2023 - momento",
		},
		{
			company: "MadeinWeb",
			date: "2024 - momento",
		},
	];

	return (
		<div className="flex w-full h-full items-center max-sm:flex-co justify-center">
			<div className="flex flex-col justify-between h-2/3 w-4/5 border-l-2 border-black p-12">
				{careerData.map((item, i) => (
					<div className="flex items-center justify-between py-5" key={i}>
						<div className="flex items-center gap-9">
							<div className="h-3 w-3 bg-black rounded-full" />
							<span>{item.company}</span>
						</div>
						<span>{item.date}</span>
					</div>
				))}
			</div>
		</div>
	);
}
