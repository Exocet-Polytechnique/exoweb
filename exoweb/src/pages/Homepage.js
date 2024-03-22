import React from "react";
import NavBar from "../components/NavBar"; // Import the NavBar component
import Footer from "../components/Footer"; // Import the Footer component
import "./Homepage.css"
import Countdown from "../components/Countdown";
import wave from '../img/wave_homepage.svg';

function Homepage() {
    return (
        <div className="homepage">
            <NavBar/> {/* Add the NavBar component */}
            <div className="countdown-container">
                <Countdown className="countdown-homepage"/>
            </div>
            <img src={wave} alt="vague" className="homepage-wave"/>
            <Footer/> {/* Add the Footer component */}
        </div>
    )
}

export default Homepage;