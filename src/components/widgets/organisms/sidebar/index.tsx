import profile from "@/assets/profile-image.jpeg";
import ProfileContent from "./profile-content";
import MenuContent from "./menu-content";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { motion } from "framer-motion";
import { CgProfile } from "react-icons/cg";
import { GrLocationPin } from "react-icons/gr";
import { BsFillSuitcaseLgFill } from "react-icons/bs";

export default function SideBar() {
	const navigate = useNavigate();

	const handleClickMenu = (path: string) => {
		navigate(path);
	};

	const windowSize = () => window.innerWidth > 1280;

	useEffect(() => {
		const handleResize = () => {
			setShowSidebar(windowSize());
		};

		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const [showSidebar, setShowSidebar] = useState(windowSize);

	return (
		<>
			<div className="min-w-screen flex justify-end text-sidebar xl:hidden cursor-pointer">
				<IoIosMenu
					className="h-10 w-10"
					onClick={() => setShowSidebar(!showSidebar)}
				/>
			</div>
			{showSidebar && (
				<motion.div
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
							label="Profile"
							onClick={() => handleClickMenu("/")}
						/>
						<MenuContent
							path="/localization"
							icon={<GrLocationPin className="mr-3" />}
							label="Localization"
							onClick={() => handleClickMenu("/localization")}
						/>
						<MenuContent
							path="/career"
							icon={<BsFillSuitcaseLgFill className="mr-3" />}
							label="Career"
							onClick={() => handleClickMenu("/career")}
						/>
					</div>
				</motion.div>
			)}
		</>
	);
}
