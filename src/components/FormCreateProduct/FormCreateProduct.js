import React, { useState } from "react";
import axios from "axios";

const FormCreateProduct = (props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [categorie, setCategorie] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("image", image);
    formData.append("categorie", categorie);

    axios
      .post("http://localhost:3003/api/addproduct", formData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la creation du produit :", error);
      });
    setName("");
    setDescription("");
    setImage("");
    props.toggleModal();
  };
  return (
    <form onSubmit={handleSubmit} className="m-3">
      <label>
        Nom :
        <input
          className="form-control"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <div className="mb-3 ">
        <label for="pet-select">Categorie :</label>

        <select
          className="form-select"
          name="pets"
          value={categorie}
          id="pet-select"
          onChange={(e) => setCategorie(e.target.value)}
        >
          <option value="">
            --Choisir le categorie correspond au produit--
          </option>
          <option value="exterieur">exterieur</option>
          <option value="interieur">interieur</option>
        </select>
      </div>
      <div className="mb-4 ">
        <label className="form-label">
          Description :
          <textarea
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </label>
      </div>
      <div class="mb-3">
        <label for="formFile" class="form-label">
          Choisir une image
        </label>
        <input
          class="form-control"
          type="file"
          id="formFile"
          name="image"
          onChange={(e) => setImage(e.target.files[0])}
        />
      </div>

      <div className="button-group">
        <button type="submit" className="btn btn-primary">
          Créer
        </button>
      </div>
    </form>
  );
};

export default FormCreateProduct;
