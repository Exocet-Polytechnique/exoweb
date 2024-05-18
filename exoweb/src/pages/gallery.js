import "./gallery.css"
import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function Gallery() {
    return (
        <div>
            <NavBar/>
            <body className="gallery-page">
                <p className="gallery-header">Notre galerie</p>
                <p className="gallery-subtitle">2023</p>
            </body>
            <Footer/>
        </div>
    )
}

export default Gallery;