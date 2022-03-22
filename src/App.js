
import "./App.css";
import Sale from "./components/Sale";
import ProductList from "./components/ProductList";

function App() {
  const products = [
    { name: "Doce de abóbora", price: 0.50, discountPercentage: null },
    { name: "Salgadinho", price: 2.50, discountPercentage: 10 },
    { name: "Refrigerante", price: 8.50, discountPercentage: 5 },
    { name: "Maçã", price: 0.70, discountPercentage: null },
    { name: "Feijão", price: 2.70, discountPercentage: 15 },
  ];

  return (
    <div>
       
      <ProductList products={products} />
      
     <Sale> </Sale>
    </div>
  );
}

export default App;
