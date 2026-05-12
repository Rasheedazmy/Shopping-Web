import React, { useState } from 'react'
import Child from '../Child/Child'

export default function Parent() {
    const [products, setProduct] = useState([
      { id: 1, name: 'Product 1', price: 10 },
      { id: 2, name: 'Product 2', price: 20 },
    ])
    function updateProduct()
    {
      console.log("3fret");
      
    }
  return <>
  <div className="container mx-auto py-4">
    <div className="row">
      {products.map((product)=> <Child key={product.id} update={updateProduct} pDetails={product}/>)}
    </div>
  </div>
  
  </>
    
}
