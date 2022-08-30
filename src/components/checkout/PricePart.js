import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import PaypalButton from "./PaypalButton";
import format from "../utils/format";
import { Link } from "react-router-dom";



const TotalSection = (props) => {
  const PaymentID = props.PaymentID;
  const province = props.province;
  const district=props.district;
  const ward=props.ward
  const address=props.address
  const totalPrice = props.totalPrice || 0;
  const shippingPrice = props.shippingPrice || 0;
  const totalOrder = props.totalOrder || 0;
  const distance= props.distance || 0;
  const id=2
  const id_2=3
  const handleCheckout = props.handleCheckout;
  const loading=props.loading


  return (
    <div className="col-md-5 mb-4" style={{
      backgroundColor: 'silver',
      textAlign:'center',
      maxWidth:'350px',
      marginLeft:'30px',
      marginTop:'70px'
 
     }} >
      <div className="p-3">
        <div className="d-flex medium semi-thick justify-content-between align-items-center mb-3">
          <strong> <span>Thông tin đơn hàng</span> </strong>
         
        </div>
        <ul className="list-group mb-3">
           
          <li className="list-group-item">
            <li className="text-muted mb-2 d-flex justify-content-between">
              <span>Tổng tiền sản phẩm: </span>
              <span>{format.format_number(totalOrder)}</span>
            </li>
            <li className="text-muted mb-2 d-flex justify-content-between">
              <span>Khoảng cách:</span>
              <span>{distance} km</span>
            </li>
            <li className="text-muted mb-2 d-flex justify-content-between">
              <span>Phí ship: </span>
              <span>{format.format_number(shippingPrice)}</span>
            </li>
            <li className="d-flex justify-content-between">
              <span className="medium text-key semi-thick">Tổng tiền hóa đơn</span>
              <strong className="medium text-key">
                {format.format_number(totalPrice)}
              </strong>
            </li>
          </li>
        </ul>

      
      </div>

        <div className="mt-4">
        {PaymentID === 1 && (
        <Button
          loading={loading}
          disabled={loading}
          type="primary"
          className="mt-4"
          onClick={handleCheckout}
          size="large"
          style={{ width: "100%", backgroundColor: "#a50064" }}
        >
          Thanh toán bằng Momo
        </Button>
      )}

        {PaymentID === 2 && (
          <PaypalButton
            loading={loading}
            disabled={loading}
            address={address}
            district={district}
            province={province}
            ward={ward}
            PaymentID={PaymentID}
            handleCheckout={handleCheckout}
          />
          )}

{PaymentID === 3 && (
        <Button
          loading={loading}
          disabled={loading}
          type="warning"
          className="mt-4"
          onClick={handleCheckout}
          size="large"
          style={{ width: "100%" }}
        >
          Thanh toán khi nhận hàng
        </Button>
      )}
        </div>
   
      

    </div>
  );
};

export default TotalSection;