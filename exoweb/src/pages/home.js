import "./home.css"
import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Countdown from "../components/Countdown";
import wave from '../img/misc/wave_homepage.svg';
import bateaubg from '../img/misc/bateaubg.jpg';
import bateau1 from '../img/misc/bateau1.jpg';
import bateau2 from '../img/misc/bateau2.jpg';

function Home() {
    return (
        <div className="home">

            <NavBar/> {/* Add the NavBar component */}
    
            <img src={bateaubg} alt="bateau" className="bateau-background"/>
            <div className="countdown-container">
                <Countdown className="countdown-homepage"/>
            </div>
            <div className="wave-text-container">
                <img src={bateau1} alt="bateau 1" className="wave-boat"/>
                <p className="wave-text">
                Exocet est une société technique de la Polytechnique de Montréal qui a pour mission de construire un catamaran à énergie renouvelable. Après avoir participé au Monaco Energy Boat Challenge en 2022 avec un bâteau alimenté à l’électricité, Exocet a décidé de relever le défi de concevoir un catamaran fonctionnant avec de l’hydrogène. Deux ans plus tard, nous sommes fiers de vous présenter le premier catamaran en Amérique propulsé à l’hydrogène.
                    </p>
                <img src={wave} alt="vague" className="homepage-wave"/>
            </div>
            <div className="bottom-container">
                <div className="bottom-text">
                                Le Monaco Energy Boat Challenge est une compétition qui se déroule annuellement à Monaco. Cet évènement est une compétition universitaire de conception d’embarcations nautiques propulsées par des énergies renouvelables. Lors de cette épreuve, chaque équipe doit produire une analyse de cycle de vie et effectuer une présentation technique de leur prototype. Aussi, tous participants doivent participer à des courses nautiques, soit de vitesse, de slalom et d’endurance.
                                </div>
                                <img src={bateau2} alt="bateau 2" className="bottom-boat"/>
            </div>
            <Footer/> {/* Add the Footer component */}
        </div>
    )
}

export default Home;
