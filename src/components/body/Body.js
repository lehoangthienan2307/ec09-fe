import React, {useState, useContext} from 'react'
import {Routes, Route} from 'react-router-dom'
import Login from './auth/Login'
import Register from './auth/Register'
import ActivationEmail from './auth/ActivationEmail'
import HomePage from '../pages/Homepage/HomePage'
import Product from '../../pages/Product'
import ProductDetail from '../productdetail/ProductDetail';
import CartTable from '../cart/CartTable'
import { ContextProvider } from '../../context/store'


const Body = () => {

  return (
    <section>

    <ContextProvider>
    <Routes>
             <Route path="/login" element={<Login/>}></Route>
             <Route path="/register" element={<Register/>}></Route>
             <Route path="/auth/activate/:activation_token" element={<ActivationEmail/>} ></Route>
             <Route path="/homepage" element={<HomePage/>}></Route>
             <Route path="/products" element={<Product/>}></Route>
             <Route path="/products/:id" element={<ProductDetail />}></Route>
             <Route path="/cart" element={<CartTable />}></Route>
    </Routes>

    </ContextProvider>


   
       
     
    </section>
  )
}

export default Body