import "./sponsors.css";
import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import downloadLogo from "../img/misc/download_symbol.svg";

import ivi from "../img/misc/IVI.png";
import swagelok from "../img/misc/swagelok.svg";
import polytechnique from "../img/misc/polytechnique.svg";
import faie from "../img/misc/faie.svg";
import rimdrive from "../img/misc/rimdrive.svg";
import hanbay from "../img/misc/hanbay.svg";
import brightloop from "../img/misc/brightloop.svg";
import aquon from "../img/misc/aquon.svg";
import bassmetal from "../img/misc/bassmetal.svg";
import uh2 from "../img/misc/uh2.svg";
import thomasmarine from "../img/misc/thomasmarine.svg";
import cec from "../img/misc/cec.svg";
import polyelan from "../img/misc/polyelan.svg";
import trottier from "../img/misc/trottier.svg";
import solidworks from "../img/misc/solidworks.svg";
import altium from "../img/misc/altium.svg";
import alstom from "../img/misc/alstom.svg";
import forcesavenir from "../img/misc/forcesavenir.svg";
import fondationalumni from "../img/misc/fondationalumni.svg";
import aep from "../img/misc/aep.svg";
import lojiq from "../img/misc/lojiq.svg";
import cirodd from "../img/misc/cirodd.svg";

import french_sponsor_document from "../documents/french_sponsor_document.pdf";
import english_sponsor_document from "../documents/english_sponsor_document.pdf";

function Sponsors() {
  const handleDownload = (language) => {
    if (language === "french") {
      window.open(french_sponsor_document, "_blank");
    } else if (language === "english") {
      window.open(english_sponsor_document, "_blank");
    }
  };

  return (
    <div>
      <NavBar />
      <div className="sponsors-page">
        <h1 className="sponsors-header">Nos Commanditaires</h1>
        <div className="document-container">
          <p className="sponsors-subtitle">
            Téléchargez notre document de commandite pour découvrir nos opportunités d'association.
          </p>
          <div className="buttons-container">
            <button id="french" onClick={() => handleDownload("french")}>
              En Français
              <img src={downloadLogo} alt="" className="download-symbol" />
            </button>
            <button id="english" onClick={() => handleDownload("english")}>
              In English
              <img src={downloadLogo} alt="" className="download-symbol" />
            </button>
          </div>
        </div>

        <div className="sponsor-cards">
          {/* Section Brick */}
          <section id="brick" className="sponsor-section">
            <h2 className="sponsor-category-title">Brick</h2>
            <div className="logo-grid">
              <div className="logo-card">
                <img src={swagelok} alt="Swagelok" />
              </div>
            </div>
          </section>

          {/* Section Goélette */}
          <section id="goelette" className="sponsor-section">
            <h2 className="sponsor-category-title">Goélette</h2>
            <div className="logo-grid">
              <div className="logo-card">
                <img src={polytechnique} alt="Polytechnique" />
              </div>
              <div className="logo-card">
                <img src={fondationalumni} alt="Fondation Alumni" />
              </div>
            </div>
          </section>

          {/* Section Ketch */}
          <section id="ketch" className="sponsor-section">
            <h2 className="sponsor-category-title">Ketch</h2>
            <div className="logo-grid">
              <div className="logo-card"><img src={solidworks} alt="Solidworks" /></div>
              <div className="logo-card"><img src={altium} alt="Altium" /></div>
              <div className="logo-card"><img src={alstom} alt="Alstom" /></div>
              <div className="logo-card"><img src={forcesavenir} alt="Forces Avenir" /></div>
              <div className="logo-card"><img src={faie} alt="FAIE" /></div>
              <div className="logo-card"><img src={rimdrive} alt="Rimdrive" /></div>
              <div className="logo-card"><img src={hanbay} alt="Hanbay" /></div>
              <div className="logo-card"><img src={brightloop} alt="Brightloop" /></div>
              <div className="logo-card"><img src={aquon} alt="Aquon" /></div>
              <div className="logo-card"><img src={bassmetal} alt="Bassmetal" /></div>
              <div className="logo-card"><img src={uh2} alt="UH2" /></div>
              <div className="logo-card"><img src={lojiq} alt="Lojiq" /></div>
            </div>
          </section>

          {/* Section Corte */}
          <section id="corte" className="sponsor-section">
            <h2 className="sponsor-category-title">Corte</h2>
            <div className="logo-grid">
              <div className="logo-card"><img src={cec} alt="CEC" /></div>
              <div className="logo-card"><img src={trottier} alt="Trottier" /></div>
            </div>
          </section>

          {/* Section Sloop */}
          <section id="sloop" className="sponsor-section">
            <h2 className="sponsor-category-title">Sloop</h2>
            <div className="logo-grid">
              <div className="logo-card"><img src={thomasmarine} alt="Thomas Marine" /></div>
              <div className="logo-card"><img src={polyelan} alt="Polyélan" /></div>
              <div className="logo-card"><img src={aep} alt="AEP" /></div>
              <div className="logo-card"><img src={cirodd} alt="Cirodd" /></div>
              <div className="logo-card"><img src={ivi} alt="IVI" /></div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Sponsors;