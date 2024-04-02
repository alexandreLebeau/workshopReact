import ItemCard from "./ItemCard";

function ItemList({ data }) {
  return (
    <>
      {data.map((furniture) => (
        <ItemCard key={data.nom_produit} furniture={furniture} />
      ))}
    </>
  );
}

export default ItemList;
