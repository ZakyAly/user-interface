import React from "react";
import "./App.css";
import Products from "../src/components/Products/Products";

import FilterableProductTable from "./components/FilterableProductTable/FilterableProductTable";
function App() {
  return (
    <div className="App">
      <FilterableProductTable products={Products} />
    </div>
  );
}

export default App;
