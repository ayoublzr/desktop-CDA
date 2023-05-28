import React, { useEffect, useState } from "react";
import axios from "axios";

const EditProductPopup = ({ productId, onClose, onUpdate }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [CategorieId, setCategorieId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  
    console.log(CategorieId);
  
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("image", image);
    formData.append("CategorieId", CategorieId);
  
    axios
      .patch(`http://localhost:3003/api/updateproduct/${productId}`, formData)
      .then((response) => {
        console.log(response);
        console.log("Produit mis à jour avec succès !");
        onUpdate();
        onClose();
      })
      .catch((error) => {
        console.error("Erreur lors de la mise à jour du produit :", error);
      });
  };
  
  <input
    class="form-control"
    type="file"
    id="formFile"
    onChange={(e) => setImage(e.target.files[0])}
  />
  
  
  
  
  
  
  
  

  return (
    <div className="popup">
      <div className="popup-inner">
        <h2>Modifier le produit</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Nom :
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label for="pet-select">Choose a pet:</label>

          <select
            name="pets"
            id="pet-select"
            onChange={(e) => setCategorieId(e.target.value)}
          >
            <option value="">--Please choose an option--</option>
            <option value="1">interieur</option>
            <option value="2">exterieur</option>
          </select>

          <label>
            Description :
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </label>
          <div class="mb-3">
            <label for="formFile" class="form-label">
              Default file input example
            </label>
            <input
  class="form-control"
  type="file"
  id="formFile"
  onChange={(e) => setImage(e.target.files[0])}
/>
          </div>

          <div className="button-group">
            <button type="submit" className="btn btn-primary">
              Enregistrer
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              Annuler
            </button>
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default EditProductPopup;
