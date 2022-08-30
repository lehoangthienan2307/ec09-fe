import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Table,
  Space,
  Form,
  Select,
  Input,
  Row,
  Col,
  PageHeader,
  Button,
  Radio
} from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert2";
import axios from 'axios'
import {State} from '../../State'




const AddressPart = (props) => {
  const state = useContext(State)
  const token = localStorage.getItem('token')

  const address=props.address
  const ward=props.ward
  const district=props.district
  const PaymentID = props.PaymentID;
  const setPaymentID = props.setPaymentID;
  const handleChangeDistrict = props.handleChangeDistrict
  const handleChangeWard = props.handleChangeWard
  const handleChangeAddress =props.handleChangeAddress;

  const handlePaymentChange = (e) => {
    setPaymentID(e.target.value);
  };

 
  return (
    <div style={{
      marginLeft:'40px',
     }}>
      
      <strong style={{color: 'red'}}> Nhập địa chỉ giao hàng *</strong>
      <Form style={{marginLeft:"20px", marginTop:'30px', marginBottom:'30px'}}>
          <Form.Item label='Nhập quận' name="district" style={{marginBottom: '20px'}} >
              <Input
                value={ward}
                onChange={(e) => handleChangeDistrict(e.target.value)}
                size="large"
                placeholder='Enter district'
                style={{minWidth:'500px'}}
              ></Input>
            </Form.Item>
            <Form.Item label='Nhập phường' name="ward" style={{marginBottom: '20px'}}>
              <Input
                value={ward}
                onChange={(e) => handleChangeWard(e.target.value)}
                size="large"
                placeholder='Enter ward'
                style={{minWidth:'500px'}}
              ></Input>
            </Form.Item>
        
            <Form.Item label='Nhập địa chỉ' name="address" style={{marginBottom: '20px'}}>
              <Input
                value={address}
                onChange={(e) => handleChangeAddress(e.target.value)}
                size="large"
                placeholder='Enter address'
                style={{minWidth:'500px'}}
              ></Input>
            </Form.Item>
       
      </Form>
      <strong style={{color: 'red'}}>Chọn hình thức thanh toán *</strong>
      <Radio.Group onChange={handlePaymentChange} value={PaymentID}>
            <Space direction="vertical">
            <Radio value={1}>Thanh toán bằng Momo</Radio>
              <Radio value={2}>Thanh toán online bằng Paypal</Radio>
              <Radio value={3}>Thanh toán tiền mặt khi nhận </Radio>
            </Space>
          </Radio.Group>
    </div>
  );
};

export default AddressPart;