import React from "react";
import './NavBar.css';
import { Link } from "react-router-dom";
import Dropdown from "../components/Dropdown"; // Import the Dropdown component
import fishImage from '../img/poissonexocet.svg'

function NavBar() {
  return (
    <head className="navBar">
      <a href="/" className="title" style={{ textDecoration: 'none', color: 'inherit' }}>
      <div>
        <div className="titleBlock">
          <img src={fishImage} alt="logo de exocet"></img>
          <div>EXOCET</div>
        </div>
        <p className="">Toujours plus loin, toujours plus vite</p>
      </div>
      </a>
      <div className="links">
        <Link to="/" className="page-link">Accueil</Link>
        <Dropdown className="nav-dropdown"></Dropdown>
        <Link to="/sponsors" className="page-link">Commanditaires</Link>
        <Link to="/gallery" className="page-link">Galerie</Link>
        <Link to="/contact" className="page-link">Nous rejoindre</Link>
      </div>
    </head>
  )
}

export default NavBar;