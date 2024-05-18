import NotFound from "@/pages/NotFound/NotFound";
import Portfolio from "@/pages/Portfolio/Portfolio";

const routes = [
  { path: '/', component: Portfolio, name: 'Profile', },
  { path: '*', component: NotFound}
];

export default routes;