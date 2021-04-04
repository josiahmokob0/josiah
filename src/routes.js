import { Route, HashRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import PersonalProjects from "./components/PersonalProjects";
import Skills from "./components/Skills";

import "antd/dist/antd.css";
import "./styles.css";

const Routes = () => (
  <Router>
    <Header />
    <Route path="/experience" component={Experience} />
    <Route path="/projects" component={PersonalProjects} />
    <Route path="/skills" component={Skills} />
    <Route exact path="/" component={Hero} />
  </Router>
);

export default Routes;
