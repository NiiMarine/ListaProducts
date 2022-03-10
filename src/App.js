import React, {useState} from 'react';
import './App.css';
import Sale from './components/Sale';
import ProductList from './components/ProductList';



function App() {
 
  const products = [
    { name: "Doce de abóbora", price: 0.5, discountPercentage: null },
    { name: "Salgadinho", price: 2.5, discountPercentage: 10 },
    { name: "Refrigerante", price: 8.5, discountPercentage: 5 },
    { name: "Maçã", price: 0.7, discountPercentage: null },
    { name: "Feijão", price: 2.7, discountPercentage: 15 },
  ]; 

const listaProdutos=products.map(
  (p,i)=>
  <p key={i}>{i} - {p.name} - R${p.price} -- Discount{p.discountPercentage} - </p>

  
)
  
  return (
   
    <div className="App">
      <h2>{listaProdutos} <h2/>
    </>
  
     <Sale />
     <ProductList />
     
 

    </div>
    
  );

} 

export default App;
