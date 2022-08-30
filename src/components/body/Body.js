import React, {useState, useContext} from 'react'
import {Routes, Route} from 'react-router-dom'
import Login from './auth/Login'
import Register from './auth/Register'
import ActivationEmail from './auth/ActivationEmail'
import HomePage from '../pages/Homepage/HomePage'
import Product from '../../pages/Product'
import ProductDetail from '../productdetail/ProductDetail';
import Checkout from '../checkout/Checkout'
import Account from '../profile/Account'
import { ContextProvider } from '../../context/store'
import ProtectedRoute from '../routing/ProtectedRoute'
import {State} from '../../State'


const Body = () => {
const state=useContext(State)
const token= localStorage.getItem('token')
  return (
    <section>

    <ContextProvider>
    <Routes>
             <Route path="/login" element={<Login/>}></Route>
             <Route path="/register" element={<Register/>}></Route>
             <Route path="/auth/activate/:activation_token" element={<ActivationEmail/>} ></Route>
             <Route path="/" element={<HomePage/>}></Route>
             <Route path="/products" element={
              <ProtectedRoute auth={token} redirectTo="/login">
                   <Product/>
              </ProtectedRoute>
             }></Route>
             <Route exact path="/products/:id" element={
               <ProtectedRoute auth={token} redirectTo="/login">
                   <ProductDetail />
               </ProtectedRoute>
             }></Route>
             <Route path="/account/*" element={
              <ProtectedRoute auth={token} redirectTo="/login">
                <Account/>
              </ProtectedRoute>
             }></Route>
             <Route path="/checkout" element={
             <ProtectedRoute auth={token} redirectTo="/login">
              <Checkout/>
             </ProtectedRoute>
             }></Route>
    </Routes>

    </ContextProvider>


   
       
     
    </section>
  )
}

export default Body