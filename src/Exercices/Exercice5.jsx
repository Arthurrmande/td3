import { useState } from "react";

export default function App() {
  const [users, setUsers] = useState([
    { id: 1, name: "Alice", active: true },
    { id: 2, name: "Bob", active: false },
    { id: 3, name: "Charlie", active: true },
  ]);

  const deleteUser = (id) => {
    // TODO : garde tous les users SAUF celui qui a cet id (.filter)
    setUsers((prev) => prev.filter((user) => user.id !== id));

  };

  const toggleUser = (id) => {
    // TODO : recrée le tableau avec .map() et inverse active uniquement
    // pour l'utilisateur dont l'id correspond (copie avec { ...user, ... })
    setUsers((prev) => prev.map((user) => user.id === id ? {...user, active: !user.active} : user,),);
  };

  const addUser = (name) => {
   const newUser = (prev) => [...prev, { id: crypto.randomUUID(), name : "Alice", active: true }];
   setUsers(newUser);
  }

  return (
    <div className="p-8">
      <h1 className="mb-4 text-xl">Exercice 5</h1>

      <ul className="space-y-2">
        {users.map((user) => (
          <li key={user.id} className="flex items-center justify-between rounded border p-4">
            <span>{user.name} {user.active ? "🟢" : "🔴"}</span>

            <div className="flex gap-2">
              {/* TODO : ajoute onClick → toggleUser(user.id) au bouton ci-dessous */}
              <button onClick={() => toggleUser(user.id)} className="rounded bg-blue-500 px-3 py-1 text-sm text-white">
                Basculer statut
              </button>

              {/* TODO : ajoute onClick → deleteUser(user.id) au bouton ci-dessous */}
              <button onClick={() => deleteUser(user.id)} className="rounded bg-red-500 px-3 py-1 text-sm text-white">
                Supprimer
              </button>

              <button onClick={() => addUser(user.name)} className="rounded bg-green-500 px-3 py-1 text-sm text-white">
                Ajouter
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}