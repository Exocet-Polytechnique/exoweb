import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import StudentCard from "../components/StudentCard";
import Anne from    '../img/team/2023/compressed/anne.jpg';
import Charles from '../img/team/2023/compressed/charles.jpg';
import Emile from   '../img/team/2023/compressed/emile.jpg';
import Etienne from '../img/team/2023/compressed/etienne.jpg';
import Francis from '../img/team/2023/compressed/francis.jpg';
import Tiphaine from '../img/team/2023/compressed/tiphaine.jpg';
import Xavier from  '../img/team/2023/compressed/xavier.jpg';
import Zachary from '../img/team/2023/compressed/zachary.jpg';
import Mathilda from '../img/team/2023/compressed/mathilda.jpeg';
import Aurelie from '../img/team/2023/compressed/aurelie.jpg';
import Eliot from  '../img/team/2023/compressed/eliot2.jpg';
import Dorian from '../img/team/2023/compressed/dorian.jpg';
import Justin from '../img/team/2023/compressed/justin.jpg';
import Guillaume from '../img/team/2023/compressed/guillaume.jpg';
import "./team.css"


function Team() {
    return (
        <div className="team-page">
            <NavBar/> {/* Add the NavBar component */}
            <p className="team-header">Équipe 2024</p>
            <div className="member-type-container">
                <p className="team-subtitle">Exécutif</p>
                <div className="cards-container">
                    <StudentCard image={Anne} bio="test" 
                    name="Anne Raymond" title="Directrice générale"></StudentCard>
                    <StudentCard image={Emile} bio="test" 
                    name="Émile Brousseau" title="Directeur technique"></StudentCard>
                    <StudentCard image={Tiphaine} bio="Je m'occupe de tout ce qui est en lien avec la communication de l'équipe. De plus, pour me rendre utile à l'atelier, je perse, ponce, coupe, troue, vis..."
                     name="Tiphaine Le Rhun" title="Directrice des communications"></StudentCard>
                    <StudentCard image={Justin} bio="test" 
                    name="Justin Lamouche" title="Trésorerie"></StudentCard>
                </div>
            </div>
            <div className="member-type-container">
                <p className="team-subtitle">Chefs d'équipe</p>
                <div className="cards-container">
                <StudentCard image={Francis} bio="test" 
                name="Francis Bouchaud" title="Hydrogène"></StudentCard>
                <StudentCard image={Etienne} bio="Je m'occupe des systèmes électroniques donnant vie au bateau, me permettant ainsi de prouver la viabilité de l'hydrogène vert dans le milieu maritime."
                 name="Étienne Lescarbeault" title="Électronique"></StudentCard>
                <StudentCard image={Zachary} bio="test" 
                name="Zachary Ouellet" title="Structure"></StudentCard>
                </div>
                <div className="cards-container">
                    <StudentCard image={Xavier} bio="test" 
                    name="Xavier Corbeil" title="Électrique"></StudentCard>
                    <StudentCard image={Aurelie} bio="Ce que j’aime chez Exocet c’est le défi d’utiliser l’hydrogène comme source d'énergie et de se donner les moyens d’arriver à un beau résultat"
                     name="Aurélie Jund" title="Développement Durable"></StudentCard>
                </div>
            </div>
            <div className="member-type-container">
               <p className="team-subtitle">Membres</p>
                <div className="cards-container">
                    <StudentCard image={Eliot} bio="J'ai été en charge de la programmation du bateau et j'ai collaboré à la création des circuits imprimés et au design du système électronique" 
                    name="Eliot Fondère" title="Membre informatique"></StudentCard>
                    <StudentCard image={Guillaume} bio="test" 
                    name="Guillaume Chénier" title="Membre informatique"></StudentCard>
                    <StudentCard image={Dorian} bio="test" 
                    name="Dorian Emmanuel Bernard" title="Membre structure"></StudentCard>
                    <StudentCard image={Mathilda} bio="test" 
                    name="Mathilda Herrell" title="Membre logiciel"></StudentCard>
                    <StudentCard image={Charles} 
                    bio="
                    eeeeeeeeeeeeeee eeeeeeeeeeeeeee eeeeeeeeeeeeeee eeeeeeeeeeeeeee eeeeeeeeeeeeeee eeeeeeeeeeeeeee eeeeeeeeeeeeeee eeeeeeeeeeeeeee eeeeeeeeeeeeeee eeeeeeeeeeeeeee 
                     "
                    name="Charles-Francis Damedey" title="Membre logiciel"></StudentCard>
                </div>
            </div>
            <Footer/> {/* Add the Footer component */}
        </div>
    )
}

export default Team;