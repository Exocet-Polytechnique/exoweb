import "./contact.css"
import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import wave from '../img/wave_homepage.svg';

function Contact() {
    return (
        <div className="contact">
            <NavBar/> {/* Add the NavBar component */}
            <img src={wave} alt="vague" className="homepage-wave"/>
            <Footer/> {/* Add the Footer component */}
        </div>
    )
}

export default Contact;