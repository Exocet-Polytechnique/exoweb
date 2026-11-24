import React from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";
import StudentCard from "../components/StudentCard";
import Equipe from '../img/team/2027/team2027.jpg';
import "./team.css"
import equipe from '../data/team2027.json';

function Team2027() {

    const executif = equipe.executif;
    const equipeMeca = equipe.meca;
    const equipeEnergie = equipe.energie;
    const equipeEmbarque = equipe.embarque;
    const equipeLogiciel = equipe.logiciel;

    const renderTeamSection = (title, team) => (
        <div className="member-type-container">
          <p className="team-subtitle">{title}</p>
          <div className="cards-container">
            {team.map((student, index) => {
              const imagePath = require(`../img/team/2027/${student.image}`);
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
        <div className="team-page team-2027">
            <NavBar/>
            <SideBar/>
            <p className="team-header">Équipe 2027</p>
            <img src={Equipe} alt="Équipe Complete" id="equipeImage"></img>
            {renderTeamSection("Exécutif", executif)}
            {renderTeamSection("Équipe Méca", equipeMeca)}
            {renderTeamSection("Équipe Énergie", equipeEnergie)}
            {renderTeamSection("Équipe Embarqué", equipeEmbarque)}
            {renderTeamSection("Équipe Logiciel", equipeLogiciel)}
            <Footer/>
        </div>
    )
}

export default Team2027;
