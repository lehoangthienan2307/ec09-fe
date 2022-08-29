import React, {createContext, useState, useEffect} from 'react'

import UserContext from './context/UserContext'


export const State = createContext()


export const AccountProvider = ({children}) =>{

  const [token, setToken] = useState(false)
    


    useEffect(() =>{

        const firstLogin = localStorage.getItem('firstLogin')
        if(firstLogin){
            const token = async () =>{
                const res= localStorage.getItem('token')
                
                setToken(res)
    

                setTimeout(() => {
                  token()
              }, 10 * 60 * 1000)
                
              
            }
            token()
        }
    },[]);

    const state = {
        token: [token, setToken],
        userContext: UserContext(token)

    }

    return (
        <State.Provider value={state}>
            {children}
        </State.Provider>
    )
}