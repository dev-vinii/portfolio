import Localization from "@/pages/Localization/Localization";
import NotFound from "@/pages/NotFound/NotFound";
import Portfolio from "@/pages/Portfolio/Portfolio";
import { CgProfile } from "react-icons/cg";
import { GrLocationPin } from "react-icons/gr";

const routes = [
  { path: "/", component: Portfolio, name: "Profile", sidebarIcon: CgProfile },
  {
    path: "/localization",
    component: Localization,
    name: "Localization",
    sidebarIcon: GrLocationPin,
  },
  { path: "*", component: NotFound },
];

export default routes;
