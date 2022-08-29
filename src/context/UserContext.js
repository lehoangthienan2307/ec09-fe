import {useState, useEffect} from 'react'
import axios from 'axios'

function UserContext(token) {
    const [isLogged, setIsLogged] = useState(false)
    const [account, setAccount] = useState({});
    const [cart, setCart] = useState({})
 

    useEffect(() =>{
        if(token){
            const getUser = async () =>{
                try {
                    const res = await axios.get('/auth/infor', {
                        headers: {Authorization: token}
                    })
                    const { user } = res.data;
                    setIsLogged(true)
                    setAccount(user)

                } catch (err) {
                    alert(err.res.data.msg)
                }
            }

           
            getUser()  
            catchUserCart()
        }

    },[token])

    const catchUserCart = async () => {
        const res= await axios.get('/cart',{
            headers: {Authorization: token}
        });
     
        setCart(res.data.cart)
      };


    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('firstLogin')
        setAccount({});
        setCart({});
        setIsLogged(false);
		window.location.href = "/login";
      };


     
    

    return {
        isLogged: [isLogged, setIsLogged],
        account:[account, setAccount],
        cart: [cart, setCart],
        logout: logout,
        catchUserCart:catchUserCart
 
    }
}

export default UserContext