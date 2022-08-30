import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Col, Image, Row,  Table } from "react-bootstrap";
import format from "../utils/format";
import { useContext } from "react";
import {State} from '../../State'
import { Link } from "react-router-dom";
import swal from "sweetalert2";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import axios from 'axios'


const swalDeleteProps = {
  text: "Bạn có chắc muốn xóa sản phẩm?",
  icon: "warning",
  showCancelButton: true,
  cancelButtonText: "Hủy",
  confirmButtonText: "Xóa",
  customClass: {
    cancelButton: "order-1",
    confirmButton: "order-2",
  },
};

const OrderPart = () => {
    const state=useContext(State)
    const [cart, setCart] = state.userContext.cart
    const catchUserCart=state.userContext.catchUserCart
    const navigate = useNavigate();
    const token = localStorage.getItem('token')
    const totalPrice=cart.total

  return (
    <div style={{maxWidth:'170vh'}}>

  <div style={{textAlign:'center', marginTop:'50px', marginBottom:'30px'}}>
    <h3> ĐƠN HÀNG CỦA BẠN</h3>
  </div>

   
    <div
      style={{
      minHeight: "30vh",
       display: 'flex',
       marginLeft:'10%', 
       marginBottom:'20px'
      }}
    >

<Table striped  >
      <thead style={{
     backgroundColor: 'black',
     color: 'white',
     textAlign:'center'
    }}>
        <tr>
          <th>Hình ảnh</th>
          <th>Sản phẩm</th>
          <th>Đơn giá</th>
          <th>Số lượng</th>
          <th>Tổng tiền</th>
        </tr>
      </thead>
      <tbody> 
{
 
(cart?.items || []).map((item) => (
     <tr style={{textAlign:'center'}}>
      <td key={item.ProID}>
            <img src={item.image} alt="" style={{height:'128px'}}/>
          </td>

          <td key={item.ProID} style={{ width: "32px" }}>
          <Link to={`/products/${item.ProID}`}>
          <h5>{item.ProName}</h5>
        </Link>
 
      </td>
      <td key={item.ProID}>
            <h5>{format.format_number(item.Price)} VND</h5>
          </td>
          <td key={item.ProID} >
       <div>
            <h5 style={{display:'inline', width: '70%'}}>{item.quantity}</h5>
       </div>
          </td>
          <td key={item.ProID}>
            <h5>{format.format_number(item.Amount)} VND</h5>
          </td>
          </tr>
))
}
      </tbody>
    </Table>
    
   
      


</div>


</div>
  

  


  
  );
};

export default OrderPart;