import React from "react";
const products = [
  { id: 1, name: "Phone", price: "$699" },
  { id: 2, name: "Laptop", price: "$1200" },
  { id: 3, name: "Headphone", price: "$199" },
];

function ProductList() {
  return (
    <div>
      <h1> Product List</h1>
      {products.map(({ id, name, price }) => (
        <div key={Math.random()}>
          <h3>Product No: {id}</h3>
          <h3>Product Name: {name}</h3>
          <h3> Product Price: {price}</h3>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default ProductList;
