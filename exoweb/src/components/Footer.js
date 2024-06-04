import React from "react";
import { Link } from "react-router-dom";
import './Footer.css';
import facebookLogo from '../img/facebook.svg';
import githubLogo from '../img/github.svg';
import instagramLogo from '../img/instagram.svg';
import linkedinLogo from '../img/linkedin.svg';

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