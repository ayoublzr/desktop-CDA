import React, { useState, useEffect } from "react";
import FormCreateProduct from "../FormCreateProduct/FormCreateProduct";
import UpdateProduct from "../FormUpdateProduct/UpdateProduct";
import axios from "axios";

const PopUp = ({ mode, productId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const[productData, setProductData] = useState([])
  console.log(productData)
 




useEffect(() => {
    if (mode === "edit" && productId) {
      axios
        .get(`http://localhost:3003/api/product/${productId}`)
        .then((response) => {
          setProductData(response.data);
        })
        .catch((error) => {
          console.error("Erreur lors de la récupération des informations du produit :", error);
        });
    }
  }, []);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const display = isOpen ? "block" : "none";

  let modalTitle = mode === "edit" ? "Modifier un produit" : "Ajouter un produit";
 

  return (
    <>
      <button
        onClick={toggleModal}
        type="button"
        className="btn btn-warning py-2 px-3"
      >
        {mode === "edit" ? "Modifier un produit" : "Ajouter un produit"}
      </button>

      <div className="modal" style={{ display, backgroundColor: "#0009" }}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{modalTitle}</h5>
              <button
                onClick={toggleModal}
                type="button"
                className="btn-close"
              ></button>
            </div>
            <div className="modal-body">
              {mode === "edit" ? (
                <UpdateProduct productData ={productData} toggleModal={toggleModal}  />
              ) : (
                <FormCreateProduct toggleModal={toggleModal} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopUp;
