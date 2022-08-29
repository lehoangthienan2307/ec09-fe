import React from 'react';
import format from '../utils/format'
import axios from 'axios'
import {State} from '../../State'
import { useEffect, useState, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import cartAPI from '../../api/CartAPI'

const ProductInfo = ({ product }) => {

  const state = useContext(State)
  const token= localStorage.getItem('token')
  const navigate = useNavigate();
  const catchUserCart=state.userContext.catchUserCart;

  const addToCartSubmit = async (ProID) => {

    try {

      const body = {
        ProID: ProID,
        quantity: 1
    }
    console.log(body)
   await axios.post("/cart", body,
    {
      headers: {Authorization: token}
    })
  
     await catchUserCart()
   
    } catch (error) {
      console.error(error);
    }
  };

  return <section className='product_info'>
    {
      product &&  
      <>
        <img src={product.image} alt={product.image} />
        <div className='box'>
        <input type="text" id="ProID" value={product.ProID} />
        <input type="number" id="quantity" value={product.ProID} />
        
          <h2>{product.ProName}</h2>
          <h3>{format.format_number(product.Price)} VND</h3>
          <div dangerouslySetInnerHTML={{__html: product.Description}}></div>
         
          <button onClick={() =>
                addToCartSubmit(product.ProID)}>
         
          Add to cart
    
            </button>
        </div>
      </>
    }

  </section>;
};

export default ProductInfo;