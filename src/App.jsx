import { useState } from "react";
import "./App.css";
import data from "../ikea.json";
import ItemCard from "./components/ItemCard";
import React from 'react';
import Navbar from './components/NavBar'; 
import '../src/app.css'

function App() {
  return (
    <>
     <Navbar />
      <ItemCard data={data[0]} />
    </>
  );
}

export default App;
