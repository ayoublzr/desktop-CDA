

import React, { useState, useEffect } from "react";
import axios from "axios";

import EditProductPopup from "./EditProductPopup";

function Products() {
  const [products, setProducts] = useState([]);
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);
 
  

  useEffect(() => {
    fetchProducts();
  }, []);

const fetchProducts = () => {
    axios
      .get("http://localhost:3003/api/products")
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      
        
      })
      .catch((err) => console.log(err));
  }
    const handleEditProduct = (productId) => {
    setSelectedProductId(productId);
    setShowEditPopup(true);
  };

  const handleUpdateProduct = () => {
        
        fetchProducts();
      };
      const handleDeleteProduct = (productId) => {
        axios.delete(`http://localhost:3003/api/deleteproduct/${productId}`)
          .then(response => {
            console.log("Produit supprimé avec succès !");
            
            fetchProducts();
          })
          .catch(error => {
            console.error("Erreur lors de la suppression du produit :", error);
          });
      };
  const handleCloseEditPopup = () => {
    setSelectedProductId(null);
    setShowEditPopup(false);
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
            <td>
              
              <button
                className="btn btn-primary btn-sm"
                onClick={() => handleEditProduct(product.id)}
              >
                Modifier
              </button>
             
              <button
                className="btn btn-danger btn-sm"
                onClick={() => handleDeleteProduct(product.id)}
              >
                Supprimer
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <button
              type="button"
              className="btn btn-success"
              
            >
              Ajouter
            </button>
      {showEditPopup && (
        <EditProductPopup
          productId={selectedProductId}
          onClose={handleCloseEditPopup}
          onUpdate={handleUpdateProduct}
        />
      )}
    </div>
  );
}

export default Products;