import React, { useState } from "react";
import "./Form.css"; // Include the CSS import

function Form() {
  const [formData, setFormData] = useState({
    prenom: "",
    nom: "",
    email: "",
    message: "",
    sujet: "", // Add sujet to initial state
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    setErrors({ ...errors, [event.target.name]: "" }); // Clear error on change
  };

  const validateEmail = (email) => {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return regex.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = {};

    if (!formData.prenom) {
      validationErrors.prenom = "Prénom est requis";
    }
    if (!formData.nom) {
      validationErrors.nom = "Nom est requis";
    }
    if (!formData.email) {
      validationErrors.email = "Courriel est requis";
    } else if (!validateEmail(formData.email)) {
      validationErrors.email = "Format de courriel invalide";
    }
    if (!formData.message) {
      validationErrors.message = "Message est requis";
    }
    if (!formData.sujet) { // Add validation for sujet
      validationErrors.sujet = "Sujet est requis";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Submit the form data (e.g., send to your email)
      console.log("Form submitted successfully:", formData);
      // Implement your form submission logic here (e.g., API call)
    }
  };

  return (
    <div className="contact-form">
      <div className="form-container">
        <div className="form-column">
          <input
            type="text"
            className="input-box"
            name="prenom"
            placeholder="Prénom *"
            required
            value={formData.prenom}
            onChange={handleChange}
          />
          {errors.prenom && <p className="error-message">{errors.prenom}</p>}
          <input
            type="text"
            className="input-box"
            name="nom"
            placeholder="Nom *"
            required
            value={formData.nom}
            onChange={handleChange}
          />
          {errors.nom && <p className="error-message">{errors.nom}</p>}
          <input
            type="email"
            className="input-box"
            name="email"
            placeholder="Courriel *"
            required
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>

        <div className="form-column">
          <input
            type="text"
            className="input-box"
            name="sujet"
            placeholder="Sujet *"
            required
            value={formData.sujet}
            onChange={handleChange}
          />
          {errors.sujet && <p className="error-message">{errors.sujet}</p>}  {/* Added error message for sujet */}
          <div className="message-container">
            <p className="message-placeholder">Message *</p>
            <textarea
              className="input-message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          {errors.message && <p className="error-message">{errors.message}</p>}
        </div>
      </div>
      <button id="send-button" onClick={handleSubmit}>
        Envoyer
      </button>
    </div>
  );
}

export default Form;
