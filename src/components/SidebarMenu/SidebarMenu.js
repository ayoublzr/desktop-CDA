import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/js/dist/dropdown";
import "./SidebarMenu.css";
import axios from "axios";

import { useNavigate } from "react-router-dom";
function SidebarMenu() {
  const navigate = useNavigate();


  const handleLogout = () => {
    const token = localStorage.getItem("token");
  



    if (token) {
      axios
        .get("http://localhost:3003/api/logout", {
          headers: {
            Authorization: token,
          },
        })
        .then((res) => {
          if (res.data.status === "Success") {

            // La déconnexion a réussi, alors seulement à ce stade vous pouvez supprimer l'élément token
            localStorage.removeItem("token");
            navigate("/")

          } else {
            alert("Erreur lors de la déconnexion");
          }
        })
        .catch((err) => {


          alert("Erreur lors de la déconnexion");
        });
    } else {
      alert("Erreur lors de la déconnexion 1");
    }
  };

  return (
   
      
          <div className="w-10 bg-dark col-auto col-md-2 min-vh-100 d-flex justify-content-between flex-column" style={{width: "12%"}}>
            <div>
              <a className="text-decoration-none text-white d-none d-sm-inline d-flex align-itemcenter ms-3 mt-2">
                <span className="ms-1 fs-4 d-none d-sm-inline text-warning fs-1 fw-bold">SLQ</span>
              </a>
              <hr className="text-secondary d-none d-sm-inline" />
              <ul className="nav nav-pills flex-column mt-3 mt-sm-0 ">
                <li className="nav-item text-white fs-4 my-1 mt">
                  <a
                    href="#"
                    className="nav-link text-white fs-5"
                    aria-current="page"
                  >
                    <i className="bi bi-speedometer2"></i>
                    <span className="ms-3 d-none d-sm-inline ">Dashboard</span>
                  </a>
                </li>
              
             <li className="nav-item text-white fs-4 my-1 py-2 py-sm-0">
                  <a
                    href="/devis"
                    className="nav-link text-white fs-5"
                    aria-current="page"
                  >
                    <i className="bi bi-grid"></i>
                    <span className="ms-3 d-none d-sm-inline">Devis</span>
                  </a>
                </li>
                
                <li className="nav-item text-white fs-4 my-1 py-2 py-sm-0">
                  <a
                    href="/products"
                    className="nav-link text-white fs-5"
                    aria-current="page"
                  >
                    <i className="bi bi-grid"></i>
                    <span className="ms-3 d-none d-sm-inline">Produits</span>
                  </a>
                </li>
                <li className="nav-item text-white fs-4 my-1 py-2 py-sm-0">
                  <a
                    href="/categories"
                    className="nav-link text-white fs-5"
                    aria-current="page"
                  >
                    <i className="bi bi-grid"></i>
                    <span className="ms-3 d-none d-sm-inline">Categories</span>
                  </a>
                </li>
                <li className="nav-item text-white fs-4 my-1  py-2 py-sm-0">
                  <a
                    href="/utilisateurs"
                    className="nav-link text-white fs-5"
                    aria-current="page"
                  >
                    <i className="bi bi-people"></i>
                    <span className="ms-3 d-none d-sm-inline ">Utilisateurs</span>
                  </a>
                </li>
              </ul>
            </div>
            <div class="dropdown open">
              <a
                className="text-decoration-none text-white dropdown-toggle p-3"
                type="button"
                id="triggerId"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="bi bi-person-circle"></i>{" "}
                <span className="ms-2 d-none d-sm-inline">Ayoub</span>
              </a>
              <div className="dropdown-menu" aria-labelledby="triggerId">
                <a className="dropdown-item" href="/" onClick={handleLogout}>
                  déconnexion
                </a>
               
              </div>
            </div>
          </div>
        
      

    
    
  );
}

export default SidebarMenu;
