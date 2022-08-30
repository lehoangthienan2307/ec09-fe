import { Menu } from "antd";
import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

const AccountBar = () => {
  const [profile, setProfile]=useState(false)
  const [isCart, setIsCart]=useState(false)
  const [order, setOrder]=useState(false)
  const [orderDeli, setOrderDeli]=useState(false)
  const [orderSuccess, setOrderSuccess]=useState(false)
  let navigate = useNavigate();
 


  return (
    <>
<ListGroup as="ul" className="col-lg-3" style={{marginTop:"50px", marginLeft:"100px"}}>
      <ListGroup.Item as="li" className='active'>
      <i className="fa fa-bars"></i>
               &nbsp;&nbsp;
            <strong>QUẢN LÝ TÀI KHOẢN</strong>
      </ListGroup.Item >
      <ListGroup.Item as="li" className={ profile && 'active' } onClick={() => {
            navigate("/account/info");
            setProfile(true)
            setIsCart(false)
            setOrder(false)
            setOrderDeli(false)
            setOrderSuccess(false)
          }} >Xem và thay đổi thông tin tài khoản</ListGroup.Item>
      <ListGroup.Item as="li" className={ isCart && 'active' }
      onClick={() => {
        navigate("/account/cart");
        setProfile(false)
        setIsCart(true)
        setOrder(false)
        setOrderDeli(false)
        setOrderSuccess(false)
      }}>Giỏ hàng của bạn</ListGroup.Item>
      <ListGroup.Item as="li" className={ order && 'active' }
      onClick={() => {
        navigate("/account/order/confirm");
        setProfile(false)
        setIsCart(false)
        setOrder(true)
        setOrderDeli(false)
        setOrderSuccess(false)
      }}>Đơn hàng chờ xác nhận</ListGroup.Item>
   <ListGroup.Item as="li" className={ orderDeli && 'active' }
      onClick={() => {
        navigate("/account/order/delivery");
        setProfile(false)
        setIsCart(false)
        setOrder(false)
        setOrderDeli(true)
        setOrderSuccess(false)
      }}>Đơn hàng đang giao</ListGroup.Item>
      <ListGroup.Item as="li" className={ orderSuccess && 'active' }
      onClick={() => {
        navigate("/account/order/success");
        setProfile(false)
        setIsCart(false)
        setOrder(false)
        setOrderDeli(false)
        setOrderSuccess(true)
      }}>Đơn hàng đã giao</ListGroup.Item>
    </ListGroup>
    </>
  );
};

export default AccountBar;