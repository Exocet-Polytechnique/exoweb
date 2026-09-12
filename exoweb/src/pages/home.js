import React from "react";
import "./home.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

// Images
import bateaubg from '../img/misc/boat.JPG';
import bateau1 from '../img/misc/bateau1.jpg';
import bateau2 from '../img/misc/bateau2.jpg';

function Home() {
  const stats = [
    { number: "3", label: "Participations au Monaco Energy Boat Challenge" },
    { number: "Top 1", label: "Équipe Nord-Américaine au MEBC 2026" },
    { number: "20+", label: "Membres actifs" },
    { number: "2019", label: "Depuis" }
  ];

  return (
    <div className="homepage">
      <NavBar />

      <img src={bateaubg} alt="bateau" className="bateau-background" />

      {/* --- HERO SECTION --- */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Exocet Polytechnique Montréal</h1>
          <p className="hero-subtitle">
            Une société technique passionnée par l'innovation nautique et la transition énergétique.
          </p>

          <a href="#about" className="hero-btn">
            Découvrir notre équipe
          </a>

          {/* Cartes statistiques */}
          <div className="stats-grid">
            {stats.map((stat, idx) => (
              <div key={idx} className="stat-card">
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION PRÉSENTATION & ÉPREUVES --- */}
      <section id="about" className="main-content-section">
        <h2 className="section-title">À Propos d'Exocet</h2>
        <p className="section-subtitle">
          Découvrez notre projet et notre participation aux compétitions internationales.
        </p>

        <div className="features-grid">
          <div className="feature-card">
            <div className="card-media">
              <img src={bateau1} alt="Catamaran à Hydrogène" />
            </div>
            <div className="card-content">
              <h3>Projet Hydrogène</h3>
              <p>
                Exocet a pour mission de construire un catamaran à énergie renouvelable. 
                Après avoir participé au Monaco Energy Boat Challenge en 2022 avec un bateau alimenté à l’électricité, 
                nous avons relevé le défi de concevoir le premier catamaran en Amérique propulsé à l’hydrogène.
              </p>
            </div>
          </div>

          <div className="feature-card">
            <div className="card-media">
              <img src={bateau2} alt="Monaco Energy Boat Challenge" />
            </div>
            <div className="card-content">
              <h3>Monaco Energy Boat Challenge</h3>
              <p>
                Cette compétition universitaire internationale exige une analyse de cycle de vie et une présentation 
                technique du prototype. Les équipes s'affrontent lors de courses nautiques de vitesse, 
                de slalom et d’endurance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;