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
        <div>
          <img  className="logo" src="https://genaehtesholz.files.wordpress.com/2019/03/aeki-logo.jpg"></img>
        </div>
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

        <div class="form__group field">
          <input
            type="input"
            onChange={handleFilter}
            class="form__field"
            placeholder="Search"
            id="name"
            required
          />
          <label for="name" class="form__label">
            Search
          </label>
        </div>

        {/* <div className="Search">
          <form action="/search" method="GET">
            <input
              type="text"
              name="q"
              placeholder="what are you looking for?"
            />
          </form>
        </div> */}
      </nav>
    </>
  );
}
export default Navbar;
