import React from "react";
const items = ["Power bank", "Headphones", "New SSD", "Hoodie", "Laptop Stand"];

const PrintItems = ({ items }) => {
  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>
          <h3>{item}</h3>
          <hr />
        </div>
      ))}
    </div>
  );
};

const EmptyCart = () => {
  return (
    <div>
      <h2>Your Cart is Empty</h2>
      <p>Add items to it now</p>
    </div>
  );
};

function Cart() {
  return (
    <div>
      <h1>Your Cart</h1>
      {items.length > 0 ? <PrintItems items={items} /> : <EmptyCart />}
    </div>
  );
}

export default Cart;
