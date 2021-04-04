import { Link } from "react-router-dom";
import Logo from "../Logo";
import "./index.css";

const Header = () => (
  <div className="container">
    <div className="flex justify-between">
      <Logo />
      <Links />
    </div>
  </div>
);

const Links = () => (
  <div className="links flex justify-around gap-x-3 text-green-500">
    <Link to="/">Home</Link>
    <Link to="/experience">Experience</Link>
    <Link to="/projects">Projects</Link>
    <Link to="/skills">Skills</Link>
  </div>
);

export default Header;
