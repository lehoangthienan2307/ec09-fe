import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ProductInfo from '../products/ProductInfo'
import { getOneProduct } from '../../api/ProductsAPI'
import useQuery from '../../hook/useQuery';


const ProductDetail = () => {
    const { id }=useParams()
    const url = getOneProduct(id)
    const { data, loading, error } = useQuery(url)
    


  return (
    <div >
        <ProductInfo 
           product={data} 
           loading={loading} 
           error={error}  
    />
    </div>
    
   
  )
}

export default ProductDetail
