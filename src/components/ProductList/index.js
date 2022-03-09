import React, { useState } from 'react';


const ProductList = (props) => {

      
  { props.products.map((products) => <div> 
{products.name}{products.price}{products.discountPercentage}
 </div>  
)}

 

 

  
    
    return (
    <div className="list">
     <>
  
  <p>{ProductList}</p>
    
   
  </>
    </div> 
    
  )
  
  
   
  
  }
export default ProductList
