import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const navStyle = {
    color: "white",
  };
  return (
    <nav>
      <h1>Logo</h1>
      <ul className="nav-links">
        <Link to="/" style={navStyle}>
          <li>Home</li>
        </Link>
        <Link to="/about" style={navStyle}>
          <li>About</li>
        </Link>
        <Link to="/profile" style={navStyle}>
          <li>Profile</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
