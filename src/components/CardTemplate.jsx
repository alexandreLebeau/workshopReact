import React from "react";

function CardTemplate({ name, descriptif, price, couleur }) {
  return (
    <section className="itemContainer">
      <figure className="imgContainer">
        <figcaption>
          <h2>{name}</h2>
          <p>Couleur : {couleur}</p>
          <p>{descriptif}</p>
        </figcaption>
      </figure>
      <span>{price} EUR</span>
    </section>
  );
}

export default CardTemplate;
