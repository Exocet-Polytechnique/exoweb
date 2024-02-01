import React from "react";
import './NavBar.css';
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navBar">
      <Link to="/">Home</Link>
      <Link to="/team">Team</Link>
    </div>
  )
}

export default NavBar;