import Data from "../../ikea.json";
import CardTemplate from "./CardTemplate";

const productData = Data;
function ItemCard({ productData }) {
  return (
    <>
      <CardTemplate
        name={productData[0].nom_produit}
        descriptif={productData[0].descriptif}
        price={productData[0].prix}
        couleur={productData[0].couleur}
      />
      <CardTemplate
        name={productData[1].itemName}
        descriptif={productData[1].descriptif}
        image={productData[1].foodImage}
        prix={productData[1].prix}
        couleur={productData[1].couleur}
      />
      <CardTemplate
        name={productData[2].itemName}
        descriptif={productData[2].descriptif}
        image={productData[2].foodImage}
        prix={productData[2].prix}
        couleur={productData[2].couleur}
      />
      <CardTemplate
        name={productData[3].itemName}
        descriptif={productData[3].descriptif}
        image={productData[3].foodImage}
        prix={productData[3].prix}
        couleur={productData[3].couleur}
      />
    </>
  );
}

export default ItemCard;
