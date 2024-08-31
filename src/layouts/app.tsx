import SideBar from "@/components/widgets/organisms/sidebar";
import { Outlet } from "react-router-dom";

function AppLayout() {
	return (
		<main className="flex h-screen w-screen">
			<SideBar />
			<Outlet />
		</main>
	);
}

export { AppLayout };
