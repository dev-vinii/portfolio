import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { motion } from "framer-motion";
import { CgProfile } from "react-icons/cg";
import { GrLocationPin } from "react-icons/gr";
import { BsFillSuitcaseLgFill } from "react-icons/bs";
import profile from "@/assets/profile-image.jpeg";
import ProfileContent from "./profile-content";
import MenuContent from "./menu-content";

export default function SideBar() {
	const navigate = useNavigate();
	const sidebarRef = useRef<HTMLDivElement>(null);
	const [showSidebar, setShowSidebar] = useState(window.innerWidth > 1280);

	const handleClickMenu = (path: string) => {
		navigate(path);
	};

	const handleClickOutside = (event: MouseEvent) => {
		if (
			sidebarRef.current &&
			!sidebarRef.current.contains(event.target as Node)
		) {
			setShowSidebar(false);
		}
	};

	useEffect(() => {
		window.addEventListener("resize", () =>
			setShowSidebar(window.innerWidth > 1280)
		);
		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			window.removeEventListener("resize", () =>
				setShowSidebar(window.innerWidth > 1280)
			);
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<>
			<div className="min-w-screen flex justify-end text-sidebar xl:hidden cursor-pointer">
				<IoIosMenu
					className={`h-10 w-10 ${showSidebar && "absolute right-1"}`}
					onClick={() => setShowSidebar(!showSidebar)}
				/>
			</div>
			{showSidebar && (
				<motion.div
					ref={sidebarRef}
					initial={{ position: "absolute", left: -400 }}
					animate={{
						position: "absolute",
						left: 0,
						transitionEnd: { position: "unset" },
					}}
					transition={{ duration: 0.7 }}
				>
					<div className="bg-sidebar min-h-screen w-80 z-30 max-xl:absolute max-xl:left-0 max-xl:top-0">
						<ProfileContent image={profile} name="Vinicius Luna" />
						<MenuContent
							path="/"
							icon={<CgProfile className="mr-3" />}
							label="Perfil"
							onClick={() => handleClickMenu("/")}
						/>
						<MenuContent
							path="/localization"
							icon={<GrLocationPin className="mr-3" />}
							label="Local"
							onClick={() => handleClickMenu("/localization")}
						/>
						<MenuContent
							path="/career"
							icon={<BsFillSuitcaseLgFill className="mr-3" />}
							label="Carreira"
							onClick={() => handleClickMenu("/career")}
						/>
					</div>
				</motion.div>
			)}
		</>
	);
}
