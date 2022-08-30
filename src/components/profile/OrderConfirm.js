import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { State } from "../../State";
import React, { useState, useEffect, useContext } from "react";
import swal from "sweetalert2";
import axios from "axios";
import format from '../utils/format'
import { useSearchParams } from "react-router-dom";


const OrderConfirm = () => {
  const state= useContext(State)
  const token = localStorage.getItem('token')
  const account= state.userContext.account
  const [orderList, setOrderList] = useState([]);

  const fetchOrderList = async () => {
    try {
    if(account){
      const response = await axios.get('/order', {
        headers: {Authorization: token}
      })

      const { orders } = response.data;
      setOrderList(orders);

    }
      
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchOrderList();
  }, [account]);

  const handleCancel = async (orderID) => {
    try {
      const body={
        orderID:orderID
      }
   await axios.patch('/order/get', body, {
        headers: {Authorization: token}
      });

        swal.fire({
          title: "Update Order",
          text: "Hủy đơn thành công",
          icon: "info",
          confirmButtonText: "OK",
        });
        fetchOrderList();

    } catch (err) {
      console.error(err);
    }
  };


  return (
    <div
      style={{
        minHeight: "10vh",
        marginTop:'50px',
      }}
      className="container"
    >
        {
                        orderList.map(item=> (
                          <Card key={item.OrderID} style={{ minWidth: '50rem' , marginBottom:'20px', backgroundColor:"#F2D7F2"}}>
                          <Card.Header> <h4>Mã đơn hàng: {item.OrderID} ({format.format_date(item.OrderDate)}) </h4></Card.Header>
                          <Card.Body>
                            {item.items.map(product=>(
                              <Card.Title>
                                <img 
                                  style={{width: '100px', height: '100px', border: '1px solid black', marginRight: '20px', float:"right", position:"relative"}}
                                  src={product.image}/>
                            {product.ProName} <h3 style={{color:'red'}}>   x{product.Quantity}</h3><h4 style={{color:'blue'}}>Đơn giá: {product.Price}</h4> 
                              </Card.Title>
                            ))}
                        
                          </Card.Body>

                          <Card.Footer>
                          <Card.Text>
                        <h6 >  <strong>Giao đến: </strong> {item.address}, {item.ward}, {item.district}, {item.province}  </h6>
                        </Card.Text>
                        <Card.Text>
                        <h6 >  <strong>Hình thức thanh toán: </strong> {item.method} </h6>
                        </Card.Text>
                          <h5 style={{color:'black'}}>Phí ship: {format.format_number(item.ShipPrice)} VND </h5> 
                          <Card.Text>
                        <h5 style={{color:'black'}}>  Tổng tiền: {format.format_number(item.Total)} VND </h5>
                        </Card.Text>
                        
                          </Card.Footer>
                       
                            <Button variant="danger" style={{width:'300px', marginRight:'10px'}} 
                            onClick={()=> handleCancel(item.OrderID)}
                            >Hủy đơn này</Button>
                        </Card>
                        ))
                    }
    </div>
  );
};

export default OrderConfirm;