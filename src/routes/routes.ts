import Location from "@/pages/Location/Location";
import NotFound from "@/pages/NotFound/NotFound";
import Profile from "@/pages/Profile/Profile";
import { CgProfile } from "react-icons/cg";
import { GrLocationPin } from "react-icons/gr";

const routes = [
  { path: "/", component: Profile, name: "Profile", sidebarIcon: CgProfile },
  {
    path: "/location",
    component: Location,
    name: "Location",
    sidebarIcon: GrLocationPin,
  },
  { path: "*", component: NotFound },
];

export default routes;
