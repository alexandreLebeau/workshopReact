import styles from "./ItemCard.module.css";

function ItemCard({ data }) {
  return (
    <>
      <section className={styles.container}>
        <h2>{data.nom_produit}</h2>
        <img src={data.image} />
        <p className={styles.prix}> {data.prix}</p>
        <p> {data.disponibilité}</p>
        {/* "enstock"?{styles.dispo}:{styles.pasdispo}*/}
        <p> {data.descriptif}</p>
        <p> {data.couleur}</p>
      </section>
    </>
  );
}

export default ItemCard;
