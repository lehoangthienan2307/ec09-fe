import React,{useContext, useState} from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import logoutIcon from '../../assets/logout.svg'
import Button from 'react-bootstrap/Button'
import { Link, useLocation } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import InputGroup from 'react-bootstrap/InputGroup';
import logo from '../../assets/logo.svg'
import signin from '../../assets/signin.svg'
import {State} from '../../State'
import axios from 'axios'



const Header = () => {
	const state = useContext(State)
    const [isLogged] = state.userContext.isLogged
    const [cart] = state.userContext.cart
    const [account]=state.userContext.account
	const logout=state.userContext.logout
	const location = useLocation();
	const { pathname } = location;
	

	

    return (
		<Navbar expand='lg' bg='primary' variant='dark' className='shadow' >
			<Navbar.Brand className='font-weight-bolder text-white'>
			<Nav.Link
						className='text-white'
						to='/'
						as={Link}
					>
						Huimitu
					</Nav.Link>
			</Navbar.Brand>

			<Navbar.Toggle aria-controls='basic-navbar-nav' />

			<Navbar.Collapse id='basic-navbar-nav'>
				<Nav className='mr-auto'>
					<Nav.Link
						className='text-white'
						to='/contact'
						as={Link}
					>
						Contact
					</Nav.Link>
					<Nav.Link
						className=' text-white'
						to='/about'
						as={Link}
					>
						About
					</Nav.Link>
				</Nav>
				
				<Nav>
				{isLogged && (
                     	 <Link to="/account/cart">
                          <Button
							 variant='primary '
							 className='font-weight-bolder text-white mr-2 '>
								<div className="cart-icon"  >
								<i class="fa fa-shopping-cart fa-2x" aria-hidden="true"></i> 
							 <span style={{ background: "crimson", borderRadius: "20px", position: "absolute", padding:'5px 7px',fontSize: '10px'}}>
								{cart.summaryItem}
								</span>

								</div>
							 
						 </Button>
						 </Link>
						 
					
                    )}
                  {isLogged && (
                     	<DropdownButton 
							
						 variant='md mt-3'
						 className='font-weight-bolder mr-2 '
						 title='Option'>
							 
						<Dropdown.Item href="#/action-1">
						<i class="fa fa-heart mr-2" aria-hidden="true"></i>
						 Sản phẩm yêu thích
						 </Dropdown.Item>
						<Dropdown.Item href="/account/info">
						<i class="fa fa-pencil-square-o mr-2" aria-hidden="true"></i>
						 Quản lý tài khoản
						 </Dropdown.Item>
					 </DropdownButton>
					
                    )}
				
			
					{isLogged ?(
						 <Link to="/login" onClick={logout}>
                        <Button
						variant='danger '
						className='font-weight-bolder'>
						<img
							src={logoutIcon}
							alt='logoutIcon'
							width='25'
							height='25'
							className='mr-2 mt-2'
						/>
						Logout
					</Button>

						 </Link>
						
						
					):(
						<Link to="/login" >
<Button
						variant='warning '
						className='font-weight-bolder mr-2'>
						<img
							src={signin}
							alt='singin'
							width='25'
							height='25'
							className='mr-2'
						/>
						Sign In
					</Button>

						</Link>
						
					)}

				</Nav>
			</Navbar.Collapse>
		</Navbar>

	)
}

export default Header