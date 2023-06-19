import React, { useState, useEffect } from "react";
import axios from "axios";

function UsersTable() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3003/api/users")
      .then((response) => {
        console.log(response.data);
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const mapRoleName = (isAdmin) => {
    return isAdmin ? "Administrateur" : "Utilisateur";
  };

  const handleDeleteUser = (id) => {
    axios
      .delete(`http://localhost:3003/api/deleteuser/${id}`)
      .then((response) => {
        console.log(response.data);
        // Actualiser la liste des utilisateurs après la suppression réussie
        setUsers(users.filter((user) => user.id !== id));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleUpdateRole = (id) => {
    axios
      .patch(`http://localhost:3003/api/updaterole/${id}`)
      .then((response) => {
        console.log(response.data);
        // Actualiser la liste des utilisateurs après la modification réussie du rôle
        const updatedUsers = users.map((user) => {
          if (user.id === id) {
            return { ...user, isAdmin: !user.isAdmin };
          }
          return user;
        });
        setUsers(updatedUsers);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="d-flex justify-content-center">
      <div>
        <table className="table table-bordered border-primary my-3 mx-4">
          <thead>
            <tr>
              <th>#</th>
              <th>Nom</th>
              <th>Email</th>
              <th>Téléphone</th>
              <th>Rôle</th>
              <th>Actions</th> {/* Ajout de la colonne Actions */}
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {users.map((user, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{mapRoleName(user.isAdmin)}</td>
                <td>
                  {/* Bouton Supprimer */}
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDeleteUser(user.id)}
                  >
                    Supprimer
                  </button>

                  {/* Bouton Modifier le rôle */}
                  <button
                    className="btn btn-primary btn-sm mx-2"
                    onClick={() => handleUpdateRole(user.id)}
                  >
                    {user.isAdmin ? "Enlever Admin" : "Rendre Admin"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UsersTable;