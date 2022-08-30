import React, { useEffect, useState, useContext }  from 'react'
import OrderPart from './OrderPart'
import PricePart from "./PricePart";
import AddressPart from "./AddressPart";
import { useNavigate, useSearchParams } from "react-router-dom";
import { State} from "../../State";
import swal from "sweetalert2";
import axios from 'axios'

const Checkout = () => {
    const state=useContext(State)
    const [cart]= state.userContext.cart
    const [account]= state.userContext.account
    const catchUserCart =  state.userContext.catchUserCart
    const token = localStorage.getItem('token')
    const [listProduct, setListProduct] = useState([]);
    const [PaymentID, setPaymentID] = useState(1);
    const [address, setAddress]= useState("");
    const [province, setProvince]= useState("TP.Hồ Chí Minh");
    const [district, setDistrict]= useState(" ");
    const [ward, setWard]= useState(" ");
    const [loading, setLoading] = useState(false);
    const [totalOrder, setTotalOrder] = useState(0);
    const [shippingPrice, setShippingPrice] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [distance, setDistance] = useState(0);
    const navigator = useNavigate();

      useEffect(() => {
        setListProduct(cart.items);
    
      }, [cart]);
    
      useEffect(() => {
        catchPrice();
      }, [ district,ward, address]);
    
      const handleChangeProvince = (value) => {
        setProvince(value);
      };
      
      const handleChangeDistrict = (value) => {
        setDistrict(value);
      };
      const handleChangeWard = (value) => {
        setWard(value);
      };

      const handleChangeAddress= (value) => {
        setAddress(value);
      };
    
    
      const handleCheckout = async () => {
        try {
          setLoading(true);
          if ( !address&& ! district&& !province&& !ward) {
            swal.fire({
              text: "Vui lòng điền đầy đủ thông tin địa chỉ",
              icon: "info",
              confirmButtonText: "OK",
            });
            return;
          }
          const body={
            address, district, province, ward, PaymentID
          }
          const res= await axios.post('/checkout', body, {
            headers: {Authorization: token}
          })
          const { exitcode, orderId, redirectUrl } = res.data;
    
          // eslint-disable-next-line default-case
          switch (exitcode) {
            case 0: {

              catchUserCart();


              switch (PaymentID) {
                case 1: {
                  window.location.assign(redirectUrl);
                  break;
                }
                case 2: {
                  return orderId;
                }
                case 3: {
                  await swal.fire({
                    title: "Bạn đã thanh toán thành công",
                    text: `Mã hóa đơn của bạn: ${orderId}`,
                    icon: "info",
                    confirmButtonText: "OK",
                  });
                  navigator("/account/order/confirm");
                  break;
                }
              }
              break;
            }
    
          }
          return null;
        } catch (err) {
          console.error(err);
        }
        finally {
          setLoading(false);
        }
      };
    
      const catchPrice = async () => {
        try {

            const requestBody = {
                province, district,ward, address
            }
          const res = await axios.post('/checkout/price', requestBody, 
          {headers: {Authorization: token}}
          )
          const { totalPrice, shippingPrice, totalOrder, distance } =
            res.data;
    
        
              setTotalPrice(totalPrice);
              setShippingPrice(shippingPrice);
              setTotalOrder(totalOrder);
              setDistance(distance)
              if (totalPrice === 0) {
                navigator("/cart");
              }
        } catch (err) {
          console.error(err);
        }
      };
    
    

  return (
    <div className="p-2 mb-5">
     <section>
        <div className="container px-md-2 px-lg-3">
          <div className="row">
<OrderPart/>

<PricePart
        loading={loading}
       
              PaymentID={PaymentID}
              totalPrice={totalPrice}
              shippingPrice={shippingPrice}
              totalOrder={totalOrder}
              distance={distance}
              province={province}
              district={district}
              ward={ward}
              address={address}
              handleCheckout={handleCheckout}
            />




   
    
    <AddressPart
              province={province}
              district={district}
              ward={ward}
              address={address}
              PaymentID={PaymentID}
              setPaymentID={setPaymentID}
              handleChangeProvince={handleChangeProvince}
              handleChangeDistrict={handleChangeDistrict}
              handleChangeWard={handleChangeWard}
              handleChangeAddress={handleChangeAddress}
            />
      </div>
    
    </div>

    </section>

    </div>
  )
}

export default Checkout