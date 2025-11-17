import React from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";
import StudentCard from "../components/StudentCard";
import Equipe from '../img/team/2025/equipe2025.jpg';
import "./team.css"
import equipe from '../data/team2026.json';


function Team2026() {

    const executif = equipe.executif;
    const equipeEmbarque = equipe.embarque;
    const equipeEnergie = equipe.energie;
    const equipeStructure = equipe.structure;
    const equipeLogiciel = equipe.logiciel;
    const equipeCommunication = equipe.communication;

    const renderTeamSection = (title, team) => (
        <div className="member-type-container">
          <p className="team-subtitle">{title}</p>
          <div className="cards-container">
            {team.map((student, index) => {
            // TODO: CHANGER POUR 2026
              const imagePath = require(`../img/team/2025/${student.image}`);
              return (
                <StudentCard
                  key={index}
                  image={imagePath}
                  bio={student.bio}
                  name={student.name}
                  title={student.title}
                />
              );
            })}
          </div>
        </div>
      );
      

    return (
        <div className="team-page">
            <NavBar/> {/* Add the NavBar component */}
            <SideBar/> {/* Add the SideBar component */}
            <p className="team-header">Équipe 2026</p>
            <img src={Equipe} alt="Équipe Complete" id="equipeImage"></img>
            {renderTeamSection("Exécutif", executif)}
            {renderTeamSection("Équipe Communication", equipeCommunication)}
            {renderTeamSection("Équipe Embarqué", equipeEmbarque)}
            {renderTeamSection("Équipe Énergie", equipeEnergie)}
            {renderTeamSection("Équipe Structure", equipeStructure)}
            {renderTeamSection("Équipe Logiciel", equipeLogiciel)}
            <Footer/> {/* Add the Footer component */}
        </div>
    )
}

export default Team2026;