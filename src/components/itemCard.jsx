import Data from "../../ikea.json";

const ItemCard = () => {
  Data.map((features) => <li>{features}</li>);
  return <ul>{ItemCard}</ul>;
};

export default App;
