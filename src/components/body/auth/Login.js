import React, {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom'
import {Col, Container,  Row} from "react-bootstrap";
import googleIcon from '../../../assets/googleIcon.svg'
import facebookIcon from '../../../assets/facebookIcon.svg'
import axios from 'axios'
import {ErrorMessage, SuccessMessage} from '../../utils/AlertMessage'
import { GoogleLogin } from 'react-google-login';
import jwt_decode from 'jwt-decode';





const initialState = {
    email: '',
    password: '',
    err: '',
    success: ''
}


function Login() {
    const [user, setUser] = useState(initialState)
    

    const {email, password, err, success} = user
    
    const handleChangeInput = event => {
        const {name, value} = event.target
        setUser({...user, [name]:value, err: '', success: ''})
    }
    
    const handleSubmit = async event => {
        event.preventDefault()
        try {
            const res = await axios.post('/auth/login', {email, password})
            setUser({...user, err:'', success:res.data.msg})
            


            localStorage.setItem('firstLogin', true)
            const data = res.data.access_token;
            localStorage.setItem('token',  data)
            window.location.href = "/";

        } catch (err) {
            err.response.data.msg && 
            setUser({...user, err: err.response.data.msg, success: ''})
        }
    }


    const handleCallbackResponse = async (response) => {
        try {
        const res = await axios.post('/auth/google_login', {tokenId: response.credential})
        setUser({...user, error:'', success: res.data.msg})
        localStorage.setItem('firstLogin', true)
        document.getElementById("signInDiv").hidden=true;

        const data = res.data.access_token;
        localStorage.setItem('token',  data)
        window.location.href = "/";
        }
        catch(err) {
            err.response.data.msg && 
            setUser({...user, err: err.response.data.msg, success: ''})
        }
      }
    
     
 

      useEffect(()=>{
        /* global google*/
        google.accounts.id.initialize({
          client_id:"254093457793-5umtcagdas4std2a6ft9bsqjsbnuk2f3.apps.googleusercontent.com",
          callback: handleCallbackResponse

        });
    
        google.accounts.id.renderButton(
          document.getElementById("signInDiv"),
          {theme:"outline", size: "medium"}
        );
      },[]);


     
    
   

   return (
     <>
            <Container>
                <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">Sign In</h1>
                {err && ErrorMessage(err)}
                {success && SuccessMessage(success)}
                <Row className="mt-3">
                    <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-lg rounded-lg">
                    
                        <Form onSubmit={handleSubmit}>
                            <Form.Group >
                                <Form.Label className='font-weight-bolder'>Email address</Form.Label>
                                <Form.Control 
                                type="email" 
                                placeholder="Enter email"
                                id="email"
                                value={email} 
                                name="email" 
                                onChange={handleChangeInput}/>
                            </Form.Group>

                            <Form.Group >
                                <Form.Label className='font-weight-bolder'>Password</Form.Label>
                                <Form.Control 
                                type="password" 
                                placeholder="Password" 
                                id="password"
                                value={password} 
                                name="password"
                                onChange={handleChangeInput}/>
                            </Form.Group>
                           

                            <Button variant="success btn-block" type="submit" className='font-weight-bolder'>
                                Login
                            </Button>
                            <p>
                            
                               <Link to="/forgot_password" className='mt-2' >Forgot your password?</Link>
                           </p>
                        </Form>
                        <p className='mt-3 mb-2  text-center'>
			            	Or sign in with
                           
                        </p>
                       <p>
			              
                       <div id="signInDiv" ></div>
                       

                      
			            </p>

                        <p >
			            	Don't have an account?
			              	<Link to='/register'>
			         		<Button variant='info '  className='font-weight-bolder mt-2 ml-2'>
					    	Register
				        	</Button>
				            </Link>
			            </p>
                       
                    </Col>
                </Row>
               
            </Container>
        </>


  )
}

export default Login