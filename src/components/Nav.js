import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const navStyle = {
    color: "white",
    textDecoration: "none",
  };
  return (
    <nav>
      <h1>Logo</h1>
      <ul className="nav-links">
        <Link className="fancy-links" to="/" style={navStyle}>
          <li>Home</li>
        </Link>
        <Link className="fancy-links" to="/about" style={navStyle}>
          <li>About</li>
        </Link>
        <Link className="fancy-links" to="/profile" style={navStyle}>
          <li>Profile</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
