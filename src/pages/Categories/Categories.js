import React, { useState, useEffect } from "react";

import axios from "axios";
import PopUp from "../../components/Pop-up/PopUp";

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Effectuez la requête GET pour récupérer les catégories
    axios
      .get("http://localhost:3003/api/categories")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const handleDelete = (categorieId) => {
    axios
      .delete(`http://localhost:3003/api/deletecategorie/${categorieId}`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Categories</h1>
      <table className="table table-bordered border-primary my-3 mx-4">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Supprimer</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {categories.map((category) => (
            <tr key={category.id}>
              <td>{category.id}</td>
              <td>{category.name}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(category.id)}
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <PopUp categoryMode="createCategory" />
    </div>
  );
}

export default Categories;
