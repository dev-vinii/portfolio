import { useLocation, Link } from "react-router-dom";

function Header() {
	const location = useLocation();

	return (
		<header className="hidden max-xl:flex p-3 font-oleo text-lg ml-auto">
			<ul className="flex gap-10">
				<li
					className={`border-b-2 ${
						location.pathname === "/" ? "border-black" : "border-transparent"
					}`}
				>
					<Link to="/">Perfil</Link>
				</li>
				<li
					className={`border-b-2 ${
						location.pathname === "/localization"
							? "border-black"
							: "border-transparent"
					}`}
				>
					<Link to="/localization">Local</Link>
				</li>
				<li
					className={`border-b-2 ${
						location.pathname === "/career"
							? "border-black"
							: "border-transparent"
					}`}
				>
					<Link to="/career">Carreira</Link>
				</li>
			</ul>
		</header>
	);
}

export { Header };
