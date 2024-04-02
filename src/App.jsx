import React from 'react';
import Navbar from './components/NavBar'; 
import '../src/app.css'
import data from "../ikea.json";
function App() {
  return (
    <div>
      <Navbar />
      {/* Autres composants et contenu de l'application */}
    </div>
  );
}

export default App;
