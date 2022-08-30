import React from 'react';
import format from '../utils/format'
import axios from 'axios'
import {State} from '../../State'
import { useEffect, useState, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import cartAPI from '../../api/CartAPI'
import Comment from '../comment/Comment'

import swal from "sweetalert2";

const ProductInfo = ({ product }) => {

  const state = useContext(State)
  const token= localStorage.getItem('token')
  const navigate = useNavigate();
  const catchUserCart=state.userContext.catchUserCart;
  
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();
  
  const fetchReviews = async () => {
    try {
   
      const response = await axios.get('/review', {
        headers: {Authorization: token}
      })
      const { reviews } = response.data;
   
        setReviews(reviews);

    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {

    fetchReviews();

  }, []);

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

  const handleReview = async ({ ProID, rating, comment }) => {
    try {
      const body={
        ProID: ProID,
        rating: rating,
        comment:comment
      }
   await axios.post('/review', body,{
        headers: {Authorization: token}
      })
  
 
        swal.fire({
          title: "Rating",
          text: "Đánh giá sản phẩm thành công",
          icon: "success",
          confirmButtonText: "OK",
        })
      
      
    } catch (err) {
      console.error(err);
    }
  };

  return <section className='product_info'>
    {
      product &&  
      <>
        <img src={product.image} alt={product.image} />
        <div className='box'>
        <input type="hidden" id="ProID" value={product.ProID} />
        
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

  </section>


};

export default ProductInfo;