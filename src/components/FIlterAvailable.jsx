import Data from "../../ikea.json";

const FilterAvailable = () => {
  const FilterDispo = product.filter(
    (Data) => Data.disponibilité === "En stock"
  );
  const listProduct = Data.map((data) => (
    <li>
      <p>
        <b>{data.name}:</b>
        {" " + data.descriptif + " " + data.couleur}
      </p>
    </li>
  ));

  return <div>{listProduct}</div>;
};

export default FilterAvailable;
