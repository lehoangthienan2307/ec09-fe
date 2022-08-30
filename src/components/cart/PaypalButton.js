import React , {useContext} from "react";
import { PayPalScriptProvider,PayPalButtons } from "@paypal/react-paypal-js";
import swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import {State} from '../../State'

const PaypalButton = (props) => {
    const state= useContext(State)
    const token = state.token
  const address=props.address
  const province=props.province
  const district=props.district
  const ward= props.ward
  const handleCheckout = props.handleCheckout;
  const navigator = useNavigate();

  const createOrder = async (data, actions) => {
    const orderId = await handleCheckout();
    if (orderId) {
      return orderId;
    }
    return null;
  };

  const notifyPaypal = async (data, actions) => {
    try {
     

 

        swal.fire({
          title: "Thanh toán",
          text: `Bạn đã thanh toán thành công cho đơn hàng`,
          icon: "info",
          confirmButtonText: "OK",
        })
        
      navigator("/account/order");
    } catch (err) {
      console.error(err);
      alert("Server error");
    }
  };

  return (
    <div>
      <PayPalScriptProvider>
      <PayPalButtons
        createOrder={createOrder}
        forceReRender={[address, province, ward, district]}
        onApprove={notifyPaypal}
        onCancel={notifyPaypal}
        style={{ layout: "horizontal", tagline: false }}
      />
      </PayPalScriptProvider>
     
    </div>
  );
};

export default PaypalButton;