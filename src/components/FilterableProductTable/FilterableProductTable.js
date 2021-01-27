import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import ProductTable from "../ProductTable/ProductTable";

const FilterableProductTable = (props) => {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);
  const { products } = props;

  const handleFilterTextChanged = (filterText) => {
    setFilterText(filterText);
  };

  const handleInStockOnlyChange = (inStockOnly) => {
    setInStockOnly(inStockOnly);
  };

  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={handleFilterTextChanged}
        onInStockOnlyChange={handleInStockOnlyChange}
      />
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </div>
  );
};

export default FilterableProductTable;
