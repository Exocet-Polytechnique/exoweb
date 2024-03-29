import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import StudentCard from "../components/StudentCard";
import "./team.css"

function Team() {
    return (
        <div className="team-page">
            <NavBar/> {/* Add the NavBar component */}
            <p className="team-header">Équipe 2023-2024</p>
            <div className="member-type-container">
                <p className="team-subtitle">Exécutif</p>
                <div className="cards-container">
                    <StudentCard name="*nom*" title="Directrice générale"></StudentCard>
                    <StudentCard name="*nom*" title="Directeur technique"></StudentCard>
                    <StudentCard name="*nom*" title="Directrice des communications"></StudentCard>
                    <StudentCard name="*nom*" title="Trésorerie"></StudentCard>
                </div>
            </div>
            <div className="member-type-container">
                <p className="team-subtitle">Chefs d'équipe</p>
                <div className="cards-container">
                <StudentCard name="*nom*" title="Hydrogène"></StudentCard>
                <StudentCard name="*nom*" title="Électronique"></StudentCard>
                <StudentCard name="*nom*" title="Structure"></StudentCard>
                </div>
                <div className="cards-container">
                    <StudentCard name="*nom*" title="Systèmes"></StudentCard>
                    <StudentCard name="*nom*" title="Électrique"></StudentCard>
                    <StudentCard name="*nom*" title="Chargé du développement durable"></StudentCard>
                </div>
            </div>
            <div className="member-type-container">
               <p className="team-subtitle">Membres</p>
                <div className="cards-container">
                    <StudentCard name="*nom*" title="*titre*"></StudentCard>
                    <StudentCard name="*nom*" title="*titre*"></StudentCard>
                    <StudentCard name="*nom*" title="*titre*"></StudentCard>
                    <StudentCard name="*nom*" title="*titre*"></StudentCard>
                </div>
            </div>
            <Footer/> {/* Add the Footer component */}
        </div>
    )
}

export default Team;