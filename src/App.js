import { useState } from "react";
import "./styles.css";

function Appli() {
  //state (état, donnés)
  const [compteur, setCompteur] = useState(1);
  //comportements
  const handleClick = () => {
    setCompteur(compteur + 1);
  };
  //afffichage (render)
  return (
    <div className="container">
      <h1>{compteur}</h1>
      <button onClick={handleClick}>Incrémente</button>
    </div>
  );
}

export default Appli;
