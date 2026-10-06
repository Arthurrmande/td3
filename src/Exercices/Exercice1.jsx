import { useState } from "react";
import LikeButton from "../Components/LikeButton";

export default function App() {
  // TODO : déclare le state likes (initialisé à 0)
  // TODO : déclare la fonction handleLike
  
  const [count, setCount] = useState(0);
  const handlerLike = () => setCount((prev) => prev + 1);

  return (
    <div className="p-8">
      <h1 className="mb-4 text-xl">Exercice 1</h1>
      <LikeButton count={count} onLike={handlerLike} />
    </div>
  );
}