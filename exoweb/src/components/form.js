import React from "react";
import "./Form.css";

function Form() {
    return (
        <div className="contact-form">
            <div className="form-container">
                <div className="form-column">
                    <input type="text" className="input-box" prenom="prenom" placeholder="Prénom *"></input>
                    <input type="text" className="input-box" nom="nom" placeholder="Nom *"></input>
                    <input type="text" className="input-box" email="email" placeholder="Courriel *"></input>
                </div>

                <div className="form-column">
                    <input type="text" className="input-box" sujet="sujet" placeholder="Sujet *"></input>
                    <div className="message-container">
                        <p className="message-placeholder">Message *</p>
                        <textarea className="input-message" name="message"></textarea>
                    </div>
                    
                </div>  
            </div>
            <button id="send-button">Envoyer</button>           
        </div>
    )
}

export default Form;
