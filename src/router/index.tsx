import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "@/layouts/app";
import Profile from "@/components/views/profile";
import Localization from "@/components/views/location";
import NotFound from "@/components/views/not-found";
import Career from "@/components/views/career";

const routes = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		children: [
			{ path: "/", element: <Profile /> },
			{
				path: "/localization",
				element: <Localization />,
			},
			{
				path: "career",
				element: <Career />,
			},
			{
				path: "*",
				element: <NotFound />,
			},
		],
	},
]);

export default routes;
