import { useState } from "react";

// TODO : déstructure la prop { onColorSelect }
function ColorPicker( {onColorSelect} ) {
  return (
    <div className="mb-4 flex gap-2">
      {/* TODO : onClick → onColorSelect("red") */}
      <button onClick = {() => onColorSelect("red")} className="rounded bg-red-500 px-3 py-1 text-white">Rouge</button>
      {/* TODO : onClick → onColorSelect("blue") */}
      <button onClick = {() => onColorSelect("blue")} className="rounded bg-blue-500 px-3 py-1 text-white">Bleu</button>
    </div>
  );
}

export default function App() {
  // TODO : state bgColor (initialisé à "white")
  // TODO : fonction handleColorChange(color) qui met à jour bgColor

  const [bgColor, setBgColor] = useState("white");
  const handleColorChange = (color) => setBgColor(color);

  return (
    // TODO : ajoute style={{ backgroundColor: bgColor }}
    <div className="min-h-screen p-8 transition-colors bg-(--color)" style={{ '--color' : `var(--clr-${bgColor})` }}>
      <h1 className="mb-4 text-xl">Exercice 2</h1>
      {/* TODO : affiche <ColorPicker /> avec sa prop */}
        <ColorPicker onColorSelect={handleColorChange} />
      <p>
        Couleur actuelle : <strong>{bgColor}</strong>
      </p>
    </div>
  );
}