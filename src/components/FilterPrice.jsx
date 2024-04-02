import { React, useState } from "react";
import Data from "../../ikea.json";

function FilterPrice() {
  const productArr = Data;
  const [sortPrice, setSortPrice] = useState("none");

  const sortMethods = {
    none: { method: (a, b) => null },
    ascending: { method: undefined },
    descending: { method: (a, b) => (a > b ? -1 : 1) },
  };

  return (
    <div className="main">
      <select
        defaultValue={"DEFAULT"}
        onChange={(e) => setSortState(e.target.value)}
      >
        <option value="DEFAULT" disabled>
          None
        </option>
        <option value="ascending">Ascending</option>
        <option value="descending">Descending</option>
      </select>
      <ul>
        {data.sort(sortMethods[sortState].method).map((el, i) => (
          <li key={i}>{el}</li>
        ))}
      </ul>
    </div>
  );
}
export default FilterPrice;
