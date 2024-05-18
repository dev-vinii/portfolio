import NotFound from "@/pages/NotFound/NotFound";
import Portfolio from "@/pages/Portfolio/Portfolio";

const routes = [
  { path: '/', component: Portfolio },
  { path: '*', component: NotFound }
];

export default routes;