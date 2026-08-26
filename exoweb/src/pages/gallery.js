import "./gallery.css";
import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import GalleryGrid from "../components/GalleryGrid";

function Gallery() {
  return (
    <div>
      <NavBar />
      <div className="gallery-page">
        <h1 className="gallery-header">Galerie</h1>
        
        <div className="gallery-container">
          <GalleryGrid />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Gallery;