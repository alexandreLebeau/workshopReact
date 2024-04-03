import { useState } from "react";
import data from "../ikea.json";
import Navbar from "./components/NavBar";
import ItemList from "./components/ItemList";
import "../src/App.css";

function App() {
  const [arrayOfFurnituresFiltered, setArrayOfFurnituresFiltered] =
    useState(data);
  const handleClick = () => {
    const dispoFiltered = data.filter(
      (furniture) => furniture.disponibilité === true
    );
    setArrayOfFurnituresFiltered(dispoFiltered);
  };
  const handleReturn = () => {
    setArrayOfFurnituresFiltered(data);
  };

  return (
    <>
      <Navbar
        data={data}
        setArrayOfFurnituresFiltered={setArrayOfFurnituresFiltered}
      />
      <section>
        <button onClick={handleClick}>Produits disponibles</button>
        <button onClick={handleReturn}>X</button>
      </section>
      <div className="productsList">
        <ItemList data={arrayOfFurnituresFiltered} />
      </div>
    </>
  );
}

export default App;
