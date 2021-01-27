import React from "react";

const ProductCategoryRow = (props) => {
  const { product } = props;
  return (
    <tr>
      <th
        colSpan="2"
        style={{ fontSize: "20px", color: "", textDecoration: "underline" }}
      >
        {product.category}
      </th>
    </tr>
  );
};

export default ProductCategoryRow;
