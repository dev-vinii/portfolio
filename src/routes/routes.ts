import NotFound from "@/pages/NotFound/NotFound";
import Portfolio from "@/pages/Portfolio/Portfolio";
import { CgProfile } from 'react-icons/cg';


const routes = [
  { path: '/', component: Portfolio, name: 'Profile', sidebarIcon: CgProfile},
  { path: '*', component: NotFound}
];

export default routes;