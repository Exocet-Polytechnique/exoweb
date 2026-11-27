import React, { useState } from "react";

const FORMSPREE_URL = "https://formspree.io/f/xeojjvrj";

const EMPTY_FORM = {
    prenom: "",
    nom: "",
    sujet: "",
    message: "",
    email: "",
};

const validateEmail = (email) =>
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);

function Form() {
    const [formData, setFormData] = useState(EMPTY_FORM);
    const [errors, setErrors] = useState({});
    const [isSending, setIsSending] = useState(false);
    const [notification, setNotification] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: "" });
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.prenom.trim()) newErrors.prenom = "Prénom est requis";
        if (!formData.nom.trim()) newErrors.nom = "Nom est requis";
        if (!formData.sujet.trim()) newErrors.sujet = "Sujet est requis";
        if (!formData.message.trim()) newErrors.message = "Message est requis";
        if (!formData.email.trim()) {
            newErrors.email = "Courriel est requis";
        } else if (!validateEmail(formData.email)) {
            newErrors.email = "Format de courriel invalide";
        }
        return newErrors;
    };

    const showNotification = (type, text) => {
        setNotification({ type, text });
        setTimeout(() => setNotification(null), 3300);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationErrors = validate();
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length > 0) return;

        setIsSending(true);
        try {
            const response = await fetch(FORMSPREE_URL, {
                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
            });

            if (response.ok) {
                showNotification("success", "Votre message a été envoyé !");
                setFormData(EMPTY_FORM);
            } else {
                showNotification("error", "Erreur lors de l'envoi. Réessayez plus tard.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            showNotification("error", "Erreur réseau. Vérifiez votre connexion.");
        } finally {
            setIsSending(false);
        }
    };

    return (
        <>
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="contact-row">
                    <div className="contact-group">
                        <input className="contact-field" type="text" name="prenom"
                            placeholder="Prénom*" value={formData.prenom} onChange={handleChange} />
                        {errors.prenom && <p className="contact-error">{errors.prenom}</p>}
                    </div>
                    <div className="contact-group">
                        <input className="contact-field" type="text" name="nom"
                            placeholder="Nom*" value={formData.nom} onChange={handleChange} />
                        {errors.nom && <p className="contact-error">{errors.nom}</p>}
                    </div>
                </div>

                <div className="contact-group">
                    <input className="contact-field" type="text" name="sujet"
                        placeholder="Sujet*" value={formData.sujet} onChange={handleChange} />
                    {errors.sujet && <p className="contact-error">{errors.sujet}</p>}
                </div>

                <div className="contact-group contact-group-grow">
                    <textarea className="contact-field" name="message"
                        placeholder="Message*" value={formData.message} onChange={handleChange} />
                    {errors.message && <p className="contact-error">{errors.message}</p>}
                </div>

                <div className="contact-row">
                    <div className="contact-group">
                        <input className="contact-field" type="email" name="email"
                            placeholder="Adresse courriel*" value={formData.email} onChange={handleChange} />
                        {errors.email && <p className="contact-error">{errors.email}</p>}
                    </div>
                    <button className="contact-button" type="submit" disabled={isSending}>
                        {isSending ? "Envoi..." : "Envoyer"}
                    </button>
                </div>
            </form>

            {notification && (
                <div className={`contact-notification ${notification.type}`}>
                    {notification.text}
                </div>
            )}
        </>
    );
}

export default Form;