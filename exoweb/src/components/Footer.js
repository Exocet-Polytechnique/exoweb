import React from "react";
import { Link } from "react-router-dom";
import './Footer.css';
import facebookLogo from '../img/misc/facebook.png';
import githubLogo from '../img/misc/github.png';
import instagramLogo from '../img/misc/instagram.png';
import linkedinLogo from '../img/misc/linkedin.svg';

function Footer() {
  return (
    <footer className="footer">
      <Link to="https://www.instagram.com/exocet_polymtl/"><img src={instagramLogo} alt="logo de instagram" className="linkLogo"/></Link>
      <Link to="https://www.facebook.com/ExocetPoly/"><img src={facebookLogo} alt="logo de facebook" className="linkLogo"/></Link>
      <Link to="https://ca.linkedin.com/company/exocet-polytechnique-montr%C3%A9al"><img src={linkedinLogo} alt="logo de linkedin" className="linkLogo"/></Link>
      <Link to="https://github.com/Exocet-Polytechnique"><img src={githubLogo} alt="logo de github" className="linkLogo"/></Link>
    </footer>
  )
}

export default Footer;
