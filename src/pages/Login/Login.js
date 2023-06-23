import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./styleLogin.css"
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const [errorMessage, setErrorMessage] = useState('')
  const handleSubmit = (event) => {
    event.preventDefault();

    // Ajoutez ici la logique de traitement du formulaire de connexion
    axios
      .post("http://localhost:3003/api/login/desktop", {
        email,
        password,
        isDesktopApp: true,
      })
      .then((response) => {
        // Stocker le token dans le localStorage
        localStorage.setItem("token", response.data.token);

        // Rediriger vers la page /products
        navigate("/products");
      })
      .catch((error) => {
        console.log(error);
        
        setErrorMessage('Email ou mot de passe incorrect')
      });
  };

  return (
    
      
    <div className="login-container">
      <h2 className="titleLogin">Connexion</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="Votre adresse e-mail"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            id="password"
            className="form-control"
            placeholder="Votre mot de passe"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Connexion
        </button>
        {errorMessage && (
        <div className="error-message" >
          {errorMessage}
        </div>
      )}
        <div className="forgot-password">
          <a href="/resetpassword">Mot de passe oublié ?</a>
        </div>
      </form>
    </div>
    
    

  );
}

export default Login;
