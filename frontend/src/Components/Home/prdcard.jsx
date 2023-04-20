import React from 'react'
//import {Link} from "react-router-dom";
import './prdcard.css'
const ProductCard = (props) => {
    const product = props.product;
    const handleClick = props.handleClick;



  return (
    <div className='cards'>
        <div className='image_box'>
            <img src={product.image} width={200} height={200}/>
        </div >
      <div className='details'>
 
  <p>{product.title}<br/>{product.brand}<br/>{product.price}</p>
            <button onClick={()=>handleClick(product)}>Add to cart</button>
            <br/>
            <br/>
            <br/>
  </div>
  
           
            
           

          

    </div>
  )
  }

export default ProductCard