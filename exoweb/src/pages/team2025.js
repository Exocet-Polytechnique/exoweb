import React from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";
import StudentCard from "../components/StudentCard";
import Equipe from '../img/team/2025/equipe2025.jpg';
import "./team.css"
import equipe from '../data/team2025.json';


function Team2025() {

    const executif = equipe.executif;
    const equipeEmbarque = equipe.embarque;
    const equipeEnergie = equipe.energie;
    const equipeStructure = equipe.structure;
    const equipeLogiciel = equipe.logiciel;

    return (
        <div className="team-page">
            <NavBar/> {/* Add the NavBar component */}
            <SideBar/> {/* Add the SideBar component */}
            <p className="team-header">Équipe 2025</p>
            <img src={Equipe} alt="Équipe Complete" id="equipeImage"></img>
            <div className="member-type-container">
                <p className="team-subtitle">Exécutif</p>
                <div className="cards-container">
                    {executif.map((student, index) => {
                        const imagePath = require(`../img/team/2025/${student.image}`);
                        return (
                        <StudentCard
                            key={index}
                            image={imagePath}
                            bio={student.bio}
                            name={student.name}
                            title={student.title}
                        />
                        )})}
                </div>
            </div>
            <div className="member-type-container">
                <p className="team-subtitle">Équipe Embarqué</p>
                <div className="cards-container">
                    {equipeEmbarque.map((student, index) => {
                        const imagePath = require(`../img/team/2025/${student.image}`);
                        return (
                        <StudentCard
                            key={index}
                            image={imagePath}
                            bio={student.bio}
                            name={student.name}
                            title={student.title}
                        />
                        )})}
                </div>
                <p className="team-subtitle">Équipe Énergie</p>
                <div className="cards-container">
                    {equipeEnergie.map((student, index) => {
                        const imagePath = require(`../img/team/2025/${student.image}`);
                        return (
                        <StudentCard
                            key={index}
                            image={imagePath}
                            bio={student.bio}
                            name={student.name}
                            title={student.title}
                        />
                        )})}
                </div>
                <p className="team-subtitle">Équipe Structure</p>
                <div className="cards-container">
                    {equipeStructure.map((student, index) => {
                        const imagePath = require(`../img/team/2025/${student.image}`);
                        return (
                        <StudentCard
                            key={index}
                            image={imagePath}
                            bio={student.bio}
                            name={student.name}
                            title={student.title}
                        />
                        )})}
                </div>
                <p className="team-subtitle">Équipe Logiciel</p>
                <div className="cards-container">
                    {equipeLogiciel.map((student, index) => {
                        const imagePath = require(`../img/team/2025/${student.image}`);
                        return (
                        <StudentCard
                            key={index}
                            image={imagePath}
                            bio={student.bio}
                            name={student.name}
                            title={student.title}
                        />
                    )})}
                </div>
            </div>
            <Footer/> {/* Add the Footer component */}
        </div>
    )
}

export default Team2025;