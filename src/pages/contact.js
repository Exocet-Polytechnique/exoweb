import "./contact.css"
import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Form from "../components/Form";

function Contact() {
    return (
        <div className="contact-page">
            <NavBar/>
            <p className="contact-header">Écrivez-nous!</p>
            <body className="main-content">
                <Form/>              
            </body>
            <Footer className="contact-footer"/>
        </div>
    )
}

export default Contact;