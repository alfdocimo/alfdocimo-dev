import { getSelectAbout, getSelectLanding } from "../selectors";
import { Landing, About } from "../components/Content";

const routes = [
  {
    path: ["/", "/home"],
    name: "Home",
    Component: Landing,
    selector: getSelectLanding,
  },
  {
    path: "/about-me",
    name: "About",
    Component: About,
    selector: getSelectAbout,
  },
];

export default routes;
