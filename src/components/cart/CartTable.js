import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Col, Image, Row,  Table } from "react-bootstrap";
import format from "../utils/format";
import { useContext } from "react";
import {State} from '../../State'
import { Link } from "react-router-dom";
import swal from "sweetalert2";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import PaypalButton from "./PaypalButton";
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

const CartPage = () => {
    const state=useContext(State)
    const [cart, setCart] = state.userContext.cart
    const catchUserCart=state.userContext.catchUserCart
    const navigate = useNavigate();
    const token = localStorage.getItem('token')
    const totalPrice=cart.total
    const [loading, setLoading] = useState(false);

    const handleDelete = async (ProID) => {
      try {
        const result = await swal.fire(swalDeleteProps);
        if (result.isDismissed) {
          return;
        }
        
        const body={
          ProID:ProID,
          quantity:0
        }
        await axios.patch('/cart', body,  {
          headers: {Authorization: token}
        }) 
            catchUserCart();
            
      } catch (err) {
        console.error(err);
      }
    };

  const handleUpdateQuantity = async (ProID, newQuantity) => {
    try {
      if (newQuantity === 0) {
        const result = await swal.fire(swalDeleteProps);
        if (result.isDismissed) {
          return;
        }
      }
      const body={
        ProID:ProID,
        quantity: newQuantity
      }


      await axios.patch('/cart', body,  {
        headers: {Authorization: token}
      }) 
        catchUserCart();
    } catch (err) {
      console.error(err);
    }
  };





 
  return (
    <div style={{maxWidth:'150vh', marginRight:'100px'}}>

  <div style={{textAlign:'center', marginTop:'50px', marginBottom:'30px'}}>
    <h3> GIỎ HÀNG</h3>
  </div>

   
    <div
      style={{
      minHeight: "30vh",
       display: 'flex',
       marginLeft:'2%', 
       marginBottom:'20px'
      }}
    >

<Table striped  >
      <thead style={{
     backgroundColor: 'pink',
     color: 'white',
     textAlign:'center'
    }}>
        <tr>
          <th>Hình ảnh</th>
          <th>Sản phẩm</th>
          <th>Đơn giá</th>
          <th>Số lượng</th>
          <th>Tổng tiền</th>
          <th>Xóa</th>
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
      
        <Button variant="secondary " style={{display:'inline', width: '18%'}}  onClick={() =>
                handleUpdateQuantity(item.ProID, item.quantity - 1)
              }>
            -
            </Button>
              &nbsp;&nbsp;
           
       
            <h5 style={{display:'inline', width: '70%'}}>{item.quantity}</h5>
              &nbsp; &nbsp;
      
      
           <Button variant="info " style={{display:'inline', width: '18%'}} onClick={() =>
                handleUpdateQuantity(item.ProID, item.quantity + 1)
              }>
            +
            </Button>
       
       

       </div>
           

           
           
          </td>
          <td key={item.ProID}>
            <h5>{format.format_number(item.Amount)} VND</h5>
          </td>


          <td key={item.ProID}>
          <Button variant="danger" onClick={() => handleDelete(item.ProID)}>
      
          <DeleteForeverOutlinedIcon/>
          </Button>
          </td>
          </tr>
))
}
      </tbody>
    </Table>
    
   
      


</div>
<div style={{textAlign:'right', minWidth:'200px'}}>
        <div>
          <p className="my-2">
            <h4 style={{ color: "red" }}>{"Tổng số lượng" + ": "} </h4>
            <h5 style={{ color: "blue" }}>{cart.summaryItem} sản phẩm </h5>
          </p>
          <p className="my-2">
          <h4 style={{ color: "red" }}>{"Tổng tiền" + ": "}</h4>
            <h5 style={{ color: "blue" }}> {format.format_number(cart.total)} VND </h5>
          </p>
        </div>
    </div>
    <div style={{textAlign:'right'}}>


    <div className="mt-4">
    <Button variant="success" size="lg" onClick={() => {
            navigate("/checkout");
          }}>
    
      Mua hàng
        </Button>
        </div>
  

    </div>
    

</div>
  

  


  
  );
};

export default CartPage;