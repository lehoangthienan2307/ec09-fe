import React, { useState, useMemo, useEffect,  } from 'react';
import { getProducts } from '../api/ProductsAPI';
import Paging from '../components/products/Paging';
import axios from 'axios';
import Products from '../components/products/Products';
import useQuery from '../hook/useQuery';
import { useLocation, useNavigate } from 'react-router-dom'
import useRouter from '../hook/useRouter';
import Sorting from '../components/products/Sorting';
import {useMyContext} from '../context/store'
import './style.css'
import FilterPanel from '../components/filterPanel/FilterPanel';
import Carousel from '../components/slider/Carousel'
import Category  from '../components/category/Category';
import SearchForm from '../components/searchForm/SearchForm';





const Product = () => {
  const [products, setProducts] = useState([])
  const { page, limit, sort, category } = useMyContext()
  const { pushQuery } = useRouter()
  const url = getProducts(category,page, sort)
  const { data, loading, error } = useQuery(url)

 
 
  
  const totalPages = useMemo(() => {
    if(!data) return 0;
    setProducts(() => data.products)
    return Math.ceil(data.count/limit)
  }, [data, limit]);

  return <main>    
    <Carousel/>
     <Category/>
     <div className='home'>
     <div className="container " style={{marginTop: 50}}>
          <div className="row">
         
     <div className='col-sm-6'>
     <Sorting  sort={sort}
    calback={(sort) => pushQuery({page, sort, category})}
     />

</div>
<div className='col-sm-5 ml-5' >
<SearchForm /> 
</div>
</div>

</div>
<div className='home_panelList-wrap'>
     <div className='home_panel-wrap'>
          <FilterPanel
      
          />
        </div>
        <div className='home_list-wrap'>
        <Products 
    data={products} 
    />
   <Paging totalPages={totalPages} page={page} />

        </div>
        
   </div>
  
     </div>
     
  </main>;
};

export default Product;