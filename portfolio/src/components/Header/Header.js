import React from "react";
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
    <li>
      <a href="/home">Home</a>
    </li>
    <li>
      <a href="/about">About</a>
    </li>
    <li>
      <a href="/contact">Contact</a>
    </li>
    <li>
      <a href="/blog">Blog</a>
    </li>
  </div>
);

export default Header;
