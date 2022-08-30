import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { Rating } from "@material-ui/lab";
import format from '../utils/format'



const ProductCard = ({product}) => {
  return (

    <div className='card'>
      <span style={{ float: "right", padding: "5px" }}>
          <FavoriteBorderIcon style={{ color: "gray" }} />
        </span>
    <img src={product.image} alt={product.image} />
    <span>
    <Rating precision={0.5} size="small" />
    </span>
    

    
    <div className="box" >
      <h4 style={{ color: "blue" }}>
          {product.ProName}
      </h4>
      <h4>{format.format_number(product.Price)} VND</h4>
      <h6>Đã bán: {product.sold}</h6>
      <div className='btn_div'>
        <button className="btn_edit">Add to cart</button>
        <button className="btn_delete">
        <Link to={`/products/${product.ProID}`}>
        Details
        </Link>
          </button>
      </div>
    </div>
  </div>
  )
}

export default ProductCard