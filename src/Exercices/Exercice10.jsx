import { useState } from "react";

function EditableCard({ value, onSave }) {
  // TODO : state local isEditing (false au départ)
  const [isEditing, setIsEditing] = useState(false);
  // TODO : state local draft (initialisé avec value)
  const [draft, setDraft] = useState(value);

  const startEditing = () => {
    // TODO : recopie value dans draft, puis passe en mode édition
    setDraft(value);
    setIsEditing(true);
  };

  const cancel = () => {
    // TODO : repasse en mode lecture, sans appeler onSave
    setIsEditing(false);
  };

  const handleSubmit = (e) => {
    // TODO : e.preventDefault()
    e.preventDefault();
    // TODO : si draft.trim() n'est pas vide → onSave(draft.trim()) puis repasse en mode lecture
    if (typeof draft === "string" && draft.trim()) {
      onSave(draft.trim());
      setIsEditing(false);
    }
  };

  return (
    <div className="rounded border p-4">
      {/* TODO : si isEditing → <form onSubmit={handleSubmit}> avec un <input> contrôlé par draft,
          un bouton "Valider" (type="submit") et un bouton "Annuler" (type="button") */}
        {isEditing ? (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              className="border p-2"
            />
            <button type="submit" className="ml-2 rounded bg-green-500 px-3 py-1 text-white">
              Valider
            </button>
            <button type="button" onClick={cancel} className="ml-2 rounded bg-red-500 px-3 py-1 text-white">
              Annuler
            </button>
          </form>
        ) : (
          <span>{value}</span>
        )}

      {/* TODO : sinon → <span>{value}</span> + bouton "Modifier" (startEditing) */}
        {!isEditing && (
          <button onClick={startEditing} className="rounded bg-blue-500 px-3 py-1 text-white">
            Modifier
          </button>
        )}
    </div>
  );
}

export default function App() {
  // TODO : state username ("Alice" au départ)
  const [username, setUsername] = useState("Alice");

  return (
    <div className="p-8">
      <h1 className="mb-4 text-xl">Exercice 10</h1>
      {/* TODO : <EditableCard /> avec value et onSave */}
      <EditableCard value={username} onSave={setUsername} />
      <p className="mt-4 text-sm text-gray-500">
        Valeur stockée dans le parent : <strong>{username}</strong>
      </p>
    </div>
  );
}