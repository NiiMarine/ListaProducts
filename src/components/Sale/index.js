import React, { useState } from 'react';

const Sale = (props) => {
  return (
    <div className="red-text">
     {props.children}%
       
    </div> 
   
  )
}

export default Sale