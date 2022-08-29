import React from 'react'
import logoFooter from '../../assets/logoFooter.svg'
import master from '../../assets/master.svg'
import visa from '../../assets/visa.svg'
import paypal from '../../assets/paypal.svg'
import bitcoin from '../../assets/bitcoin.svg'



const Footer = () => {
  return (
    <>
      <footer className="footer spad border mt-5">
        <div className="container ">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="footer__about mr-2 ml-2">
                <div className="footer__about__logo">
                  <a href="/" >
                    <img 
                    src={logoFooter} 
                    alt="logo"
                    width= "50%"
                    height= "50%"
                    className='mr-2'

                     />
                  </a>
                </div>
                <ul>
                  <li className="font-weight-bolder">Địa chỉ: </li>
                  <li> 227 Nguyễn Văn Cừ, TPHCM</li>
                  <li className="font-weight-bolder">Email: </li> 
                  <li> huimitu.corporation@gmail.com</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 ">
              <div className="footer__widget ">
              <h6>Chăm sóc khách hàng</h6>
                <ul >
                <li>
                    <a href="#">Trung tâm trợ giúp</a>
                  </li>
                  <li>
                    <a href="#">Chính sách bảo hành</a>
                  </li>
                  <li>
                    <a href="#">Vận chuyển</a>
                  </li>
                  <li>
                    <a href="#">Thanh toán</a>
                  </li>
                  <li>
                    <a href="#">Trả tiền & hoàn tiền</a>
                  </li>
                  <li>
                  <img
							    src={visa}
                  width='20'
							    height='20'
							    className='mr-2'
						      />
                  <img
							    src={master}
                  width='20'
							    height='20'
							    className='mr-2'
						      />
                  <img
							    src={paypal}
                  width='20'
							    height='20'
							    className='mr-2'
						      />
                   <img
							    src={bitcoin}
                  width='20'
							    height='20'
							    className='mr-2'
						      />
                  

                  </li>
                </ul>
                </div>
                
            </div>
            <div className="col-lg-3  ">
             
                <div className="footer__widget">
                <h6 > Về Huimitu </h6>
                <ul>
                  <li>
                    <a href="#">Giới thiệu về Huimitu</a>
                  </li>
                  <li>
                    <a href="#">Tuyển dụng</a>
                  </li>
                  <li>
                    <a href="#">Điều khoản</a>
                  </li>
                  <li>
                    <a href="#">Chính sách bảo mật</a>
                  </li>
                  <li>
                    <a href="#">Liên hệ </a>
                  </li>
                </ul>
               
              </div>
            </div>


            <div className="col-lg-3">
              <div className="footer__widget">
                <h6>Liên hệ</h6>
                <div className="footer__widget__social">
                  <a href="/">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="/">
                    <i className="fa fa-instagram"></i>
                  </a>
                  <a href="/">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a href="/">
                    <i className="fa fa-pinterest"></i>
                  </a>
                </div>
 

                <div className='mt-2'>
                <h6 >Bản đồ</h6>
                
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.630773293551!2d106.67998301474876!3d10.762912992330719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f1c06f4e1dd%3A0x43900f1d4539a3d!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBLaG9hIGjhu41jIFThu7Egbmhpw6puIC0gxJDhuqFpIGjhu41jIFF14buRYyBnaWEgVFAuSENN!5e0!3m2!1svi!2s!4v1641658251544!5m2!1svi!2s" ></iframe>
            </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              
               
                <h6 className=" text-center text-secondary ">Copyright © 2022 Huimitu Ecommerce. All Rights Reserved.</h6>
                
                <div className="footer__copyright__payment">
                  <img src="/assets/img/payment-item.png" alt="" />
                </div>
              
            </div>
          </div>
        </div>
      </footer>
    </>
   

)
   
  
}

export default Footer