import React from "react";
import NavBar from "../components/NavBar"; // Import the NavBar component
import Footer from "../components/Footer"; // Import the Footer component

function Team() {
    return (
        <div>
            <NavBar /> {/* Add the NavBar component */}
            <h2>Our Team</h2>
            <p>Our team is made up of the best developers in the world. We are dedicated to making the best software for you.</p>
            <Footer></Footer>
        </div>
    )
}

export default Team;