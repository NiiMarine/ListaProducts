import React, { useState } from "react";
//never used

const ProductList = (props) => {
  //fix code
  // console.log(props.products) for to observer the props;

  return (
    <>
      <div className="list">
        <div>
          {/* Props accepted is products, not listaProdutos, and map mas be in return component */}
          {props.products.map((product, index) => (
            <div key={index}>
              {product.name}
              {product.price}
              {product.discountPercentage}
            </div>
          ))}
        </div>
      </div>
    </>
    //all elements must be inside a tag
  );
};
export default ProductList;
