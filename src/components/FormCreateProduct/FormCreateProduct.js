import React, { useState } from "react";
import axios from "axios";

const FormCreateProduct = (props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [categorie, setCategorie] = useState("");
  const [video, setVideo] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("image", image);
    formData.append("categorie", categorie);
    formData.append("video", video);

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
    setVideo("");
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
      <div className="mb-3">
        <label htmlFor="pet-select">Categorie :</label>

        <select
          className="form-select"
          name="pets"
          value={categorie}
          id="pet-select"
          onChange={(e) => setCategorie(e.target.value)}
        >
          <option value="">
            --Choisir la catégorie correspondant au produit--
          </option>
          <option value="exterieur">exterieur</option>
          <option value="interieur">interieur</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="form-label">
          Description :
          <textarea
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </label>
      </div>
      <div className="mb-3">
        <label htmlFor="formFile" className="form-label">
          Choisir une image
        </label>
        <input
          className="form-control"
          type="file"
          id="formFile"
          name="image"
          onChange={(e) => setImage(e.target.files[0])}
        />
      </div>
      <label className="form-label">
        URL YouTube :
        <input
          className="form-control"
          type="text"
          value={video}
          onChange={(e) => setVideo(e.target.value)}
        />
      </label>
      <div className="button-group">
        <button type="submit" className="btn btn-primary">
          Créer
        </button>
      </div>
    </form>
  );
};

export default FormCreateProduct;
