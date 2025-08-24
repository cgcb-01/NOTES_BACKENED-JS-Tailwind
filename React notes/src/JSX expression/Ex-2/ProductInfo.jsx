import React from "react";

const products = {
  name: "Laptop",
  price: "$1200",
  availibility: "In Stock",
};

function ProductInfo() {
  let { name, price, availibility } = products;
  return (
    <div>
      <h1>ProductInfo</h1>
      <p>Product Name: {name}</p>
      <p>Product Price: {price}</p>
      <p>Product Availibility: {availibility}</p>
      <p></p>
    </div>
  );
}

export default ProductInfo;
