import React, { useState, useEffect } from "react";
import axios from "axios";

function Devis() {
  const [devisList, setDevisList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3003/api/devis-list")
      .then((response) => {
        setDevisList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDelete = (devisId) => {
    axios
      .delete(`http://localhost:3003/api/deletedevis/${devisId}`)
      .then((response) => {
        setDevisList(devisList.filter((devis) => devis.DevId !== devisId));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const groupedDevisList = [];
  devisList.forEach((devis) => {
    const existingDevis = groupedDevisList.find(
      (item) => item.DevId === devis.DevId
    );
    if (existingDevis) {
      existingDevis.products.push({
        ProductName: devis.ProductName,
        CategoryName: devis.CategoryName,
        surface: devis.surface,
        detail: devis.detail,
      });
    } else {
      groupedDevisList.push({
        DevId: devis.DevId,
        Commentaire: devis.Commentaire,
        username: devis.username,
        email: devis.email,
        phone: devis.phone,
        products: [
          {
            ProductName: devis.ProductName,
            CategoryName: devis.CategoryName,
            surface: devis.surface,
            detail: devis.detail,
          },
        ],
      });
    }
  });

  return (
    <div>
      <table className="table table-bordered border-primary my-3 mx-4">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nom de produit</th>
            <th scope="col">Catégorie</th>
            <th scope="col">Surface</th>
            <th scope="col">Détail</th>
            <th scope="col">Commentaire</th>
            <th scope="col">Nom d'utilisateur</th>
            <th scope="col">Email</th>
            <th scope="col">Numéro de téléphone</th>
            <th scope="col">Supprimer</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {groupedDevisList.map((devis) => (
            <>
              <tr key={devis.DevId}>
                <td rowSpan={devis.products.length}>{devis.DevId}</td>
                <td>{devis.products[0].ProductName}</td>
                <td>{devis.products[0].CategoryName}</td>
                <td>{devis.products[0].surface}</td>
                <td>{devis.products[0].detail}</td>
                <td rowSpan={devis.products.length}>{devis.Commentaire}</td>
                <td rowSpan={devis.products.length}>{devis.username}</td>
                <td rowSpan={devis.products.length}>{devis.email}</td>
                <td rowSpan={devis.products.length}>{devis.phone}</td>
                <td rowSpan={devis.products.length}>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(devis.DevId)}
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
              {devis.products.slice(1).map((product, index) => (
                <tr key={index}>
                  <td>{product.ProductName}</td>
                  <td>{product.CategoryName}</td>
                  <td>{product.surface}</td>
                  <td>{product.detail}</td>
                </tr>
              ))}
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Devis;
