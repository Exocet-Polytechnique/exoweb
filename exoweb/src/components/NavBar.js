import React, { useEffect, useRef,useState } from "react";
import './NavBar.css';
import { Link } from "react-router-dom";
import Dropdown from "../components/Dropdown";
import fishImage from '../img/misc/logo_exocet.png';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const exocetTitleRef = useRef(null);
  const imageRef = useRef(null);
  const phraseRef = useRef(null);
  const navBarRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth <= 500 || !exocetTitleRef.current || !imageRef.current || !phraseRef.current || !navBarRef.current) return;

      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        exocetTitleRef.current.style.fontSize = "30px";
        imageRef.current.style.width = "30px";
        phraseRef.current.style.display = "none";
        navBarRef.current.style.opacity = 1;
      } else {
        exocetTitleRef.current.style.fontSize = "60px";
        imageRef.current.style.width = "60px";
        phraseRef.current.style.display = "block";
        navBarRef.current.style.opacity = document.querySelector('.home') ? 0.8 : 1;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="navBar" ref={navBarRef}>
      <a href="/" className="title" style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="title-group">
          <div className="titleBlock">
            <img ref={imageRef} id="image" src={fishImage} alt="logo de exocet" />
            <div ref={exocetTitleRef} id="ExocetTitle">EXOCET</div>
          </div>
          <p ref={phraseRef} id="phrase">Toujours plus loin, toujours plus vite</p>
        </div>
      </a> 
      <nav className={`links ${isMenuOpen ? "open" : ""}`}>
        <Link to="/" className="page-link">Accueil</Link>
        <Link to="/team2025" className="page-link">Nos Équipes</Link>
        <Link to="/sponsors" className="page-link">Commanditaires</Link>
        <Link to="/gallery" className="page-link">Galerie</Link>
        <Link to="/contact" className="page-link">Nous rejoindre</Link>
      </nav>

      <button className="menu-button" onClick={toggleMenu}>
        <i className="fa fa-bars"></i>
      </button>
    </header>
  );
}

export default NavBar;
