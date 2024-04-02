import React from 'react';
import data from "../../ikea.json"
import { useState } from 'react';


function Navbar() {

    const [filterData,setFilterData]= useState(data); 
    const handleFilter = (event) => {
        const value = event.target.value;
        const filtered = data.filter(furniture => furniture.nom_produit.includes(value));
        setFilterData(filtered);
      };
  return (
    <>

    <nav className="navbar">
        <div className="Home">
        <a href="#" className="navbar-item">Home</a>
        </div>
        <div className="Products" >
        <a href="#" className="navbar-item">Products</a>
        </div>
      <div className="Search">
      <form action="/search" method="GET">
  <input type="text" onChange={handleFilter} name="q" placeholder="what are you looking for?"/>

</form>
      </div>
    </nav>
    <div>
        { filterData.map(furniture => (
          <div key={furniture.nom_produit}>
            <p>{furniture.nom_produit}</p>
           


          </div>

        ))}
    </div>
    </>
  );
}
export default Navbar;
