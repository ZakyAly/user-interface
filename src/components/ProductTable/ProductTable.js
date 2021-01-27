import React from "react";
import ProductCategoryRow from "../ProductCategoryRow/ProductCategoryRow";
import ProductRow from "../ProductRow/ProductRow";

const ProductTable = (props) => {
  const { filterText, inStockOnly, products } = props;
  const rows = [];

  let lastCategory = null;

  products.forEach((product) => {
    if (product.name.indexOf(filterText) === -1) {
      return;
    }

    if (inStockOnly && !product.stocked) {
      return;
    }

    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow product={product} key={product.category} />
      );
    }
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });

  return (
    <table width="100%">
      <thead>
        <tr style={{ color: "skyblue", textDecoration: "underline" }}>
          <th align="left">Product</th>
          <th align="right">Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

export default ProductTable;
