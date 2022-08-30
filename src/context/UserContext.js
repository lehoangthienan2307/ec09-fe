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
                    const {account}  = res.data;
                    console.log(account);
                    setAccount(account);
                    setIsLogged(true)
   
                    

                } catch (err) {
                    console.log(err)
                }
            }

          catchAccount()
            getUser()  
            catchUserCart()
  
        }

    },[token])

    const catchAccount = async () => {
        if (!token) return;
    
        try {
            const res = await axios.get('/auth/infor', {
                headers: {Authorization: token}
            })
          const { account } = res.data;

         
            setAccount(account);
           
        } catch (err) {
          console.error(err);
        }
      };
  
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
        catchAccount: catchAccount,
        logout: logout,
        catchUserCart:catchUserCart
 
    }
}

export default UserContext