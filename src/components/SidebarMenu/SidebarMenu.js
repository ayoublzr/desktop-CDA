import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/js/dist/dropdown";
import "./SidebarMenu.css";
import { Link } from "react-router-dom";

function SidebarMenu() {
  return (
   
      
          <div className="w-15 bg-dark col-auto col-md-2 min-vh-100 d-flex justify-content-between flex-column">
            <div>
              <a className="text-decoration-none text-white d-none d-sm-inline d-flex align-itemcenter ms-3 mt-2">
                <span className="ms-1 fs-4 d-none d-sm-inline">Brand</span>
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
                {/* <li className="nav-item text-white fs-4 my-1 py-2 py-sm-0">
                  <Link
                    as={Link} to="/products"
                    
                    className="nav-link text-white fs-5"
                    aria-current="page"
                  >
                    <i className="bi bi-house"></i>
                    <span className="ms-3 d-none d-sm-inline ">Home</span>
                  </Link>
                </li> */}
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
                    <span className="ms-3 d-none d-sm-inline">Products</span>
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
                    href="#"
                    className="nav-link text-white fs-5"
                    aria-current="page"
                  >
                    <i className="bi bi-people"></i>
                    <span className="ms-3 d-none d-sm-inline ">Devis</span>
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
                <a className="dropdown-item" href="#">
                  Profil
                </a>
                <a className="dropdown-item " href="#">
                  Settings
                </a>
              </div>
            </div>
          </div>
        
      

    
    
  );
}

export default SidebarMenu;
