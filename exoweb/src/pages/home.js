import "./home.css"
import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Countdown from "../components/Countdown";
import wave from '../img/wave_homepage.svg';

function Home() {
    return (
        <div className="home">
            <NavBar/> {/* Add the NavBar component */}
            <div className="countdown-container">
                <Countdown className="countdown-homepage"/>
            </div>
            <img src={wave} alt="vague" className="homepage-wave"/>
            <Footer/> {/* Add the Footer component */}
        </div>
    )
}

export default Home;