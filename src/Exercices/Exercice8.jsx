import { useState } from "react";

export default function App() {
  const [movies, setMovies] = useState([
    { id: 1, title: "Dune", watched: true },
    { id: 2, title: "Interstellar", watched: false },
    { id: 3, title: "Oppenheimer", watched: false },
  ]);

  let visiblesMovies = movies;
  // TODO : state filter ("all" | "watched" | "unwatched")
  const [filterMovie, setFilterMovie] = useState("all");

  switch (filterMovie) {
    case "watched":
      visiblesMovies = movies.filter((movie) => movie.watched);
      break;
    case "unwatched":
      visiblesMovies = movies.filter((movie) => !movie.watched);
      break;
  }
  // BONUS : fonction toggleWatched(id), comme toggleUser à l'Ex. 5
  const toggleWatched = (id) => {
    setMovies((prev) => prev.map((movie) => movie.id === id ? {...movie, watched: !movie.watched} : movie,),);
  };

  return (
    <div className="p-8">
      <h1 className="mb-4 text-xl">Exercice 8</h1>

      <div className="mb-4 flex gap-2">
        {/* TODO : 3 boutons qui appellent setFilter, avec le compteur entre parenthèses,
            un style différent pour le filtre actif et aria-pressed */}
        <button onClick={() => setFilterMovie("all")} className="rounded border px-3 py-1">Tous ({movies.length})</button>
        <button onClick={() => setFilterMovie("watched")} className="rounded border px-3 py-1">Vus ({movies.filter((movie) => movie.watched).length})</button>
        <button onClick={() => setFilterMovie("unwatched")} className="rounded border px-3 py-1">À voir ({movies.filter((movie) => !movie.watched).length})</button>
      </div>

      <ul className="space-y-1">
        {/* TODO : .map() sur visiblesMovies, affiche 🟢 ou ⚪ + le titre */}
        {visiblesMovies.map((movie) => (
            <li key={movie.id} className="flex items-center gap-2">
            {movie.watched ? "🟢" : "⚪"} {movie.title}
            
            <button onClick={() => toggleWatched(movie.id)} className="rounded bg-black px-3 py-1 text-sm text-white">
                Basculer statut
            </button>
            
            </li>))}
        {/* BONUS : un bouton par film qui bascule watched (setMovies + .map) */}
      </ul>
    </div>
  );
}