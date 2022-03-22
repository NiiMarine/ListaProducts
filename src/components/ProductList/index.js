
import React from 'react' ;
import Sale from '../Sale';
import "./index.css"

const ProductList = (props) => {
  //fix code
  // console.log(props.products) for to observer the props;
  

  return (
    
      <div className="list">

         {props.products.map((product, index) => (
            <div key={index} >

         <div className='name'>{product.name} </div>
             
             <div> R${product.price} </div>
              { product.discountPercentage &&
       <Sale> {product.discountPercentage } </Sale>}
            
              
              
           
             
            </div>
          ))}
        
      </div>
    
    
  );
};


export default ProductList;
