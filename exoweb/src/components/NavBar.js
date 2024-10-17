
import React from "react";

import './NavBar.css';

import { Link } from "react-router-dom";

import Dropdown from "../components/Dropdown"; // Import the Dropdown component

import fishImage from '../img/misc/poissonexocet.svg'




function NavBar() {

  window.onscroll = function() {scrollFunction()};



  function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("ExocetTitle").style.fontSize = "30px";
        document.getElementById("image").style.width = "30px";
        document.getElementById("image").style.height = "auto";
        document.getElementById("phrase").style.display = "none";
        document.querySelector('.navBar').style.opacity = 1;
    
        

    } else {
        document.getElementById("ExocetTitle").style.fontSize = "60px";
        document.getElementById("image").style.width = "60px";
        document.getElementById("image").style.height = "auto";
        document.getElementById("phrase").style.display = "block";
        if (document.querySelector('.home')) {
          document.querySelector('.navBar').style.opacity = 0.8; 
        } else {
          document.querySelector('.navBar').style.opacity = 1;
        }
    }

    
}

  return (

    <head className="navBar">
      <a href="/" className="title" style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className="title-group">
        <div className="titleBlock">
          <img id="image" src={fishImage} alt="logo de exocet"></img>
          <div id="ExocetTitle">EXOCET</div>
        </div>
        <p id="phrase" className="">Toujours plus loin, toujours plus vite</p>
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