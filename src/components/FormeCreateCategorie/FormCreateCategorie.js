import React, { useState} from "react"
import axios from "axios"

function FormCreateCategorie(props) {
  const [name, setName] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault(); 
    const data = { name: name }
    axios
      .post("http://localhost:3003/api/addcategorie", data) 
      .then((response) => {
        console.log(response.data)
        setName("")
        props.toggleModal()
      })
      .catch((err) => {
        console.error("Erreur lors de la création de la catégorie :", err);
      });
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
      <div className="button-group">
        <button type="submit" className="btn btn-primary m-4">
          Créer
        </button>
      </div>
    </form>
  );
}

export default FormCreateCategorie;
