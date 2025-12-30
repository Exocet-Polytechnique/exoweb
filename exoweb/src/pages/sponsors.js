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
import ivi from '../img/misc/IVI.png';
import french_sponsor_document from '../documents/french_sponsor_document.pdf';
import english_sponsor_document from '../documents/english_sponsor_document.pdf';
import swagelok from '../img/misc/swagelok.svg';
import polytechnique from '../img/misc/polytechnique.svg';
import faie from '../img/misc/faie.svg';
import rimdrive from '../img/misc/rimdrive.svg';
import hanbay from '../img/misc/hanbay.svg';
import brightloop from '../img/misc/brightloop.svg';
import aquon from '../img/misc/aquon.svg';
import bassmetal from '../img/misc/bassmetal.svg';
import uh2 from '../img/misc/uh2.svg';
import thomasmarine from '../img/misc/thomasmarine.svg';
import cec from '../img/misc/cec.svg';
import polyelan from '../img/misc/polyelan.svg';
import trottier from '../img/misc/trottier.svg';
import solidworks from '../img/misc/solidworks.svg';
import altium from '../img/misc/altium.svg';
import alstom from '../img/misc/alstom.svg';
import forcesavenir from '../img/misc/forcesavenir.svg';
import fondationalumni from '../img/misc/fondationalumni.svg';
import aep from '../img/misc/aep.svg';
import lojiq from '../img/misc/lojiq.svg';
import cirodd from '../img/misc/cirodd.svg';

function Sponsors() {
    const handleDownload = (language) => {
        // Logic to handle the download based on the selected language
        if (language === "french") {
            // Download the French document
            window.open(french_sponsor_document, "_blank");
        } else if (language === "english") {
            // Download the English document
            window.open(english_sponsor_document, "_blank");
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
                        <img src={swagelok} alt="swagelok logo" className="logo swagelok-logo"/>
                        <img src={brick} alt="brick vector"/>
                    </div>
                    <div id="goelette" className="sponsor-vector">
                        <p className="sponsor-title">Goélette</p>
                        <img src={polytechnique} alt="polytechnique logo" className="logo polytechnique-logo"/>
                        <img src={fondationalumni} alt="fondationalumni logo" className="logo fondationalumni-logo"/>
                        <img src={goelette} alt="goelette vector"/>
                    </div>
                    <div id="ketch" className="sponsor-vector">
                        <p className="sponsor-title">Ketch</p>
                        <img src={solidworks} alt="solidworks logo" className="logo solidworks-logo"/>
                        <img src={altium} alt="altium logo" className="logo altium-logo"/>
                        <img src={alstom} alt="alstom logo" className="logo alstom-logo"/>
                        <img src={forcesavenir} alt="forcesavenir logo" className="logo forcesavenir-logo"/>
                        <img src={faie} alt="faie logo" className="logo faie-logo"/>
                        <img src={rimdrive} alt="rimdrive logo" className="logo rimdrive-logo"/>
                        <img src={hanbay} alt="hanbay logo" className="logo hanbay-logo"/>
                        <img src={brightloop} alt="brightloop logo" className="logo brightloop-logo"/>
                        <img src={aquon} alt="aquon logo" className="logo aquon-logo"/>
                        <img src={bassmetal} alt="bassmetal logo" className="logo bassmetal-logo"/>
                        <img src={uh2} alt="uh2 logo" className="logo uh2-logo"/>
                        <img src={lojiq} alt="lojiq logo" className="logo lojiq-logo"/>
                        <img src={ketch} alt="ketch vector"/>
                    </div>
                    <div id="corte" className="sponsor-vector">
                        <p className="sponsor-title">Corte</p>
                        <img src={cec} alt="cec logo" className="logo cec-logo"/>
                        <img src={trottier} alt="trottier logo" className="logo trottier-logo"/>
                        <img src={corte} alt="corte vector"/>
                    </div>
                    <div id="sloop" className="sponsor-vector">
                        <p className="sponsor-title">Sloop</p>
                        <img src={thomasmarine} alt="thomasmarine logo" className="logo thomasmarine-logo"/>
                        <img src={polyelan} alt="polyelan logo" className="logo polyelan-logo"/>
                        <img src={aep} alt="aep logo" className="logo aep-logo"/>
                        <img src={cirodd} alt="cirodd logo" className="logo cirodd-logo"/>
                        <img src={ivi} alt="ivi logo" className="logo ivi-logo"/>
                        <img src={sloop} alt="sloop vector"/>
                    </div>
                </div>
            </body>
            <Footer/>
        </div>
    )
}


export default Sponsors;
