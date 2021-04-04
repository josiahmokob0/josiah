import { Link } from "react-router-dom";
import Logo from "../Logo";
import "./index.css";

const Header = () => (
  <header className="container header">
    <Logo />
    <input type="checkbox" id="nav--toggle" className="nav--toggle" />
    <Links />
    <label
      htmlFor="nav--toggle"
      className="nav__label--toggle flex items-center h-full md:hidden "
    >
      <span></span>
    </label>
  </header>
);

const Links = () => (
  <nav className="nav text-green-300">
    <ul className="nav__list">
      <li className="nav__item">
        <Link to="/" className="nav__link">
          Home
        </Link>
      </li>
      <li className="nav__item">
        <Link to="/experience" className="nav__link">
          Experience
        </Link>
      </li>
      <li className="nav__item">
        <Link to="/projects" className="nav__link">
          Projects
        </Link>
      </li>
      <li className="nav__item">
        <Link to="/skills" className="nav__link">
          Skills
        </Link>
      </li>
    </ul>
  </nav>
);

export default Header;
