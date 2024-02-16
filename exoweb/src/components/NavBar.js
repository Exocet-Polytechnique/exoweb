import React from "react";
import './NavBar.css';
import { Link } from "react-router-dom";
import fishImage from '../img/poissonexocetblanc.png'

function NavBar() {
  return (
    <div className="navBar">
      <div className="title">
        <div className="titleBlock">
          <img src={fishImage} alt="logo de exocet"></img>
          <div>EXOCET</div>
        </div>
        <div>Toujours plus loin, toujours plus vite</div>
      </div>
      <div className="links">
        <Link to="/">Accueil</Link>
        <Link to="/team">Nos équipes</Link>
        <Link to="/">Commanditaires</Link>
        <Link to="/">Gallerie</Link>
        <Link to="/">Nous rejoindre</Link>
      </div>
      
    </div>
  )
}

export default NavBar;