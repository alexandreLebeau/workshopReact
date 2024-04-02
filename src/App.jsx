import { useState } from "react";
import "./App.css";
import data from "../ikea.json";
import ItemCard from "./components/ItemCard";

function App() {
  return (
    <>
      <ItemCard data={data[0]} />
    </>
  );
}

export default App;
