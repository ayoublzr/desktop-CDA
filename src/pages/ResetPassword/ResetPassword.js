import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Style.css"

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(`http://localhost:3003/api/resetpassword/`, {
        email: email,
      })
      .then((response) => {
        console.log(response.data);
        setShowMessage(true); // Afficher le message avant la navigation

        setTimeout(() => {
          setShowMessage(false); // Masquer le message après 3 secondes
          navigate("/"); // Naviguer vers la page de connexion
        }, 3000);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  return (
    <div className="formResetPassword ">
      {showMessage && (
        <div className="success-message" >
          Veuillez vérifier votre adresse e-mail pour modifier votre mot de passe.
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
        className="form-control"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className="btn btn-primary mt-3">Modifier</button>
      </form>
    </div>
  );
}