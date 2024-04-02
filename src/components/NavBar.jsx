import ItemCard from "./ItemCard";

function Navbar({ data, setArrayOfFurnituresFiltered }) {
  const handleFilter = (event) => {
    const value = event.target.value;

    const filtered = data.filter((furniture) =>
      furniture.nom_produit.includes(value)
    );
    setArrayOfFurnituresFiltered(filtered);
  };

  return (
    <>
      <nav className="navbar">
        <div className="Home">
          <a href="#" className="navbar-item">
            Home
          </a>
        </div>
        <div className="Products">
          <a href="#" className="navbar-item">
            Products
          </a>
        </div>
        <div className="Search">
          <form action="/search" method="GET">
            <input
              type="text"
              onChange={handleFilter}
              name="q"
              placeholder="what are you looking for?"
            />
          </form>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
