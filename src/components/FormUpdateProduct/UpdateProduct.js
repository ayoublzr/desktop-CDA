import React, { useState, useEffect } from "react";
import axios from "axios";

const UpdateProduct = (props) => {
  const { toggleModal, productData } = props;

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [categorieId, setCategorieId] = useState("");
  const [youtubeURL, setYoutubeURL] = useState("");

  useEffect(() => {
    if (productData) {
      setName(productData.name);
      setDescription(productData.description);
      setCategorieId(productData.CategorieId);
      setYoutubeURL(productData.youtubeURL);
    }
  }, [productData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("image", image);
    formData.append("CategorieId", categorieId);
    formData.append("youtubeURL", youtubeURL);

    axios
      .patch(
        `http://localhost:3003/api/updateproduct/${productData.id}`,
        formData
      )
      .then((response) => {
        console.log(response);
        console.log("Product updated successfully!");
      })
      .catch((error) => {
        console.error("Error updating product:", error);
      });

    setName("");
    setDescription("");
    setImage("");
    setYoutubeURL("");
    toggleModal();
  };

  return (
    <div className="popup">
      <div className="popup-inner">
        <h2>Modifier Produit</h2>
        <form onSubmit={handleSubmit} className="m-3">
          <label className="form-label">
            Nom:
            <input
              className="form-control"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <div className="mb-3 text-start">
            <label htmlFor="pet-select">Categorie</label>
            <select
              className="form-select"
              name="pets"
              id="pet-select"
              value={categorieId}
              onChange={(e) => setCategorieId(e.target.value)}
            >
              <option value="">
                --Choisir la catégorie correspondant au produit--
              </option>
              <option value="1">interieur</option>
              <option value="2">exterieur</option>
            </select>
          </div>
          <label>
            Description:
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </label>
          <label className="form-label">
            URL YouTube :
            <input
              className="form-control"
              type="text"
              value={youtubeURL}
              onChange={(e) => setYoutubeURL(e.target.value)}
            />
          </label>
          <div className="mb-3">
            <label htmlFor="formFile" className="form-label">
              Choisir une image
            </label>
            <input
              className="form-control"
              type="file"
              id="formFile"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
          <div className="button-group">
            <button type="submit" className="btn btn-primary">
              Modifier
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
