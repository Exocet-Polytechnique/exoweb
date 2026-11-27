import "./contact.css";
import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Form from "../components/Form";

function Contact() {
    return (
        <div className="contact-page">
            <NavBar />
            <main className="main-content">
                <h2 className="contact-header">Écrivez-nous !</h2>
                <Form />
            </main>
            <Footer className="contact-footer" />
        </div>
    );
}

export default Contact;