import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom'
import {Col, Container,  Row} from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import {isEmpty, isEmail, isLength, isMatch} from '../../utils/Validation.js'
import {ErrorMessage, SuccessMessage} from '../../utils/AlertMessage'




const initialState = {
    name: '',
    email: '',
    password: '',
    cf_password: '',
    address:'',
    dob:'',
    phone:'',
    err: '',
    success: ''
}



const Register = () => {
    const [user, setUser] = useState(initialState)

    const {name, email, password,cf_password, address,dob, phone,err, success} = user

    const handleChangeInput = e => {
        const {name, value} = e.target
        setUser({...user, [name]:value, err: '', success: ''})
    }


    const handleSubmit = async e => {
        e.preventDefault()
        if(isEmpty(name) || isEmpty(password))
                return setUser({...user, err: "Please fill in all fields.", success: ''})

        if(!isEmail(email))
            return setUser({...user, err: "Invalid emails.", success: ''})

        if(isLength(password))
            return setUser({...user, err: "Password must be at least 6 characters.", success: ''})
        
        if(!isMatch(password, cf_password))
            return setUser({...user, err: "Password did not match.", success: ''})

        try {
            const res = await axios.post(`/auth/register`, {
                name, email, password, address, dob,phone
            })

            setUser({...user, err: '', success: res.data.msg})
        } catch (err) {
            err.response.data.msg && 
            setUser({...user, err: err.response.data.msg, success: ''})
        }
    }


  return (
   
     <>
            
                <h1 className="shadow-md text-success mt-5 p-3 text-center rounded">Sign Up</h1>
                {err && ErrorMessage(err)}
                {success && SuccessMessage(success)}
                <Row >
                    <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-lg rounded-lg">
                    
                        <Form  onSubmit={handleSubmit}>
                            <Form.Group >
                                <Form.Label className='font-weight-bolder'>Email address (*)</Form.Label>
                                <Form.Control 
                                type="email" 
                                placeholder="Enter email" 
                                id="email" 
                                value={email} 
                                name="email"
                                className='mr-1'  
                                onChange={handleChangeInput}/>
                            </Form.Group>
                            <Form.Group >
                                <Form.Label className='font-weight-bolder'>Full name (*)</Form.Label>
                                <Form.Control 
                                type="text" 
                                placeholder="Enter full name"
                                id="name" 
                                value={name} 
                                name="name"  
                                onChange={handleChangeInput} />
                            </Form.Group>

                            <Form.Group >
                                <Form.Label className='font-weight-bolder'>Password (*)</Form.Label>
                                <Form.Control 
                                type="password" 
                                placeholder="Enter your password"
                                id="password" 
                                value={password} 
                                name="password"  
                                onChange={handleChangeInput} />
                            </Form.Group>
                            <Form.Group >
                                <Form.Label className='font-weight-bolder'>Confirm Password (*)</Form.Label>
                                <Form.Control 
                                type="password" 
                                placeholder="Confirm password" 
                                id="cf_password" 
                                value={cf_password} 
                                name="cf_password"  
                                onChange={handleChangeInput}
                                />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label className='font-weight-bolder'>Address (*)</Form.Label>
                                <Form.Control 
                                type="text" 
                                placeholder="Enter address" 
                                id="address" 
                                value={address} 
                                name="address"  
                                onChange={handleChangeInput}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label className='font-weight-bolder'>Date of Birth (*)</Form.Label>
                                <Form.Control 
                                type="date" 
                                placeholder="Enter DOB" 
                                id="dob" 
                                value={dob} 
                                name="dob"  
                                onChange={handleChangeInput}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label className='font-weight-bolder'>Phone (*)</Form.Label>
                                <Form.Control 
                                type="number" 
                                placeholder="Enter phone number"
                                id="phone" 
                                value={phone} 
                                name="phone"  
                                onChange={handleChangeInput}
                                 />
                            </Form.Group>
                            <Button variant="success btn-block" type="submit" className='font-weight-bolder'>
                                Register
                            </Button>
                        </Form>
                        <p className='mt-2'>
			            	Already have an account?
			              	<Link to='/login'>
			         		<Button variant='info '  className='font-weight-bolder mt-2 ml-2'>
					    	Log In
				        	</Button>
				            </Link>
			            </p>
                       
                    </Col>
                </Row>
               
       
        </>

 
  )
}

export default Register