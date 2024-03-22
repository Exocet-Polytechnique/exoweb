import React from "react";
import NavBar from "../components/NavBar"; // Import the NavBar component
import Footer from "../components/Footer"; // Import the Footer component
import "./Homepage.css"
import Countdown from "../components/Countdown";

function Homepage() {
    return (
        <div className="homepage">
            <NavBar/> {/* Add the NavBar component */}
            <Countdown/>
            <Footer/> {/* Add the Footer component */}
        </div>
    )
}

export default Homepage;