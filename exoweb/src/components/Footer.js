import React from "react";
import { Link } from "react-router-dom";
import './Footer.css';
import facebookLogo from '../img/facebook.svg';
import githubLogo from '../img/github.svg';
import instagramLogo from '../img/instagram.svg';
import linkedinLogo from '../img/linkedin.svg';

function Footer() {
  return (
    <div className="footer">
      <Link to="/"><img src={instagramLogo} alt="logo de instagram" className="linkLogo"/></Link>
      <Link to="/"><img src={facebookLogo} alt="logo de facebook" className="linkLogo"/></Link>
      <Link to="/"><img src={linkedinLogo} alt="logo de linkedin" className="linkLogo"/></Link>
      <Link to="/"><img src={githubLogo} alt="logo de github" className="linkLogo"/></Link>
    </div>
  )
}

export default Footer;