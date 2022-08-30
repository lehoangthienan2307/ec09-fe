import React from 'react'
import { Route, Routes } from "react-router-dom";
import AccountBar from '../sidebar/AccountBar'
import CartTable from '../cart/CartTable'
import OrderConfirm from '../profile/OrderConfirm'
import OrderDelivery from '../profile/OrderDelivery'
import OrderSuccess from '../profile/OrderSuccess'
import Info from '../profile/Info'

const Account = () => {
  return (
    <section className="hero">
    <div className="container" style={{minWidth:"200vh"}}>
      <div className="row">
        <AccountBar />
        <div className="col-lg-8">
          <Routes>
          <Route exact path="/info" element={<Info />}></Route>
            <Route exact path="/cart" element={<CartTable />}></Route>
            <Route exact path="/order/confirm" element={<OrderConfirm />}></Route>
            <Route exact path="/order/delivery" element={<OrderDelivery/>}></Route>
            <Route exact path="/order/success" element={<OrderSuccess/>}></Route>
          </Routes>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Account