import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { CgProfile } from "react-icons/cg";
import { GrLocationPin } from "react-icons/gr";
import { BsFillSuitcaseLgFill } from "react-icons/bs";
import profile from "@/assets/profile-image.jpeg";
import ProfileContent from "./profile-content";
import MenuContent from "./menu-content";

export default function SideBar() {
	const navigate = useNavigate();

	const handleClickMenu = (path: string) => {
		navigate(path);
		if (window.innerWidth <= 1280) {
		}
	};

	return (
		<motion.div
			className="max-xl:hidden"
			transition={{ type: "spring", stiffness: 100, damping: 20 }}
			initial={{ x: -300 }}
			animate={{ x: 0 }}
		>
			<div className="flex flex-col bg-sidebar min-h-screen w-80">
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
				<section className="flex flex-col items-center text-white text-base font-oleo mt-auto mb-6">
					<span>(11) 97172-6721</span>
					<span>viniciusLuna@yahoo.com</span>
				</section>
			</div>
		</motion.div>
	);
}
