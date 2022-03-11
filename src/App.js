import React, { useState } from "react";
//never used
import "./App.css";
import Sale from "./components/Sale";
import ProductList from "./components/ProductList";

function App() {
  const products = [
    { name: "Doce de abóbora", price: 0.5, discountPercentage: null },
    { name: "Salgadinho", price: 2.5, discountPercentage: 10 },
    { name: "Refrigerante", price: 8.5, discountPercentage: 5 },
    { name: "Maçã", price: 0.7, discountPercentage: null },
    { name: "Feijão", price: 2.7, discountPercentage: 15 },
  ];

  const listaProdutos = products.map((p, i) => (
    <p key={i}>
      {i} - {p.name} - R${p.price} -- Discount{p.discountPercentage} - ``
    </p>
  ));

  return (
    <div>
      {/* </>  fix  h2t ag*/}
      <h2>{listaProdutos} </h2> fiz
      {/* </>  unused tag*/}
      {/* TODO Sale needs props and sale logic*/}
      <Sale />
      {/* Sale needs props products */}
      <ProductList products={products} />
    </div>
  );
}

export default App;
