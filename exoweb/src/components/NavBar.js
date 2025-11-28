import React, { useEffect, useRef,useState } from "react";
import './NavBar.css';
import { Link } from "react-router-dom";
import Dropdown from "../components/Dropdown";
import fishImage from '../img/misc/logo_exocet.png';
import { EXOTITLE, MOBILE_BREAKPOINT, HOME, SPONSOR, CONTACT, GALLERY, BASE_OPACITY, HOME_OPACITY, BREAKPOINT_HIDE, BREAKPOINT_SHOW_SMALL} from '../constant/NavBar';

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
    if (
      window.innerWidth <= MOBILE_BREAKPOINT ||
      !exocetTitleRef.current ||
      !imageRef.current ||
      !phraseRef.current ||
      !navBarRef.current
    ) return;

    const scrollTop =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (scrollTop <= BREAKPOINT_HIDE) {
      exocetTitleRef.current.style.fontSize = "60px";
      imageRef.current.style.width = "60px";
      imageRef.current.style.height = "60px";
      phraseRef.current.style.display = "block";

      navBarRef.current.style.opacity =
        document.querySelector(".home") ? HOME_OPACITY : BASE_OPACITY;
      navBarRef.current.style.transform = "translateY(0)";
    }

    else if (scrollTop > BREAKPOINT_HIDE && scrollTop <= BREAKPOINT_SHOW_SMALL) {
      navBarRef.current.style.opacity = "0";
      navBarRef.current.style.transform = "translateY(-100%)";
    }

    else {
      exocetTitleRef.current.style.fontSize = "30px";
      imageRef.current.style.width = "40px";
      imageRef.current.style.height = "40px";
      phraseRef.current.style.display = "none";

      navBarRef.current.style.opacity = BASE_OPACITY;
      navBarRef.current.style.transform = "translateY(0)";
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <header className="navBar" ref={navBarRef}>
      <a href="/" className="title" style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="title-group">
          <div className="titleBlock">
            <img ref={imageRef} id="image" src={fishImage} alt="logo de exocet" />
            <div ref={exocetTitleRef} id="ExocetTitle"> {EXOTITLE} </div>
          </div>
          <p ref={phraseRef} id="phrase">Toujours plus loin, toujours plus vite</p>
        </div>
      </a> 
      <nav className={`links ${isMenuOpen ? "open" : ""}`}>
        <Link to="/" className="page-link">{HOME}</Link>
        <Dropdown className="nav-dropdown"></Dropdown>
        <Link to="/sponsors" className="page-link">{SPONSOR}</Link>
        <Link to="/gallery" className="page-link">{GALLERY}</Link>
        <Link to="/contact" className="page-link">{CONTACT}</Link>
      </nav>

      <button className="menu-button" onClick={toggleMenu}>
        <i className="fa fa-bars"></i>
      </button>
    </header>
  );
}

export default NavBar;
