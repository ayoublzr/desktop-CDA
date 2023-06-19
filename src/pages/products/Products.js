import React, { useState, useEffect } from "react";
import axios from "axios";

import PopUp from "../../components/Pop-up/PopUp";

function Products() {
  const [products, setProducts] = useState([]);

  const [selectedProductId, setSelectedProductId] = useState(null);
  

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    axios
      .get("http://localhost:3003/api/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  };
  const handleEditProduct = (productId) => {
    setSelectedProductId(productId);
  };

  const handleDeleteProduct = (productId) => {
    axios
      .delete(`http://localhost:3003/api/deleteproduct/${productId}`)
      .then((response) => {
        console.log("Produit supprimé avec succès !");
        fetchProducts();
      })
      .catch((error) => {
        console.error("Erreur lors de la suppression du produit :", error);
      });
  };

  return (
    <div>
      <table className="table table-bordered border-primary my-3 mx-4">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nom</th>
            <th scope="col">Description</th>
            <th scope="col">Image</th>
            <th scope="col">Catégorie</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {products.map((product, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.image}</td>
              <td>{product.Categorie.name}</td>
              <td >
                <PopUp
                  mode="edit"
                  onClick={() => handleEditProduct(product.id)}
                  productId={product.id}
                  style={{ width: "100px" }} 
                >
                  Modifier
                </PopUp>

                <button
                  className="btn btn-danger btn-sm py-2 px-1"
                  onClick={() => {
                    handleDeleteProduct(product.id);
                  }}
                  style={{ width: "172px" }} 
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="my-5 text-center">
        <PopUp mode="add" />
      </div>
    </div>
  );
}

export default Products;
