// import FilterPrice from "./components/FilterPrice";
// import FilterAvailable from "./components/FIlterAvailable";
// import FilterColor from "./components/FilterColor";
import "./App.css";
import FilterPrice from "./components/FilterPrice";

function App() {
  return (
    <>
      <header>
        {/* Insérer le composant NavBar */}
        <ul className="NavBar">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            {" "}
            <a href="">Products</a>
          </li>
          <li>
            {" "}
            {/* ajouter ici la fonction de recherche */}
            <input placeholder="Search" className="searchBarNav"></input>
          </li>
        </ul>
      </header>
      <p className="introRef">
        La décoration est une question de goût - et elle contribue à rendre une
        maison accueillante, confortable et personnelle. Bougies douillettes.
        Photos mémorables. Plantes ravissantes. Avec notre large gamme
        d'accessoires pour la maison, vous trouverez de nombreuses façons de
        vous exprimer et de répandre un peu de joie.
      </p>
      <div className="buttonsFilter">
        {/* Ajouter dans chaque boutton une fonction de tri ou de filtre */}
        <button onClick={FilterPrice}>Trier par prix</button>
        <button /*onClick={}*/>Filtrer par disponibilité</button>
        <button /*onClick={}*/>Filtrer par couleur</button>
      </div>
      <div className="cards">
        {/* Ajouter ici l'appel de la fonction ItemCard */}
        <p className="productCard">Produit 1</p>
        <p className="productCard">Produit 2</p>
        <p className="productCard">Produit 3</p>
        <p className="productCard">Produit 4</p>
        <p className="productCard">Produit 5</p>
        <p className="productCard">Produit 6</p>
      </div>
      <footer>
        <div class="footer">
          <div class="row">
            <a href="#">
              <i class="fa fa-facebook"></i>
            </a>
            <a href="#">
              <i class="fa fa-instagram"></i>
            </a>
            <a href="#">
              <i class="fa fa-youtube"></i>
            </a>
            <a href="#">
              <i class="fa fa-twitter"></i>
            </a>
          </div>

          <div class="row">
            <ul>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">Our Services</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
            </ul>
          </div>

          <div class="row">
            Lorem Ipsum © 2024 Placeholder - All rights reserved
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
