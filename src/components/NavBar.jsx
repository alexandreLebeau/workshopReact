import { useState } from "react";
import styles from "./NavBar.module.css";

function NavBar() {
  const [searchTerm, setSearchTerm] = useState();
  console.log("Recherche pour:", searchTerm);
  const handleSearch = () => {};

  return (
    <div className={styles.navbar}>
      <div className={styles.navItem}>Name</div>
      <div className={styles.navItem}>Products</div>
      <input
        type="text"
        className={styles.searchInput}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className={styles.searchButton} onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}

export default NavBar;
