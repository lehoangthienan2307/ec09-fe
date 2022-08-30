import React, {useState, useContext, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom'
import {Col, Container,  Row} from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { State} from '../../State'
import swal from "sweetalert2"

const Info = () => {
    const state=useContext(State)
    const [account]= state.userContext.account
    const [newPassword, setNewPassword]=useState('')
    const [confirmPassword, setConfirmPassword]=useState('')
    const catchAccount=state.userContext.catchAccount
    const token= localStorage.getItem('token')
    const logout  = state.userContext.logout

   
    const handleChangeNewPassword= (value) => {
        setNewPassword(value);
      };
      const handleChangeConfirmPassword= (value) => {
        setConfirmPassword(value);
      };
    const handleChangePassword = async () => {
    
        if (!(newPassword && confirmPassword)) {
          return swal.fire({
            text: "Vui lòng nhập đủ thông tin",
            icon: "info",
            confirmButtonText: "OK",
          });
        }
    
    
        if (newPassword !== confirmPassword) {
          return swal.fire({
            text: 'Password not match',
            icon: "error",
            confirmButtonText: "OK",
          });
        }
       const body={
        password: newPassword
       }
       await axios.post('/auth/reset', body, {
            headers: {Authorization: token}
        } )
       
    
            await swal.fire({
              title: "Success",
              text: "Thay đổi password thành côg",
              icon: "success",
              confirmButtonText: "OK",
            });
            logout();
           
      };
    
   

  return (
   
     <>

             <div>
              <h1 className="shadow-md text-success mt-5 p-3 text-center rounded">Thông tin tài khoản</h1>
                <Row >
                    <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-lg rounded-lg">
                        <Form >
                            <Form.Group >
                                <Form.Label className='font-weight-bolder'>Email Address </Form.Label>
                                <Form.Control 
                                type="email" 
                                id="email"
                                value={account.email}
                                name="email"
                                className='mr-1'  
                                readOnly
                                />
                                
                            </Form.Group>
                            <Form.Group >
                                <Form.Label className='font-weight-bolder'>Address </Form.Label>
                                <Form.Control 
                                type="text" 
                                id="address"
                                value={account.address}
                                name="address"
                                className='mr-1'  
                                readOnly
                                />
                                
                            </Form.Group>

                            <Form.Group >
                                <Form.Label className='font-weight-bolder'>Phone </Form.Label>
                                <Form.Control 
                                type="number" 
                                id="phone"
                                value={account.phone}
                                name="phone"
                                className='mr-1'  
                                readOnly
                                />
                                
                            </Form.Group>

                           
                            <Form.Group >
                                <Form.Label className='font-weight-bolder'>Change Password </Form.Label>
                                <Form.Control 
                                type="password" 
                                id="newPassword"
                                name="newPassword"
                                className='mr-1'  
                              value={newPassword}
                              onChange={(e) => handleChangeNewPassword(e.target.value)}
                                />
                                
                            </Form.Group>

                            <Form.Group >
                                <Form.Label className='font-weight-bolder'>Confirm New Password </Form.Label>
                                <Form.Control 
                                type="password" 
                                id="confirmPassword"
                                name="confirmPassword"
                                className='mr-1'
                                value={confirmPassword}
                                onChange={(e) => handleChangeConfirmPassword(e.target.value)}
                              
                                />
                                
                            </Form.Group>

                            <Button variant='danger' style={{marginLeft:'50px'}}  onClick={handleChangePassword}>Cập nhật thông tin</Button>
                        </Form>
                
                       
                    </Col>
                </Row>
              </div>
              
               
       
        </>

 
  )
}

export default Info