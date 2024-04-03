import styles from "./ItemCard.module.css";

function ItemCard({ furniture }) {
  return (
    <>
      <section className={styles.container}>
        <h2>{furniture.nom_produit}</h2>
        <img className="imgFurniture" src={furniture.image} />
        <p className={styles.prix}> {furniture.prix} €</p>

        <div
          className={furniture.disponibilité ? styles.dispo : styles.pasdispo}
        >
          {furniture.disponibilité ? "Disponible" : "Pas disponible"}
        </div>

        <p className="descriptionProduit"> {furniture.descriptif}</p>
        <p> {furniture.couleur}</p>
      </section>
    </>
  );
}

export default ItemCard;
