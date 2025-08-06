import "./gallery.css"
import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import GalleryGrid from "../components/GalleryGrid";

function Gallery() {
    return (
        <div>
            <NavBar/>
            <GalleryGrid/>
            <Footer/>
        </div>
    )
}

export default Gallery;