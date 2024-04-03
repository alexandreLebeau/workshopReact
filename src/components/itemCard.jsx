import styles from "./ItemCard.module.css";

function ItemCard({ furniture }) {
  return (
    <>
      <section className={styles.container}>
        <h2>{furniture.nom_produit}</h2>
        <img className="imgFurniture" src={furniture.image} />
        <p className={styles.prix}> {furniture.prix}</p>
        <p> {furniture.disponibilité}</p>
        {/* "enstock"?{styles.dispo}:{styles.pasdispo}*/}
        <p className="descriptionProduit"> {furniture.descriptif}</p>
        <p> {furniture.couleur}</p>
      </section>
    </>
  );
}

export default ItemCard;
