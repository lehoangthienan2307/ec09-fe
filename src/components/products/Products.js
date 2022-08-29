import React from 'react'
import ProductCard from './ProductCard'
const Products = ({data}) => {
  return (
    <div className='products'>
        {
              data.map(product => (
                <ProductCard key={product.ProID} product={product} />
              ))
        }
        
    </div>
  )
}

export default Products