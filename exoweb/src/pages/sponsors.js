import "./sponsors.css"
import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import downloadLogo from '../img/misc/download_symbol.svg';
import brick from '../img/misc/vec_brick.svg';
import corte from '../img/misc/vec_corte.svg';
import goelette from '../img/misc/vec_goelette.svg';
import ketch from '../img/misc/vec_ketch.svg';
import sloop from '../img/misc/vec_sloop.svg';
import french_sponsor_document_2024 from '../documents/french_sponsor_document_2024.pdf';
import english_sponsor_document_2024 from '../documents/english_sponsor_document_2024.pdf';

function Sponsors() {
    const handleDownload = (language) => {
        // Logic to handle the download based on the selected language
        if (language === "french") {
            // Download the French document
            window.open(french_sponsor_document_2024, "_blank");
        } else if (language === "english") {
            // Download the English document
            window.open(english_sponsor_document_2024, "_blank");
        }
    };

    return (
        <div>
            <NavBar/>
            <body className="sponsors-page">
                <p className="sponsors-header">Nos commanditaires</p>
                <div className="document-container">
                    <p className="sponsors-subtitle">Téléchargez notre document de commandite</p>
                    <div className="buttons-container">
                        <button id="french" onClick={() => handleDownload("french")}>En français<img src={downloadLogo} alt="download logo" className="download-symbol"/></button>
                        <button id="english" onClick={() => handleDownload("english")}>In English<img src={downloadLogo} alt="download logo" className="download-symbol"/></button>
                    </div>
                </div>
                <div className="sponsor-cards">
                    <div id="brick" className="sponsor-vector">
                        <p className="sponsor-title">Brick</p>
                        <img src={brick} alt="brick vector"/>
                    </div>
                    <div id="goelette" className="sponsor-vector">
                        <p className="sponsor-title">Goélette</p>
                        <img src={goelette} alt="brick vector"/>
                    </div>
                    <div id="ketch" className="sponsor-vector">
                        <p className="sponsor-title">Ketch</p>
                        <img src={ketch} alt="brick vector"/>
                    </div>
                    <div id="corte" className="sponsor-vector">
                        <p className="sponsor-title">Corte</p>
                        <img src={corte} alt="brick vector"/>
                    </div>
                    <div id="sloop" className="sponsor-vector">
                        <p className="sponsor-title">Sloop</p>
                        <img src={sloop} alt="brick vector"/>
                    </div>
                </div>
            </body>
            <Footer/>
        </div>
    )
}

export default Sponsors;