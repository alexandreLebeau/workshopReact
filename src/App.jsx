import { useState } from "react";
import data from "../ikea.json";
import Navbar from "./components/NavBar";
import ItemList from "./components/ItemList";
import "../src/App.css";

function App() {
  const [arrayOfFurnituresFiltered, setArrayOfFurnituresFiltered] =
    useState(data);

  return (
    <>
      <Navbar
        data={data}
        setArrayOfFurnituresFiltered={setArrayOfFurnituresFiltered}
      />
      <ItemList data={arrayOfFurnituresFiltered} />
    </>
  );
}

export default App;
