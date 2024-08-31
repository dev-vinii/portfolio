import { Header } from "@/components/widgets/organisms/header";
import SideBar from "@/components/widgets/organisms/sidebar";
import { Outlet } from "react-router-dom";

function AppLayout() {
	return (
		<main className="flex h-screen w-screen max-xl:flex-col">
			<Header />
			<SideBar />
			<Outlet />
		</main>
	);
}

export { AppLayout };
