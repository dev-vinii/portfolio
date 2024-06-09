
import Location from "@/pages/Location/Location";
import NotFound from "@/pages/NotFound/NotFound";
import Profile from "@/pages/Profile/Profile";
import { CgProfile } from "react-icons/cg";
import { GrLocationPin } from "react-icons/gr";
import { BsFillSuitcaseLgFill } from "react-icons/bs";
import Career from "@/pages/Carrer/Career";

const routes = [
  { path: "/", component: Profile, name: "Profile", sidebarIcon: CgProfile },
  {
    path: "/location",
    component: Location,
    name: "Location",
    sidebarIcon: GrLocationPin,
    },
    {
    path: "/career",
    component: Career,
    name: "Career",
    sidebarIcon: BsFillSuitcaseLgFill,
  },
  { path: "*", component: NotFound },
];

export default routes;
